#include <stdio.h>

#define LEN 100
int input (int* arr, int* len);
void Reverse(int *a, int *b);
void output(int* arr, int len);
void sum(int* arr1, int len1, int* arr2, int len2, int* result, int* result_length);
// void sub(int* arr1, int len1, int* arr2, int len2, int* result, int* result_length);

/*
    Беззнаковая целочисленная длинная арифметика
    с использованием массивов.
    Ввод: 
     * 2 длинных числа в виде массивов до 100 элементов
     * В один элемент массива нельзя вводить число > 9
    Вывод: 
     * Результат сложения и разности чисел-массивов
    Пример:
     * 1 9 4 4 6 7 4 4 0 7 3 7 0 9 5 5 1 6 1
       2 9

       1 9 4 4 6 7 4 4 0 7 3 7 0 9 5 5 1 9 0
       1 9 4 4 6 7 4 4 0 7 3 7 0 9 5 5 1 3 2
*/
int main() {
  int arr1[LEN], len1, arr2[LEN], len2, result[LEN], result_length;

  if(input(&arr1[0], &len1) && input(&arr2[0], &len2)) {
    // printf("\n\n");
    printf("Arr 1:\n");
    output(&arr1[0], len1);
    printf("\n");
    printf("Arr 2:\n");
    output(&arr2[0], len2);
    if (len1 < len2) {
      printf("n/a");
    } else {
      printf("\n");
      sum(&arr1[0], len1, &arr2[0], len2, &result[0], &result_length);
      printf("Res:\n");
      output(&result[0], result_length);
    }
  } else {
    printf("n/a");
  }
}

int input(int* arr, int* len) {
  int count = 0;
  int no_error = 1;
  char c;

  do {
    scanf("%d%c", &arr[count], &c);
    if ((c != ' ' && c != '\n') || arr[count] >= 10 || count > 99) {
      no_error = 0;
      break;
    } else {
      count++;
    }
  } while (c != '\n');

  *len = count;

  Reverse(arr, arr + count - 1);
  return no_error;
}

void Reverse(int* a, int* b) {
    if (a < b) {
       *a += *b;
       *b = *a - *b;
       *a -= *b;
       Reverse(a + 1, b - 1);
    }
}

void output(int* arr, int len) {
    for (int i = 0;  i < len; i++) {
        if (len == (i+1)) {
            printf("%d\n", arr[i]);
        } else {
            printf("%d ", arr[i]);
        }
    }
}

void sum(int *arr1, int len1, int *arr2, int len2, int *result, int *result_length) {
  int v_ume = 0;
  for (int i = 0; i < len1; i++) {
    if (i < len2) {  // Если мы заполняем в результат
      if (v_ume) {  // Если в уме что-то есть
        if (arr1[i] + arr2[i] + v_ume >= 10) { // Если сумма текущего элемента первого и второго массивов больше или равно десяти
          printf("asdf");
          result[i] = arr1[i] + arr2[i] + v_ume - 10;  // То вычитаем 10 из суммы и заносим в результат
          v_ume = 0;
        } else {  // Если сумма текущего элемента первого и второго массивов меньше десяти
          result[i] = arr1[i] + arr2[i] + v_ume;  // То в результат запишется сумма
          v_ume = 0;
        }
      } else {  // Если ничего не записываем в уме
        // =======================================================================================================================
        if (arr1[i] + arr2[i] >= 10) { // Если сумма текущего элемента первого и второго массивов больше или равно десяти
          result[i] = arr1[i] + arr2[i] - 10;  // То вычитаем 10 из суммы и заносим в результат
          v_ume++;
        } else {  // Если сумма текущего элемента первого и второго массивов меньше десяти
          result[i] = arr1[i] + arr2[i];  // То в результат запишется сумма
        }
        // =======================================================================================================================  
      }
      
    } else { // Если размер первого массива больше чем второго
      if (v_ume) {
        if (result[i] + v_ume >= 10) {
          len1++;
          result[i] = result[i] + v_ume - 10;
        } else {
          result[i] = arr1[i] + v_ume;
        }
      } else {
        result[i] = arr1[i];
      }
    }
    
  }
  Reverse(result, result + len1 - 1);

  *result_length = len1;
}
