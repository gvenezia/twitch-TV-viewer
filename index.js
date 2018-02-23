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
        let url   = `https://wind-bow.glitch.me/twitch-api/channels/${streamId}`;
        
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                displayCurrentStream(streamId, JSON.parse(this.response));
            } 
        };
        
        xhttp.open('GET', url, true);
        xhttp.send();
    };
    
    function displayCurrentStream(streamId, apiResponse) {
        
        console.log(apiResponse);
        
        let newDiv = document.createElement('div');
        
        newDiv.classList.add('row');
        newDiv.classList.add('stream-div');
        
        newDiv.innerHTML = `<div class="col-2 col-element">
                                <img src="${apiResponse.logo}"/>
                            </div>
                            <div class="col-4 col-element">
                                <a href="${apiResponse.url}">
                                    ${apiResponse.display_name}
                                </a>
                            </div>
                            <div class="col-6 align-middle col-element">
                                ${apiResponse.status}
                            </div>
                            `;
    
        channelsContainer.appendChild(newDiv);
        
    }; // End displayCurrentStream()
    
})();