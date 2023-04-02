chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id) {
    await chrome.tabs.create({
      url: `https://archive.ph/?run=1&url=${tab.url}`,
      index: tab.index + 1,
      active: false,
    });
    await chrome.tabs.create({
      url: `https://web.archive.org/web/${new Date().getFullYear()}0000000000*/${
        tab.url
      }`,
      index: tab.index + 2,
      active: false,
    });
  }
});
