chrome.browserAction.onClicked.addListener(function(tab) {
    //this function does not work when you have popup html file.
    //저장된 정보가 없으면 url 페어 리스트 팝업을 띄운다.
    //저장된 정보가 있으면 그대로 보낸다.
    chrome.tabs.executeScript({
        file:'send.js'
    });
});




chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
    if (request.action && request.action == 'openwebsite'){
        var newURL = request.value;
        chrome.tabs.create({ url: newURL });//this function does not work when you have popup html file.
    }
});





//below functions are keyboard shortcut, but does not work.
// chrome.commands.onCommand.addListener(function(command) {
//     if (command === "execute-picturedownload") {
//         chrome.tabs.executeScript({file: 'select.js'});
//     }
// });