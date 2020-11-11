// setTimeout(() => console.log("Trick"), 2000);
var hello = [
  {
    ogam: {
      name: "Joseph",
      greet: "how are you",
    },
  },
];
var ls = hello.map((value) =>
  console.log(`${value.ogam.name}, ${value.ogam.greet}?`)
);
