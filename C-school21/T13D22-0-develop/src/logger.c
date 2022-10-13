#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include "logger.h"
#include "log_levels.h"


FILE* log_init(char *filename) {
    FILE* fp;
    fp = fopen(filename, "a+");
    return fp;
}

int logcat(FILE* log_file, char *message, log_level level) {
    char temp[1024] = {0};

    char *log_priffix[] = {"DEBUG", "TRACE", "INFO", "WARNING", "ERROR"};
    strcat(temp, log_priffix[level]);
    strcat(temp, " | ");

    time_t t = time(NULL);
    char log_time[128] = "";
    struct tm* local = localtime(&t);
    strftime(log_time, 128, "%H:%M:%S", local);
    strcat(temp, log_time);
    strcat(temp, " | ");

    strcat(temp, message);

    char *is_file_empty = NULL;
    if ((fgets(is_file_empty, 256, log_file)) == NULL) {
        strcat(temp, "\n");
    }
    fputs(temp, log_file);

    return 0;
}

int log_close(FILE* log_file) {
    int error = 0;

    if (fclose(log_file) == EOF) {
        error = 1;
    }
    return error;
}
