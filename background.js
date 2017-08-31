var isEnabled = true;
var maxTabs = 30;
var tabsCount;

function updateBadgeText() {
    chrome.browserAction.setBadgeText({
        text: "" + tabsCount + "/" + maxTabs
    });
}

function updateTabsCount() {
    chrome.tabs.query({
        windowType: 'normal',
        pinned: false
    }, function (tabs) {
        tabsCount = tabs.length;
        updateBadgeText();
    });
}

function handleTabCreated(tab) {
    if (tabsCount >= maxTabs) {
        chrome.tabs.remove(tab.id);
    }
    else {
        updateTabsCount();
    }
}

function handleTabRemoved(tab) {
    updateTabsCount();
}

function handleTabUpdated(tab) {
    updateTabsCount();
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

chrome.browserAction.onClicked.addListener(function (tab) {
    if (!isEnabled) {
        init();
        chrome.browserAction.setIcon({ path: "icons/19.png" });
    }
    else {
        teardown();
        chrome.browserAction.setIcon({ path: "icons/19-disabled.png" });
        chrome.browserAction.setBadgeText({ 'text': '' });
    }

    isEnabled = !isEnabled;
});

init();
