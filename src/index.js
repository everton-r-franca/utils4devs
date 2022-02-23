import toBase10 from "./utils/toBase10";
import messages from "./utils/messages";

const convert = { number: "ffff", base: 16 };
console.log(toBase10.number(convert));

messages.addError("alguma mensagem de erro");
messages.addError("alguma OUTRA mensagem de erro");
console.log(messages.hasErrors());
console.log(messages.errors());
messages.clearMessages();
console.log(messages.hasErrors());
console.log(messages.errors());
