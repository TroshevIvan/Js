let fs = require ('fs');
let arg = process.argv;
let mem = new Array();

let text = fs.readFileSync(arg[2]);
text = text.toString();

let readlineSync = require('readline-sync');
mem = text.split(/\r\n| /);

for (let i = 0; i < mem.length; i++)
	console.log(i, mem[i])
	
ip = 0;
flag = true;

while (flag)
	switch(mem[ip]){
		case 'input':
			let number = readlineSync.question('Введите данные: ');
			mem[mem[ip + 1]]= parseFloat(number);
			ip += 2;
			break;
			
		case 'set':
			console.log('setcmd');
			mem[mem[ip + 1]] = parseFloat(mem[ip+2]);
			ip += 3;
			break;
			
		case 'output':
			console.log('outcmd');
			console.log(mem[mem[ip + 1]]);
			ip += 2;
			break;
			
		case 'add':
			mem[mem[ip + 3]] = mem[mem[ip+1]] + mem[mem[ip+2]];
			ip += 4;
			break; 
			
		case 'mult':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
			ip += 4;
			break;
			
		case 'sub':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[mem[ip + 2]];
			ip += 4;
			break;
			
		case 'cmp':
			if(mem[mem[ip + 1]] == mem[mem[ip + 2]])
				mem[mem[ip + 3]] = 1;
			else
				mem[mem[ip + 3]] = 0;
			break;
			
		case 'jmpb':
			ip = parseFloat(mem[ip + 1]);
			break;
			
		case 'findDivision':
			if(mem[mem[ip+2]]!=0)
				mem[mem[ip + 3]] = mem[mem[ip + 1]] % mem[mem[ip + 2]];
				mem[mem[ip + 1]] = mem[mem[ip + 2]];
				mem[mem[ip + 2]] = mem[mem[ip + 3]];
				ip += 5;
			else 
				ip = parseFloat(mem[ip + 4]);
			break;
			
		case 'jnz':
			if (mem[mem[ip + 1]] != 0)
				ip+=3;
			else 
				ip = parseFloat(mem[ip + 2]);
			break;
			
			
			
		case 'exit':
			console.log('Vielen Danke, für die Nutzung unseres Programm!');
			flag = false;
	}
