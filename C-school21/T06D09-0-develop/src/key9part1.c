#include <stdio.h>
#define NMAX 10

int input (int *old_arr, int* n);
int sum_numbers(int *old_arr, int n);
void find_numbers(int* old_arr, int n, int number, int* new_arr, int* new_arr_length);
void output (int number, int* numbers, int *numbers_length);

int main() {
    int n, data1[NMAX], data2[NMAX], numbers_length;

    if (input(&data1[0], &n)) {
        int sum = sum_numbers(&data1[0], n);
        find_numbers(&data1[0], n, sum, &data2[0], &numbers_length);
        output(sum, &data2[0], &numbers_length);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int *old_arr, int* n) {
    int no_error = 1;
	no_error *= scanf("%d", n);

    if (*n > 10 || *n <= 0) {
        printf("n/a");
        exit(0);
    }

    for (int *p = old_arr;  p - old_arr < *n; p++) {
        if (p - old_arr + 1 == *n) {
            char c;
            scanf("%d%c", p, &c);
            if (c != '\n') {
                printf("n/a");
                exit(0);
            }
        } else {
            no_error *= scanf("%d", p);
        }
    }

    return no_error;
}

int sum_numbers(int *old_arr, int n) {
	int sum = 0;
	
	for (int i = 0; i < n; i++) {
		if (old_arr[i] % 2 == 0) {
			sum = sum + old_arr[i];
		}
	}
	
	return sum;
}

void find_numbers(int* old_arr, int n, int number, int* new_arr, int* new_arr_length) {
    int j = 0;
    for (int i = 0; i < n; i++) {
        if (old_arr[i] != 0) {
            if (number % old_arr[i] == 0) {
                new_arr[j] = old_arr[i];
            j++;
            }
        }
    }
    *new_arr_length = j;
}

void output(int number, int* numbers, int *numbers_length) {
    printf("%d\n", number);
    for (int i = 0;  i < *numbers_length; i++) {
        if (*numbers_length == (i+1)) {
            printf("%d\n", numbers[i]);
        } else {
            printf("%d ", numbers[i]);
        }
    }
}