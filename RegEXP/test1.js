/*TEST METHOD IN RegExp returns a boolean value telling you whether
 a string contains a match in the patterns in the expression */
console.log(/abc/.test("abcd"));
console.log(/abc/.test("abxdc"));
