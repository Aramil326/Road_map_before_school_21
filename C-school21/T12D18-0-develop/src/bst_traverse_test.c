#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

void output_test(struct t_btree *root);

int main() {
    struct t_btree *root1 = bstree_create_node(8);
    if (root1 != NULL) {
        struct t_btree *temp11 = bstree_insert(root1, 10, cmpf);
        struct t_btree *temp12 = bstree_insert(root1, 3, cmpf);
        printf("root1:\n");
        output_test(root1);
        free(temp12);
        free(temp11);
    }

    printf("\n\n");
    struct t_btree *root2 = bstree_create_node(9);
    if (root2 != NULL) {
        struct t_btree *temp21 = bstree_insert(root2, 5, cmpf);
        struct t_btree *temp22 = bstree_insert(root2, 9, cmpf);
        printf("root2:\n");
        output_test(root2);
        free(temp22);
        free(temp21);
    }

    free(root1);
    free(root2);
}

void output_test(struct t_btree *root) {
    printf("TEST 1 (infix)\n");
    printf("tree: ");
    bstree_apply_infix(root, applyf);
    printf("\n");

    printf("TEST 2 (prefix)\n");
    printf("tree: ");
    bstree_apply_prefix(root, applyf);
    printf("\n");

    printf("TEST 3 (postfix)\n");
    printf("tree: ");
    bstree_apply_postfix(root, applyf);
}
