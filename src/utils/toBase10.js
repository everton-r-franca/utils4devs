import bigInt from "big-integer";
import messages from "./messages";

function toBase10(convert) {
   const { number, base } = convert;

   const numberStringSanitized = allSanitizeNumber(number, base);

   if (!messages.hasErrors()) {
      const digits = greater9Converter(extractDigits(numberStringSanitized));
      return conversorAlgorithm(digits, base).value.toString();
   } else {
      return messages.errors();
   }
}

function allSanitizeNumber(numberString, base) {
   const numberStringSanitized = sanitizeNumber(numberString);
   if (!baseIsValid(base))
      return messages.addError("A base numérica deve estar entre 2 e 16.");
   if (!numberIsValid(numberStringSanitized))
      return messages.addError("O deve ter no mínimo 1 digito e no máximo 1M");
   if (!numberBaseIsValid(numberStringSanitized, base))
      return messages.addError(
         `${numberString} não pode pertencer a base ${base}`
      );

   if (!InputIsEqualSanitized(numberString, numberStringSanitized))
      messages.addWarning("Caracteres inválidos foram removidos");
   return numberStringSanitized;
}

function extractDigits(numberString) {
   return numberString.toString().split("");
}

function conversorAlgorithm(digits, base) {
   const digitsConvert = greater9Converter(digits);
   const digitsLength = digitsConvert.length;
   let digitsIteration = digitsConvert.length - 1;
   let steps = [];
   let result = bigInt(0);
   for (let i = 0; i < digitsLength; i++) {
      steps.push(`${digits[digitsIteration]}x${base}^${i}`);
      result = bigInt(result).add(
         bigInt(digits[digitsIteration]).multiply(bigInt(base).pow(i))
      );
      digitsIteration--;
   }
   console.log(steps);
   return result;
}

function sanitizeNumber(numberString) {
   return numberString.replace(/[^0-9a-f]/gi, "");
}

function baseIsValid(base) {
   return base > 1 && base <= 16;
}

function numberIsValid(numberStringSanitized) {
   return (
      numberStringSanitized.length > 0 &&
      numberStringSanitized.length <= 1000000
   );
}

function numberBaseIsValid(numberStringSanitized, base) {
   const digits = greater9Converter(
      extractDigits(sanitizeNumber(numberStringSanitized.toString()))
   );
   const max = Math.max(...digits);
   return max >= 0 && max <= base - 1;
}

function InputIsEqualSanitized(StringInput, StringSanitized) {
   return StringInput === StringSanitized;
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

///.value.toLocaleString("de-DE"));

export default { number: toBase10 };
