#include <stdio.h>
#include "s21_string.h"

int s21_strlen(char *str) {
    int length = 0;

    while (str[length] != '\0') {
        length++;
    }

    return length;
}

int s21_strcmp(char *str1, char *str2) {
    int result = 0, i = 0;

    while (str1[i] != '\0' && str2[i] != '\0') {
        if (str1[i] < str2[i]) {
            result = -1;
            break;
        } else if (str1[i] > str2[i]) {
            result = 1;
            break;
        }

        i++;
    }

    return result;
}

char *s21_strcpy(char *destination, char *source) {
    int i = 0;
    while (source[i] != '\0') {
        destination[i] = source[i];
        i++;
    }
    return destination;
}

char *s21_strcat(char *dest, const char *src) {
    register char *s1 = dest;
    register const char *s2 = src;
    register char c;

    do {
        c = *s1++;
    } while (c != '\0');

    s1 -= 2;

    do {
        c = *s2++;
        *++s1 = c;
    } while (c != '\0');

    return dest;
}

char *s21_strchr(char *str, char symbol) {
    while (*str) {
        if (*str == symbol) {
            return str;
        } else {
            str++;
        }
    }
    return NULL;
}

// возвращает true, если `X` и `Y` совпадают
int compare(const char *X, const char *Y) {
    while (*X && *Y) {
        if (*X != *Y) {
            return 0;
        }

        X++;
        Y++;
    }

    return (*Y == '\0');
}

char* s21_strstr(char* main_str, const char* second_str) {
    while (*main_str != '\0') {
        if ((*main_str == *second_str) && compare(main_str, second_str)) {
            return main_str;
        }
        main_str++;
    }

    return NULL;
}

/*char* s21_strtok(char* source_str, const char* demial) {
    static unsigned char* last;
    unsigned char* str;
    const unsigned char* ctrl = (const unsigned char*) demial;
    unsigned char map[32];
    int count;

    for (count = 0; count <32; count++) {
        map[count] = 0;
    }
    do {
        map[*ctrl >> 3] |= (1 << (*ctrl & 7));
    } while (*ctrl++);
    if (source_str) {
        str = (unsigned char*)source_str;
    } else {
        str = last;
    }
    while ((map[*str >> 3] & (1 << (*str & 7)))  && *str) {
        str++;
    }
    source_str = (char*)str;
    for (; *str; str++) {
        if (map[*str >> 3] & (1 << (*str & 7))) {
            *str++ = '\0';
            break;
        }
    }
    last = str;
    if (source_str == (char*)str) {
        return NULL;
    } else {
        return source_str;
    }
}*/
