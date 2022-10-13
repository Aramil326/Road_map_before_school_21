#include <stdio.h>
#include <stdlib.h>
#include "list.h"
#include "door_struct.h"

struct node* init(struct door* door) {
    if (door == NULL) {
        return NULL;
    }

    struct node *root;
    root = (struct node*)malloc(sizeof(struct node));
    if (root == NULL) {
        return NULL;
    }

    root -> current = door;
    root -> next = NULL;

    return (root);
}

struct node* add_door(struct node* elem, struct door* door) {
    if (door == NULL || elem == NULL) {
        return NULL;
    }

    struct node *temp, *p;
    temp = (struct node*)malloc(sizeof(struct node));
    if (temp == NULL) {
        return NULL;
    }

    p = elem -> next;  // сохранение указателя на следующий узел
    elem ->next = temp;  // предыдущий узел указывает на создаваемый
    temp->current = door;  // сохранение поля данных добавляемого узла
    temp->next = p;  // созданный узел указывает на следующий элемент

    return (temp);
}

struct node* find_door(int door_id, struct node* root) {
    struct node *p;
    p = root;

    while (p != NULL) {
        if (p->current->id == door_id) {
            return p;
        } else {
            p = p->next;
        }
    }

    return NULL;
}

struct node* remove_door(struct node* elem, struct node* root) {
    if (elem == NULL || root == NULL) {
        return NULL;
    }

    struct node *temp;
    temp = root;
    while (temp->next != elem) {  // просматриваем список начиная с корня
        // пока не найдем узел, предшествующий elem
        temp = temp->next;
    }

    temp->next = elem->next;  // переставляем указатель
    // free(temp);

    return (temp);
}

void destroy(struct node* root) {
    if (root -> next != NULL) {
        destroy(root -> next);
    } else {
        free(root);  // освобождение памяти текущего корня
    }
}
