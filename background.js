chrome.browserAction.onClicked.addListener(function (tab) {

    var injectingScript = "var link = document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://github.com/arVahedi/SecureTabChrome/blob/master/icon.png?raw=true';document.getElementsByTagName('head')[0].appendChild(link);";

    var tabId = tab.id;
    chrome.tabs.executeScript(tabId, {code: "document.title = '...'"});
    chrome.tabs.executeScript(tabId, {code: injectingScript});
});