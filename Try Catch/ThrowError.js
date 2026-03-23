try {
  try {
    let x = y;
  } catch (error) {
    throw new Error("Problem Hai Bhai");
  } finally {
    console.log("It Runs Each time");
  }
} catch (err) {
  console.log("Handled:", err.message);
}
