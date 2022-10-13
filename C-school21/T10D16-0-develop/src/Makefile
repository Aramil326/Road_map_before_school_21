CC=gcc
CFLAGS=-Wall -Werror -Wextra

rebuild: clean all
clean:
	rm -rf *.o ../build/Quest_1 ../build/Quest_2 ../build/Quest_3 ../build/Quest_4 ../build/Quest_5 ../build/Quest_6 
all: strlen_tests strcmp_tests strcpy_tests strcat_tests strchr_tests strstr_tests
#clean:
#	rm -rf ../build/Quest_1 ../build/Quest_2 ../build/Quest_3 ../build/Quest_4 ../build/Quest_5 ../build/Quest_6 #../build/Quest_7
# all: strlen_tests strcmp_tests strcpy_tests strcat_tests strchr_tests strstr_tests strtok_tests
# 	rm -rf *.o



strlen_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST1 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_1 *.o
	rm -rf *.o

strcmp_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST2 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_2 *.o
	rm -rf *.o

strcpy_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST3 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_3 *.o
	rm -rf *.o

strcat_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST4 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_4 *.o
	rm -rf *.o

strchr_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST5 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_5 *.o
	rm -rf *.o

strstr_tests:
	$(CC) $(CFLAGS) -c s21_string.c
	$(CC) $(CFLAGS) -DQUEST6 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_6 *.o
	rm -rf *.o

strtok_tests:
	$(CC) $(CFLAGS) -DQUEST6 -c s21_string_test.c
	$(CC) $(CFLAGS) -o ../build/Quest_7 *.o
