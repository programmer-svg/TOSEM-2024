# CRL ASTI implementation

[`ASTI/`](ASTI) contains the CRL language client and the instrumented server. The client code is under `client/src/`; the language-service implementation is under `server/src/`.

From `ASTI/`, install dependencies and compile:

```bash
npm install
npm run compile
```

Open the `ASTI/` directory in VS Code and use its development launch configuration. The extension recognizes `.mc` files as `metaCRL`.
