/* Generate Test Data for tf2d */

#include <stdio.h>
#include "erfa.h"
#include "config.h"
#include <string.h>

int main()
{
  char t0;
  int t1;
  int t2;
  int t3;
  unsigned long long modulo = 0;
  printf("var tf2d_results = [\n");
  for (t0 = '+'; t0 <= '-'; t0 += '-' - '+') {
    for (t1 = -96; t1 <= 96; t1 += 32) {
      for (t2 = -96; t2 <= 96; t2 += 32) {
        for (t3 = -96; t3 <= 96; t3 += 32) {

          double res0 = {0};
          modulo = modulo > 4
            ? 0 : modulo + 1;
          if (modulo != 1) continue;
          printf("  [");
          printf("'%c'", t0);
          printf(", ");
          printf("%d", t1);
          printf(", ");
          printf("%d", t2);
          printf(", ");
          printf("%d", t3);
          printf(", ");
          printf("%d", eraTf2d(t0, t1, t2, t3, &res0));
          printf(", ");
          printf("%.28e", res0);
          printf("  ],\n");

        }
      }
    }
  }

  printf("];\n");
}
