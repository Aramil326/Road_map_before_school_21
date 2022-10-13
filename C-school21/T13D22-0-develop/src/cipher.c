#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <string.h>
#include "cipher.h"
#define ENG 26

#ifdef QUEST5
#include "logger.h"
#include "log_levels.h"
#endif


int main() {
    init();

    return 0;
}

void init() {
    #ifdef QUEST5
    FILE *log_file = log_init("logs.txt");
    #endif
    int menu_num;
    char *filepath = NULL;
    do {
        get_menu_num(&menu_num);
        if (menu_num == 1) {
            free(filepath);
            filepath = input_from_user();
            if (filepath == NULL || reader(filepath)) {
                #ifdef QUEST5
                logcat(log_file, "Файл: cipher.c; неккорекный ввод пути к файлу - файл не открылся", 2);
                #endif
                printf("n/a\n");
                continue;
            }
        } else if (menu_num == 2) {
            if (filepath == NULL || writer(filepath)) {
                free(input_from_user());
                #ifdef QUEST5
                logcat(log_file, "Файл: cipher.c; неккорекный ввод пути к файлу - файл не открылся", 2);
                #endif
                printf("n/a\n");
                continue;
            }
            reader(filepath);
        } else if (menu_num == 3) {
            int n;
            rewind(stdin);
            get_menu_num(&n);
            if (n != 90) {
                DIR *dir = opendir("../src/ai_modules/");
                struct dirent *ent;
                while ((ent=readdir(dir)) != 0) {
                    if (strstr(ent->d_name, ".c") != NULL) {
                        char temp[1024] = "";
                        strcat(temp, "../src/ai_modules/");
                        strcat(temp, ent->d_name);
                        encrypt(n, temp);
                    }
                    if (strstr(ent->d_name, ".h") != NULL) {
                        char temp[1024] = "";
                        strcat(temp, "../src/ai_modules/");
                        strcat(temp, ent->d_name);
                        FILE* fp;
                        fp = fopen(temp, "w");
                        fclose(fp);
                    }
                }
                closedir(dir);
            } else {
                #ifdef QUEST5
                logcat(log_file, "Файл: cipher.c; неккорекный ввод сдвига шифровки по Цезарю", 2);
                #endif
                printf("n/a\n");
            }
        } else if (menu_num == -1) {
        } else {
            printf("n/a\n");
            #ifdef QUEST5
            logcat(log_file, "Файл: cipher.c; неккорекный ввод выбора действия", 2);
            #endif
        }
    } while (menu_num != -1);
    free(filepath);
    #ifdef QUEST5
    log_close(log_file);
    #endif
}

/**
 * Функция очищает буфер, сканирут символ и, если нам придет некорректное значение, то возвращает ноль
*/
int get_menu_num(int *menu_num) {
    rewind(stdin);
    char c;
    scanf("%d%c", menu_num, &c);
    if (c != '\n') {
        *menu_num = 90;
    }
    return 0;
}

int reader(char *filepath) {
    rewind(stdin);
    int error = 0;
    FILE* fp;
    if ((fp=fopen(filepath, "r")) == NULL) {
        error = 1;
    } else {
        if (!input_output_file_text(fp)) {
            error = 1;
        }
        fclose(fp);
    }
    return error;
}

int writer(char *filepath) {
    rewind(stdin);
    int error = 0;
    FILE* fp;
    if ((fp=fopen(filepath, "r+")) == NULL) {
        error = 1;
    } else {
        char text[256];
        while ((fgets(text, 256, fp)) != NULL) { }
        file_write(fp);
        fclose(fp);
        text[0] = 'f';
    }
    return error;
}

/**
 * Функция считывает с консоли строку от пользователя
 * @return указатель на стоку, если что-то ввели.
 * @return NULL, если ничего не ввели и просто нажали enter.
*/
char* input_from_user() {
    char *file_path = NULL;
    int i = 0;
    char elem;
    while (elem != '\n') {
        if (scanf("%c", &elem) != EOF) {
            file_path = (char *)realloc(file_path, (i + 1) * sizeof(char));
            if (file_path == NULL) {
                printf("n/a\n");
            } else if (elem != '\n') {
                file_path[i] = elem;
                i++;
            } else if (elem == '\n') {
                file_path[i] = '\0';
            }
        } else {
            return NULL;
        }
    }
    return file_path;
}

/**
 * Функция принимает и тут же выводит значения строк из массива
 * @param fp ссылка на поток
 * @return 0 - в случае, если файл пустой;   !0 - в случае, если файл не пустой
*/
int input_output_file_text(FILE *fp) {
    int is_file_empty = 0;
    char text[256];
    while ((fgets(text, 256, fp)) != NULL) {
        printf("%s", text);
        is_file_empty++;
    }
    if (is_file_empty) {
        printf("\n");
    }
    return is_file_empty;
}

/**
 * Функция принимает строку из stdin и записывает ее в конец файла.
 * @param fp ссылка на поток
*/
void file_write(FILE *fp) {
    char *input;
    input = input_from_user();
    if (input != NULL) {
        fputs(input, fp);
    }
    free(input);
}

void encrypt(int n, char* filepath) {
    FILE *fp1, *fp2;

    fp1 = fopen(filepath, "r");
    fp2 = fopen(filepath, "r+");
    int flag;
    char c;
    c = getc(fp1);
    while (!feof(fp1)) {
        flag = 0;
        get_new_symbol(fp2, &flag, c, n);
        c = getc(fp1);
    }
    fclose(fp1);
    fclose(fp2);
}

void get_new_symbol(FILE *fp, int *flag, char c, int n) {
    if (c >= 'A' && c <= 'Z') {
        c = c + (n % ENG);
        if (c > 'Z') c = 'A' + (c - 'Z') - 1;
        fputc(c, fp);
        *flag = 1;
    }
    if (c >= 'a' && c <= 'z') {
        c = c + (n % ENG);
        if (c > 'z') c = 'a' + (c - 'z') - 1;
        fputc(c, fp);
        *flag = 1;
    }
    if (!*flag) fputc(c, fp);
}
