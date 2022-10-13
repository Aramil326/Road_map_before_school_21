CC=gcc
CFLAGS=-Wall -Werror -Wextra
SRC=../build

rebuild: clean all

clean:
	rm -rf $(SRC)/Quest_1 $(SRC)/Quest_2 $(SRC)/Quest_3 $(SRC)/Quest_4 $(SRC)/Quest_5

all: print_module documentation_module bst_create_test bst_insert_test bst_traverse_test

print_module:
	rm -rf *.o
	$(CC) $(CFLAGS) -c main_module_entry_point.c print_module.c
	$(CC) $(CFLAGS) -o $(SRC)/Quest_1 *.o
	rm -rf main_module_entry_point.o print_module.o

documentation_module:
	rm -rf *.o
	$(CC) $(CFLAGS) -DQUEST2 -c main_module_entry_point.c print_module.c documentation_module.c
	$(CC) $(CFLAGS) -o $(SRC)/Quest_2 *.o
	rm -rf *.o

bst_create_test:
	rm -rf *.o
	$(CC) $(CFLAGS) -c bst.c bst_create_test.c 
	$(CC) $(CFLAGS) -o $(SRC)/Quest_3 *.o
	rm -rf *.o

bst_insert_test:
	rm -rf *.o
	$(CC) $(CFLAGS) -DQUEST4 -c bst.c bst_insert_test.c 
	$(CC) $(CFLAGS) -o $(SRC)/Quest_4 *.o
	rm -rf *.o

bst_traverse_test:
	rm -rf *.o
	$(CC) $(CFLAGS) -c bst.c bst_traverse_test.c 
	$(CC) $(CFLAGS) -o $(SRC)/Quest_5 *.o
	rm -rf *.o

cpplint:
	cp ../materials/linters/CPPLINT.cfg CPPLINT.cfg
	cp ../materials/linters/cpplint.py cpplint.py
	python3 cpplint.py --extensions=c bst_create_test.c
	python3 cpplint.py --extensions=c bst_insert_test.c
	python3 cpplint.py --extensions=c bst_traverse_test.c
	python3 cpplint.py --extensions=c bst.c
	python3 cpplint.py --extensions=c bst.h
	python3 cpplint.py --extensions=c documentation_module.c
	python3 cpplint.py --extensions=c documentation_module.h
	python3 cpplint.py --extensions=c main_module_entry_point.c
	python3 cpplint.py --extensions=c print_module.c
	python3 cpplint.py --extensions=c print_module.h
	rm -rf cpplint.py CPPLINT.cfg
# leaks -atExit -- ./