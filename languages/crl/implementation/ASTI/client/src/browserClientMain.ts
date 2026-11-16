/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext, Uri, languages,workspace } from 'vscode';
import { LanguageClientOptions } from 'vscode-languageclient';

import { LanguageClient } from 'vscode-languageclient/browser';
import { DocumentSemanticTokensProvider, legend, DefProvider } from './semanticProvider';


// this method is called when vs code is activated
export function activate(context: ExtensionContext) {

	console.log('lsp-web-extension-sample activated!');

	/* 
	 * all except the code to create the language client in not browser specific
	 * and could be shared with a regular (Node) extension
	 */
	const documentSelector = [{language: 'metaCRL', pattern: '\\*.mc' },{language: 'metaCRL', pattern: "\\*.mc" }];

	const FS = workspace.createFileSystemWatcher('\\*.*', false, false, false);
	FS.onDidChange(e => { 
		console.log('js changed,' ,e.fsPath);
	});
	FS.onDidCreate(e => { // 新建了js文件
		console.log('js created,', e.fsPath);
	});
	FS.onDidDelete(e => { // 删除了js文件
		console.log('js deleted,', e.fsPath);
	});
	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		documentSelector,
		synchronize: {fileEvents:FS},//fileEvents:
		initializationOptions: {}
	};

	const client = createWorkerLanguageClient(context, clientOptions);

	const disposable = client.start();
	context.subscriptions.push(disposable);

	context.subscriptions.push(
		languages.registerDocumentSemanticTokensProvider(
			documentSelector,
			new DocumentSemanticTokensProvider(client),
			legend
		)
	);

	context.subscriptions.push(
		languages.registerDefinitionProvider(
			documentSelector,
			new DefProvider(client),
		)
	);

	client.onReady().then(() => {
		console.log('lsp-web-extension-sample server is ready');
	});
}

function createWorkerLanguageClient(context: ExtensionContext, clientOptions: LanguageClientOptions) {
	// Create a worker. The worker main file implements the language server.
	const serverMain = Uri.joinPath(context.extensionUri, 'server/dist/browserServerMain.js');
	const worker = new Worker(serverMain.toString(true));

	// create the language server client to communicate with the server running in the worker
	return new LanguageClient('lsp-web-extension-sample', 'LSP Web Extension Sample', clientOptions, worker);
}
