(function (tests) {

	QUnit.module( "IAU", function ()
	{
		QUnit.test( "atco13", function( assert )
		{
			for (var i = 0; i < tests.length; i += 1)
			{
				var res = iauAtco13(tests[i][0], tests[i][1], tests[i][2], tests[i][3], tests[i][4], tests[i][5], tests[i][6], tests[i][7], tests[i][8], tests[i][9], tests[i][10], tests[i][11], tests[i][12], tests[i][13], tests[i][14], tests[i][15], tests[i][16], tests[i][17]);
				assert.equal(res[0], tests[i][18], JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' ([RV])');
				assert.close.percent(res[1], tests[i][19], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (aob)');
				assert.close.percent(res[2], tests[i][20], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (zob)');
				assert.close.percent(res[3], tests[i][21], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (hob)');
				assert.close.percent(res[4], tests[i][22], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (dob)');
				assert.close.percent(res[5], tests[i][23], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (rob)');
				assert.close.percent(res[6], tests[i][24], 1e-6, JSON.stringify(tests[i][0]) +', '+ JSON.stringify(tests[i][1]) +', '+ JSON.stringify(tests[i][2]) +', '+ JSON.stringify(tests[i][3]) +', '+ JSON.stringify(tests[i][4]) +', '+ JSON.stringify(tests[i][5]) +', '+ JSON.stringify(tests[i][6]) +', '+ JSON.stringify(tests[i][7]) +', '+ JSON.stringify(tests[i][8]) +', '+ JSON.stringify(tests[i][9]) +', '+ JSON.stringify(tests[i][10]) +', '+ JSON.stringify(tests[i][11]) +', '+ JSON.stringify(tests[i][12]) +', '+ JSON.stringify(tests[i][13]) +', '+ JSON.stringify(tests[i][14]) +', '+ JSON.stringify(tests[i][15]) +', '+ JSON.stringify(tests[i][16]) +', '+ JSON.stringify(tests[i][17]) + ' (eo)');

			}
		});
	});

})(atco13_results);
