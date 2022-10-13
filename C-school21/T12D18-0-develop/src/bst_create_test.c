#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

int main() {
    struct t_btree *root1 = bstree_create_node(2);
    if (root1 != NULL) {
        printf("%d\n", root1 -> item);
    }

    struct t_btree *root2 = bstree_create_node(-100);
    if (root2 != NULL) {
        printf("%d\n", root2 -> item);
    }

    free(root1);
    free(root2);
}
