;
(function IIFEfileWrapper(){
  'use strict';
  
    // ================= Variables ==================
    // JS variables
    let apiResponse = {},
        streamArr   = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                       "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
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
        let newDiv = document.createElement('div');
        
        newDiv.classList.add('row');
        newDiv.classList.add('stream-div');
        
        newDiv.innerHTML = `<div class="col-2 col-image">
                                <img src="${apiResponse.logo}"/>
                            </div>
                            <div class="col-3 col-element">
                                <a href="${apiResponse.url}">
                                    ${apiResponse.display_name}
                                </a>
                            </div>
                            <div class="col-6 col-element">
                                <em>${apiResponse.status ? apiResponse.status : 'Offline'}</em>
                            </div>
                            `;
    
        channelsContainer.appendChild(newDiv);
        
    }; // End displayCurrentStream()
    
})();