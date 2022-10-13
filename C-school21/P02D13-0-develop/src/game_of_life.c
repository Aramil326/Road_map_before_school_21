#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define ROWS 25
#define COLS 80

int get_playing_field_initialization(int *sleep_time);
void input(int **current_matrix, int *sleep_time);
int get_is_alive(int ** current_matrix, int i, int j);
void next_gen(int **current_matrix, int **next_matrix);
void swap_matr(int **current_matrix, int **next_matrix);
void output(int **matrix);
void is_game_finish(int **prev_matrix, int **current_matrix, int **next_matrix, int *game_finish);

int main() {
    // Создаем двумерный динамический массив prev_matrix,
    // в который мы будем класть предыдушее состояние игры
    int** prev_matrix = malloc(ROWS * COLS * sizeof(int) + ROWS * sizeof(int*));
    int* ptr = (int*) (prev_matrix + ROWS);
    for (int i = 0; i < ROWS; i++) {
        prev_matrix[i] = ptr + COLS * i;
    }
    // Задаем все значения массива prev_matrix в нули
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            prev_matrix[i][j] = 0;
        }
    }

    // Создаем двумерный динамический массив current_matrix,
    // в котором будет находится текущее состояние игры
    int** current_matrix = malloc(ROWS * COLS * sizeof(int) + ROWS * sizeof(int*));

    // Создаем переменную sleep_time, в которую мы положим скорость течения игры
    int sleep_time;

    // Вызываем функцию input и аргументами передаем ссылку на массив current_matrix
    // и ссылку на переменную sleep_time
    // Функция занимается получением данных из консоли
    input(current_matrix, &sleep_time);

    // Вызываем функцию input и аргументом передаем ссылку на массив
    // current_matrix, в котором сейчас начальное положение поля
    // функция выводит переданный массив
    output(current_matrix);
    // делаем перевод строки
    printf("\n");

    // Создаем двумерный динамический массив current_matrix,
    // в котором будет находится текущее состояние игры
    int** next_matrix = malloc(ROWS * COLS * sizeof(int) + ROWS * sizeof(int*));

    // Создаем переменную-флаг game_finish в значении 1
    int game_finish = 1;

    // Запускаем цикл while, который будет работать до тех пор, пока game_finish != 0
    while (game_finish) {
        // Усыпляем функцию на то время, что нам ввел пользователь, чтобы успеть видеть изменения
        sleep(sleep_time);

        // Вызываем функци next_gen, которая делает следующее поколение (next_matrix) из текущего поколения
        // (current_matrix) и записывает все в массив next_matrix
        next_gen(current_matrix, next_matrix);

        // Выводим следующее поколение
        output(next_matrix);
        // Делаем перенос строки
        printf("\n");
        // Вызываем функцию is_game_finish, которая принимает предыдущее,
        // текущее и следующее состояние игрового поля и меняет переменную game_finish
        // в зависимости от результата своей работы
        is_game_finish(prev_matrix, current_matrix, next_matrix, &game_finish);

        // Вызываем функцию swap_matr, которая принимает предыдущее и текущее состояние
        // и записывает в предыдущее состояние текущее состояние
        swap_matr(prev_matrix, current_matrix);

        // Вызываем функцию swap_matr, которая принимает текущее и следующее состояние
        // и записывает в текущее состояние следующее состояние
        swap_matr(current_matrix, next_matrix);
    }

    printf("GAME OVER");

    // очищаем память, которую выделяли для массива prev_matrix
    free(prev_matrix);
    // очищаем память, которую выделяли для массива current_matrix
    free(current_matrix);
    // очищаем память, которую выделяли для массива next_matrix
    free(next_matrix);

    // Возвращаем ноль в случае успешного выполнения программы
    return 0;
}

int get_playing_field_initialization(int *sleep_time) {
    // Создаем переменную playing_field_initialization, в которую потом положим способ
    // инициализации игры
    int playing_field_initialization;
    printf("GAME OF LIFE\n");
    printf("Выберите способ инициализации матрицы:\n");
    printf("1 - первый шаблон:\n");
    printf("2 - второй шаблон:\n");
    printf("3 - третий шаблон:\n");
    printf("4 - четвертый шаблон:\n");
    printf("5 - пятый шаблон:\n");
    printf("6 - инициализация вручную:\n");

    // Создаем переменную с типа чар
    char c;
    // С помощью функции scanf считываем из консоли значение переменной playing_field_initialization
    // и переменной с
    if (scanf("%d%c", &playing_field_initialization, &c) == -1) {
        // Если все-таки мы ввели не десятичное число в диапазоне от 1 до 6 (включительно)
        // то выводим ошибку
        printf("n/a");
        // и завершаем выполнение программы
        exit(0);
    }

    // Логика такая: если мы введем десятичное число, то оно запишется в playing_field_initialization
    // если же мы введем что-либо, что не является десятичнвм числом, то это попадет в переменную с
    // и в условии ниже мы проверяем, лежит ли что-нибудь в переменной с (c != '\n')
    // а так же проверяем переменную playing_field_initialization на то, выходит ли она за
    // границы возможных способов инициализации, которых всего 6
    // (playing_field_initialization <= 0 || playing_field_initialization >= 7)
    if (c != '\n' || playing_field_initialization <= 0 || playing_field_initialization >= 7) {
        // Если все-таки мы ввели не десятичное число в диапазоне от 1 до 6 (включительно)
        // то выводим ошибку
        printf("n/a");
        // и завершаем выполнение программы
        exit(0);
    }

    printf("Введите скорость игры в секундах в целочисленном формате:\n");
    // С помощью функции scanf считываем из консоли значение переменной sleep_time
    // и переменной с
    if (scanf("%d%c", sleep_time, &c) == -1) {
        // Если все-таки мы ввели не десятичное число в диапазоне от 1 до 6 (включительно)
        // то выводим ошибку
        printf("n/a");
        // и завершаем выполнение программы
        exit(0);
    }
    // Логика такая: если мы введем десятичное число, то оно запишется в разыменнованный
    // указатель на переменную sleep_time
    // если же мы введем что-либо, что не является десятичнвм числом, то это попадет в переменную с
    // и в условии ниже мы проверяем, лежит ли что-нибудь в переменной с (c != '\n')
    // а так же проверяем переменную sleep_time на то, меньше ли оно или равно нулю
    if (c != '\n' || *sleep_time <= 0) {
        // если в условии будет истина, то выводим сообщение об ошибкуе
        printf("n/a");
        // и завершаем выполнение программы
        exit(0);
    }

    // В конце выполнение функции мы возвращаем переменную playing_field_initialization
    return playing_field_initialization;
}

void input(int **current_matrix, int *sleep_time) {
    // В функцию input приходит ссылка на массив current_matrix и ссылка
    // на переменную sleep_time, которые мы записываем в указатели

    // Создаем переменную playing_field_initialization
    // в которую нам придет результат функции get_playing_field_initialization,
    // в которую мы передадим ссылку на переменную sleep_time
    int playing_field_initialization = get_playing_field_initialization(sleep_time);

    // Создаем массив указателей в current_matrix
    int* ptr = (int*) (current_matrix + ROWS);

    for (int i = 0; i < ROWS; i++) {
        current_matrix[i] = ptr + COLS * i;
    }

    // Создаем указатель на файл f
    FILE * f;

    // С помощью конструкции switch-case смотрим, что ввел пользователь в переменную
    // playing_field_initialization
    switch (playing_field_initialization) {
        // если ввел 1, то мы открываем файл 1.txt на чтение ("r")
        case 1: {
            f = fopen("1.txt", "r");
            break;
        }
        // если ввел 2, то мы открываем файл 2.txt на чтение ("r")
        case 2: {
            f = fopen("2.txt", "r");
            break;
        }
        // если ввел 3, то мы открываем файл 3.txt на чтение ("r")
        case 3: {
            f = fopen("3.txt", "r");
            break;
        }
        // если ввел 4, то мы открываем файл 4.txt на чтение ("r")
        case 4: {
            f = fopen("4.txt", "r");
            break;
        }
        // если ввел 5, то мы открываем файл 5.txt на чтение ("r")
        case 5: {
            f = fopen("5.txt", "r");
            break;
        }
    }

    // Если то вариант инициализации, который выбрал игрок равен 6, то
    if (playing_field_initialization == 6) {
        printf("Введите значения матрицы:\n");
        // мы создаем флаг "нет ошибок" в значении true (1). Правильно, ошибок то еще нету
        int no_error = 1;
        // Двойным циклом for бежим по элементам массива и заполняем их, обрабатывая ошибки
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                if (j + 1 == COLS) {
                char c;
                if (scanf("%d%c", &current_matrix[i][j], &c) == -1) {
                    printf("n/a");
                    exit(0);
                }
                if (c != '\n') {
                    printf("n/a");
                    exit(0);
                }
                } else {
                    no_error *= scanf("%d", &current_matrix[i][j]);
                    if (current_matrix[i][j] != 0 && current_matrix[i][j] != 1) {
                        printf("n/a");
                        exit(0);
                    }
                }
            }
        }
        // Если флаг "нет ошибок" будет в значении false, то мы выводим сообщение об ошибке
        // и завершаем программу
        if (!no_error) {
            printf("n/a");
            exit(0);
        }
    } else {  // Если вариант инициализации, который выбрал игрок не равен 6 (он будет в значении от 1 до 6)
    // то бежим двойным циклом for по текущей матрице и заполняем ее значениями из файлов
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                fscanf(f, "%d", &current_matrix[i][j]);
            }
        }
    }
}

int get_is_alive(int **current_matrix, int i, int j) {
    // Алгоритм работы функции такой:
    // Высчитывается сумма значений из клеток вокруг (там может быть 1 или 0)
    int is_alive_top;  // создаем переменную, в которую запишем сумму соседних элементов сверху
    int is_alive_left;  // создаем переменную, в которую запишем сумму соседних элементов слева
    int is_alive_right;  // создаем переменную, в которую запишем сумму соседних элементов справа
    int is_alive_bottom;  // создаем переменную, в которую запишем сумму соседних элементов снизу
    if (i == 0 && j == 0) {
        // Если клетка находится в позиции (0, 0), то сумму расчитаем так:
        is_alive_top = current_matrix[ROWS-1][COLS-1]+current_matrix[ROWS-1][j]+current_matrix[ROWS-1][j+1];
        is_alive_left = current_matrix[i][COLS-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[i+1][COLS-1] + current_matrix[i+1][j] + current_matrix[i+1][j+1];
    } else if (i == ROWS-1 && j == 0) {
        // Если клетка находится в позиции (25, 0), то сумму расчитаем так:
        is_alive_top = current_matrix[i+1][COLS-1] + current_matrix[i+1][j] + current_matrix[i+1][j+1];
        is_alive_left = current_matrix[i][COLS-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[ROWS-1][COLS-1] + current_matrix[0][j] + current_matrix[0][j+1];
    } else if (i == 0 && j == COLS-1) {
        // Если клетка находится в позиции (0, 80), то сумму расчитаем так:
        is_alive_top = current_matrix[ROWS-1][j-1] + current_matrix[ROWS-1][j] + current_matrix[ROWS-1][0];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][0];
        is_alive_bottom = current_matrix[i+1][j-1] + current_matrix[i+1][j] + current_matrix[i+1][0];
    } else if (i == ROWS-1 && j == COLS-1) {
        // Если клетка находится в позиции (25, 80), то сумму расчитаем так:
        is_alive_top = current_matrix[i-1][j-1] + current_matrix[i-1][j] + current_matrix[i-1][0];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][0];
        is_alive_bottom = current_matrix[0][j-1] + current_matrix[0][j] + current_matrix[0][0];
    } else if (i == 0) {
        // Если клетка находится в позиции (0, j - любое), то сумму расчитаем так:
        is_alive_top = current_matrix[ROWS-1][j-1] + current_matrix[ROWS-1][j] + current_matrix[ROWS-1][j+1];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[i+1][j-1] + current_matrix[i+1][j] + current_matrix[i+1][j+1];
    } else if (i == ROWS-1) {
        // Если клетка находится в позиции (25, j - любое), то сумму расчитаем так:
        is_alive_top = current_matrix[i-1][j-1] + current_matrix[i-1][j] + current_matrix[i-1][j+1];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[0][j-1] + current_matrix[0][j] + current_matrix[0][j+1];
    } else if (j == 0) {
        // Если клетка находится в позиции (i - любое, 0), то сумму расчитаем так:
        is_alive_top = current_matrix[i-1][COLS-1] + current_matrix[i-1][j] + current_matrix[i-1][j+1];
        is_alive_left = current_matrix[i][COLS-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[i+1][COLS-1] + current_matrix[i+1][j] + current_matrix[i+1][j+1];
    } else if (j == COLS - 1) {
        // Если клетка находится в позиции (i - любое, 80), то сумму расчитаем так:
        is_alive_top = current_matrix[i-1][j-1] + current_matrix[i-1][j] + current_matrix[i-1][0];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][0];
        is_alive_bottom = current_matrix[i+1][j-1] + current_matrix[i+1][j] + current_matrix[i+1][0];
    } else {
        // Если клетка находится в позиции не в крайних положениях, то сумму расчитаем так:
        is_alive_top = current_matrix[i-1][j-1] + current_matrix[i-1][j] + current_matrix[i-1][j+1];
        is_alive_left = current_matrix[i][j-1];
        is_alive_right = current_matrix[i][j+1];
        is_alive_bottom = current_matrix[i+1][j-1] + current_matrix[i+1][j] + current_matrix[i+1][j+1];
    }

    // Создаем переменную is_alive, в которую запишем результат сложения клеток вокруг текущей клетки
    int is_alive = is_alive_top + is_alive_left + is_alive_right + is_alive_bottom;
    // И возвращаем эту сумму
    return is_alive;
}

void next_gen(int **current_matrix, int **next_matrix) {
    // Делаем массив next_matrix двумерным
    int* ptr = (int*) (next_matrix + ROWS);
    for (int i = 0; i < ROWS; i++) {
        next_matrix[i] = ptr + COLS * i;
    }

    // Двойным циклом for бежим по матрице current_matrix
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            // Вытаскиваем текущий элемент иттерации по матрице current_matrix
            int current_elem = current_matrix[i][j];
            // если счетчики i и j не имеют граничные значения
            if (i != 24 && j != 79) {
                // то мы создаем переменную is_alive (будет ли жива клетка)
                // в которую придет результат работы функции get_is_alive
                // которая в своих аргументах получает текущую матрицу
                // и значения счетчиков i и j
                int is_alive = get_is_alive(current_matrix, i, j);

                if (current_elem && (is_alive < 2 || is_alive > 3)) {
                    // Если текущая клетка жива, но рядом меньше двух или больше трех
                    // соседей, то она умрет
                    next_matrix[i][j] = 0;
                } else if (!current_elem && is_alive == 3) {
                    // Если текущая клетка пустая, но рядом есть 3 живых клетки, то
                    // зарождается жизнь
                    next_matrix[i][j] = 1;
                } else if (current_elem && (is_alive == 3 || is_alive == 2)) {
                    // Если текущая клетка живая и рядом с ней 2 или 3 клетки,
                    // то она продолжает жизнь
                    next_matrix[i][j] = 1;
                } else {
                    // иначе клетку оставляем пустой
                    next_matrix[i][j] = 0;
                }
            }
        }
    }
}

void swap_matr(int **current_matrix, int **next_matrix) {
    // Алгорит такой:
    // Бежим двойным циклом for по массивам current_matrix и next_matrix
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            // и записываем [i][j] значения массива next_matrix
            // в массив current_matrix
            current_matrix[i][j] = next_matrix[i][j];
        }
    }
}

void output(int **matrix) {
    // Двойным циклом for бежим по массиву и выводим его элементы
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            if (matrix[i][j]) {  // Если текущий элемент массив равен 1 (клетка жива)
            // то выводим *
                printf("*");
            } else {  // иначе
            // выводим -
                printf("-");
            }
        }
        // переносим строку после вывода каждоый строки
        printf("\n");
    }
}

void is_game_finish(int **prev_matrix, int **current_matrix, int **next_matrix, int *game_finish) {
    // Создаем счетчик сравнения предыдущего и следущего массива
    int count_prev_next = 0;

    // Двойным циклом for бежим по массивам prev_matrix и next_matrix
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            if (prev_matrix[i][j] == next_matrix[i][j]) {
                // и если текущие элементы обоих массив равны, то мы инкрементируем
                // переменную count_prev_next
                count_prev_next++;
            }
        }
    }

    // Создаем счетчик сравнения текущего и следущего массива
    int count_curr_next = 0;

    // Двойным циклом for бежим по массивам current_matrix и next_matrix
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j < COLS; j++) {
            if (current_matrix[i][j] == next_matrix[i][j]) {
                // и если текущие элементы обоих массив равны, то мы инкрементируем
                // переменную count_prev_next
                count_curr_next++;
            }
        }
    }

    if (count_prev_next == ROWS * COLS) {
        // Если одинаковых элементов (count_prev_next) будет ROWS * COLS (2000)
        // то флаг завершения игры ставится в значение false
        *game_finish = 0;
    } else if (count_curr_next == ROWS * COLS) {
        // Если одинаковых элементов (count_curr_next) будет ROWS * COLS (2000)
        // то флаг завершения игры ставится в значение false
        *game_finish = 0;
    }
}
