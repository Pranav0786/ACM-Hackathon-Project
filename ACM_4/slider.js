
var i=0;
  var images=[];
  var time=3000;
  
  images[0]='acmlogo.png';
  images[1]='d1.jpg';
  
  
  function changeImg()
  {
     document.slide.src=images[i];
	 if(i<images.length-1)
	 {
	   i++;
	 }
	 else
	 {
	    i=0;
	 }
	 setTimeout("changeImg()",time);
  }
  window.onload=changeImg;