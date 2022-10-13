#include <stdio.h>
#include <stdlib.h>
#define NMAX 10

int input(int** arr, int* n);
void sort(int* arr, int n);
void output(int* arr, int n);

int main() {
    int *data, n;

    if (input(&data, &n)) {
        sort(data, n);
        output(data, n);
        free(data);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int **arr, int* n) {
    int no_error = 1;

    no_error *= scanf("%d", n);

    if (*n > 10 || *n <= 0) {
        printf("n/a");
        exit(0);
    }

    *arr = (int*)malloc(*n * sizeof(int));

    for (int *p = *arr;  p - *arr < *n; p++) {
        if (p - *arr + 1 == *n) {
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

void sort(int *arr, int n) {
    for (int i = 0;  i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
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
