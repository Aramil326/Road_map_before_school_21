#include <stdio.h>
#include <stdlib.h>
#include "bst.h"


struct t_btree *bstree_create_node(int item) {
    struct t_btree *root;
    root = (struct t_btree*)malloc(sizeof(struct t_btree));
    if (root == NULL) {
        return NULL;
    }

    root -> item = item;
    root -> parent = NULL;
    root -> left = NULL;
    root -> right = NULL;

    return root;
}

int cmpf(int curr, int next) {
    if (curr < next) {
        return 1;
    } else {
        return 0;
    }
}

struct t_btree * bstree_insert(struct t_btree *root, int item, int (*cmpf)(int, int)) {
    struct t_btree *root2 = root, *root3 = NULL;
    struct t_btree *temp;
    temp = (struct t_btree*)malloc(sizeof(struct t_btree));

    temp -> item = item;

    while (root2 != NULL) {
        root3 = root2;
        if (cmpf(item, root2 -> item)) {
            root2 = root2 -> left;
        } else {
            root2 = root2 -> right;
        }
    }

    temp -> parent = root3;
    temp -> left = NULL;
    temp -> right = NULL;

    if (cmpf(item, root3 -> item)) {
        root3 -> left = temp;
        #ifdef QUEST4
            printf("%d - left\n", temp -> item);
        #endif
    } else {
        root3 -> right = temp;
        #ifdef QUEST4
            printf("%d - right\n", temp -> item);
        #endif
    }

    // free(temp);
    return temp;
}

void applyf(int current) {
    printf("%d ", current);
}

void bstree_apply_infix(struct t_btree *root, void (*applyf)(int)) {
    if (root == NULL)
        return;
    bstree_apply_infix(root -> left, applyf);
    if (root -> item) {
        applyf(root -> item);
    }
    bstree_apply_infix(root -> right, applyf);
}

void bstree_apply_prefix(struct t_btree *root, void (*applyf)(int)) {
    if (root == NULL)
        return;
    if (root -> item) {
        applyf(root -> item);
    }
    bstree_apply_prefix(root -> left, applyf);
    bstree_apply_prefix(root -> right, applyf);
}

void bstree_apply_postfix(struct t_btree *root, void (*applyf)(int)) {
    if (root == NULL)
        return;
    bstree_apply_postfix(root -> right, applyf);
    if (root -> item) {
        applyf(root -> item);
    }
    bstree_apply_postfix(root -> left, applyf);
}
