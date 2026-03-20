let message =
  "This is a very long string which needs to be truncated after 20 characters.";

// Ans: "This is a very long ...";

let newMessage = message.length > 20 ? message.slice(0, 20) + "..." : message;
console.log(newMessage);
