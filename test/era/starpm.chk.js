(function (tests) {

	QUnit.module( "ERFA", function ()
	{
		QUnit.test( "starpm", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = eraStarpm(tests[i][0], tests[i][1], tests[i][2], tests[i][3], tests[i][4], tests[i][5], tests[i][6], tests[i][7], tests[i][8], tests[i][9]);
				assert.equal(res[0], tests[i][10], JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' ([RV])');
				assert.close.percent(res[1], tests[i][11], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (ra2)');
				assert.close.percent(res[2], tests[i][12], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (dec2)');
				assert.close.percent(res[3], tests[i][13], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (pmr2)');
				assert.close.percent(res[4], tests[i][14], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (pmd2)');
				assert.close.percent(res[5], tests[i][15], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (px2)');
				assert.close.percent(res[6], tests[i][16], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) + ' (rv2)');

			}
		});
	});

})(starpm_results);
