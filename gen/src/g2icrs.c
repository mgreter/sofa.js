/* Generate Test Data for g2icrs */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  double t1;
  printf("var g2icrs_results = [\n");
  for (t0 = -12; t0 <= 12; t0 += 3.75) {
    for (t1 = -12; t1 <= 12; t1 += 3.75) {

      double res0 = {0};
      double res1 = {0};
      printf("  [");
      printf("%.28e", t0);
      printf(", ");
      printf("%.28e", t1);
      printf(", ");
      eraG2icrs(t0, t1, &res0, &res1);
      printf("%.28e", res0);
      printf(", ");
      printf("%.28e", res1);
      printf("  ],\n");

    }
  }

  printf("];\n");
}
