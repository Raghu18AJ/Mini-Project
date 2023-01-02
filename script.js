var img=null;

//LoadImage()
function LoadImage(){
  var file=document.getElementById("loadimage");
  var canvas=document.getElementById("can");
  img=new SimpleImage(file);
  img.drawTo(canvas);
}

//MakeGrayscale()
function MakeGrayscale(){
  if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for(var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  img.drawTo(can);
}

//MakeRed()
function MakeRed(){
  if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
 for(var pixel of img.values()){
   pixel.setRed(255);
 }
  img.drawTo(can);
}

//MakeGreen()
function MakeGreen(){
  if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
 for(var pixel of img.values()){
   pixel.setGreen(255);
 }
  img.drawTo(can);
}

//MakeBlue()
function MakeBlue(){
  if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
 for(var pixel of img.values()){
   pixel.setBlue(255);
 }
  img.drawTo(can);
}

//MakeRedhue()
function MakeRedhue(){
  if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
  for(var pixel of img.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setBlue(0);
      pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue(2*avg - 255);
      pixel.setGreen(2*avg - 255);
    }
  }
   img.drawTo(can);
}

//MakeRainbow()
function MakeRainbow(){
  
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  
  for(var pixel of img.values()){
    var y = img.getHeight()/7;
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    var Y= pixel.getY();
    
    if(Y<y){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
      
      else if(Y<2*y){
        if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
        }
        else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
        }
        
      }
    
    else if(Y<3*y){
        if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        }
        else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        }
        
      }
    
    
    else if(Y<4*y){
        if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        }
        else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        }
        
      }
    
    else if(Y<5*y){
        if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
        }
        else{
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
        }
        
      }
    
    else if(Y<6*y){
        if(avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
        }
        else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
        }
        
      }
    
     else if(Y<7*y){
        if(avg<128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
        }
        else{
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
        }
        
      }
  }
  img.drawTo(can);
}

//MakeBlur()
function MakeBlur(){
  if (img == null || !img.complete()){
    alert("Image is not Loaded");
    return;
  }
  var newImg = new SimpleImage(img.getWidth(),img.getHeight());
  for (var pixel of img.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5) {
      newImg.setPixel(x, y, pixel);
    }
    else {
      var random = Math.floor(Math.random()*23 - 11);
      var newX = random + x;
      var newY = random + y;
      if (newX > 0 && newX <= img.getWidth()-1) {
        if (newY > 0 && newY <= img.getHeight()-1) {
          var newPixel = img.getPixel(newX, newY);
          newImg.setPixel(x, y, newPixel);
        }
      }
    }
  }
  newImg.drawTo(can);
}



//ResetImage()
function ResetImage(){
   if(img==null||!img.complete()){
    alert("Image is not Loaded");
    return;
  }
   var file=document.getElementById("loadimage");
  img=new SimpleImage(file);
  img.drawTo(can);
    
}