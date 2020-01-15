/* Generate Test Data for atioq */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  double t1;
  eraASTROM t2;
  int ti2;;
  printf("var atioq_results = [\n");
  for (t0 = -12; t0 <= 12; t0 += 3.75) {
    for (t1 = -12; t1 <= 12; t1 += 3.75) {
      for (ti2 = 0; ti2 <= 3; ti2 += 1) {

        double res0 = {0};
        double res1 = {0};
        double res2 = {0};
        double res3 = {0};
        double res4 = {0};
        t2 = astroms[ti2];
        printf("  [");
        printf("%.28e", t0);
        printf(", ");
        printf("%.28e", t1);
        printf(", ");
        exportASTROM(t2);
        printf(", ");
        eraAtioq(t0, t1, &t2, &res0, &res1, &res2, &res3, &res4);
        printf("%.28e", res0);
        printf(", ");
        printf("%.28e", res1);
        printf(", ");
        printf("%.28e", res2);
        printf(", ");
        printf("%.28e", res3);
        printf(", ");
        printf("%.28e", res4);
        printf("  ],\n");

      }
    }
  }

  printf("];\n");
}
