let fs = require ('fs');
let arg = process.argv;
let mem = new Array();


let text = fs.readFileSync(arg[2]); 
text = text.toString();

let readlineSync = require('readline-sync');
mem = text.split(/\r\n| /);
for (let i = 0; i < mem.length; i++)
	console.log(i, mem[i])

let ip = 0;
let flag = true;



while (flag)
	switch(mem[ip]){
		case 'input':
			let number = readlineSync.question('Your number: ');
			mem[mem[ip + 1]]= parseInt(number);
			ip += 2;
			break;
			
		case 'set':
			mem[mem[ip + 1]] = parseInt(mem[ip+2]);
			ip += 3;
			break;
			
		case 'output':
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
			if (mem[mem[ip + 1]] - mem[mem[ip + 2]] != 0) 
				ip += 3;
			else 
				ip += 8;
			break; 
			
		case 'jmp':
			ip = parseInt(mem[ip + 1]);
			break;
			
		case 'jz':
			if (mem[mem[ip + 1]] != 0)
				ip+=3;
			else 
				ip = parseInt(mem[ip + 2]);
			break;
			
		case 'divider':
			if (mem[mem[ip + 1]] > mem[mem[ip + 2]]) 
					mem[mem[ip + 1]] -= mem[mem[ip + 2]];	
			else 
				mem[mem[ip + 2]] -= mem[mem[ip + 1]];
			ip += 3;
			break;
				
		case 'exit':
			flag = false;
	}
console.log('Vielen Danke, für die Nutzung unseres Programm!');
