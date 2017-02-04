// VARIABLES
var channelid = 'XXXXXXXXXXXXX';
var authorization = 'XXXXXXXXXX';
 
// FUNCTIONS
Object.size = function(obj) {
   var size = 0, key;
   for (key in obj) {
       if (obj.hasOwnProperty(key)) size++;
   }
   return size;
};
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
function deleteOneMessage(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://discordapp.com/api/v6/channels/"+channelid+"/messages/"+id, true);
    xhr.setRequestHeader("authorization", authorization);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            console.log("deleted: "+id+" "+xhr.status);
        }
    }
    xhr.send();
}
 
async function deleteAllMessages(ids) {
    for (var i=0; i<ids.length; i++) {
        deleteOneMessage(ids[i]);
        await sleep(200);
    }
    getId();
}
 
function getId() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://discordapp.com/api/v6/channels/"+channelid+"/messages?limit=100", true);
    xhr.setRequestHeader("authorization", authorization);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            var obj = JSON.parse(xhr.responseText);
            var size = Object.size(obj);
           
            var ids = new Array();
            for (var i=0; i<size; i++) {
                ids[i] = obj[i].id;
            }
           
            deleteAllMessages(ids);
        }
    }
    xhr.send();
}
 
getId();
