#ifndef SRC_BST_H_
#define SRC_BST_H_

struct t_btree {
    int item;
    struct t_btree *left;
    struct t_btree *right;
    struct t_btree *parent;
};

struct t_btree *bstree_create_node(int item);
int cmpf(int curr, int next);
struct t_btree * bstree_insert(struct t_btree *root, int item, int (*cmpf)(int, int));
void applyf(int current);
void bstree_apply_infix(struct t_btree *root, void (*applyf)(int));
void bstree_apply_prefix(struct t_btree *root, void (*applyf)(int));
void bstree_apply_postfix(struct t_btree *root, void (*applyf)(int));


#endif  // SRC_BST_H_
