;
(function IIFEfileWrapper(){
  'use strict';
  
    // ================= Variables ==================
    // JS variables
    let apiResponse = {},
        streamArr   = ['freecodecamp', 'ESL_SC2'];
    
    // HTML elements
    const channelsContainer = document.getElementById('channels-container');
    
    // =============== On Page Load ================
    document.addEventListener('DOMContentLoaded', function DOMLoaded(){
        
        streamArr.forEach((streamId) => { apiCall(streamId); });
        
    }, {once: true});


    // ================ Functions ==================
    function apiCall(streamId){
        let xhttp = new XMLHttpRequest();
        let url   = `https://wind-bow.glitch.me/twitch-api/streams/${streamId}`;
        
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                displayCurrentStream(streamId, JSON.parse(this.responseText));
                
            } 
        };
        
        xhttp.open('GET', url, true);
        xhttp.send();
    };
    
    function displayCurrentStream(streamId, apiResponse) {
        // console.log('displayStreams() called');
        
        console.log(apiResponse);
        
        let streamLink = `https://www.twitch.tv/${streamId}`;
        
        let newDiv = document.createElement('div');
        
        newDiv.classList.add('row');
        newDiv.classList.add('stream-div');
        
        if (apiResponse.stream != null){
            newDiv.innerHTML = `<div class="col-2">
                                    <a href="${streamLink}">
                                        ${apiResponse.stream.channel.display_name}
                                    </a>
                                </div>
                                <div class="col-6">
                                    ${apiResponse.stream.channel.status}
                                </div>
                                `;
        } else {
            newDiv.innerHTML = `<div class="col-2">
                                    <a href="${streamLink}">
                                        ${streamId}
                                    </a>
                                </div>
                                <div class="col-6 m-auto">
                                    <em>Offline</em>
                                </div>
                                `;
        }
        
        channelsContainer.appendChild(newDiv);
    }; // End displayCurrentStream()
    
})();