#include <stdio.h>
#include <stdlib.h>

#define ROWS_MAX 100
#define COLS_MAX 100

void input(int *select, int* rows, int* cols);

int array_1_input(int *arr, int rows, int cols);
int array_2_input(int **single_array_matrix, int rows, int cols);
int array_3_input(int **pointer_array, int rows, int cols);
int array_4_input(int **pointer_array_4, int rows, int cols);

void array_static_output(int *arr, int rows, int cols);
void array_dynamic_output(int **pointer_array, int rows, int cols);

void array_static_max(int *arr, int rows, int cols);
void array_static_min(int *arr, int rows, int cols);

void array_dynamic_max(int **pointer_array, int rows, int cols);
void array_dynamic_min(int **pointer_array, int rows, int cols);


int main() {
    int select, rows, cols;
    input(&select, &rows, &cols);

    switch (select) {
        case 1: {
            int arr[rows][cols];
            if (array_1_input(&arr[0][0], rows, cols)) {
                array_static_output(&arr[0][0], rows, cols);
                array_static_max(&arr[0][0], rows, cols);
                printf("\n");
                array_static_min(&arr[0][0], rows, cols);
            } else {
                printf("n/a");
                exit(0);
            }
            break;
        }
        case 2: {
            int** single_array_matrix = malloc(rows * cols * sizeof(int) + rows * sizeof(int*));
            if (array_2_input(single_array_matrix, rows, cols)) {
                array_dynamic_output(single_array_matrix, rows, cols);
                array_dynamic_max(single_array_matrix, rows, cols);
                printf("\n");
                array_dynamic_min(single_array_matrix, rows, cols);
            } else {
                printf("n/a");
                exit(0);
            }
            free(single_array_matrix);
            break;
        }
        case 3: {
            int** pointer_array = malloc(rows * sizeof(int*));
            if (array_3_input(pointer_array, rows, cols)) {
                array_dynamic_output(pointer_array, rows, cols);
                array_dynamic_max(pointer_array, rows, cols);
                printf("\n");
                array_dynamic_min(pointer_array, rows, cols);
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
        case 4: {
            int** pointer_array_4 = malloc(rows * sizeof(int*));
            if (array_4_input(pointer_array_4, rows, cols)) {
                array_dynamic_output(pointer_array_4, rows, cols);
                array_dynamic_max(pointer_array_4, rows, cols);
                printf("\n");
                array_dynamic_min(pointer_array_4, rows, cols);
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
    if (c != '\n' || *select <= 0 || *select > 4) {
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

int array_1_input(int *arr, int rows, int cols) {
    int no_error = 1;
    if (rows > 100 || cols > 100) {
        printf("n/a");
        exit(0);
        // return no_error;
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
            char c;
            scanf("%d%c", &arr[i * cols + j], &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
            } else {
                no_error *= scanf("%d", &arr[i * cols + j]);
            }
        }
    }

    return no_error;
}
int array_2_input(int **single_array_matrix, int rows, int cols) {
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
int array_3_input(int **pointer_array, int rows, int cols) {
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
int array_4_input(int **pointer_array_4, int rows, int cols) {
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

void array_static_output(int *arr, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j + 1 == cols) {
                printf("%d", arr[i * cols + j]);
            } else {
                printf("%d ", arr[i * cols + j]);
            }
        }
        printf("\n");
    }
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

void array_static_max(int *arr, int rows, int cols) {
    int max = 0;
    for (int i = 0; i < rows; i++) {
        max = arr[i * cols];
        for (int j = 0; j < cols; j++) {
            if (arr[i * cols + j] > max) {
                max = arr[i * cols + j];
            }
        }
        if (i + 1 == rows) {
            printf("%d", max);
        } else {
            printf("%d ", max);
        }
    }
}
void array_static_min(int *arr, int rows, int cols) {
    int min = 0;
    for (int i = 0; i < cols; i++) {
        min = arr[i];
        for (int j = 0; j < rows; j++) {
            if (arr[j * cols + i] < min) {
                min = arr[j * cols + i];
            }
        }
        if (i + 1 == cols) {
            printf("%d", min);
        } else {
            printf("%d ", min);
        }
    }
}

void array_dynamic_max(int **pointer_array, int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        int max = 0;
        for (int j = 0; j < cols; j++) {
            if (pointer_array[i][j] > max) {
                max = pointer_array[i][j];
            }
        }
        if (i + 1 == rows) {
            printf("%d", max);
        } else {
            printf("%d ", max);
        }
    }
}
void array_dynamic_min(int **pointer_array, int rows, int cols) {
    int min = 0;
    for (int i = 0; i < rows; i++) {
        min = pointer_array[0][i];
        for (int j = 0; j < cols; j++) {
            if (pointer_array[j][i] < min) {
                min = pointer_array[j][i];
            }
        }
        if (i + 1 == rows) {
            printf("%d", min);
        } else {
            printf("%d ", min);
        }
    }
}
