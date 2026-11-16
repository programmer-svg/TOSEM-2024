# CRL ASTI experiments

This directory contains the CRL ASTI language services, experimental datasets, and performance-prediction code used in the paper.

## Language services

[`implementation/ASTI/`](implementation/ASTI) contains the VS Code language client and the instrumented CRL server. Build it from that directory with `npm install` and `npm run compile`, then open the extension project in VS Code to use its development launch configuration. CRL source files use the `.mc` extension.

## Datasets

[`prediction/dataset-construct/`](prediction/dataset-construct) contains the CRL grammar, dataset generator, and feature-extraction code. The archived programs are in `src/main/java/dataset/`, grouped into `RQ3_DEF`, `RQ3_LOC`, `RQ3_NODE`, and `RQ3_OCC`.

Run `DatasetConstruct` with the Maven project directory as the working directory to generate new programs. Its current output directory is `src/main/java/dataset1/`.

## Component-based prediction

[`prediction/component-based/`](prediction/component-based) contains the component-based analysis. Run `result.ComponentBasedResult` with that Maven project as the working directory.

- Input measurements: `src/main/java/result/performanceResult/ASTI/`.
- Prediction results: `src/main/java/result/Result_componentBased.xlsx`.
- Timing results: `src/main/java/result/preprocessTime + trainTime + predictTime.xlsx`.

## Feature-based prediction

From [`prediction/feature-based/`](prediction/feature-based), run:

```bash
python prediction.py
python FeatureImportance.py
```

Both scripts read ASTI measurements from `data/symbolTable/`. `prediction.py` writes `prediction.xlsx`; `FeatureImportance.py` writes `featureImportance.xlsx`. Select the service in each script's `genArray(...)` call.

See the parent repository's [reproduction notes](../../docs/REPRODUCING.md) for dependencies and execution limits. Run analyses in a working copy to preserve the archived outputs.
