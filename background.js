chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "ACTIVATE_CASHBACK") {
    const redirectUrl = `https://cashkaro.com/redirect?store=${msg.store}`;

    chrome.tabs.create({ url: redirectUrl });
  }
});
