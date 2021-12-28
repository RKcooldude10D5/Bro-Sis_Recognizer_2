Webcam.set({
    width: 450,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("cam");
Webcam.attach('#cam');
function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("camresult").innerHTML='<img id="imgtaken" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded);