import toBase10 from "./utils/toBase10";

/***
 * Converter decimal para binário
 */
const decimal = 45000000000000;
function decimalTo2(decimal) {
	const bin = [];
	const step = [];
	if (decimal >= 0 && decimal <= 1) return decimal;
	for (let i = decimal; i >= 1; i /= 2) {
		const mod = i % 2;
		if (mod == 1) i--;
		bin.push(mod);
		step.push(`${i} / 2 = ${parseInt(i / 2)} with ${mod}`);
	}
	//console.log(step);
	const binario = bin.reverse().toString().replace(/[,]/gi, "");
	return binario;
}

/***
 * Converter decimal para binário
 */

console.log(`decimal ${decimal} to binary ${decimalTo2(decimal)}`);

const convert = { number: decimalTo2(decimal), base: 2 };

const decimalAgain = toBase10.number(convert);

console.log(`binary ${decimalTo2(decimal)} to decimal ${decimalAgain}`);

/***
 * Converter decimal para binário
 */

const hexadecimal = "fedcba987654321";
const digits = hexadecimal.split("");
const result = digits.map((e) => {
	let bin = decimalTo2(toBase10.number({ number: e, base: 16 })).toString();
	if (bin.length < 4)
		return Math.pow(10, 4 - bin.length)
			.toString()
			.substring(1, 5 - bin.length)
			.concat(bin);
	return bin;
});
console.log(result.toString().replace(/[,]/gi, ""));
