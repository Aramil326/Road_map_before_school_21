#ifndef SRC_S21_STRING_TEST_H_
#define SRC_S21_STRING_TEST_H_

void s21_strlen_test();
void s21_strlen_test_output(char *test_str, int result_length, int length);

void s21_strcmp_test();
void s21_strcmp_test_output(char *str1, char *str2, int result, int answer);

void s21_strcpy_test();
void s21_strcpy_test_output(char *str1, char *str2);

void s21_strcat_test();
void s21_strcat_test_output(char *str1, char *str2, char *res, char *ans);

void s21_strchr_test();
void s21_strchr_test_output(char *test_1_1, char test_1_2, char *res, int ans);

void s21_strstr_test();
void s21_strstr_test_output(char *test_1_1, char *test_1_2, char *res, int ans);

/*void s21_strtok_test();
void s21_strtok_test_output(char *test_1_1, char *test_1_2, char *res, int ans);*/

#endif  // SRC_S21_STRING_TEST_H_
