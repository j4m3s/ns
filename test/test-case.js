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

test("Go callbacks executed in order", function(t) {
	/**
	 * Function that uses provided goPushFunc to push new callbacks into the go
	 * method, then executes the callback to assert the counter has been
	 * incremented the correct number of times.
	 */
	function invokeCallbacks(goPushFunc) {
		var
			counter = 0,
			func1 = function() {
				counter += 1;
			},
			func2 = function() {
				counter += 2;
			},
			func3 = function() {
				counter += 4;
			},
			cb,
		$$;

		cb = goPushFunc(func1, func2, func3);

		cb();

		t.equal(counter, 7, "Go callback invoke counter");
	}

	// Push into go one at a time.
	invokeCallbacks(function(func1, func2, func3) {
		ns.go(func1);
		ns.go(func2);
		return ns.go(func3);
	});

	// Push into go as an array.
	invokeCallbacks(function(func1, func2, func3) {
		return ns.go([func1, func2, func3]);
	});

	t.end();
});

test("Namespace attaches to window, no nesting", function(t) {
	var
		msg = "This is the message",
		el = ns.ns("Base", {msg: msg}, {}),
	$$;

	t.equal(el.Base.msg, msg);
	t.end();
});

test("Namespace attaches to window, deep nesting", function(t) {
	var
		msg = "This is the nested message",
		fullNamespace = "Base.One.Two.Three.DeepObject",
		el = ns.ns(fullNamespace, {msg: msg}, {}),
	$$;

	t.equal(el.Base.One.Two.Three.DeepObject.msg, msg);
	t.end();
});