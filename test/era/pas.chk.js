(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "pas", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraPas(tests[i][0], tests[i][1], tests[i][2], tests[i][3]);
				assert.close.percent(res, tests[i][4], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) + ' ([RV])');

			}
		});
	});

})(pas_results);
