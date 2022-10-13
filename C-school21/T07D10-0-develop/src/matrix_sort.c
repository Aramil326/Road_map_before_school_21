#include <stdio.h>
#include <stdlib.h>

#define ROWS_MAX 100
#define COLS_MAX 100

void input(int *select, int* rows, int* cols);

int array_1_input(int **single_array_matrix, int rows, int cols);
int array_2_input(int **pointer_array, int rows, int cols);
int array_3_input(int **pointer_array_4, int rows, int cols);

void array_dynamic_output(int **pointer_array, int rows, int cols);

void array_dynamic_max(int **pointer_array, int rows, int cols);
void array_dynamic_min(int **pointer_array, int rows, int cols);

void array_sort(int **arr, int rows, int cols);


int main() {
    int select, rows, cols;
    input(&select, &rows, &cols);

    switch (select) {
        case 1: {
            int** single_array_matrix = malloc(rows * cols * sizeof(int) + rows * sizeof(int*));
            if (array_1_input(single_array_matrix, rows, cols)) {
                array_sort(single_array_matrix, rows, cols);
                array_dynamic_output(single_array_matrix, rows, cols);
            } else {
                printf("n/a");
                exit(0);
            }
            free(single_array_matrix);
            break;
        }
        case 2: {
            int** pointer_array = malloc(rows * sizeof(int*));
            if (array_2_input(pointer_array, rows, cols)) {
                array_sort(pointer_array, rows, cols);
                array_dynamic_output(pointer_array, rows, cols);
            } else {
                printf("n/a");
                exit(0);
            }
            for (int i = 0; i < rows; i++) {
                free(pointer_array[i]);
            }
            free(pointer_array);
            break;
        }
        case 3: {
            int** pointer_array_4 = malloc(rows * sizeof(int*));
            if (array_3_input(pointer_array_4, rows, cols)) {
                array_sort(pointer_array_4, rows, cols);
                array_dynamic_output(pointer_array_4, rows, cols);
            } else {
                printf("n/a");
                exit(0);
            }
            free(pointer_array_4);
            break;
        }
    }
    return 0;
}

void input(int *select, int* rows, int* cols) {
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

int array_1_input(int **single_array_matrix, int rows, int cols) {
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
int array_2_input(int **pointer_array, int rows, int cols) {
    int no_error = 1;

    for (int i = 0; i < rows; i++) {
        pointer_array[i] =  malloc(rows * sizeof(int*));
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
            char c;
            scanf("%d%c", &pointer_array[i][j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%d", &pointer_array[i][j]);
            }
        }
    }

    return no_error;
}
int array_3_input(int **pointer_array_4, int rows, int cols) {
    int no_error = 1;
    int * values_array = malloc(rows * cols * sizeof(int));

    for (int i = 0; i < rows; i++) {
        pointer_array_4[i] =  values_array + cols * i;
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
            char c;
            scanf("%d%c", &pointer_array_4[i][j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%d", &pointer_array_4[i][j]);
            }
        }
    }
    free(values_array);

    return no_error;
}

void array_dynamic_output(int **pointer_array, int rows, int cols) {
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

void array_sort(int **arr, int rows, int cols) {
    for (int current_elem = 0; current_elem < rows - 1; current_elem++) {
        int current_elem_sum = 0;

        for (int j = 0; j < cols; j++) {
            current_elem_sum += arr[current_elem][j];
        }

        for (int i = 1; i < rows; i++) {
            int next_elem_sum = 0;
            for (int j = 0; j < cols; j++) {
                next_elem_sum += arr[i][j];  // -7
            }

            if (next_elem_sum < current_elem_sum) {
                for (int q = 0; q < cols; q++) {
                    int temp = arr[current_elem][q];
                    arr[current_elem][q] = arr[i][q];
                    arr[i][q] = temp;
                }
            }
        }
    }
}
