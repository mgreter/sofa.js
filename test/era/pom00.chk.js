(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "pom00", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraPom00(tests[i][0], tests[i][1], tests[i][2]);
				assert.MAT33(res, tests[i][3], 1e-8, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) + ' (rpom)');

			}
		});
	});

})(pom00_results);
