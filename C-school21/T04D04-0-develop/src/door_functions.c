#include <stdio.h>
#include <math.h>

double Verziera(double x);
double Lemniscate(double x);
double hyperbola(double x);
void VerzieraGraph();
void LemniscateGraph();
void hyperbolaGraph();

int main() {
    double pi = -3.1415927;

    for (int i = 1; i <= 42; i++) {
        if (i == 42) {
            if (isnan(Lemniscate(pi))) {
                printf("%lf | %.7lf | - | %.7lf", pi, Verziera(pi), hyperbola(pi));
            } else {
                printf("%lf | %.7lf | %.7lf | %.7lf", pi, Verziera(pi), Lemniscate(pi), hyperbola(pi));
            }
        } else {
            if (isnan(Lemniscate(pi))) {
                printf("%lf | %.7lf | - | %.7lf\n", pi, Verziera(pi), hyperbola(pi));
            } else {
                printf("%lf | %.7lf | %.7lf | %.7lf\n", pi, Verziera(pi), Lemniscate(pi), hyperbola(pi));
            }
        }
        pi += 0.1532480;
    }
}

double Verziera(double x) {
    return pow(1, 3) / (pow(1, 3) + pow(x, 2));
}

double Lemniscate(double x) {
    return sqrt(sqrt(1 + 4 * pow(x, 2) * 1) - pow(x, 2) - 1);
}

double hyperbola(double x) {
    return 1/pow(x, 2);
}

// ./a.out >> ../data/door_data.txt
