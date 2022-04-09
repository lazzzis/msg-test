// 1. Pop up Blocked
window.open("https://www.example.com/", "_blank");

// 2. PWA Install
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("./sw.js", import.meta.url))
    .then(() => {
      console.log("Service Worker Registered");
    });
}

// 3. Notification Blocked
const notificationBlocked = document.querySelector("#notification-blocked");
notificationBlocked.addEventListener("click", () => {
  Notification.requestPermission();
});
