/* Generate Test Data for starpv */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  double t0;
  double t1;
  double t2;
  double t3;
  double t4;
  double t5;
  unsigned long long modulo = 0;
  printf("var starpv_results = [\n");
  for (t0 = -12; t0 <= 12; t0 += 3.75) {
    for (t1 = -12; t1 <= 12; t1 += 3.75) {
      for (t2 = -28; t2 <= 28; t2 += 21) {
        for (t3 = -28; t3 <= 28; t3 += 21) {
          for (t4 = -28; t4 <= 28; t4 += 21) {
            for (t5 = -28; t5 <= 28; t5 += 21) {

              double res0[2][3] = {0};
              modulo = modulo > 202
                ? 0 : modulo + 1;
              if (modulo != 1) continue;
              printf("  [");
              printf("%.28e", t0);
              printf(", ");
              printf("%.28e", t1);
              printf(", ");
              printf("%.28e", t2);
              printf(", ");
              printf("%.28e", t3);
              printf(", ");
              printf("%.28e", t4);
              printf(", ");
              printf("%.28e", t5);
              printf(", ");
              printf("%d", eraStarpv(t0, t1, t2, t3, t4, t5, res0));
              printf(", ");
              exportPV3(res0);
              printf("  ],\n");

            }
          }
        }
      }
    }
  }

  printf("];\n");
}
