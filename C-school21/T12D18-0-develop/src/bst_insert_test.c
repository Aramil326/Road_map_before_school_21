#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

int main() {
    struct t_btree *root1 = bstree_create_node(8);
    if (root1 != NULL) {
        struct t_btree *temp11 = bstree_insert(root1, 10, cmpf);
        struct t_btree *temp12 = bstree_insert(root1, 3, cmpf);
        free(temp12);
        free(temp11);
    }

    free(root1);

    printf("\n");
    struct t_btree *root2 = bstree_create_node(9);
    if (root2 != NULL) {
        struct t_btree *temp21 = bstree_insert(root2, 5, cmpf);
        struct t_btree *temp22 = bstree_insert(root2, 9, cmpf);
        free(temp22);
        free(temp21);
    }

    free(root2);
}
