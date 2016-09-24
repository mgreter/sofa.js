/* Generate Test Data for ry */

#include <stdio.h>
#include "sofa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  printf("var ry_results = [\n");
  for (t0 = -12; t0 <= 12; t0 += 3.75) {

    double res0[3][3] = {0};
    printf("  [");
    printf("%.28e", t0);
    printf(", ");
    iauRy(t0, res0);
    exportMAT33(res0);
    printf("  ],\n");

  }

  printf("];\n");
}
