#include <stdio.h>
#define NMAX 10

int input(int *arr, int *n);
void squaring(int *arr, int n);
void output(int *arr, int n);

int main() {
    int n, data[NMAX];

    if (input(&data[0], &n)) {
        squaring(&data[0], n);
        output(&data[0], n);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int *arr, int *n) {
    int no_error = 1;
    no_error *= scanf("%d", n);

    if (*n > NMAX || *n <= 0) {
        no_error = 0;
        return no_error;
    }

    for (int *p = arr;  p - arr < *n; p++) {
        if (p - arr + 1 == *n) {
            char c;
            scanf("%d%c", p, &c);
            if (c != '\n') {
                no_error = 0;
                return no_error;
            }
        } else {
            no_error *= scanf("%d", p);
        }
    }

    return no_error;
}

void squaring(int *arr, int n) {
    for (int i = 0;  i < n; i++) {
        arr[i] *= arr[i];
    }
}

void output(int *arr, int n) {
    for (int i = 0;  i < n; i++) {
        if (n == (i+1)) {
            printf("%d", arr[i]);
        } else {
            printf("%d ", arr[i]);
        }
    }
}
