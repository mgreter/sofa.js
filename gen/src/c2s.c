/* Generate Test Data for c2s */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0[3];
  printf("var c2s_results = [\n");
  for (t0[0] = -0.04124432; t0[0] <= 0.04124432; t0[0] += 0.03093324) {
  for (t0[1] = -0.04124432; t0[1] <= 0.04124432; t0[1] += 0.03093324) {
  for (t0[2] = -0.04124432; t0[2] <= 0.04124432; t0[2] += 0.03093324) {

    double res0 = {0};
    double res1 = {0};
    printf("  [");
    exportV3(t0);
    printf(", ");
    eraC2s(t0, &res0, &res1);
    printf("%.28e", res0);
    printf(", ");
    printf("%.28e", res1);
    printf("  ],\n");

  }
  }
  }

  printf("];\n");
}
