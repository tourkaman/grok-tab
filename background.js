browser.tabs.onCreated.addListener((tab) => {
  if (tab.url === "about:newtab") {
    browser.tabs.update(tab.id, { url: "https://grok.com" });
  }
});
