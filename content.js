(function () {
  const storeConfig = {
    "myntra.com": {
      cashback: "Up to 6%",
      link: "https://cashkaro.com/stores/myntra"
    },
    "ajio.com": {
      cashback: "Up to 8%",
      link: "https://cashkaro.com/stores/ajio-coupons"
    },
    "flipkart.com": {
      cashback: "Up to 5%",
      link: "https://cashkaro.com/stores/flipkart"
    },
    "amazon.in": {
      cashback: "Up to 4%",
      link: "https://cashkaro.com/stores/amazon"
    }
  };

  const hostname = window.location.hostname;
  let currentStore = Object.keys(storeConfig).find(domain => hostname.includes(domain));

  if (currentStore) {
    if (document.getElementById("cashkaro-banner")) return;

    const banner = document.createElement("div");
    banner.id = "cashkaro-banner";
    banner.innerHTML = `
      <span id="cashkaro-text">💰 Activate ${storeConfig[currentStore].cashback} Cashback via CashKaro</span>
      <span id="cashkaro-close">✖</span>
    `;
    banner.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #ff512f, #dd2476);
      color: white;
      font-weight: bold;
      padding: 12px 18px;
      z-index: 999999;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.35);
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: pulseGlow 1.5s infinite;
    `;

    banner.querySelector("#cashkaro-text").onclick = () => {
      window.open(storeConfig[currentStore].link, "_blank");
    };

    const closeBtn = banner.querySelector("#cashkaro-close");
    closeBtn.style.cssText = `
      margin-left: auto;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      color: white;
      opacity: 0.8;
    `;
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      banner.remove();
    };

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulseGlow {
        0% { box-shadow: 0 0 5px #ff512f, 0 0 10px #dd2476; }
        50% { box-shadow: 0 0 20px #ff512f, 0 0 30px #dd2476; }
        100% { box-shadow: 0 0 5px #ff512f, 0 0 10px #dd2476; }
      }
      #cashkaro-banner:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease-in-out;
      }
      #cashkaro-close:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(style);

    // Inject banner
    document.body.appendChild(banner);
  }
})();
