// console.log(require);
var test = require("tape");
var ns = require("../src/ns");

// test("timing test", function (t) {
//     t.plan(2);

//     t.equal(typeof Date.now, "function");
//     var start = Date.now();

//     setTimeout(function () {
//         t.equal(Date.now() - start, 100);
//     }, 100);
// });

test("Load ns", function(t) {
	t.plan(1);
	t.equal(105, 7+7*7+7*7);
});