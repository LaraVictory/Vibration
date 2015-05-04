    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", onDeviceReady, false);
    }, false);
    


    // PhoneGap is ready
    function onDeviceReady() {
    	var startBtn = $('#startBtn');
    
    	
    	startBtn.click(function(){
    		startWatch();
    	});
    	
    	  	
    }
    
    // Start watching the compass
    function startWatch() {

   navigator.vibrate(3000);
       
		
		
		
    }

   
    
  