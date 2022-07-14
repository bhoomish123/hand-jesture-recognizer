Webcam.set({ 
    width : 352,
     height : 302,
     image_format : 'png',
     png_quality : 99
    });
    
    camera = document.getElementById("camera");
     
     Webcam.attach('#camera');
    
     function take_snapshot(){
      Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
      });
     }
    
    console.log('ml5 version : ', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UjTu3_9X6/model.json', modelLoaded);
    
    
    function modelLoaded(){
    console.log('model loaded');
    }
    
    function speak(){
      var synth = window.speechSynthesis;
      speak_data_1 = "first prediction is" + prediction_1;
      speak_data_2 = "and second prediction is" + prediction_2;
      var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
      synth.speak(utterThis);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    