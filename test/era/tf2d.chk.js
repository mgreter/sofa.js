(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "tf2d", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraTf2d(tests[i][0], tests[i][1], tests[i][2], tests[i][3]);
				assert.equal(res[0], tests[i][4], JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) + ' ([RV])');
				assert.close.percent(res[1], tests[i][5], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) + ' (days)');

			}
		});
	});

})(tf2d_results);
