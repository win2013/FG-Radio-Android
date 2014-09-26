
function closeObject(x) 
{
    var div = document.getElementById(x);
    div.style.visibility =  "visibility:hidden";
    div.style.display    =  "none"; 
} 

function openObject(x) 
{
    var div = document.getElementById(x);
    div.style.visibility= "visible"; 
    div.style.display   = "block";
} 

function goto(someID, toSomeID) {
     openObject(toSomeID);
     closeObject(someID);
}


function isIDevice() {
    return navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i);
}

function validate(login, pass) {
   load('screen.html');
}

function stopStream() {
    AudioStreaming.stop();	
}

function playStream(id) {
    alert(' Playing... press OK ' + id );
    url = "http://switch.eglacomm.net:8000/ch0";
    switch(id)
    {		
	case '1':
   	     url = "http://switch.eglacomm.net:8000/ch0";
 	break;
	case '2':
	    url = "http://switch.eglacomm.net:8000/ch1";
	break;
	case '3':
	    url = "http://switch.eglacomm.net:8000/ch2";
	break;
	
    }	
    
    if (isIDevice()) {
        AudioStreaming.play(url);
    } else {
        if (audio != null) {
            audio.pause();
            audio = null;
        }
        audio = new Audio(url);
        audio.play();
    }

}


//document.getElementById("loading").className = "loading-visible";
//var hideDiv = function(){document.getElementById("loading").className = "loading-invisible";};
//var oldLoad = window.onload;
//var newLoad = oldLoad ? function(){hideDiv.call(this);oldLoad.call(this);} : hideDiv;
//window.onload = newLoad;

function ajax_go(link, div){
	    $(div).html('<b><img src="images4/busy.gif"/>Wait!</b>');        
		$(div).load(link, function() {
  			  //$.unblockUI();
 		}); 
 	    return true;		
}    
 
