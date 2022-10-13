#include <stdio.h>
#include <stdlib.h>


void input_array_size(int *n, int *m);
void input_array(double **matrix, int n, int m);

double det(double **mas, int m, double *res);

void transpon(double **matrix, int n, int m);
void additions(double **matrix, int n, int m);
double det(double **mas, int m, double *res);
void GetMatr(double **mas, double **p, int i, int j, int m);
void invert(double **matrix, int n, int m);

void output(double **matrix, int n, int m);


int main() {
    int n, m;
    input_array_size(&n, &m);
    double** matrix = malloc(n * m * sizeof(double) + n * sizeof(double*));
    input_array(matrix, n, m);
    double determinant;
    det(matrix, m, &determinant);
    printf("%lf\n", determinant);
    if (determinant != 0.0) {
        invert(matrix, n, m);
        output(matrix, n, m);
    } else {
        printf("n/a");
    }
    free(matrix);
    return 0;
}

void input_array_size(int *n, int *m) {
    char c;
    scanf("%d %d%c", n, m, &c);
    if (c != '\n' || *n <= 0 || *m <= 0 || *n != *m) {
        printf("n/a");
        exit(0);
    }
}
void input_array(double **matrix, int n, int m) {
    int no_error = 1;
    double* ptr = (double*) (matrix + n);

    for (int i = 0; i < n; i++) {
        matrix[i] = ptr + m * i;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (j + 1 == m) {
            char c;
            scanf("%lf%c", &matrix[i][j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%lf", &matrix[i][j]);
            }
        }
    }

    if (!no_error) {
        printf("n/a");
        exit(0);
    }
}

void transpon(double **matrix, int n, int m) {
    double** p = malloc(m * m * sizeof(double) + m * sizeof(double*));
    double* ptr = (double*) (p + m);
    for (int i = 0; i < m; i++) {
        p[i] = ptr + m * i;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            p[j][i] = matrix[i][j];
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            matrix[i][j] = p[i][j];
        }
    }
}

void additions(double **matrix, int n, int m) {
    double** p = malloc(m * m * sizeof(double) + m * sizeof(double*));
    double* ptr = (double*) (p + m);
    for (int i = 0; i < m; i++) {
        p[i] = ptr + m * i;
    }
    int rows, cols;
    int a = 0, z = 0;
    for (int i = 0; i < n; i++, a++) {
        for (int j = 0; j < m; j++, z++) {
            for (rows = 0; rows < n; rows++) {
                for (cols = 0; cols < n; cols++) {
                    if (i != rows || j != cols) {
                        p[a][z] = matrix[i][j];
                    }
                }
            }
            double res;
            det(p, m, &res);
            matrix[i][j] = res;
        }
    }
}

double det(double **mas, int m, double *res) {
    int i, k, n;
    double** p = malloc(m * m * sizeof(double) + m * sizeof(double*));
    double* ptr = (double*) (p + m);
    for (int i = 0; i < m; i++) {
        p[i] = ptr + m * i;
    }

    *res = 0.0;
    k = 1;
    n = m - 1;
    if (m == 1) {
        *res = mas[0][0];
    } else if (m == 2) {
        *res = mas[0][0]*mas[1][1]-mas[0][1]*mas[1][0];
    } else if (m > 2) {
        for (i = 0; i < m; i++) {
            GetMatr(mas, p, i, 0, m);
            *res = *res + k * mas[i][0] * det(p, n, res);
            k = -k;
        }
    }
    free(p);
    return *res;
}

void GetMatr(double **mas, double **p, int i, int j, int m) {
    int ki, kj, di, dj;
    di = 0;
    for (ki = 0; ki < m - 1; ki++) {
        if (ki == i) di = 1;
        dj = 0;
        for (kj = 0; kj < m - 1; kj++) {
            if (kj == j) dj = 1;
            p[ki][kj] = mas[ki + di][kj + dj];
        }
    }
}

void invert(double **matrix, int n, int m) {
    double** p = malloc(m * m * sizeof(double) + m * sizeof(double*));
    double* ptr = (double*) (p + m);
    for (int i = 0; i < m; i++) {
        p[i] = ptr + m * i;
    }

    double res;
    det(p, m, &res);

    transpon(matrix, n, m);
    output(matrix, n, m);
    printf("\n");
    additions(matrix, n, m);
    output(matrix, n, m);
    printf("\n");

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            p[i][j] = matrix[i][j] / res;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            matrix[i][j] = p[i][j];
        }
    }
}

void output(double **arr, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
                printf("%lf", arr[i][j]);
            } else {
                printf("%lf ", arr[i][j]);
            }
        }
        printf("\n");
    }
}

