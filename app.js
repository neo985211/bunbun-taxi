const APP_CONFIG = {
  driverName: "笨笨",
  phoneNumber: "13800000000",
  carModel: "黄佳怡的专属小车",
  plateNumber: "粤A EK3226",
  etaMinutes: 3,
  autoOpenDialerAfterAccepted: false,
};

const views = document.querySelectorAll(".app-view");
const hailButton = document.querySelector("#hailButton");
const againButton = document.querySelector("#againButton");
const callButton = document.querySelector("#callButton");
const driverNameText = document.querySelector("#driverNameText");
const driverCardName = document.querySelector("#driverCardName");
const carInfo = document.querySelector("#carInfo");
const etaText = document.querySelector("#etaText");

const normalizePhoneNumber = (phoneNumber) => phoneNumber.replace(/[^\d+]/g, "");

const setView = (name) => {
  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === name);
  });
};

const applyConfig = () => {
  const phone = normalizePhoneNumber(APP_CONFIG.phoneNumber);
  const details = `${APP_CONFIG.carModel} · ${APP_CONFIG.plateNumber}`;

  document.title = `${APP_CONFIG.driverName}专属接驾`;
  driverNameText.textContent = APP_CONFIG.driverName;
  driverCardName.textContent = APP_CONFIG.driverName;
  carInfo.textContent = details;
  etaText.textContent = APP_CONFIG.etaMinutes;
  callButton.href = `tel:${phone}`;
  callButton.setAttribute("aria-label", `马上打给${APP_CONFIG.driverName}`);
};

const openDialer = () => {
  if (!APP_CONFIG.autoOpenDialerAfterAccepted) {
    return;
  }

  window.setTimeout(() => {
    window.location.href = callButton.href;
  }, 450);
};

hailButton.addEventListener("click", () => {
  setView("matching");

  window.setTimeout(() => {
    setView("accepted");
    openDialer();
  }, 1000);
});

againButton.addEventListener("click", () => {
  setView("idle");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

applyConfig();
