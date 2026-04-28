function* myItterator(start, end, step) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const firstItterator = myItterator(1, 10, 2);

for (let val of firstItterator) {
  console.log(val);
}

/*


Here are 15 JavaScript Generator output-based questions, ranging from medium to high complexity. These focus on execution suspension, two-way communication (next(val)), delegation (yield*), and error handling.

Question 1: The Basics of Yielding
JavaScript
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 1, 2, 3, undefined

Explanation: The return statement sets the value of the iterator but also sets done: true. Subsequent calls to next() return undefined.
</details>

Question 2: Two-Way Communication
JavaScript
function* logic() {
  const x = yield "Start";
  const y = yield x + 5;
  yield y * 2;
}

const it = logic();
console.log(it.next().value);
console.log(it.next(10).value);
console.log(it.next(20).value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: &quot;Start&quot;, 15, 40

Explanation: The first next() call starts the generator and stops at the first yield. The value passed to the second next(10) becomes the result of the first yield expression (assigned to x).
</details>

Question 3: The Initial Argument Trap
JavaScript
function* counter(val) {
  const step = yield val;
  yield val + step;
}

const c = counter(10);
console.log(c.next(5).value);
console.log(c.next(2).value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 10, 12

Explanation: The argument 5 in the first next(5) is discarded. There is no yield expression waiting to receive a value yet. The second next(2) assigns 2 to step.
</details>

Question 4: Generator Delegation (yield*)
JavaScript
function* inner() {
  yield 'A';
  return 'B';
}

function* outer() {
  const res = yield* inner();
  yield res;
}

const o = outer();
console.log(o.next().value);
console.log(o.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: &quot;A&quot;, &quot;B&quot;

Explanation: yield* delegates to the inner generator. Crucially, the return value of the inner generator (&quot;B&quot;) is returned to the res variable in the outer generator.
</details>

Question 5: Infinite Sequence with Interruption
JavaScript
function* infinite() {
  let i = 0;
  while(true) {
    if (yield i++) break;
  }
}

const f = infinite();
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next(true).done);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 0, 1, true

Explanation: When f.next(true) is called, the yield expression evaluates to true, triggering the break and finishing the generator.
</details>

Question 6: Try-Catch inside Generator
JavaScript
function* errorGen() {
  try {
    yield 1;
  } catch (e) {
    yield e;
  }
  yield 2;
}

const eg = errorGen();
console.log(eg.next().value);
console.log(eg.throw("Fail").value);
console.log(eg.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 1, &quot;Fail&quot;, 2

Explanation: eg.throw injects an error into the generator at the current yield point. The catch block handles it and yields &quot;Fail&quot;. Since it's caught, the generator continues to the next line.
</details>

Question 7: Multiple Iterators
JavaScript
function* range() {
  let i = 0;
  while(i < 2) yield i++;
}

const r1 = range();
const r2 = range();

console.log(r1.next().value);
console.log(r2.next().value);
console.log(r1.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 0, 0, 1

Explanation: Every time you call the generator function, it creates a new, independent iterator with its own execution context.
</details>

Question 8: The return() Method
JavaScript
function* cleanup() {
  try {
    yield "Working";
  } finally {
    yield "Cleaning up";
  }
}

const cl = cleanup();
console.log(cl.next().value);
console.log(cl.return("Done").value);
console.log(cl.next().done);
<details>
<summary><b>Output & Explanation</b></summary>
Output: &quot;Working&quot;, &quot;Cleaning up&quot;, true

Explanation: it.return() forces the generator to finish. However, if there is a finally block, it will execute that before closing.
</details>

Question 9: Generator vs. Local Variables
JavaScript
function* scopeTest() {
  let x = 10;
  yield x;
  x += 5;
  yield x;
}

const st = scopeTest();
console.log(st.next().value);
let x = 50; 
console.log(st.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 10, 15

Explanation: The x inside the generator is part of its own closure and is not affected by the x declared in the outer scope.
</details>

Question 10: Nested yield* Arithmetic
JavaScript
function* math(n) {
  yield n;
  yield* math(n + 1);
}

const m = math(1);
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 1, 2, 3

Explanation: This is a recursive generator. Each yield* opens a new sub-iterator.
</details>

Question 11: Return vs Yield in Loop
JavaScript
function* loop() {
  for (let i = 0; i < 5; i++) {
    if (i === 2) return i;
    yield i;
  }
}

const l = loop();
const results = [];
for (let val of l) {
  results.push(val);
}
console.log(results);
<details>
<summary><b>Output & Explanation</b></summary>
Output: [0, 1]

Explanation: for...of loops ignore the value in the { done: true, value: x } object. Since i === 2 returns, the generator finishes and 2 is never pushed to the array.
</details>

Question 12: Complex Two-Way Logic
JavaScript
function* calc() {
  const val = (yield 10) + (yield 20);
  yield val;
}

const ca = calc();
ca.next(); // Start
ca.next(5); // First yield result
console.log(ca.next(7).value); // Second yield result
<details>
<summary><b>Output & Explanation</b></summary>
Output: 12

Explanation: ca.next(5) makes yield 10 become 5. ca.next(7) makes yield 20 become 7. The next line yields 5 + 7.
</details>

Question 13: Yielding an Iterator
JavaScript
function* getIt() {
  yield [1, 2];
  yield* [3, 4];
}

const git = getIt();
console.log(git.next().value);
console.log(git.next().value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: [1, 2], 3

Explanation: The first yield returns the entire array. yield* iterates over the array and yields individual elements.
</details>

Question 14: Delayed Throw
JavaScript
function* delayed() {
  yield 1;
  yield 2;
}

const d = delayed();
d.next();
try {
  d.throw("Err");
} catch (e) {
  console.log(e);
}
console.log(d.next().done);
<details>
<summary><b>Output & Explanation</b></summary>
Output: &quot;Err&quot;, true

Explanation: If an error is thrown and not caught inside the generator, the generator dies (done: true) and the error propagates to the caller.
</details>

Question 15: Generator State Persistence
JavaScript
function* stateful() {
  let count = 0;
  while (true) {
    const reset = yield ++count;
    if (reset) count = 0;
  }
}

const s = stateful();
console.log(s.next().value);
console.log(s.next().value);
console.log(s.next(true).value);
<details>
<summary><b>Output & Explanation</b></summary>
Output: 1, 2, 1

Explanation: On the third call, reset becomes true, count is reset to 0, and the loop increments it back to 1 before the next yield.
</details>

*/
