/* Generate Test Data for pnm00a */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  double t1;
  printf("var pnm00a_results = [\n");
  for (t0 = 1955545; t0 <= 2947545; t0 += 124000) {
    for (t1 = 1955545; t1 <= 2947545; t1 += 124000) {

      double res0[3][3] = {0};
      printf("  [");
      printf("%.28e", t0);
      printf(", ");
      printf("%.28e", t1);
      printf(", ");
      eraPnm00a(t0, t1, res0);
      exportMAT33(res0);
      printf("  ],\n");

    }
  }

  printf("];\n");
}
