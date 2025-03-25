// Code your solutions in this file
// write cards function Task 1
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }
  
  // Task 2: countDown() function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }