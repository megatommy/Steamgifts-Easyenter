function byId(id){
	return document.getElementById(id);
}

//counts how many open giveaway tabs there are
function countGA(tab){
    var found = 0;
    for(var i = 0; i < tab.length; i++){
        var url = tab[i].url;
        if(url.indexOf("http://www.steamgifts.com/giveaway/") >= 0){
            found ++;
        }
    }
	
    byId("result").textContent = "Found "+found+" giveaway-tabs.";
}

//when you press the button, it closes all the open giveaway tabs
function removeGA(tab){
    var found = 0;
    for(var i = 0; i < tab.length; i++){
        var url = tab[i].url;
        if(url.indexOf("http://www.steamgifts.com/giveaway/") >= 0){
            found ++;
            chrome.tabs.remove(tab[i].id);
        }
    }
    if(found > 0){
        byId("result").textContent = "Closed giveaway-tabs!";
    }
    else {
        byId("result").textContent = "No open giveaway-tabs!";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    //when you press the icon of the extension, it executes "countGA"
    chrome.tabs.query({},countGA);
    
    //button listener, button executes "removeGA"
    byId("removeButton").addEventListener('click', function(event){
		chrome.tabs.query({},removeGA);
	});
    
    //clicking on "about"
    byId("about").addEventListener('click', function(event){
        var extId = chrome.runtime.id;
        window.open("chrome-extension://"+extId+"/about.html", "_blank");
    });
});
