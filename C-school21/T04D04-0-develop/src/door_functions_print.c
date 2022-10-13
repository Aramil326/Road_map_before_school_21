#include <stdio.h>
#include <math.h>

double Verziera(double x);
double Lemniscate(double x);
double hyperbola(double x);
void VerzieraGraph();
void LemniscateGraph();
void hyperbolaGraph();

int main() {
    VerzieraGraph();
    printf("\n\n");
    LemniscateGraph();
    printf("\n\n");
    hyperbolaGraph();
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

void VerzieraGraph() {
    int  r, c;
    double pi = -3.1415927, rows = 21.0, columns = 42.0;
    for ( c = 0; c < columns; ++c ) {
        for ( r = 0; r < rows; ++r ) {
                if (isnan(Verziera(pi))) {
                    printf(" ");
                } else {
                    if ((int)(Verziera(pi)*10) == r) {
                        printf("*");
                    } else {
                        printf(" ");
                    }
                }
        }
        printf("\n");
        pi += 0.1532480;
    }
}

void LemniscateGraph() {
    int  r, c;
    double pi = -3.1415927, rows = 21.0, columns = 42.0;
    for ( c = 0; c < columns; ++c ) {
        for ( r = 0; r < rows; ++r ) {
                if (isnan(Lemniscate(pi))) {
                    printf(" ");
                } else {
                    if ((int)(Lemniscate(pi)*10) == r) {
                        printf("*");
                    } else {
                        printf(" ");
                    }
                }
        }
        printf("\n");
        pi += 0.1532480;
    }
}

void hyperbolaGraph() {
    int  r, c;
    double pi = -3.1415927, rows = 21.0, columns = 42.0;

    for ( c = 0; c < columns; ++c ) {
        for ( r = 0; r < rows; ++r ) {
                if ((int)(hyperbola(pi)*10) == r) {
                    printf("*");
                } else {
                    printf(" ");
                }
        }
        printf("\n");
        pi += 0.1532480;
    }
}
// ./a.out >> ../data/door_data.txt
