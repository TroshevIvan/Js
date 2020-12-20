let fs = require('fs');
let inText;


inText = fs.readFileSync('input.txt');
inText = inText.toString();


code(inText)

function code(inText) {
	let resStr = '';
	let i = 0, n = 1;
	while (i < inText.length) {
		while (inText.charAt(i) == inText.charAt(i + n))
			n++;
		console.log(inText.charAt(i), " - ", n);
		nJump = n;
		while (n >= 127) {
			resStr += '#' + String.fromCharCode(127) + inText.charAt(i);
			n -= 127;
		}
		if ((n > 3) || (inText.charAt(i) == '#'))
			resStr += '#' + String.fromCharCode(n) + inText.charAt(i)
		else
			for (k = 0; k < n; k++)
				resStr += inText.charAt(i);
		i += nJump;
		n = 1;
	}
	console.log(resStr);
	return resStr;
}

decode(inText)

function decode(inText) {
	let resStr = '';
	let i = 0, j = 0;
	while (i < inText.length) {
		if (inText.charAt(i) == '#') {
			j = inText.charAt(i + 1);
			for (k = 0; k < j; k++)
				resStr += inText.charAt(i + 2);
			i += 2;
		}
		else {
			resStr += inText.charAt(i);
			i++;
		}
	}
	console.log(resStr);
	fs.writeFileSync('output.txt', resStr);
}
