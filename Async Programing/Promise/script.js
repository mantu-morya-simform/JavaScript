const GITHUB_API = "https://api.github.com/users/mantu008";

const user = fetch(GITHUB_API);

console.log(user);
user.then((data) => {
  console.log(data.body);
});

// callback and promise

createOrder(cart, function (orderId) {
  procideToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletbalance();
    });
  });
});

createOrder(cart).then(() => procideToPayment(orderId));
