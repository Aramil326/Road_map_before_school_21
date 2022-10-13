#include <stdio.h>
#include <stdlib.h>
#include "door_struct.h"
#include "list_test.h"
#include "list.h"


int main() {
    add_door_test();
    printf("\n");
    remove_door_test();

    return 0;
}

void add_door_test() {
    // test 1
    struct door door1 = {0, 0};  // Создаем структуру
    struct node* root1 = init(&door1);  // Делаем корневой элемент односвязного списка

    struct door door1_2 = {1, 0};  // Создаем структуру
    struct node* res1 = add_door(root1, &door1_2);  // Вставляем элемент в односвязную структуру

    if (root1 == NULL || res1 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }

    free(res1);
    free(root1);
    printf("\n");
    // printf("\n");
    // nodeprint(root);


    // test 2
    struct door door2 = {0, 0};  // Создаем структуру
    struct node* root2 = init(&door2);  // Делаем корневой элемент односвязного списка

    struct door door2_2 = {1, 0};  // Создаем структуру
    struct node* res2 = add_door(root2, &door2_2);  // Вставляем элемент в односвязную структуру

    if (root2 == NULL || res2 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }
    free(res2);
    free(root2);
    printf("\n");


    // test 3
    struct door door3 = {0, 0};  // Создаем структуру
    struct node* root3 = init(&door3);  // Делаем корневой элемент односвязного списка

    struct door door3_2 = {};  // Создаем структуру
    struct node* res3 = add_door(root3, &door3_2);  // Вставляем элемент в односвязную структуру

    if (root3 == NULL || res3 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }

    free(res3);
    free(root3);
}

void remove_door_test() {
    // test 1
    struct door door1 = {0, 0};  // Создаем структуру
    struct node* root1 = init(&door1);  // Делаем корневой элемент односвязного списка

    struct door door1_2 = {1, 0};  // Создаем структуру
    struct node* res1_1 = add_door(root1, &door1_2);  // Вставляем элемент в односвязную структуру
    struct node* res1_2 = remove_door(res1_1, root1);  // Вставляем элемент в односвязную структуру

    if (root1 == NULL || res1_1 == NULL || res1_2 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }

    // printf("\n");
    // nodeprint(root1);
    free(res1_1);
    free(root1);
    printf("\n");


    // test 2
    struct door door2 = {0, 0};  // Создаем структуру
    struct node* root2 = init(&door2);  // Делаем корневой элемент односвязного списка

    struct door door2_2 = {};  // Создаем структуру
    struct node* res2_1 = add_door(root2, &door2_2);  // Вставляем элемент в односвязную структуру
    struct node* res2_2 = remove_door(res2_1, root2);  // Вставляем элемент в односвязную структуру

    if (root2 == NULL || res2_1 == NULL || res2_2 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }
    free(res2_1);
    free(root2);
    printf("\n");


    // test 3
    struct door door3 = {0, 0};  // Создаем структуру
    struct node* root3 = init(&door3);  // Делаем корневой элемент односвязного списка

    struct door door3_2 = {0, 0};  // Создаем структуру
    struct node* res3_1 = add_door(root3, &door3_2);  // Вставляем элемент в односвязную структуру
    struct node* res3_2 = remove_door(res3_1, root3);  // Вставляем элемент в односвязную структуру

    if (root3 == NULL || res3_1 == NULL || res3_2 == NULL) {
        printf("FAIL");
    } else {
        printf("SUCCESS");
    }

    free(res3_1);
    free(root3);
}
