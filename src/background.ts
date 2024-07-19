// eslint-disable-next-line @typescript-eslint/no-misused-promises -- @types/chrome doesn't yet allow for async functions passed as callbacks https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70099
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
