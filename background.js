chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({contacts_filter: {}}, function() {
        console.log('Creada lista de contactos.');
      });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'web.whatsapp.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
