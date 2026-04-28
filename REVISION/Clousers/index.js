/**
 * CLOSURES IN JAVASCRIPT
 * =====================
 *
 * @description
 * A closure is formed when an inner function retains access to variables from
 * its outer function's scope — even after the outer function has returned.
 * JavaScript achieves this through lexical scoping: a function remembers the
 * environment where it was *defined*, not where it's *called*.
 *
 * @section What is a Closure?
 * A closure is a function that remembers the variables from its outer (enclosing)
 * scope — even after that outer function has finished executing. The inner
 * function "closes over" those variables.
 *
 * @section Key Concepts
 * - **Lexical Scope**: Functions look up variables where they were defined,
 *   not where they are called.
 * - **Persistent Memory**: Closed-over variables stay alive as long as the
 *   inner function exists.
 * - **Private State**: Variables inside the outer function are not accessible
 *   from outside — only via the returned inner function.
 *
 * @section How it Behaves — Key Rules
 * 1. **Live reference, not a copy** — the closure holds a reference to the
 *    variable. If the variable changes, the closure sees the new value.
 * 2. **Shared state** — multiple closures from the same outer function share
 *    the same variables. One closure changing a value affects all others.
 * 3. **`var` vs `let` in loops** — `var` gives all loop iterations the *same*
 *    binding (classic bug), while `let` gives each iteration its own fresh binding.
 *
 * @section Why Use Closures?
 * - **Private/encapsulated state** — simulate private variables (no `class` needed)
 * - **Function factories** — create specialised functions from a generic one
 *   (e.g., `multiplier(2)` → `double`)
 * - **Memoization** — cache expensive results using a private `cache` object
 * - **Event handlers** — capture context at attachment time without polluting
 *   global scope
 * - **Module pattern** — pre-ES6 way to build self-contained modules with
 *   private internals
 *
 * @see {@link https://claude.ai/share/2f1e9766-9f0a-44bb-a383-2c902c687e3c}
 *      For more interactive examples and detailed explanations
 */

/**
 * Simple Closure Example
 * Demonstrates how an inner function remembers variables from its outer scope
 *
 * @example
 * const myClosure = outer();
 * myClosure(); // Outputs: "I am from outer!"
 */
function outer() {
  let secret = "I am from outer!";

  // Inner function closes over `secret`
  function inner() {
    console.log(secret); // remembers secret
  }

  return inner;
}

// Usage
const myClosure = outer(); // outer() is done executing
myClosure(); // Still prints "I am from outer!"
