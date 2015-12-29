chrome.browserAction.onClicked.addListener(function(tab) { 

	var injectingScript = "var link = document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'http://cdn.sstatic.net/stackoverflow/img/favicon.ico';document.getElementsByTagName('head')[0].appendChild(link);";

	var tabId = tab.id;
	chrome.tabs.executeScript(tabId,{code:"document.title = '...'"});
	chrome.tabs.executeScript(tabId,{code: injectingScript});
});