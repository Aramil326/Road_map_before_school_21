#include <stdio.h>
#ifndef SRC_CIPHER_H_
#define SRC_CIPHER_H_

int reader(char *filepath);
int writer(char *filepath);
void encrypt(int n, char* filepath);
void get_new_symbol(FILE *fp2, int *flag, char c, int n);

void init();
int get_menu_num(int *menu_num);
FILE* fileopen(char *file_path);
char* input_from_user();
char* input_from_user();
int input_output_file_text(FILE *fp);
void file_write(FILE *fp);

#endif  // SRC_CIPHER_H_
