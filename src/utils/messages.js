// todo

let messages = [];

function addMessage(message) {
   messages.push({
      description: message.description,
      type: message.type,
      timestamp: new Date(),
   });
}

function clearMessages() {
   messages = [];
}

function searchByType(type) {
   return messages.filter((e) => e.type === type);
}

function addError(message) {
   return addMessage({ description: message, type: "error" });
}

function errors() {
   return searchByType("error");
}

function hasErrors() {
   return searchByType("error").length > 0;
}

function infos() {
   return searchByType("info");
}

function addInfo(message) {
   return addMessage({ description: message, type: "info" });
}

function hasInfos() {
   return searchByType("info");
}

function warnings() {
   return searchByType("warnings");
}

function addWarning(message) {
   return addMessage({ description: message, type: "warning" });
}

function hasWarnings() {
   return searchByType("warning");
}

export default {
   addError,
   addInfo,
   addWarning,
   hasErrors,
   hasInfos,
   hasWarnings,
   errors,
   infos,
   warnings,
   clearMessages,
};
