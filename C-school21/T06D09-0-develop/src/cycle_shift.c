#include <stdio.h>
#define NMAX 10

int input(int *old_arr, int* n, int* c);
void shift(int n, int* old_arr, int* new_arr, int c_ter);
void output(int* new_arr, int n);

int main() {
    int n, c_ter, old_arr[NMAX], new_arr[NMAX];

    if (input(&old_arr[0], &n, &c_ter)) {
        shift(n, &old_arr[0], &new_arr[0], c_ter);
        output(&new_arr[0], n);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int *old_arr, int* n, int* c_ter) {
    int no_error = 1;
    no_error *= scanf("%d", n);

    if (*n > 10 || *n <= 0) {
        printf("n/a");
        exit(0);
    }

    for (int *p = old_arr;  p - old_arr < *n; p++) {
        if (p - old_arr + 1 == *n) {
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

    char c;
    scanf("%d%c", c_ter, &c);
    if (c != '\n') {
        printf("n/a");
        exit(0);
    }

    while (*c_ter > *n) {
        *c_ter -= *n;
    }

    return no_error;
}

void shift(int n, int* old_arr, int* new_arr, int c_ter) {
    // n - размер старого массива
    int temp1[NMAX];
    int temp2[NMAX];

    if (c_ter >= 0) {
        for (int i = 0; i < c_ter; i++) {
            temp1[i] = old_arr[i];
        }

        for (int i = c_ter; i < n; i++) {
            temp2[i-c_ter] = old_arr[i];
        }

        for (int i = 0; i < n - c_ter; i++) {
            new_arr[i] = temp2[i];
        }

        for (int i = n - c_ter; i < n; i++) {
            new_arr[i] = temp1[i - (n - c_ter)];
        }
    } else {
        c_ter *= -1;

        for (int i = 0; i < n - c_ter; i++) {
            temp1[i] = old_arr[i];
        }

        for (int i = n - c_ter; i < n; i++) {
            temp2[i-(n - c_ter)] = old_arr[i];
        }

        for (int i = 0; i < c_ter; i++) {
            new_arr[i] = temp2[i];
        }

        for (int i = c_ter; i < n; i++) {
            new_arr[i] = temp1[i - c_ter];
        }
    }
}

void output(int* new_arr, int n) {
    for (int i = 0;  i < n; i++) {
        if (i + 1 == n) {
            printf("%d", new_arr[i]);
        } else {
            printf("%d ", new_arr[i]);
        }
    }
}
