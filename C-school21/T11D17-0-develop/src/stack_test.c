#include <stdio.h>
#include <stdlib.h>
#include "stack_test.h"
#include "stack.h"


int main() {
    push_test();
    printf("\n");
    pop_test();
    return 0;
}

void push_test() {
    // test 1
    struct stack* root1 = init(0);
    int test1 = 2;
    push(&root1, test1);
    if (root1 -> current == test1) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root1);
    printf("\n");

    // test 2
    struct stack* root2 = init(-156);
    int test2 = 9000;
    push(&root2, test2);
    if (root2 -> current == test2) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root2);
    printf("\n");

    // test 3
    struct stack* root3 = init(-832);
    int test3 = 0;
    push(&root3, test3);
    if (root3 -> current == test3) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root3);
}

void pop_test() {
    // test 1
    int test1 = 123;
    struct stack* root1 = init(test1);
    push(&root1, 20);
    pop(&root1);
    if (root1 -> current == test1) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root1);
    printf("\n");

    // test 2
    int test2 = 900;
    struct stack* root2 = init(test2);
    push(&root2, 20);
    pop(&root2);
    if (root2 -> current == test2) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root2);
    printf("\n");

    // test 3
    int test3 = 40;
    struct stack* root3 = init(test3);
    push(&root3, -333);
    pop(&root3);
    if (root3 -> current == test3) {
        printf("SUCCESS");
    } else {
        printf("FAIL");
    }
    destroy(root3);
}
