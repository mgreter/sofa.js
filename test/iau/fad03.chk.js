(function (tests) {

	QUnit.module( "IAU", function ()
	{
		QUnit.test( "fad03", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = iauFad03(tests[i][0]);
				assert.close.percent(res, tests[i][1], 1e-6, JSON.stringify(tests[i][0]) + ' ([RV])');

			}
		});
	});

})(fad03_results);
