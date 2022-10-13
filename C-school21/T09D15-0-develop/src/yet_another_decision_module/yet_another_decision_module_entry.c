#include <stdio.h>
#include <stdlib.h>
#include "../data_libs/data_io.h"
#include "decision.h"

int main() {
    double *data;
    int n;

    if (scanf("%d", &n) != 1 || n <= 0) {
        printf("n/a");
        exit(0);
    }

    data = (double*)malloc(n * sizeof(double));

    input(data, n);

    if (make_decision(data, n))
        printf("YES");
    else
        printf("NO");
    return 0;
}
