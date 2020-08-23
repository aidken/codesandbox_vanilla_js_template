const funcs = require("../src/functions.js");

test("Test function hello 1.", function () {
  expect(funcs.hello("people")).toBe("Hello, people!");
});
