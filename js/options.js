'use strict';

let maxTabs; // Default
let tabsLimit;


// Saves options to chrome.storage.sync.
function save_options() {
  var limit = document.getElementById('limit').value || 20;
  console.log('Limita ' + limit);
  chrome.storage.sync.set({
    tabsLimit: limit
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Reloading extension..';
    status.style.display = "block";
    setTimeout(function() {
      status.textContent = '';
      status.style.display = "none";
    }, 1500);
    // Let's reload the extension.
    chrome.runtime.reload();
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get("tabsLimit", function (data) {
        maxTabs = data.tabsLimit || 20;
        document.getElementById('limit').value = maxTabs;
        // console.log(data);
        // var settingEnabled = data.someSetting;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
