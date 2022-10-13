#include <stdio.h>

int max(int a, int b);

int main() {
  int x, y;
  char c;
  scanf("%d%d%c", &x, &y, &c);
  if (c != '\n') {
    printf("n/a");
  } else {
    printf("%d", max(x, y));
  }
}

int max(int a, int b) {
  if (a > b) {
    return a;
  } else if (a == b) {
    return a;
  } else {
    return b;
  }
}
