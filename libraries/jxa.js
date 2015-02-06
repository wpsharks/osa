/* Package
 -------------------------------------------------------------------- */

this.pkg = function(pkg)
{
	pkg = String(pkg ? pkg : '');
	pkg = this[pkg].toString();
	return '(' + pkg + ')';
};

/* Arguments Package
 -------------------------------------------------------------------- */

this.args = function(jxa)
{
	this.get = function(slice)
	{
		if(typeof slice !== 'number')
			slice = 4; // First four are processing related.
		return $.NSProcessInfo.processInfo.arguments.js.slice(slice);
	};
};

/* Require Package
 -------------------------------------------------------------------- */

this.require = function(jxa, path, sourceOnly)
{
	if(typeof jxa !== 'function' && typeof jxa !== 'object')
		return null; // Not possible.

	path = String(path ? path : '');
	if(path.indexOf('source:') === 0)
		path = path.replace(/^source\:/, ''),
			sourceOnly = true;

	if(!path) // The path is empty now?
		return null; // Not possible.

	var homeDir = $('~').stringByExpandingTildeInPath.js,
		dir = homeDir + '/library/script libraries/websharks-osa/libraries',
		absPath = path.indexOf('/') === 0 ? path : dir + '/' + path + '.js',
		fileContents = $.NSFileManager.defaultManager.contentsAtPath(absPath),
		source = $.NSString.alloc.initWithDataEncoding(fileContents, $.NSUTF8StringEncoding).js,
		module = {jxa: jxa, parent: this, exports: {}};

	if(sourceOnly) // Return source only?
		return source; // Source code.

	eval(source); // Eval source code.

	return module.exports;
};