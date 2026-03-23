try {
  let x = y;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("It Runs Each time");
}
