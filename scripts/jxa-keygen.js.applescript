(function() // JXA output handler.
{
	var jxa = Library('websharks-osa/libraries/jxa');
	var args = new (eval(jxa.pkg('args')))(jxa);
	var require = eval(jxa.pkg('require'));
	var enc = require(jxa, 'utils-enc');

	return enc.keyGen.apply(this, args.get());
})();