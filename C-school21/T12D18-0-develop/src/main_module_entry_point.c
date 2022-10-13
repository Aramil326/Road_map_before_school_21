#include <stdio.h>
#include <stdarg.h>
#include <stdio.h>
#include "documentation_module.h"
#include "print_module.h"

void output(int arr[], int document_count, ...);

int main() {
    print_log(print_char, Module_load_success_message);
    #ifdef QUEST2
    int availability_mask[Documents_count];
    check_available_documentation_module(availability_mask, validate, Documents_count, Documents);

    output(availability_mask, Documents_count, Documents);
    #endif
    return 0;
}

void output(int *arr, int document_count, ...) {
    char *document;
    va_list vl;
    va_start(vl, document_count);
    for (int i = 0; i < document_count; i++) {
        document = va_arg(vl, char*);
        printf("%d. %-15s: ", i + 1, document);
        if (arr[i]) {
            printf("available\n");
        } else {
            printf("unavailable\n");
        }
    }
}
