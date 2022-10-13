#include <stdio.h>
#define NMAX 10

int input(int *arr, int *n);

int max(int *arr, int n);
int min(int *arr, int n);
double mean(int *arr, int n);
double variance(int *a, int n);
void output(int *arr, int n);
void output_result(int max_v,
                   int min_v,
                   double mean_v,
                   double variance_v);

int main() {
    int n, data[NMAX];

    if (input(&data[0], &n)) {
        output(&data[0], n);
        output_result(max(&data[0], n),
                  min(&data[0], n),
                  mean(&data[0], n),
                  variance(&data[0], n));
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
    int max = arr[0];
    for (int i = 0;  i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int min(int *arr, int n) {
    int min = arr[0];
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

void output(int *arr, int n) {
    for (int i = 0;  i < n; i++) {
        if (n == (i+1)) {
            printf("%d\n", arr[i]);
        } else {
            printf("%d ", arr[i]);
        }
    }
}

void output_result(int max_v, int min_v, double mean_v, double variance_v) {
    printf("%d %d %lf %lf", max_v, min_v, mean_v, variance_v);
}
