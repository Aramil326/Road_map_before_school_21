CC=gcc
CFLAGS=-Wall -Werror -Wextra
build=../build

rebuild: clean all

all: door_struct list_test stack_test

clean:
	rm -rf *.o 
	rm -rf $(build)/Quest_1 $(build)/Quest_2 $(build)/Quest_3

door_struct:
	$(CC) $(CFLAGS) -c dmanager_module.c
	$(CC) $(CFLAGS)	-o $(build)/Quest_1 dmanager_module.o
	rm -rf *.o
list_test:
	$(CC) $(CFLAGS) -c list_test.c list.c
	$(CC) $(CFLAGS)	-o $(build)/Quest_2 list_test.o list.o
	rm -rf *.o
stack_test:
	$(CC) $(CFLAGS) -c stack.c stack_test.c
	$(CC) $(CFLAGS)	-o $(build)/Quest_3 stack.o stack_test.o
	rm -rf *.o

cpplint:
	python3 cpplint.py --extensions=c door_struct.h
	python3 cpplint.py --extensions=c dmanager_module.c
	python3 cpplint.py --extensions=c dmanager_module.h
	python3 cpplint.py --extensions=c list.c
	python3 cpplint.py --extensions=c list.h
	python3 cpplint.py --extensions=c list_test.c
	python3 cpplint.py --extensions=c list_test.h
	python3 cpplint.py --extensions=c stack.c
	python3 cpplint.py --extensions=c stack.h
	python3 cpplint.py --extensions=c stack_test.c
	python3 cpplint.py --extensions=c stack_test.h

cppcheck:
	cppcheck --enable=all --suppress=missingIncludeSystem dmanager_module.c
	cppcheck --enable=all --suppress=missingIncludeSystem list.c
	cppcheck --enable=all --suppress=missingIncludeSystem list_test.c
	cppcheck --enable=all --suppress=missingIncludeSystem stack.c
	cppcheck --enable=all --suppress=missingIncludeSystem stack_test.c