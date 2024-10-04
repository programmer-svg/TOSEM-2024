import * as fs from 'fs';

const contentToWrite = '这是要写入文本文件的内容';

const pos = 'C:\\Users\\a\\Desktop\\研究生study\\华为DSL\\semanticsdsl\\server\\src\\grammar\\TestLang.g4';
let genArr = "";
fs.readFile(pos, 'utf-8', (err, data) => {
	if (err) throw err;
	const dataArr = data.split('\n');
	console.log(3);
	genArr += "import { SUnit } from './SUnit';\n";
	for(data of dataArr){
		const n = data.match(/'/g);
		if(data.includes(":") && data.includes(";") && n && n.length == 2){
			const index = data.indexOf(":");
			const str = data.slice(0,index).trim();
			if(str.startsWith('fragment')) continue;
			genArr += "export class " + str + " extends SUnit{\n\n}\n\n";
		}
	}
	console.log(2);
});

const Wpos = 'C:\\Users\\a\\Desktop\\研究生study\\华为DSL\\semanticsdsl\\server\\src\\semanticTree\\SUnits\\autoGenSUnits.ts';
console.log(genArr);
//保证genArr是最新的
setTimeout(()=>{
	fs.writeFile(Wpos, genArr, (err) => {
		console.log(1);
		if (err) throw err;
		console.log('内容已写入到文件中');
	});
},1000);
