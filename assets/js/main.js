	   	var curid = 1;
	   	var previd = 0;
	   	var curSongTitle, curArtist;
	 		 	
	 	function myBar(text) {		
  			   $(function () {
  					$.notifyBar({
    						html: text,
    						delay: 2000,
    						animationSpeed: "normal"
  						});  
					});			 	        
	 	}			
	 		 	     
 	    function updateStatusFinal(type) { 
 	     	    var status = '♥ⓛⓞⓥⓔ♥☜  ♬'+curSongTitle+'♬ •♩ by '+curArtist+' on ▂ ▃ ▅ ▆ █ Radio FG USA http://a2f.me/fgusa';
 	     	   
 	     	    if (type =='twitter')
 	     	       status =' is listening to '+curSongTitle+' by  '+curArtist+' on RadioFGUSA http://a2f.me/fgusa';
 	     	       
 	     	    status = encodeURIComponent(status);	   
 	     	    link = 'http://ubiwireless.com/social/statusupdate.php?r=radiofgusa&t='+type+'&status='+status;
 	     	    //alert(link);
 	     		$.ajax(
 	     		    {
 	     		    url       : link,
 	     		    dataType  : "json", 
 	     		    error     : function (xhr, ajaxOptions, thrownError){
                    				myBar(" Network Error! ");
                    				//alert(xhr.status);
                        			//alert(thrownError);
                	 			},       
 	     		    success  : function(data) { 
 	     		    		      //alert(data.response);
 	     		    	           if (data.response == "OK") {
 	     		    	               myBar("Updated!"); 	     		    	         
 	     		    	           } else {
 	     		    	 	          myBar("Not configured!");
 	     		    	           }
 	     		              }	
 	     		    });
 	     		return true;	
 	     }
 	     
 	     function updateStatus(type){  	     	
 	     	 	showDialog(type);	
 	     }
 	     
 	     
 	     
 	     function getData(id) {
 	     	     //var link =  "http://radiofgusa.com/services/json.php?stationid="+id;
 	     	     var link = "http://switch.eglacomm.net/services/json2.php?stationid="+id; 
 		         $.getJSON(link, function(json) {
		         	    //alert('Updating : '+json.songtitle+'  '+json.artist+' '+json.ringtone);
        		     	$('#songtitle'+id).text(json.songtitle);        		     	
        			    $('#artist'+id).text(json.artist);
        			    $('#itunes'+id).attr('href',json.song);
        			    $('#accordion').accordion("resize");
           	            if (curid == id) {
        		 	    	curArtist      = json.artist;
        			    	curSongTitle   = json.songtitle;        			    	
        			    }
       		     });
       		   return true;
		  }
		  		 

		  function FetchData()
		  {
   				//alert("DoSomething ...()"); 	
   				getData(1);
   				getData(2);
   				getData(3);
   				getData(4);
   				getData(5);
   				getData(6);
		  }
		  
		  
		  function toggle(id) {	
		  	    var imagelink;	 
		  	    alert($('#image'+id).attr('src'));
		  	    
		  	    //Console.log(AudioStreaming.getStatus());
		  	    	 	    
		  	    if (!(AudioStreaming.getStatus() == "isStopped") && !(AudioStreaming.getStatus() == "isStopping") )
		  	    {
		  	    	alert('Stopping .... '+id+ " Status = "+ AudioStreaming.getStatus());		  	    
		  	    	stopStream();
		  	    	imagelink = 'images4/'+id+'.png';
		  	    	$('#image'+id).attr('src', imagelink);
		  	    	if (curid != id) {
		  	    		imagelink = 'images4/'+curid+'.png';
		  	    		$('#image'+curid).attr('src',imagelink);
		  	    		imagelink = 'images4/'+id+'p.png';  	    	   
   		  		        $('#image'+id).attr('src',imagelink);
   		  		        curid = id;	
		  	    	    playStream(id);				  	    	   		  	    	}    
		  	    } 
		  	    else
		  	    { 
		  		   alert('Now playing .... '+id);		 	    		  	
		  		   imagelink = 'images4/'+id+'p.png';
		  		   $('#image'+id).attr('src',imagelink);
		  		   playStream(id);
		  		   curid = id;
		  	    }	
		  	    //imagelink = 'images4/'+id+'p.png';
		  	    //$('#image'+id).attr('src', imagelink)			  	      	    
		} // toggle(id)

	
	 	
		function showDialog(type) {
	       if (type == "twitter") {
			$( '#dialog-confirm-twitter' ).dialog({
				resizable: false,
				height:200,
				modal: true,
				buttons: {
				"Post it!": function() {
					$( this ).dialog( "close" );
					updateStatusFinal('twitter');
				},
				Cancel: function() {
					$( this ).dialog( "close" );
			  	  }
			    }
	         });
	     }
	     
	     if (type == "facebook") {  
	        $( '#dialog-confirm-facebook' ).dialog({
				resizable: false,
				height:200,
				modal: true,
				buttons: {
				"Post it!": function() {
					$( this ).dialog( "close" );
					updateStatusFinal('facebook');
				},
				Cancel: function() {
					$( this ).dialog( "close" );
			  	  }
			    }
	         });
 
	      }
		} 

 
       function onDeviceReady() {
        	//document.addEventListener("orientationchange", updateOrientation); 
        	document.addEventListener("orientationChanged", updateOrientation);       	
        	if (AudioStream.onStatusChange) {
	            AudioStream.onStatusChange(function(status) {
    	            debug.log("STATUS :::::: " + status);
        	        if(status == 'isPlaying') {
            	        // document.getElementById('now_station').innerHTML = 'Now Playing DRS 3: ';
            	         myBar("Playing.."); 
               	     } else if (status == 'isStopping') {
               	     	 myBar("Player Stopping");                     	
                	 } else if (status == 'isLoading') {
                    	 myBar("Wait loading");
                     }
               });
                          
        	} //Plugins audiostream auto changed
        			        
       }

    	function updateOrientation(e) {
    		//alert('Orientation changed...');
        	switch (e.orientation) {
            	case 90:
                	window.location = "screen3.html";
                	break;
            	case -90:
                	window.location = "screen3.html";
                	break;
       		 }
    	}

	   function mainLoaded() {
	   	 
	   }
	
       $(document).ready(function() {
       	  // Accordion Code for this page       	  
       	  // $.blockUI({ message: '<b style="font-size:10;"><img src="images4/busy.gif"/>Wait!</b>' });         	  
       	  //  $('#accordion').load('main.html', mainLoaded() );	  
       	    $('#accordion').hide();   
	  	    $(function() {
		       $("#accordion:hidden").accordion({autoHeight: true});
		    });
		    $('#accordion:hidden').show('slow');
		    		      		   
 		   //goto('mainscreen', 'loading');     	   	
    	   document.addEventListener("deviceready", onDeviceReady, false);
    	   FetchData();
    	   setInterval ( "FetchData()", 20000 );     
    	   // $('#accordion').fadeIn('slow'); 
           // $.unblockUI(); 
           // shows loading screen whilst posting via ajax
 		   // $().ajaxStart(function() { 
       		//		 $.blockUI({ message: '<p style="font-size:10;"><img src="../images/layout/busy.gif" />Wait...</p>' });  });           
    	   //$().ajaxStop($.unblockUI);         	 	  	   
       });
       
	   
	 		
	var cfg = ($.hoverintent = {
		sensitivity: 7,
		interval: 100
	});
 

	$.event.special.hoverintent = {
		setup: function() {
			$( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
		},
		teardown: function() {
			$( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
		},
		handler: function( event ) {
			event.type = "hoverintent";
			var self = this,
				args = arguments,
				target = $( event.target ),
				cX, cY, pX, pY;
			
			function track( event ) {
				cX = event.pageX;
				cY = event.pageY;
			};
			pX = event.pageX;
			pY = event.pageY;
			function clear() {
				target
					.unbind( "mousemove", track )
					.unbind( "mouseout", arguments.callee );
				clearTimeout( timeout );
			}
			function handler() {
				if ( ( Math.abs( pX - cX ) + Math.abs( pY - cY ) ) < cfg.sensitivity ) {
					clear();
					jQuery.event.handle.apply( self, args );
				} else {
					pX = cX;
					pY = cY;
					timeout = setTimeout( handler, cfg.interval );
				}
			}
			var timeout = setTimeout( handler, cfg.interval );
			target.mousemove( track ).mouseout( clear );
			return true;
		}
	};