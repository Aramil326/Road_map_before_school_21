#include <stdio.h>
#include "s21_string.h"
#include "s21_string_test.h"


int main() {
    #ifdef QUEST1
        s21_strlen_test();
    #endif
    #ifdef QUEST2
        s21_strcmp_test();
    #endif
    #ifdef QUEST3
        s21_strcpy_test();
    #endif
    #ifdef QUEST4
        s21_strcat_test();
    #endif
    #ifdef QUEST5
        s21_strchr_test();
    #endif
    #ifdef QUEST6
        s21_strstr_test();
    #endif
    // #ifdef QUEST7
    //     s21_strtok_test();
    // #endif
}

void s21_strlen_test() {
    int length = 13, result_length;

    char test1[] = "Hello, World!";
    result_length = s21_strlen(test1);
    s21_strlen_test_output(test1, result_length, length);
    printf("\n");

    length = 13;
    char test2[13] ="Hello, World!";
    result_length = s21_strlen(test2);
    s21_strlen_test_output(test2, result_length, length);
    printf("\n");

    length = 0;
    char test3[] = "";
    result_length = s21_strlen(test3);
    s21_strlen_test_output(test3, result_length, length);
}

void s21_strlen_test_output(char *test_str, int result_length, int length) {
    printf("%s\n%d\n", test_str, result_length);

    if (result_length == length) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
}

void s21_strcmp_test() {
    int result = 0, answer = 0;

    char test_1_1[] = "Hello, World!";
    char test_1_2[] = "Hello, World!";
    result = s21_strcmp(test_1_1, test_1_2);
    s21_strcmp_test_output(test_1_1, test_1_2, result, answer);
    printf("\n");

    answer = -1;
    char test_2_1[] = "Hallo, World!";
    char test_2_2[] = "Hello, World!";
    result = s21_strcmp(test_2_1, test_2_2);
    s21_strcmp_test_output(test_2_1, test_2_2, result, answer);

    answer = -1;
    char test_3_1[] = "";
    char test_3_2[] = "Hello, World!";
    result = s21_strcmp(test_3_1, test_3_2);
    s21_strcmp_test_output(test_3_1, test_3_2, result, answer);
}

void s21_strcmp_test_output(char *str1, char *str2, int result, int answer) {
    printf("%s\n%s\n%d\n", str1, str2, result);
    if (result == answer) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
}

void s21_strcpy_test() {
    char test_1_1[15], test_1_2[] = "Hello5, World!";
    s21_strcpy(test_1_1, test_1_2);
    s21_strcpy_test_output(test_1_2, test_1_1);
    printf("\n");

    char test_2_1[15], test_2_2[] = "He#4/%of, World!";
    s21_strcpy(test_2_1, test_2_2);
    s21_strcpy_test_output(test_2_2, test_2_1);
    printf("\n");

    char test_3_1[15], test_3_2[] = "";
    s21_strcpy(test_3_1, test_3_2);
    s21_strcpy_test_output(test_3_2, test_3_1);
    printf("\n");
}

void s21_strcpy_test_output(char *str1, char *str2) {
    printf("%s\n%s\n", str1, str2);
    int flag = 0;
    int i = 0;
    while (str2[i] != '\0') {
        if (str1[i] != str2[i]) {
            flag++;
        }
        i++;
    }


    if (!flag) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
}

void s21_strcat_test() {
    char answer_1[] = "Hello, World!Hello!";
    char test_1_1[] = "Hello, World!";
    char test_1_2[] = "Heeello!";
    char result_1[] = "Hello, World!";
    s21_strcat(result_1, test_1_2);
    s21_strcat_test_output(test_1_1, test_1_2, result_1, answer_1);
    printf("\n");


    char answer_2[] = "!@#$%^12345";
    char test_2_1[] = "!@#$%^";
    char test_2_2[] = "12345";
    char result_2[] = "!@#$%^";
    s21_strcat(result_2, test_2_2);
    s21_strcat_test_output(test_2_1, test_2_2, result_2, answer_2);
    printf("\n");

    char answer_3[] = "";
    char test_3_1[] = "";
    char test_3_2[] = "";
    char result_3[] = "";
    s21_strcat(result_3, test_3_2);
    s21_strcat_test_output(test_3_1, test_3_2, result_3, answer_3);
    printf("\n");
}

void s21_strcat_test_output(char *str1, char *str2, char *res, char *ans) {
    printf("%s\n%s\n%s\n", str1, str2, res);
    int flag = 0;
    int i = 0;

    while (res[i] != '\0') {
        if (res[i] != ans[i]) {
            flag++;
        }
        i++;
    }
    if (!flag) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
}

void s21_strchr_test() {
    int ans = 1;
    char test_1_1[] = "Hello";
    char test_1_2 = 'e';
    char *res = s21_strchr(test_1_1, test_1_2);
    s21_strchr_test_output(test_1_1, test_1_2, res, ans);
    printf("\n");

    ans = 1;
    char test_2_1[] = "";
    char test_2_2 = '@';
    res = s21_strchr(test_2_1, test_2_2);
    s21_strchr_test_output(test_2_1, test_2_2, res, ans);

    ans = 2;
    char test_3_1[] = "!@#$%^";
    char test_3_2 = '#';
    res = s21_strchr(test_3_1, test_3_2);
    s21_strchr_test_output(test_3_1, test_3_2, res, ans);
}

void s21_strchr_test_output(char *test_1_1, char test_1_2, char *res, int ans) {
    if (res == NULL) {
        printf("n/a\n");
        printf("SUCCESS\n");
    } else {
        printf("%s\n%c\n%ld\n", test_1_1, test_1_2, res - test_1_1);

        if (res - test_1_1 == ans) {
            printf("SUCCESS");
        } else {
            printf("FAIL");
        }
    }
}

void s21_strstr_test() {
    int ans = 1;
    char test_1_1[] = "Hello";
    char test_1_2[] = "ello";
    char *res = s21_strstr(test_1_1, test_1_2);
    s21_strstr_test_output(test_1_1, test_1_2, res, ans);
    printf("\n");

    ans = 1;
    char test_2_1[] = "";
    char test_2_2[] = "ello";
    res = s21_strstr(test_2_1, test_2_2);
    s21_strstr_test_output(test_2_1, test_2_2, res, ans);
    printf("\n");

    ans = 2;
    char test_3_1[] = "!@#$%";
    char test_3_2[] = "#$";
    res = s21_strstr(test_3_1, test_3_2);
    s21_strstr_test_output(test_3_1, test_3_2, res, ans);
    printf("\n");
}

void s21_strstr_test_output(char *test_1_1, char *test_1_2, char *res, int ans) {
    if (res == NULL) {
        printf("n/a\n");
        printf("SUCCESS");
    } else {
        printf("%s\n%s\n%ld\n", test_1_1, test_1_2, res - test_1_1);

        if (res - test_1_1 == ans) {
            printf("SUCCESS");
        } else {
            printf("FAIL");
        }
    }
}

/*void s21_strtok_test() {
    int ans = 4;
    char test_1_1_1[24]="test1/test2/test3/test4";
    char test_1_1[24]="test1/test2/test3/test4";
    char test_1_2[10]= "/";
    char *res;
    res = s21_strtok(test_1_1, test_1_2);
    s21_strtok_test_output(test_1_1_1, test_1_2, res, ans);
    printf("\n");

    ans = 4;
    char test_2_1_1[24]="";
    char test_2_1[24]="";
    char test_2_2[10]= "/";
    res = s21_strtok(test_2_1, test_2_2);
    s21_strtok_test_output(test_2_1_1, test_2_2, res, ans);
    printf("\n");

    ans = 4;
    char test_3_1_1[24]="test1)test2)test3)test4";
    char test_3_1[24]="test1)test2)test3)test4";
    char test_3_2[10]= ")";
    res = s21_strtok(test_3_1, test_3_2);
    s21_strtok_test_output(test_3_1_1, test_3_2, res, ans);
}

void s21_strtok_test_output(char *test_1_1, char *test_1_2, char *res, int ans) {
    if (res == NULL) {
        printf("n/a\n");
        printf("SUCCESS");
    } else {
        printf("%s\n%s\n", test_1_1, test_1_2);
        int count = 0;
        while (res != NULL) {
            // Вывод очередной выделенной части
            printf("%s\n", res);
            // Выделение очередной части строки
            res = s21_strtok(NULL, test_1_2);
            count++;
        }
        if (count == ans) {
            printf("SUCCESS");
        } else {
            printf("FAIL");
        }
    }
}*/
