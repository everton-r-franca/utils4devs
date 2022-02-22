import bigInt from "big-integer";

function sanitizeNumber(numberString) {
   return numberString.replace(/[^0-9a-f]/gi, "");
}

function numberIsValid(numberStringSanitized) {
   return (
      numberStringSanitized.length > 0 &&
      numberStringSanitized.length <= 1000000
   );
}

function baseIsValid(numberStringSanitized, base) {
   if (base > 1 && base <= 16) {
      const digits = greater9Converter(
         extractDigits(sanitizeNumber(numberStringSanitized.toString()))
      );
      const max = Math.max(...digits);
      return max >= 0 && max <= base - 1;
   }
}

function InputIsEqualSanitized(StringInput, StringSanitized) {
   return StringInput === StringSanitized;
}

function extractDigits(numberString) {
   return numberString.split("");
}

function allSanitizeNumber(numberString, base) {
   const numberStringSanitized = sanitizeNumber(numberString);
   if (!baseIsValid(numberStringSanitized, base)) return "msg";
   if (!numberIsValid(numberStringSanitized)) return "msg";
   if (!InputIsEqualSanitized(numberString, numberStringSanitized))
      return "msg";
   if (!baseIsValid(numberStringSanitized, base)) return "msg";
   return numberStringSanitized;
}

function greater9Converter(digits) {
   const a = 65;
   const f = 70;
   const correction = 55;
   return digits.map((digit) => {
      const number = digit.toString().toUpperCase().charCodeAt(0);
      return parseInt(number >= a && number <= f ? number - correction : digit);
   });
}

function conversorAlgorithm(digits, base) {
   const digitsConvert = greater9Converter(digits);
   const digitsLength = digitsConvert.length;
   let digitsIteration = digitsConvert.length - 1;
   let steps = [];
   let result = bigInt(0);
   for (let i = 0; i < digitsLength; i++) {
      result = bigInt(result).add(
         bigInt(digits[digitsIteration]).multiply(bigInt(base).pow(i))
      );
      digitsIteration--;
   }
   return result;
}

function toBase10(convert) {
   const { number, base } = convert;
   const numberStringSanitized = allSanitizeNumber(number, base);

   if (numberStringSanitized !== "msg") {
      const digits = greater9Converter(extractDigits(numberStringSanitized));

      return conversorAlgorithm(digits, base).value;
   } else {
      return "error";
   }
}

///.value.toLocaleString("de-DE"));

export default { number: toBase10 };
