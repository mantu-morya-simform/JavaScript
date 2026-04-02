//create custome itterator

const makeItterator = (start = 0, end = Infinity, step = 1) => {
  let nextStart = start;
  let itterationCount = 0;

  return {
    next() {
      let result;
      if (itterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        itterationCount++;
        return result;
      }
      return { value: itterationCount, done: true };
    },
  };
};

const myItterator = makeItterator(1, 10, 2);

let result = myItterator.next();

while (!result.done) {
  console.log(result.value);
  result = myItterator.next();
}
