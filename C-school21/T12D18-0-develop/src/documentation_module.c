#include <stdarg.h>
#include <string.h>
#include "documentation_module.h"

int validate(char* data) {
    int validation_result = !strcmp(data, Available_document);
    return validation_result;
}

int* check_available_documentation_module(int *arr, int (*validate)(char*), int document_count, ...) {
    char *document;
    va_list vl;
    va_start(vl, document_count);
    for (int i = 0; i < document_count; i++) {
        document = va_arg(vl, char*);
        arr[i] = validate(document);
    }
    return arr;
}
