export function drawStatusText(context, input, player) {
  context.font = "30px Helvetica";
  // Use a static property on the function to store the last press time.
  if (typeof drawStatusText.lastArrowPressTime === "undefined") {
    drawStatusText.lastArrowPressTime = 0;
  }

  // If the lastKey indicates a press event, update the timestamp.
  if (input.lastKey.startsWith("PRESS")) {
    drawStatusText.lastArrowPressTime = Date.now();
  }

  const now = Date.now();
  if (now - drawStatusText.lastArrowPressTime >= 20000) {
    context.fillText("Use Arrow Keys", 20, 50);
  }

  context.fillText("Last input: " + input.lastKey, 20, 90);
  context.fillText("Active State: " + player.currentState.state, 20, 130);
}
