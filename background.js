// Icons from <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

let isEnabled = true;
var maxTabs;
var tabsCount;
let tabLimit;
let limit;


chrome.storage.sync.get("tabsLimit", function(data) {
    maxTabs = data.tabsLimit;
    // console.log(data);
    console.log(maxTabs);
    // var settingEnabled = data.someSetting;
});

// Notification data
var opt = {
    type: "basic",
    title: "Oh noes!",
    message: "You hit your tabs limit!",
    iconUrl: "icons/tab_128.png",
}

// Updates the badge text and background color.
function updateBadgeText() {
    percent = tabsCount / maxTabs * 100;
    // console.log(percent);
    if (percent >= 25 && percent < 50) {
        chrome.browserAction.setBadgeBackgroundColor({ color: '#13B618' })
    } else if (percent >= 50 && percent < 75) {
        chrome.browserAction.setBadgeBackgroundColor({ color: '#E77714' })
    } else if (percent >= 75 && percent <= 100) {
        chrome.browserAction.setBadgeBackgroundColor({ color: '#CD482C' })
    }
    chrome.browserAction.setBadgeText({ text: "" + tabsCount });
}

// Updates the tab count.
function updateTabsCount() {
    chrome.tabs.query({
        windowType: 'normal',
        pinned: false
    }, function(tabs) {
        tabsCount = tabs.length;
        updateBadgeText();
    });
}

// Handles a new tab and closes it if the limit has been hit.
function handleTabCreated(tab) {
    tabid = tab.id;
    console.log('count:' + tabsCount);
    console.log('max:' + maxTabs);
    if (tabsCount >= maxTabs) {
        // console.log(tab);
        chrome.tabs.remove(tabid);
        chrome.notifications.create(opt);
    } else {
        updateTabsCount();
    }
}

// Handles the tab removed
function handleTabRemoved(tab) {
    updateTabsCount();
}

// This handles when the tab has been updated. Unused for now.
function handleTabUpdated(tab) {
    // updateTabsCount();
}

function init() {
    updateTabsCount();
    chrome.tabs.onCreated.addListener(handleTabCreated);
    chrome.tabs.onRemoved.addListener(handleTabRemoved);
    chrome.tabs.onUpdated.addListener(handleTabUpdated);
}

function teardown() {
    chrome.tabs.onCreated.removeListener(handleTabCreated);
    chrome.tabs.onRemoved.removeListener(handleTabRemoved);
    chrome.tabs.onUpdated.removeListener(handleTabUpdated);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 'url': chrome.extension.getURL('options.html') }, function(tab) {
        // Launching options :)
    });
});

// chrome.browserAction.onClicked.addListener(function (tab) {
//     if (!isEnabled) {
//         init();
//         chrome.tabs.create({'url': chrome.extension.getURL('options.html')}, function(tab) {
//           // Tab opened.
//         });
//         // chrome.browserAction.setIcon({ path: "icons/tab_128.png" });
//     }
//     else {
//         teardown();
//         chrome.tabs.create({'url': chrome.extension.getURL('options.html')}, function(tab) {
//           // Tab opened.
//         });
//         // chrome.browserAction.setIcon({ path: "icons/tab_24.png" });
//         // chrome.browserAction.setBadgeText({ 'text': '' });
//     }

//     isEnabled = !isEnabled;
// });

init();
