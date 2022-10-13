#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

struct stack* init(int current_num) {
    struct stack *root;
    root = (struct stack*)malloc(sizeof(struct stack));
    if (root == NULL) {
        return NULL;
    }

    root -> current = current_num;
    root -> prev = NULL;

    return (root);
}

void push(struct stack** root, int current_num) {
    if (root == NULL) {
        return;
    }

    struct stack *temp;
    temp = (struct stack*)malloc(sizeof(struct stack));
    if (temp == NULL) {
        return;
    }

    temp->prev = *root;
    temp->current = current_num;

    *root = temp;
    free(temp);
}


void pop(struct stack** root) {
    if (root == NULL) {
        return;
    }

    *root = (*root) -> prev;
}

void destroy(struct stack* root) {
    if (root -> prev != NULL) {
        destroy(root -> prev);
    } else {
        free(root);
    }
}
