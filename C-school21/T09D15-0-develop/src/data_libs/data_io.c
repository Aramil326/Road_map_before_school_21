#include <stdio.h>
#include <stdlib.h>
#include "data_io.h"

void input(double *data, int n) {
    int no_error = 1;

    for (double *p = data;  p - data < n; p++) {
        if (p - data + 1 == n) {
            char c;
            scanf("%lf%c", p, &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
        } else {
            no_error *= scanf("%lf", p);
        }
    }

    if (!no_error) {
        printf("n/a");
        exit(0);
    }
}

void output(double *data, int n) {
    for (int i = 0;  i < n; i++) {
        if (n == (i+1)) {
            printf("%.2lf\n", data[i]);
        } else {
            printf("%.2lf ", data[i]);
        }
    }
}
