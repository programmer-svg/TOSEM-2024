# TOSEM research artifact: CRL, Java, and Soufflé

This repository contains the code and experimental data for the paper's CRL, Java, and Soufflé case studies. The CRL experiments use ASTI. The Java and Soufflé implementations add component analysis and performance logging to existing language servers.

CRL is part of this repository. Java and Soufflé are Git submodules pinned to the archived commits listed below.

## Download

```bash
git clone --recurse-submodules https://github.com/programmer-svg/TOSEM-2024.git
cd TOSEM-2024
python3 scripts/check_artifact.py
```

For an existing clone:

```bash
git pull
git submodule update --init --recursive
python3 scripts/check_artifact.py
```

Use the pinned commits to reproduce the archived experiments. `git submodule update --remote` selects newer branch revisions and may change the experiment version.

## Repository layout

```text
languages/
├── crl/                         # CRL ASTI implementation and experiments
│   ├── implementation/ASTI/
│   └── prediction/
│       ├── dataset-construct/
│       ├── component-based/
│       └── feature-based/
├── java/                        # Git submodule
│   ├── datasets_java/
│   ├── performance_result/
│   ├── src/
│   └── javaResultAnalysis/
└── souffle/                     # Git submodule
    ├── gen_datasets/
    ├── src/
    └── analysis/
```

## CRL

The [ASTI implementation](languages/crl/implementation/ASTI) provides the CRL language services used in the experiments.

| Directory | Contents |
| --- | --- |
| [`prediction/dataset-construct`](languages/crl/prediction/dataset-construct) | Dataset generation code and the CRL datasets under `src/main/java/dataset/`. |
| [`prediction/component-based`](languages/crl/prediction/component-based) | Component-based performance analysis and prediction. ASTI measurements are under `src/main/java/result/performanceResult/ASTI/`; the same `result/` directory contains the prediction and timing spreadsheets. |
| [`prediction/feature-based`](languages/crl/prediction/feature-based) | Feature-based prediction and feature-importance analysis, using the measurements in `data/symbolTable/`. |

See the [CRL README](languages/crl/README.md) for entry points and [reproduction notes](docs/REPRODUCING.md) for dependencies and working directories.

## Java

| Directory | Contents |
| --- | --- |
| [`datasets_java/`](languages/java/datasets_java), [`performance_result/`](languages/java/performance_result) | Experimental programs in the first directory and their performance files in the second. |
| [`src/`](languages/java/src) | The Java language server, extended with component analysis and performance logging. |
| [`javaResultAnalysis/`](languages/java/javaResultAnalysis) | Scripts for analyzing performance measurements, with prediction results. |

## Soufflé

| Directory | Contents |
| --- | --- |
| [`gen_datasets/`](languages/souffle/gen_datasets) | Experimental datasets and their corresponding performance files. |
| [`src/`](languages/souffle/src) | The Soufflé language server, extended with component analysis and performance logging. |
| [`analysis/`](languages/souffle/analysis) | Scripts for analyzing performance measurements, with prediction results. |

## Versions and integrity

| Case study | Source | Branch | Source commit |
| --- | --- | --- | --- |
| CRL | [programmer-svg/TOSEM-2024](https://github.com/programmer-svg/TOSEM-2024) | Original source | `6ae43bfd1cfd64276d878d8d6aa3f70fc96ca65e` |
| Java | [starrrrgazer/java-language-server](https://github.com/starrrrgazer/java-language-server) | `ljy` | `04e8f14f38f994672b039f7168b611860ec78724` |
| Soufflé | [starrrrgazer/souffle-lsp-plugin](https://github.com/starrrrgazer/souffle-lsp-plugin) | `master` | `be679c6f9a2a142c08e61fae09bfb9b09dc120eb` |

The CRL files are an ASTI-only selection adapted from the original source commit. The Java and Soufflé submodules retain the archived files without changes. [Source records](docs/sources.json) describe these versions. [The checksum manifest](docs/snapshot-sha256.txt) covers the current code and data files.

The validation script requires Git and Python 3. It checks the submodule revisions and file hashes. When updating a submodule, update its source record and checksum entries in the same parent-repository commit.

## Acknowledgments and licenses

The Java server is based on [George Fraser's java-language-server](https://github.com/georgewfraser/java-language-server), and the Soufflé server is based on [jdaridis/souffle-lsp-plugin](https://github.com/jdaridis/souffle-lsp-plugin).

Each component retains its original copyright and license notices. The Java server includes an [MIT license](languages/java/LICENSE.md), and the bundled JFreeChart corpus includes its [license](languages/java/testDir/jfreechart/licence-LGPL.txt). Refer to the notices in each project for reuse terms.
