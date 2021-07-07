Webcam.set({
    width:310,
    height:310,
    image_format:'png',
    png_quality:90,
    constraints:
    {
        facingMode:"environment"
    }
    });

    var camera=document.getElementById("camera");
    Webcam.attach("#camera");
     
    function capimg()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("Snap").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        })
        
    }
    
    console.log("ml5 version",ml5.version);

    Classifer=ml5.imageClassifier('MobileNet',modelLoaded);

    function modelLoaded()
    {
    console.log("Your Model Has Been Loaded");
    }


    function disimg()
    {
        img=document.getElementById("captured_image");
        Classifer.classify(img , gotResult);
    }

    function gotResult(error,result)
    {
    if (error)
    {
        console.log("error")
    }
    else
    {
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
    }

    }