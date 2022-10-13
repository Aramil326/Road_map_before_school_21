#include <stdio.h>
#include <time.h>
#include "print_module.h"

char print_char(char ch) {
    return putchar(ch);
}

void print_log(char (*print)(char), char* message) {
    for (int i = 0; Log_prefix[i] != '\0'; i++) {
        print(Log_prefix[i]);
    }
    print(' ');

    // Определили текущее календарное время (вернет время в секундах с 1 января 1970)
    time_t t = time(NULL);
    // Создали строку, в которую запишется текущее время
    char str[10] = "";

    // преобразует календарное время, указанное в t,
    // сохраняет его в структуре tm и возвращает указатель на нее.
    struct tm* local = localtime(&t);
    strftime(str, 128, "%H:%M:%S", local);

    for (int i = 0; str[i] != '\0'; i++) {
        print(str[i]);
    }
    print(' ');

    for (int i = 0; message[i] != '\0'; i++) {
        print(message[i]);
    }
}
