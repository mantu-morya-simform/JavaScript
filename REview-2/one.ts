type UniqueProps<A, B> = {
  [K in Exclude<keyof A, B>]: A[K];
};

type A = { a: number; b: string };

type B = { b: string; c: boolean };

type Result = UniqueProps<A, B>; //  {a: number; c: Boolean; }

const Fruits = {
  apple: 50,
  orange: 20,
  banana: 10,
};

// Return the fruit price of fruit , based upon the given fruit name
const getFruitPrice = (fruitName: keyof typeof Fruits) => {
  // implement the logic here.
  return Fruits[fruitName];
};

getFruitPrice("apple");
