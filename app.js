const talk = document.querySelector(".btn");
const listOfTask = document.querySelector(".links");

// const recognition = window.SpeechRecognition();
const recognition = new webkitSpeechRecognition();

recognition.onaudiostart = function () {
  console.log("Audio capturing started");
};

talk.addEventListener("click", () => {
  recognition.start();
});
