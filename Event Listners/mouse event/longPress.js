const executeOnLongPress = (element, time, callback) => {
  let timer = null;
  let isPressed = false;

  const startPress = () => {
    isPressed = true;
    timer = setTimeout(() => {
      if (isPressed) callback();
    }, time * 1000);
  };

  const stopPress = () => {
    isPressed = false;
    clearTimeout(timer);
  };

  // Pointer down = start
  element.addEventListener("pointerdown", startPress);

  // Pointer up anywhere on page = stop
  window.addEventListener("pointerup", stopPress);

  // If user moves pointer off element → stop
  element.addEventListener("pointerleave", stopPress);
};

export { executeOnLongPress };
