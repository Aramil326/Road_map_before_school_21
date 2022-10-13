#include <stdio.h>
#include <math.h>
#define NMAX 30

int input(int *arr, int *n);
int max(int *arr, int n);
int min(int *arr, int n);
double mean(int *arr, int n);
double variance(int *arr, int n);
void search(int *arr, int n);


int main() {
    int n, data[NMAX];

    if (input(&data[0], &n)) {
        search(&data[0], n);
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

int max(int *arr, int n) {
    int max = 0;
    for (int i = 0;  i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int min(int *arr, int n) {
    int min = arr[1];
    for (int i = 0;  i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

double mean(int *arr, int n) {
    int max1 = max(arr, n);
    int min1 = min(arr, n);

    return (max1+min1)/2.;
}

double variance(int *arr, int n) {
    double mean1 = mean(arr, n);
    double result = 0.0;

    for (int i = 0;  i < n; i++) {
        result = result + ((arr[i]*1.0 - mean1)*(arr[i]*1.0 - mean1)/(n * 1.0));
    }
    return result;
}

void search(int *arr, int n) {
    double mean1 = mean(arr, n);
    double variance1 = variance(arr, n);
    int is_res = 1;
    
    for (int i = 0;  i < n; i++) {
        if (arr[i] % 2 == 0 && arr[i] >= mean1 && arr[i] <= (mean1 + 3 * sqrt(variance1))) {
            printf("%d", arr[i]);
            is_res = 0;
            break;
        }
    }

    if (is_res) {
        printf("0");
    }
}
