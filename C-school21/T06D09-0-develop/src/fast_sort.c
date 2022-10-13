#include <stdio.h>
#define NMAX 10

int input(int *arr);
void copy(int* oldArr, int* newArr);
void quickSort(int *arr, int size);
void output(int *arr);
void heapSort(int* arr, int n);
void makeHeap(int* arr, int n, int i);


int main() {
    int data1[NMAX];
    int data2[NMAX];

    if (input(&data1[0])) {
        copy(&data1[0], &data2[0]);
        quickSort(&data1[0], NMAX);
        output(&data1[0]);
        heapSort(&data2[0], NMAX);
        output(&data2[0]);
    } else {
        printf("n/a");
    }

    return 0;
}

int input(int *arr) {
    int no_error = 1;

    for (int *p = arr;  p - arr < NMAX; p++) {
        if (p - arr + 1 == NMAX) {
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

void copy(int* oldArr, int* newArr) {
    for (int i = 0; i < NMAX; i++) {
        newArr[i] = oldArr[i];
    }
}

void quickSort(int *arr, int size) {
    //Указатели в начало и в конец массива
    int i = 0;
    int j = size - 1;

    int mid = arr[size / 2];

    do {
        while(arr[i] < mid) {
            i++;
        }

        while(arr[j] > mid) {
            j--;
        }

        if (i <= j) {
            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;

            i++;
            j--;
        }
    } while (i <= j);

    if(j > 0) {
        quickSort(arr, j + 1);
    }
    if (i < size) {
        quickSort(&arr[i], size - i);
    }
}

void output(int *arr) {
    for (int i = 0;  i < NMAX; i++) {
        if (NMAX == (i+1)) {
            printf("%d\n", arr[i]);
        } else {
            printf("%d ", arr[i]);
        }
    }
}

void heapSort(int* arr, int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        makeHeap(arr, n, i);

    for (int i=n-1; i>=0; i--)
    {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        makeHeap(arr, i, 0);
    }
}

void makeHeap(int* arr, int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right= 2*i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right< n && arr[right] > arr[largest])
        largest = right;

    if (largest != i)
    {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        makeHeap(arr, n, largest);
    }
}

