#include <stdio.h>

int sum(int a, int b);
int diff(int a, int b);
int mul(int a, int b);
int div(int a, int b);

int main() {
  int x, y;
  char c;
  scanf("%d%d%c", &x, &y, &c);
  if (c != '\n') {
    printf("n/a");
  } else {
    if (y == 0) {
      printf("%d %d %d n/a", sum(x, y), diff(x, y), mul(x, y));
    } else {
      printf("%d %d %d %d", sum(x, y), diff(x, y), mul(x, y), div(x, y));
    }
  }
}

int sum(int a, int b) {
      eturn a + b;
}

int diff(int a, int b) {
  return a - b;
}

int mul(int a, int b) {
  return a * b;
}

int div(int a, int b) {
  return a / b;
}
