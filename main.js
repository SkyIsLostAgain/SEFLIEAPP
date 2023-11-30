var speechrec = window.webkitSpeechRecognition;
var recon = new speechrec();




function start(){
    document.getElementById("textbox").innerHTML = "";
    recon.start();
}

recon.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);

    if(content=="take my selfie"){
        speak(); 
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speakdata = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout( function() {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    imgae_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieimage" src="'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image =  document.getElementById("selfieimage").src;
    link.href = image;
    link.click();
}
