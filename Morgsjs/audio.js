let recorderAudio = null;    

function playAudio(){
    if (recordedAudio != null) recordedAudio.play();
};

function audioSetup() {
  navigator.mediaDevices.getUserMedia({ audio: true })
}


function audioHack() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        recordedAudio = new Audio(audioUrl);
      });

      setTimeout(() => {
        mediaRecorder.stop();
      }, 6000);
    });
}
  