#include "data_stat.h"
double max(double *data, int n) {
    double max = data[0];
    for (int i = 0;  i < n; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

double min(double *data, int n) {
    double min = data[0];
    for (int i = 0;  i < n; i++) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}

double mean(double *data, int n) {
    int max1 = max(data, n);
    int min1 = min(data, n);

    return (max1+min1)/2.;
}

double variance(double *data, int n) {
    double mean1 = mean(data, n);
    double result = 0.0;

    for (int i = 0;  i < n; i++) {
        result = result + ((data[i]*1.0 - mean1)*(data[i]*1.0 - mean1)/(n * 1.0));
    }
    return result;
}
