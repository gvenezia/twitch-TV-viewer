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
    
    // NOTE: could easily add sorting buttons by calling similar functions w/ modified results
    function displayCurrentStream(streamId, apiResponse) {
        let newDiv = document.createElement('div');
        
        newDiv.innerHTML = `<a href="${apiResponse.url}" target="_blank">
                                <div class="row stream-div">
                                    <div class="col-2 col-image">
                                        <img src="${apiResponse.logo}"/>
                                    </div>
                                    <div class="col-3 col-element">
                                        ${apiResponse.display_name}
                                    </div>
                                    <div class="col-6 col-element">
                                        <em>${apiResponse.status ? apiResponse.status : 'Offline'}</em>
                                    </div>
                                </div>
                            </a>
                            `;
                            
        // Change background color to reflect the status, greenish online, blue-ish offline
        if (apiResponse.status != null){
            newDiv.style.backgroundColor = '#b7ccba';
        } else {
            newDiv.style.backgroundColor = '#b7c9cc';
        }
    
        channelsContainer.appendChild(newDiv);
        
    }; // End displayCurrentStream()
    
})();