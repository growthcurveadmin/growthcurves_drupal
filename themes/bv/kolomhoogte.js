//debugger;

matchHeight = function(){
     var divs,contDivs,maxHeight,divHeight,d;
     // get all <div> elements in the document
     divs=document.getElementsByTagName('div');
     contDivs=[];
     // initialize maximum height value
     maxHeight=0;
     // iterate over all <div> elements in the document
     for(var i=0;i<divs.length;i++){
          // make collection with <div> elements with class attribute 'kolom'
          if(/\bkolom\b/.test(divs[i].className)){
                d=divs[i];
                // determine height for <div> element
                if(d.offsetHeight){
                     divHeight=d.offsetHeight;
                }
                else if(d.style.pixelHeight){
                     divHeight=d.style.pixelHeight;
                }
                // calculate maximum height
		 						alert('divHeight of ' + d.id + '=' + divHeight);
								if (!isNaN(divHeight)) {
                	contDivs[contDivs.length]=d;
                	maxHeight=Math.max(maxHeight,divHeight);
								}
          }
     }
     // assign maximum height value to all of kolom <div> elements
		 alert('maxHeight: ' + maxHeight);
     for(var i=0;i<contDivs.length;i++){
          contDivs[i].style.height=maxHeight+'px';
     }
}

// execute function when page loads
window.onload = function(){
     if(document.getElementsByTagName){
//				debugger;
          matchHeight();
     }
}
