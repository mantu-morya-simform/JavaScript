function* myItterator(start, end, step) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const firstItterator = myItterator(1, 10, 2);

for (let val of firstItterator) {
  console.log(val);
}
