#include <stdio.h>
#define NMAX 10

int input(int *arr);
void sort(int *arr;);
void output(int *arr);

int main() {
    int data[NMAX];

    if (input(&data[0])) {
        sort(&data[0]);
        output(&data[0]);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int *arr) {
    int no_error = 1;

    for (int *p = arr;  p - arr < NMAX; p++) {
        if (p - arr + 1 == NMAX) {
            char c;
            scanf("%d%c", p, &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
        } else {
            no_error *= scanf("%d", p);
        }
    }

    return no_error;
}

void sort(int *arr) {
    for (int i = 0;  i < NMAX - 1; i++) {
        for (int j = i + 1; j < NMAX; j++) {
            if (arr[i] > arr[j]) {
                int x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
    }
}

void output(int *arr) {
    for (int i = 0;  i < NMAX; i++) {
        if (NMAX == (i+1)) {
            printf("%d", arr[i]);
        } else {
            printf("%d ", arr[i]);
        }
    }
}
