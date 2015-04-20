// console.log(require);
var test = require("tape");
var ns = require("../src/ns");

test("Load ns", function(t) {
	var
		prop,
		count = 0,

		expectedProperties = ["ns", "go"],
	$$;

	for(prop in ns) {
		t.ok(expectedProperties.indexOf(prop) >= 0, "ns exposes properties");
		count++;
	}

	t.equal(expectedProperties.length, count);

	t.end();
});