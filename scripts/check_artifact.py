#!/usr/bin/env python3
"""Verify artifact source snapshots without third-party dependencies."""
import hashlib
import json
import subprocess
from pathlib import Path
import sys


def main():
    root = Path(__file__).resolve().parents[1]
    failures = []
    sources = json.loads((root / "docs/sources.json").read_text())["sources"]
    for source in sources:
        if source.get("integration") != "submodule":
            continue
        path = root / source["directory"]
        if not (path / ".git").exists():
            failures.append(f"Uninitialized submodule: {source['directory']}. "
                            "Run git submodule update --init --recursive.")
            continue
        try:
            revision = subprocess.check_output(
                ["git", "-C", str(path), "rev-parse", "HEAD"], text=True
            ).strip()
        except (OSError, subprocess.CalledProcessError):
            failures.append(f"Cannot read submodule revision: {source['directory']}")
            continue
        if revision != source["commit"]:
            failures.append(f"Wrong submodule revision: {source['directory']}: {revision}")
    if failures:
        print("\n".join(failures), file=sys.stderr)
        return 1
    entries = (root / "docs/snapshot-sha256.txt").read_text().splitlines()
    for entry in entries:
        expected, relative = entry.split("  ", 1)
        path = root / relative
        if not path.is_file():
            failures.append(f"Missing: {relative}")
        elif hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            failures.append(f"Changed: {relative}")
    if failures:
        print("\n".join(failures), file=sys.stderr)
        return 1
    print(f"Verified {len(entries)} artifact files across CRL, Java, and Soufflé.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
