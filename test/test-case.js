"use strict";
var
	test = require("tape"),
	ns = require("../src/ns"),
$$;

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

test("Go callbacks executed in order, array style", function(t) {
	var
		counter = 0,
		func1 = function() {
			counter += 1;
		},
		func2 = function() {
			counter += 2;
		},
		cb,
	$$;

	// Attach func1 and func2 to go function at the same time (array syntax).
	cb = ns.go([func1, func2]);

	// Trigger goCallback.
	cb();

	t.equal(counter, 3, "Go callback invoke counter");

	t.end();
});