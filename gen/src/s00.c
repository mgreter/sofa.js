/* Generate Test Data for s00 */

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
  unsigned long long modulo = 0;
  printf("var s00_results = [\n");
  for (t0 = 1955545; t0 <= 2947545; t0 += 124000) {
    for (t1 = 1955545; t1 <= 2947545; t1 += 124000) {
      for (t2 = -12; t2 <= 12; t2 += 3.75) {
        for (t3 = -28; t3 <= 28; t3 += 21) {


          modulo = modulo > 4
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
          printf("%.28e", eraS00(t0, t1, t2, t3));
          printf("  ],\n");

        }
      }
    }
  }

  printf("];\n");
}
