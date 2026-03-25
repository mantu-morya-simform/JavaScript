const cart = ["shoes", "pants", "kurta"];

const validateCart = (cart) => {
  return cart.length > 0;
};

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    //createOrder
    //validateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is empty Available to craete order");
      return reject(err);
    }

    //logic for create Order
    const orderId = "123";
    if (orderId) {
      setTimeout(() => {
        console.log(`Order Create Sucessfully For OrderId ${orderId}`);
        resolve(orderId);
      }, 1000);
    }
  });
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      const err = new Error("OrderId is not Available to proceed the payment");
      return reject(err);
    }
    //logic for create Order
    const paymentId = "ABC123";
    if (paymentId) {
      setTimeout(() => {
        console.log(`Payment SucessFull For paymentId ${paymentId}`);
        resolve(paymentId);
      }, 1000);
    }
  });
};

const showOrderSummary = (paymentId) => {
  return new Promise((resolve, reject) => {
    if (!paymentId) {
      const err = new Error("PaymentId is not Available to show order summary");
      return reject(err);
    }
    //logic for create Order
    const showOrderSummaryId = "5636767bhjh78292123";
    if (showOrderSummaryId) {
      setTimeout(() => {
        console.log(`Order Summary For OrderSummaryId ${showOrderSummaryId}`);
        resolve(showOrderSummaryId);
      }, 1000);
    }
  });
};

const updateWallet = (showOrderSummaryId) => {
  return new Promise((resolve, reject) => {
    if (showOrderSummaryId) {
      const err = new Error(
        "showOrderSummaryId is not Available to update wallet",
      );
      return reject(err);
    }
    //logic for create Order
    const walletAmt = "2450";
    let updatedWalletAmt = walletAmt - 1999;
    if (walletAmt) {
      setTimeout(() => {
        console.log(
          `Wallet Amount Updated from ${walletAmt} to ${updatedWalletAmt}`,
        );
        resolve(updatedWalletAmt);
      }, 1000);
    }
  });
};

createOrder(cart)
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentId) => {
    return showOrderSummary(paymentId);
  })
  .then((showOrderSummaryId) => {
    return updateWallet(showOrderSummaryId);
  })
  .catch((err) => {
    console.log(err.message);
  });

/*

// here is some problem see here after proceedToPayment(orderId);  we not retuen anything and then apply .then() on thatthat cause a problem,
// because it not retuen any promise there and we just apply .then() on it so if we do any async operation via promise and callback then retuen it for the chaing and,
//  use chaning properties .then(), .catch() its child also  

createOrder(cart)
  .then((orderId) => {
    proceedToPayment(orderId);
  })
  .then((paymentId) => {
    console.log(paymentId);
  })
  .catch((err) => {
    console.log(err.message);
  });

*/
