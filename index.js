;
(function IIFEfileWrapper(){
  'use strict';
  
    // =============== Variables ================
    // JS variables
    let apiResponse     = {},
        streamArr       = ['freecodecamp', 'ESL_SC2'];
    
    // HTML elements
    const doc = 0;
    
    // =============== On Page Load ================
    document.addEventListener('DOMContentLoaded', function DOMLoaded(){
        streamArr.forEach((element) => {apiCall(element)});
        
    }, {once: true});


    // ============== Functions ================
    function apiCall(streamId){
        let xhttp = new XMLHttpRequest();
        let url   = `https://wind-bow.glitch.me/twitch-api/streams/${streamId}`;
        console.log(url);
        
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                apiResponse = JSON.parse(this.responseText);
                
                console.log(apiResponse);
                
                displayCurrentStream();
                
            } 
        };
        
        xhttp.open('GET', url, true);
        xhttp.send();
    };
    
    function displayCurrentStream() {
        console.log('displayStreams() called');
    };
    
})();