// Aliases for the rather verbose methods on ES5

var descriptor  = Object.getOwnPropertyDescriptor
  , properties  = Object.getOwnPropertyNames
  , define_prop = Object.defineProperty;

// (target:Object, source:Object) → Object
// Copies properties from `source' to `target'
function extend(target, source) {
    properties(source).forEach(function(key) {
        define_prop(target, key, descriptor(source, key)) })

    return target;
}

var DownloadableMovie = function (title, year) {
    
	extend(this, new Movie(title, year));

	this.download = function() {
		console.log('    Downloading: '+ this.get('title') + ' (' + this.get('year') + ')');
	}
}
