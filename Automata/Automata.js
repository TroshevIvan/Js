let fs = require('fs');
let arg = process.argv;
let input = fs.readFileSync(arg[2], 'utf8');
let t = fs.readFileSync(arg[3], 'utf8');
let m = t.length
let inpLen = input.length;
let alph=new Array()

//Определяем алфавит строки t
for(i=0;i<m;i++)
	alph[t.charAt(i)]=0
	
//В двумерном массиве del будем хранить таблицу переходов
del=new Array(m+1)
for(j=0;j<=m;j++)
	del[j]=new Array()
	
//Инициализируем таблицу переходов
for(i in alph)
	del[0][i]=0;
	
//Формируем таблицу переходов
for(j=0;j<m;j++){
	prev=del[j][t.charAt(j)];
	del[j][t.charAt(j)]=j+1;
	for(i in alph)
		del[j+1][i]=del[prev][i];
}

//Выводим таблицу переходов
for(j=0;j<=m;j++){
	out='';
	for(i in alph)
		out+=del[j][i]+' ';
		console.log(out);
}

//Ищем индексы вхождения
let indexes = new Array();
let q = 0;
for (i = 0; i < inpLen; i++){
	let symbol = input[i]
	for (let s in alph){
		if (symbol == s)
			q = del[q][symbol]
	}
	if (q == m)
		indexes.push(i - m + 1);
}
console.log('Indexes: ', indexes);









