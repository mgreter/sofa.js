(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "fame03", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraFame03(tests[i][0]);
				assert.close.percent(res, tests[i][1], 1e-6, JSON.stringify(tests[i][0]) + ' ([RV])');

			}
		});
	});

})(fame03_results);
