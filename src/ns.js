;(function(undefined) {

var
	goQueue = [],
$$;

/**
 * Called when DOMContentLoaded event fires, calling each function in the
 * goQueue array. This callback may be attached multiple times, so in order to
 * ensure only firing each callback once, callbacks are removed as soon as they
 * execute.
 */
function goCallback() {

}

/**
 * Define a module of JavaScript using dot-separated namespaces, initialising
 * nested namespaces automatically with the provided attachment function.
 *
 * @param {String} namespace A dot-separated namespace to house the attachment
 * @param {Function|Object} attachment The object to attach to the namespace
 */
function ns(namespace, attachment) {

}

/**
 * Helper function that calls a function or set of functions when the DOM
 * content completely loads A.K.A. the DOM "Ready" event.
 *
 * @param {function|array} callback Single function or array of functions to
 * execute when DOM has loaded
 */
function go(callback) {
	var
		callbackArray,
		i,
	$$;

	// Enforce callbackArray is an Array.
	if(callback instanceof Array) {
		callbackArray = callback;
	}
	else {
		callbackArray = [callback];
	}

	for(i in callbackArray) {
		if(!callbackArray.hasOwnProperty(i)) {
			continue;
		}

		goQueue.push(callbackArray[i]);
	}

	document.addEventListener("DOMContentLoaded", goCallback);
}

// Attach the two main functions to global scope.
window.ns = ns;
window.go = go;

})();