import * as vscode from 'vscode';
import { type LanguageClient } from "vscode-languageclient/node";

import { type LanguageClient as BrowserLanguageClient } from "vscode-languageclient/browser";
import { autoGen } from './autoGen';
// import { autoGen } from './autoGen';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

export const legend = (function () {
	const tokenTypesLegend = [
		'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
		'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
		'method', 'decorator', 'macro', 'variable', 'parameter', 'property', 'label'
	];
	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

	const tokenModifiersLegend = [
		'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
		'modification', 'async'
	];
	tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

	return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
}());

export class DefProvider implements vscode.DefinitionProvider {
	private readonly _client: LanguageClient | BrowserLanguageClient;

	constructor(client: LanguageClient | BrowserLanguageClient) {
		this._client = client;
	}
	async provideDefinition(document: vscode.TextDocument, position:  vscode.Position, token:  vscode.CancellationToken): Promise<vscode.Definition> {
		// TODO: parse the whole document
		console.log('Def from client provider');
		console.log(document.fileName);
		const results = await this._client.sendRequest(
			'textDocument/definition',
			{
				textDocument: {
					uri: "returnInformation"
				}
			}
		);
		return results as vscode.Definition;
	}
}
export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	private readonly _client: LanguageClient | BrowserLanguageClient;

	constructor(client: LanguageClient | BrowserLanguageClient) {
		this._client = client;
	}

	async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		// TODO: parse the whole document
		console.log('fileName');
		console.log(document.fileName);
		const results = await this._client.sendRequest(
			'textDocument/semanticTokens/full',
			{
				textDocument: {
					uri: document.uri.toString()
				}
			}
		);

		await(autoGen(this._client,document));
		

		return results as vscode.SemanticTokens;
	}
}

