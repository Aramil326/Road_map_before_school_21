#include <stdio.h>

int fibonacci(int num);

int main() {
    int num;
    char c;
    scanf("%d%c", &num, &c);
    if (c != '\n' || num <= 0) {
        printf("n/a");
    } else {
        printf("%d", fibonacci(num));
        return 0;
    }
}

int fibonacci(int num) {
    if (num == 1 || num == 2) {
        return 1;
    }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
