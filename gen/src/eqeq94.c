/* Generate Test Data for eqeq94 */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  double t1;
  printf("var eqeq94_results = [\n");
  for (t0 = 1955545; t0 <= 2947545; t0 += 124000) {
    for (t1 = 1955545; t1 <= 2947545; t1 += 124000) {


      printf("  [");
      printf("%.28e", t0);
      printf(", ");
      printf("%.28e", t1);
      printf(", ");
      printf("%.28e", eraEqeq94(t0, t1));
      printf("  ],\n");

    }
  }

  printf("];\n");
}
