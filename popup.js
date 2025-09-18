document.getElementById("openMyntra").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "ACTIVATE_CASHBACK", store: "myntra" });
});
