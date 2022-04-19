//슬래시 기준으로 url의 토큰만 떼서 반대쪽 url에 붙인다.
var websiteURL;

chrome.extension.sendMessage({action:'openwebsite',value:websiteURL});