#include <stdio.h>
#include <math.h>

int main() {
  float x, y;
  if (scanf("%f%f", &x, &y) != 2) {
    printf("n/a");
  } else {
    if ((pow(x, 2) + pow(y, 2)) <= 25) {
      printf("GOTCHA");
    } else {
      printf("MISS");
    }
  }
  return 0;
}
