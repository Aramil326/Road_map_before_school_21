#ifndef SRC_S21_STRING_H_
#define SRC_S21_STRING_H_

int s21_strlen(char *str);
int s21_strcmp(char *str1, char *str2);
char *s21_strcpy(char *destination, char *source);
char *s21_strcat(char *dest, const char *src);
char *s21_strchr(char *str, char symbol);
int compare(const char *X, const char *Y);
char* s21_strstr(char* main_str, const char* second_str);
/*char* s21_strtok(char* source_str, const char* demial);*/

#endif  // SRC_S21_STRING_H_
