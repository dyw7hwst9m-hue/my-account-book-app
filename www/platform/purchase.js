function getPurchasePlatform() {
  if (window.Capacitor && window.Capacitor.getPlatform) {
    return window.Capacitor.getPlatform();
  }

  return "web";
}
console.log("Purchase platform:", getPurchasePlatform());