#include <stdio.h>
#include <math.h>

int main() {
    float x;
    if (scanf("%f", &x) != 1) {
        printf("n/a");
    } else {
        float num = (((22.8 * pow(x, (1/3)) - 1000) * x + 3) / (x * x / 2));
        float y = 0.007 * pow(x, 4) + num - (x * pow((10 + x), (2/x))) - 1.01;
        printf("%.1f", y);
    }
    return 0;
}
