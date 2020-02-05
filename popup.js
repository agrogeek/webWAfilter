
  let contacts_list = document.getElementById('contacts_list');
  chrome.storage.sync.get('contacts_filter', function(data) {
      contacts_list.style.backgroundColor = 'black'
    });


window.onload = function(element){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = black;'});
  });
}
