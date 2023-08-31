var myVideo = document.getElementById("video");

let diagnosticsMustBe = document.querySelector('.diagnostics-must-be-bacround')
diagnosticsMustBe.addEventListener('click', function () {

   myVideo.controls = true;
   myVideo.pause();

   myVideo.muted = false;
   myVideo.volume = 1;
}, { once: true })
