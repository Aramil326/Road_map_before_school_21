#include <stdio.h>
#include <math.h>

void coder();
void decoder();

int main(int args, char *argv[]) {
    if (args == 2) {
        int i = *argv[1];

        if (i == '1') {
            decoder();
        } else if (i == '0') {
            coder();
        }
    }
}

void coder() {
    char c, b;
    scanf("%c%c", &c, &b);

    while (c != '\n') {
        if (c != ' ' && b != ' ') {
            printf("n/a");
            break;
        }

        if (c != ' ') {
            printf("%X ", (int)c);
        }

        scanf("%c", &c);

        if (b == '\n') {
            printf("%X ", (int)c);
            break;
        }
    }
}

void decoder() {
    int c;
    char b;

    scanf("%X%c", &c, &b);

    while (1) {
        if ((char)c != ' ' && b != ' ') {
            printf("n/a");
            break;
        }
        printf("%c ", c);
        scanf("%X%c", &c, &b);
        if (b == '\n') {
            printf("%c\n", c);
            break;
        }
    }
}
