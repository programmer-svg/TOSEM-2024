import * as vscode from 'vscode';
import { type LanguageClient } from 'vscode-languageclient/node';
import { type LanguageClient as BrowserLanguageClient } from 'vscode-languageclient/browser';
export async function autoGen(client: LanguageClient | BrowserLanguageClient,document: vscode.TextDocument) {
  if(document.fileName === '\\RQ0_5_402_92_461_1651_19_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:199, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:398, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:199, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:398, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:194, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:386, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:199, character:27}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:398, character:23}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:400, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:401, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_814_181_923_3539_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:404, character:4}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:809, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:404, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:809, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:406, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:798, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:407, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:809, character:55}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:812, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:813, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_1214_263_1375_5293_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:605, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1209, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:605, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1209, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:606, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1200, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:605, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1209, character:30}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1212, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1213, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_1604_348_1815_7038_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:801, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1600, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:801, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1600, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:800, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1588, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:801, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1600, character:24}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1602, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1603, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_2020_439_2310_8549_19_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1007, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2016, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1007, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2016, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1010, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2004, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1007, character:32}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2016, character:25}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2018, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2019, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_2404_529_2706_10721_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1202, character:4}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2393, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1202, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2393, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1204, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2396, character:46},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1201, character:6}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2400, character:11}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2402, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2403, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_2808_591_3174_12426_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:19, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1404, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2803, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:19, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1404, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2803, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1398, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2794, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1403, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2803, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2806, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2807, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_3202_684_3623_14094_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1599, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3192, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1599, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3192, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1598, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3194, character:46},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1600, character:6}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3198, character:11}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3200, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3201, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_3604_769_4086_15746_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1799, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3600, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1799, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3600, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1802, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3588, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1799, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3600, character:25}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3602, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3603, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_4012_885_4534_17682_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2007, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4007, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2007, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4007, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2006, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3996, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2004, character:11}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4007, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4010, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4011, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_4416_967_5002_19325_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2205, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4411, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2205, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4411, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2208, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4402, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2205, character:31}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4411, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4414, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4415, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_4816_1032_5472_20940_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2407, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4811, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2407, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4811, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2406, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4802, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2407, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4811, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4814, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4815, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_5204_1132_5884_22928_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2601, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5187, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2601, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5187, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2596, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5196, character:46},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2601, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5200, character:11}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5202, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5203, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_5618_1217_6325_25129_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2809, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5613, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2809, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5613, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2806, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5602, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2808, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5613, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5616, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5617, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_6018_1322_6810_26434_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3009, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6014, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3009, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6014, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3008, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6002, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3009, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6014, character:25}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6016, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6017, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_6412_1386_7270_28017_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3204, character:4}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6407, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3204, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6407, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3206, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6398, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3204, character:25}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6407, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6410, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6411, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_6806_1484_7684_30184_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3401, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6795, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3401, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6795, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3402, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6798, character:47},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3401, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6802, character:11}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6804, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6805, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_7208_1601_8184_31327_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3604, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7204, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3604, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7204, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3596, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7192, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:25}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3603, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7204, character:26}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7206, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7207, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_7612_1651_8615_33479_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3805, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7607, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3805, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7607, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3804, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7596, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3805, character:25}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7607, character:59}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7610, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7611, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_8014_1753_9105_34796_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:13, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4005, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8009, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:13, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4005, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8009, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:40},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4002, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8000, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4005, character:32}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8009, character:32}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8012, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8013, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_8406_1849_9544_36542_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4203, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8396, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4203, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8396, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4202, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8398, character:47},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4203, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8402, character:11}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8404, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8405, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_8804_1951_9958_38714_21_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4400, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8799, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4400, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8799, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4406, character:40},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8788, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:25}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4400, character:32}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8799, character:59}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8802, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8803, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_9214_1991_10438_40417_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4605, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9209, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4605, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9209, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4600, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9198, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4605, character:34}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9209, character:59}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9212, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9213, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_9602_2049_10883_42105_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4799, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9598, character:4}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4799, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9598, character:4}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4800, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9586, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4799, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9598, character:26}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9600, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9601, character:11}
    });
  }
  if(document.fileName === '\\RQ0_5_10002_2173_11342_43733_20_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5001, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9997, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5001, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9997, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5004, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9986, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5000, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9997, character:59}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10000, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10001, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_414_48_380_1960_36_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:204, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:408, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:204, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:408, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:216, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:388, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:204, character:31}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:408, character:29}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:412, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:413, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_836_100_668_3609_37_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:416, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:830, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:416, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:830, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:405, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:796, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:416, character:31}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:830, character:32}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:834, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:835, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_1202_151_1050_5540_36_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:29, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:600, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1196, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:29, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:600, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1196, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:37},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:591, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1162, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:600, character:30}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1196, character:32}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1200, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1201, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_1626_180_1428_7564_36_6.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:816, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1620, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:816, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1620, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:815, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1586, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:812, character:15}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1620, character:32}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1624, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1625, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_2016_270_1906_9558_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1009, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2010, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1009, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2010, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1024, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1990, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1007, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2010, character:30}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2014, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2015, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_2428_302_2212_11276_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:57, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1212, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2422, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:57, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1212, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2422, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1213, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2402, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1212, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2422, character:30}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2426, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2427, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_2803_347_2412_12531_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1401, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2769, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1401, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2769, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1405, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2787, character:52},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1400, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2798, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2801, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2802, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_3213_432_3040_15040_39_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1588, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3179, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1588, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3179, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1606, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3197, character:53},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1603, character:15}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3208, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3211, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3212, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_3637_476_3306_16703_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1816, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3631, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1816, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3631, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1828, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3597, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1816, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3631, character:33}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3635, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3636, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_4014_528_3672_18471_39_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2004, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4009, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2004, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4009, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1996, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3983, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2007, character:10}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4009, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4012, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4013, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_4422_516_3924_20542_37_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2209, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4417, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2209, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4417, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2210, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4391, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2209, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4417, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4420, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4421, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_4810_599_4398_22374_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2405, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4805, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2405, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4805, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2394, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4779, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2404, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4805, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4808, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4809, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_5220_669_4862_24631_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2609, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5215, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2609, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5215, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2616, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5189, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2609, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5215, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5218, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5219, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_5612_706_5150_26180_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2804, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5592, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2804, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5592, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2810, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5596, character:53},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2804, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5607, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5610, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5611, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_6012_741_5306_27498_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3007, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6007, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3007, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6007, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3022, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5981, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3005, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6007, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6010, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6011, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_6424_848_5928_29744_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3212, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6418, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3212, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6418, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3211, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6398, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3212, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6418, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6422, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6423, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_6833_862_6080_31325_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3416, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6828, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3416, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6828, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3419, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6802, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3415, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6828, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6831, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6832, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_7212_906_6442_33191_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3607, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7206, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3607, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7206, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3606, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7186, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3603, character:15}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7206, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7210, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7211, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_7623_957_6776_35008_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3816, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7617, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3816, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7617, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3815, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7583, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3809, character:15}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7617, character:33}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7621, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7622, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_8003_997_7262_37106_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4000, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7984, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4000, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7984, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4004, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7987, character:53},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4000, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7998, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8001, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8002, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_8417_1006_7484_38927_37_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4207, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8411, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4207, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8411, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4198, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8391, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4207, character:31}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8411, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8415, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8416, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_8806_1100_8030_41045_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:29, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4400, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8801, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:29, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4400, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8801, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4389, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8775, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4403, character:6}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8801, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8804, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8805, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_9217_1166_8324_42432_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4606, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9212, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4606, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9212, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4598, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9186, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4606, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9212, character:57}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9215, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9216, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_9609_1233_8682_44361_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4802, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9603, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4802, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9603, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4803, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9583, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4802, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9603, character:32}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9607, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9608, character:11}
    });
  }
  if(document.fileName === '\\RQ0_10_10015_1259_9158_46739_38_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5007, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9981, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:15, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5007, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9981, character:12}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:40},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5014, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9999, character:54},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5006, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:10010, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10013, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10014, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_408_48_399_2053_41_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:202, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:402, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:202, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:402, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:203, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:370, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:202, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:402, character:29}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:406, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:407, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_807_96_803_4095_42_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:402, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:801, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:402, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:801, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:407, character:37},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:769, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:402, character:39}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:801, character:30}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:805, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:806, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_1229_151_1180_6171_40_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:613, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1222, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:613, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1222, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:612, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1194, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:613, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1222, character:40}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1227, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1228, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_1608_200_1527_7798_42_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:800, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1602, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:800, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1602, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:815, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1570, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:800, character:40}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1602, character:30}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1606, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1607, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_2004_258_1839_9676_39_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1000, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1997, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1000, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1997, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:994, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1969, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1000, character:30}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1997, character:40}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2002, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2003, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_2435_295_2410_12165_43_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1213, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2428, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1213, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2428, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1216, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2389, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1216, character:32}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2428, character:63}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2433, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2434, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_2809_343_2540_13763_37_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1390, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2802, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1390, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2802, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1395, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2774, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1404, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2802, character:40}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2807, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2808, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_3220_397_3188_15830_45_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1595, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3190, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1595, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3190, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1599, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3194, character:59},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1609, character:12}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3215, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3218, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3219, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_3627_430_3431_17898_40_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1812, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3620, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1812, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3620, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1827, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3581, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1812, character:41}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3620, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3625, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3626, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_4014_495_3894_19747_43_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2007, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4008, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2007, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4008, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2004, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3976, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2006, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4008, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4012, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4013, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_4408_530_4309_21898_43_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2203, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4401, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2203, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4401, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2202, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4362, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2203, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4401, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4406, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4407, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_4821_565_4756_24218_43_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2422, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4814, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2422, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4814, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2397, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4786, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2408, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4814, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4819, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4820, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_5215_620_5103_25860_43_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2607, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5209, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2607, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5209, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2611, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5177, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2606, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5209, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5213, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5214, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_5639_688_5275_27660_40_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2817, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5632, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2817, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5632, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2818, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5593, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2817, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5632, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5637, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5638, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_6027_732_5705_29808_40_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3025, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6021, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3025, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6021, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3000, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5989, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3011, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6021, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6025, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6026, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_6404_759_6272_31954_43_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3197, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6398, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3197, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6398, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3212, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6366, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3203, character:4}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6398, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6402, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6403, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_6824_818_6541_33912_41_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:49, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3411, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6770, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:49, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3411, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6770, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3403, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6798, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3411, character:33}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6819, character:15}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6822, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6823, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_7204_899_6880_35443_41_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3601, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7197, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3601, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7197, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3600, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7158, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3601, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7197, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7202, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7203, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_7607_930_7243_37449_41_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3798, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7600, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3798, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7600, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3813, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7561, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3804, character:4}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7600, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7605, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7606, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_8047_1014_7825_39421_43_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4021, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8040, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4021, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8040, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4020, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8001, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4022, character:6}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8040, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8045, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8046, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_8412_990_8117_41904_42_7.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4204, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8405, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:25, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4204, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8405, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4205, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8366, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4204, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8405, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8410, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8411, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_8810_1120_8427_43160_41_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4404, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8804, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4404, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8804, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4403, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8772, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4404, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8804, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8808, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8809, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_9225_1086_8893_46013_41_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4612, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9219, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4612, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9219, character:8}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4620, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9187, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4611, character:16}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9219, character:31}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9223, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9224, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_9627_1143_9330_47920_42_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4814, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9620, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4814, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9620, character:16}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4800, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9581, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4812, character:27}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9620, character:65}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9625, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9626, character:11}
    });
  }
  if(document.fileName === '\\RQ0_15_10021_1266_9573_48855_42_8.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5046, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10014, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5046, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10014, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4997, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9986, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5008, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:10014, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10019, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10020, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_433_47_382_2048_52_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:213, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:426, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:213, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:426, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:218, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:376, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:213, character:39}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:426, character:39}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:431, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:432, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_817_74_709_4013_50_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:406, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:780, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:406, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:780, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:381, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:785, character:58},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:406, character:35}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:811, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:815, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:816, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_1231_122_1105_6155_51_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:614, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1224, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:614, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1224, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:596, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1174, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:614, character:40}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1224, character:40}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1229, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1230, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_1635_165_1574_8178_58_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:813, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1627, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:813, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1627, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:828, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1574, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:813, character:40}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1627, character:67}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1633, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1634, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_2048_217_2028_10305_61_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1024, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2035, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1024, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2035, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1050, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1997, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1023, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2035, character:83}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2046, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2047, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_2436_250_2423_12610_58_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1203, character:40}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2423, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1203, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2423, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1214, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2385, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1217, character:16}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2423, character:83}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2434, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2435, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_2846_291_2868_14605_61_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1417, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2833, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1417, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2833, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1410, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2795, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:20}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1423, character:4}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2833, character:83}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2844, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2845, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_3226_320_3133_16460_57_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1612, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3188, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1612, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3188, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1590, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3194, character:59},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1612, character:36}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3220, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3224, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3225, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_3616_345_3412_18795_53_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1809, character:24}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3609, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1809, character:24}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3609, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:38},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1790, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3559, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1807, character:42}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3609, character:40}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3614, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3615, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_4052_352_3843_21032_54_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2024, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4039, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2024, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4039, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2053, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4001, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2024, character:40}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4039, character:85}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4050, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4051, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_4406_446_4335_22564_59_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2205, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4339, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2205, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4339, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2204, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4374, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2200, character:19}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4400, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4404, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4405, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_4831_479_4588_24380_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2414, character:32}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4824, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2414, character:32}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4824, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2436, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4774, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2414, character:55}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4824, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4829, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4830, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_5228_528_5115_26814_58_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2613, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5131, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2613, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5131, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2612, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5196, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2613, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5222, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5226, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5227, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_5613_575_5450_28688_57_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2804, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5576, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2804, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5576, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:2824, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5581, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:2804, character:41}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5607, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5611, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5612, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_6016_590_5857_31368_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3005, character:32}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6003, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3005, character:32}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6003, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3024, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5965, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3007, character:32}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6003, character:85}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6014, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6015, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_6415_618_5929_32395_53_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:121, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3208, character:32}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6408, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:121, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3208, character:32}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6408, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3230, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6358, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3206, character:51}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6408, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6413, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6414, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_6849_656_6611_35485_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3422, character:12}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6841, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3422, character:12}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6841, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3406, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6788, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3422, character:37}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:6841, character:69}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6847, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:6848, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_7242_709_6866_37025_55_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3613, character:20}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7235, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3613, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7235, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3618, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7185, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3620, character:12}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7235, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7240, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7241, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_7607_749_6972_38480_52_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3829, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7599, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3829, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7599, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:3798, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7546, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:3802, character:23}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7599, character:69}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7605, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7606, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_8010_770_7667_40980_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4003, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7997, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4003, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7997, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4004, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:7959, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4003, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:7997, character:85}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8008, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8009, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_8426_843_7926_42685_55_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4217, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8359, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4217, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8359, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4216, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8394, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4217, character:22}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8420, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8424, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8425, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_8828_861_8508_45543_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4412, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8790, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4412, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8790, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4401, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8796, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4412, character:39}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:8822, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8826, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:8827, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_9214_903_8902_47625_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4607, character:8}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9111, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:31, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4607, character:8}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9111, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:39},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4599, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9182, character:60},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4606, character:8}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9208, character:19}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9212, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9213, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_9625_934_9025_49417_53_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4811, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9612, character:40}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4811, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9612, character:40}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:4810, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9574, character:6},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:4811, character:21}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:9612, character:85}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9623, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9624, character:11}
    });
  }
  if(document.fileName === '\\RQ0_20_10011_974_9677_51487_56_9.mc') {
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5004, character:16}
    });
    await client.sendRequest(
    'textDocument/hover',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10004, character:20}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:1, character:0}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5004, character:16}
    });
    await client.sendRequest(
    'textDocument/definition',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10004, character:20}
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:0, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:5024, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/rename',{
        textDocument: {uri: document.uri.toString()},
        position:{line:9954, character:4},
        newName:'absolutelyNewName_'
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:1, character:24}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:5004, character:41}]
    });
    await client.sendRequest(
    'textDocument/selectionRange',{
        textDocument: {uri: document.uri.toString()},
        positions:[{line:10004, character:41}]
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10009, character:1}
    });
    await client.sendRequest(
    'textDocument/completion',{
        textDocument: {uri: document.uri.toString()},
        position:{line:10010, character:11}
    });
  }
}
