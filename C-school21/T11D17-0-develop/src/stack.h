#ifndef SRC_STACK_H_
#define SRC_STACK_H_

struct stack {
    int current;
    struct stack *prev;
};

struct stack* init(int current);
void push(struct stack** root, int current_num);
void pop(struct stack** root);
void destroy(struct stack* root);


#endif  // SRC_STACK_H_
