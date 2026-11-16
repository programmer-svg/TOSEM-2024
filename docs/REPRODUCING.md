# Reproduction notes

Start commands at the repository root unless a working directory is specified. Run analyses in a disposable copy because scripts can overwrite the archived results.

## Validate the archive

```bash
git submodule update --init --recursive
python3 scripts/check_artifact.py
```

The script checks Java and Soufflé against their pinned commits and verifies code and data files against `docs/snapshot-sha256.txt`. Submodule initialization needs access to the public forks or local mirrors. A bundle of the parent Git repository does not include the submodule repositories.

## Dependencies

| Component | Requirements in the source configuration |
| --- | --- |
| CRL dataset generation and component prediction | JDK 21 and Maven. Dependencies are listed in the two project `pom.xml` files. |
| CRL ASTI extension | Node.js, npm, and VS Code. The manifest specifies VS Code `^1.75.0`. |
| Java server | JDK 22 and Maven. The compiler module exports are configured in `pom.xml`. |
| Soufflé server | Gradle wrapper 9.0.0, which requires JDK 17 or newer to run. |
| Python analyses | Python 3, NumPy, pandas, and scikit-learn. CRL also imports XlsxWriter and psutil. |

These requirements come from the source files. The original experiments do not provide a complete Python environment lock. Record the package versions used for any new analysis.

## CRL ASTI

The datasets are under `languages/crl/prediction/dataset-construct/src/main/java/dataset/`. Component measurements are under `languages/crl/prediction/component-based/src/main/java/result/performanceResult/ASTI/`. Feature-based measurements are under `languages/crl/prediction/feature-based/data/symbolTable/`.

For component-based prediction, open `languages/crl/prediction/component-based` as a Maven project with JDK 21 and run `result.ComponentBasedResult` from that project directory. It writes `src/main/java/result/Result_componentBased.xlsx`.

For feature-based prediction and feature importance:

```bash
cd languages/crl/prediction/feature-based
python prediction.py
python FeatureImportance.py
```

`prediction.py` selects rename by default; `FeatureImportance.py` selects go-to-definition. Each script has a `genArray(...)` call that selects the service. Their default runs cover those selections, so running the commands once does not regenerate every service result.

The retained spreadsheets contain ASTI results. Removed comparison sections are blank so that the remaining cells and timing formulas keep their original coordinates.

To build the CRL extension:

```bash
cd languages/crl/implementation/ASTI
npm install
npm run compile
```

Open that extension directory in VS Code and use its development launch configuration with the archived `.mc` workloads. To generate new datasets, run `DatasetConstruct` from the Maven project at `languages/crl/prediction/dataset-construct`. Its current output is `src/main/java/dataset1/`; inspect its output-deletion logic before regenerating files.

## Java

`languages/java/datasets_java/` contains the datasets; `languages/java/performance_result/` contains the corresponding performance files. `languages/java/src/` contains the language server with component analysis and performance logging. `languages/java/javaResultAnalysis/` contains performance analyses and prediction results.

The Java archive reorganizes files while retaining scripts with their original path settings. Check the input and output paths before re-running a script. For example, the request driver still selects `outputDir`, while the archived datasets are under `datasets_java/`. The analysis scripts select their inputs relative to the working directory.

Historical machine paths in logs and CSV files identify measured programs. Keep identifiers consistent across inputs when preparing a new analysis.

## Soufflé

`languages/souffle/gen_datasets/` contains the datasets and corresponding performance files. `languages/souffle/src/` contains the language server with component analysis and performance logging. `languages/souffle/analysis/` contains performance analyses and prediction results.

The analysis scripts retain working-directory assumptions from the original project. Inspect those paths before execution: `analysis/transposed_log_analysis.py`, for example, reads `gen_datasets` relative to the process working directory. The language-server jar starts an LSP server over standard input/output and needs a client to initialize a workload workspace.

## Validation scope

File-integrity checks, source parsing, and documentation checks accompany this update. Full server builds and numerical experiments have not been rerun. Fresh timings depend on the hardware, runtime, selected workload, and package versions.
