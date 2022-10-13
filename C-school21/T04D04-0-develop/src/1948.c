#include <stdio.h>
#include <math.h>

int isPrime(int num);
int divideBool(int a, int b);

int main() {
    float a;
    char c;
    scanf("%f%c", &a, &c);
    int a_log = a;

    if (c != '\n' || a_log != a || a == 0 || a == 1) {
        printf("n/a");
    } else {
        if (a < 0) {
            a = a * -1;
        }

        for (int i = a; i > 0; i--) {
            if (isPrime(i)) {
                if (divideBool(a, i)) {
                    printf("%d", i);
                    break;
                }
            }
        }
    }
    return 0;
}

// Если число простое, то
// Проверяем, делится ли оно без остатка на ответ пользователя
// Если делится, то выводим его


// Является ли число простым. Если да, то возвращаем true, иначе возвращаем false
int isPrime(int num) {  // только положительные значения
    int count = 0;
    for (int i = 1; i <= num; i++) {
        if (divideBool(num, i)) {
            count++;
        }
    }
    if (count == 2) {
        return 1;  // true
    } else {
        return 0;  // false
    }
}

// Сначала нужно проверить, делится ли число без остатка вызовом divideBool
// Если делится, вызываем divideInt

// Если число делится без остатка, возвращаем true, иначе возвращаем false
int divideBool(int a, int b) {
    int res = 0;
    int x = a;

    while (x >= b) {
        res++;
        x -= b;
    }

    if (x == 0) {
        return 1;  // true
    } else {
        return 0;  // false
    }
}
