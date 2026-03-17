let map = new Map();

// 1. set() used to add value in map

let user = { name: "Vatshal" };

map.set("name", "Mantu");
map.set("name", "satyam");
map.set("name", "ashish"); //it update the value of same key
map.set(1, "Number Key");
map.set(true, "Boolean Key");
map.set(user, "Object Key");

console.log(map);

// 2. get() used to add value from map

console.log(`${map.get(true)}->${map.get(1)}->${map.get("name")}`);

// 3. has() used to check key in map
console.log(map.has("name"));

// 4. delete() used to delete key from map
map.delete(true);
console.log(map);

// 5. size() used to return the size of map
console.log(map.size);

// 6. clear() used to clear whole map
let mp = new Map();
mp.set(2, "abc");
mp.set(
  true,
  (user = {
    aame: "abc",
  }),
);
console.log(mp);
mp.clear();
console.log(mp);

// 7. ittrating
console.log("Ittrating Start");

// ittrating with key

for (let key of map.keys()) {
  console.log(key);
}

// ittrating with Value

for (let value of map.values()) {
  console.log(value);
}

// ittrating with both key, value together
map.forEach((value, key) => {
  console.log(key, value);
});

for (let [key, value] of map) {
  console.log(key, value);
}

console.log("Ittrating End");

// convert map <--> object

// obj -> Map conversion

let obj = {
  name: "mantu",
  dept: "ReactJS",
};

let objMap = new Map(Object.entries(obj));

console.log(objMap);

// Map -> obj conversion

let mapObj = Object.fromEntries(objMap);

console.log(mapObj);
