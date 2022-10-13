#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "door_struct.h"
#include "dmanager_module.h"

#define DOORS_COUNT 15
#define MAX_ID_SEED 10000


int main() {
    struct door doors[DOORS_COUNT];

    initialize_doors(doors);
    normalyze(doors);
    lock(doors);
    output(doors);

    return 0;
}

// Doors initialization function
// ATTENTION!!!
// DO NOT CHANGE!
void initialize_doors(struct door* doors) {
    srand(time(0));

    int seed = rand() % MAX_ID_SEED;
    for (int i = 0; i < DOORS_COUNT; i++) {
        doors[i].id = (i + seed) % DOORS_COUNT;
        doors[i].status = rand() % 2;
    }
}

void normalyze(struct door* doors) {
    struct door p;
    for (int i = 0; i < DOORS_COUNT-1; i++) {
        for (int j = i + 1; j < DOORS_COUNT; j++) {
            if (doors[i].id > doors[j].id) {
                p = doors[i];
                doors[i] = doors[j];
                doors[j] = p;
            }
        }
    }
}

void lock(struct door* doors) {
    for (int i = 0; i < DOORS_COUNT; i++) {
        doors[i].status = 0;
    }
}

void output(struct door* doors) {
    for (int i = 0; i < DOORS_COUNT; i++) {
        if (i + 1 == DOORS_COUNT) {
            printf("%d, %d", doors[i].id, doors[i].status);
        } else {
            printf("%d, %d\n", doors[i].id, doors[i].status);
        }
        
    }
}
