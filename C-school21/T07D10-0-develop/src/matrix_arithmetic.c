#include <stdio.h>
#include <stdlib.h>

void first_input(int *select, int* rows, int* cols);
void second_input(int* rows, int* cols);

int array_input(int **single_array_matrix, int rows, int cols);

void array_output(int **pointer_array, int rows, int cols);

void sum(int **matrix_first, int **matrix_second, int **matrix_result, int n_result, int m_result);

// int transpose(int **matrix, int n, int m);

// int mul(int **matrix_first, int n_first, int m_first, int **matrix_second,
// int n_second, int m_second, int **matrix_result, int *n_result, int *m_result);

// if (n_first != n_second || m_first != m_second) {}
int main() {
    int select, n_first, m_first;
    first_input(&select, &n_first, &m_first);
    int** matrix_first = malloc(n_first * m_first * sizeof(int) + n_first * sizeof(int*));
    if (array_input(matrix_first, n_first, m_first)) {
        int n_second, m_second;
        second_input(&n_second, &m_second);

        int** matrix_second = malloc(n_second * m_second * sizeof(int) + n_second * sizeof(int*));
        if (array_input(matrix_second, n_second, m_second)) {
            switch (select) {
                case 1: {
                    if (n_first != n_second || m_first != m_second) {
                        printf("n/a");
                        exit(0);
                    }

                    int n_result = n_first;
                    int m_result = m_first;
                    int** matrix_result = malloc(n_result * m_result * sizeof(int) + n_result * sizeof(int*));

                    sum(matrix_first, matrix_second, matrix_result, n_result, m_result);
                    array_output(matrix_result, n_result, m_result);
                    free(matrix_result);
                    break;
                }
            }
        } else {
            printf("n/a");
            exit(0);
        }
        free(matrix_second);
    } else {
        printf("n/a");
        exit(0);
    }
    free(matrix_first);
    return 0;
}

void first_input(int *select, int* rows, int* cols) {
    char c;
    scanf("%d%c", select, &c);
    if (c != '\n' || *select <= 0 || *select > 3) {
        printf("n/a");
        exit(0);
    } else {
        scanf("%d %d%c", rows, cols, &c);
        if (c != '\n' || *rows <= 0 || *cols <= 0) {
            printf("n/a");
            exit(0);
        }
    }
}
void second_input(int* rows, int* cols) {
    char c;
    scanf("%d %d%c", rows, cols, &c);
    if (c != '\n' || *rows <= 0 || *cols <= 0) {
        printf("n/a");
        exit(0);
    }
}


int array_input(int **single_array_matrix, int rows, int cols) {
    int no_error = 1;
    int* ptr = (int*) (single_array_matrix + rows);

    for (int i = 0; i < rows; i++) {
        single_array_matrix[i] = ptr + cols * i;
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
                char c;
                scanf("%d%c", &single_array_matrix[i][j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%d", &single_array_matrix[i][j]);
            }
        }
    }

    return no_error;
}



void sum(int **matrix_first, int **matrix_second, int **matrix_result, int n_result, int m_result) {
    printf("asdf");
    for (int i = 0; i < n_result; i++) {
        for (int j = 0; j < m_result; j++) {
            matrix_result[i][j] = matrix_first[i][j] + matrix_second[i][j];
        }
    }
}











void array_output(int **pointer_array, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
                printf("%d", pointer_array[i][j]);
            } else {
                printf("%d ", pointer_array[i][j]);
            }
        }
        printf("\n");
    }
}
