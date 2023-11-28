const curriculum = [
  "1.1.1 Structure and function of the processor (A Level only)",
  "1.1.1 Structure and function of the processor",
  "1.1.2 Types of Processor (A Level only)",
  "1.1.2 Types of Processor",
  "1.1.3 Input, Output and Storage",
  "1.2.1 Systems Software",
  "1.2.2 Applications Generation",
  "1.2.3 Software Development",
];

const chosenTopic = curriculum[Math.floor(Math.random() * curriculum.length)];

const topic = document.querySelector(".topic");

topic.innerText = chosenTopic;
