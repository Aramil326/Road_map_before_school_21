#include <stdio.h>
#include <stdlib.h>


void input_array_size(int *n, int *m);
void input_array(int **matrix, int n, int m);


void sort_vertical(int **matrix, int n, int m, int **result_matrix);
void sort(int *arr, int n);
void sort_horizontal(int **matrix, int n, int m, int **result_matrix);


void output(int **matrix, int n, int m);


int main() {
    int n, m;
    input_array_size(&n, &m);
    int** matrix = malloc(n * m * sizeof(int) + n * sizeof(int*));
    input_array(matrix, n, m);

    int** result_matrix = malloc(n * m * sizeof(int) + n * sizeof(int*));
    sort_vertical(matrix, n, m, result_matrix);
    output(result_matrix, n, m);
    printf("\n");
    sort_horizontal(matrix, n, m, result_matrix);
    output(result_matrix, n, m);
    free(matrix);
    free(result_matrix);
    return 0;
}

void input_array_size(int *n, int *m) {
    char c;
    scanf("%d %d%c", n, m, &c);
    if (c != '\n' || *n <= 0 || *m <= 0) {
        printf("n/a");
        exit(0);
    }
}
void input_array(int **matrix, int n, int m) {
    int no_error = 1;
    int* ptr = (int*) (matrix + n);

    for (int i = 0; i < n; i++) {
        matrix[i] = ptr + m * i;
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (j + 1 == m) {
            char c;
            scanf("%d%c", &matrix[i][j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%d", &matrix[i][j]);
            }
        }
    }

    if (!no_error) {
        printf("n/a");
        exit(0);
    }
}

void sort_vertical(int **matrix, int n, int m, int **result_matrix) {
    int* ptr = (int*) (result_matrix + n);

    for (int i = 0; i < n; i++) {
        result_matrix[i] = ptr + m * i;
    }

    int *a = (int*)malloc(n * m * sizeof(int));
    int k = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++, k++) {
            a[k] = matrix[i][j];
        }
    }
    sort(a, n*m);
    k = 0;
    for (int i = 0; i < m; i++) {
        if (i == 0 || i % 2 == 0) {
            for (int j = 0; j < n; j++) {
                result_matrix[j][i] = a[k];
                k++;
            }
        } else {
            for (int j = n - 1; j >= 0; j--) {
                result_matrix[j][i] = a[k];
                k++;
            }
        }
    }
    free(a);
}
void sort_horizontal(int **matrix, int n, int m, int **result_matrix) {
    int* ptr = (int*) (result_matrix + n);

    for (int i = 0; i < n; i++) {
        result_matrix[i] = ptr + m * i;
    }

    int *a = (int*)malloc(n * m * sizeof(int));
    int k = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++, k++) {
            a[k] = matrix[i][j];
        }
    }
    sort(a, n * m);
    k = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || i % 2 == 0) {
            for (int j = 0; j < m; j++) {
                result_matrix[i][j] = a[k];
                k++;
            }
        } else {
            for (int j = m - 1; j >= 0; j--) {
                result_matrix[i][j] = a[k];
                k++;
            }
        }
    }
    free(a);
}
void sort(int *arr, int n) {
    for (int i = 0;  i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
    }
}

void output(int **matrix, int n, int m) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (j + 1 == m) {
                printf("%d", matrix[i][j]);
            } else {
                printf("%d ", matrix[i][j]);
            }
        }
        printf("\n");
    }
}
