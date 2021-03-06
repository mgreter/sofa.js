(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "apci13", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraApci13(tests[i][0], tests[i][1]);
				assert.ASTROM(res[0], tests[i][2], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) + ' (astrom)');
				assert.close.percent(res[1], tests[i][3], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) + ' (eo)');

			}
		});
	});

})(apci13_results);
