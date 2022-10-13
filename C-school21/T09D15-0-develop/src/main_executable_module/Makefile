CC=gcc
CFLAGS=-Wall -Werror -Wextra

rebuild: clean all
clean:
	rm -rf ../../build/Quest_3 ../../build/Quest_5 ../../build/Quest_6
all: quest3 build_with_static build_with_dynamic
	rm -rf *.o
quest3: main_executable_module.o data_io.o data_stat.o data_process.o decision.o
	$(CC) $(CFLAGS) -o ../../build/Quest_3 data_io.o data_stat.o data_process.o decision.o main_executable_module.o

data_stat.a: ../data_libs/data_stat.c
	$(CC) $(CFLAGS) -c ../data_libs/data_stat.c
	ar r ../data_libs/data_stat.a data_stat.o
	rm -rf data_stat.o
build_with_static: main_executable_module.o data_io.o data_process.o decision.o data_stat.a
	$(CC) $(CFLAGS) -o ../../build/Quest_5 *.o -L../data_libs ../data_libs/data_stat.a

data_process.so: ../data_module/data_process.c
	$(CC) $(CFLAGS) -c -fPIC ../data_libs/data_stat.c
	$(CC) $(CFLAGS) -c -fPIC ../data_module/data_process.c
	$(CC) $(CFLAGS) -shared -o /Users/azathotp/Desktop/T09D15-0/src/data_libs/data_process.so *.o
	rm -rf data_process.o data_stat.o

build_with_dynamic: main_executable_module.o data_io.o decision.o data_process.so
	$(CC) $(CFLAGS) -o ../../build/Quest_6 *.o  -L../data_libs ../data_libs/data_process.so -Wl,-rpath,../data_libs/data_process.so


main_executable_module.o: main_executable_module.c
	$(CC) $(CFLAGS) -o main_executable_module.o -c main_executable_module.c
data_io.o: ../data_libs/data_io.c
	$(CC) $(CFLAGS) -o data_io.o -c ../data_libs/data_io.c
data_stat.o: ../data_libs/data_stat.c
	$(CC) $(CFLAGS) -o data_stat.o -c ../data_libs/data_stat.c
data_process.o: ../data_module/data_process.c
	$(CC) $(CFLAGS) -o data_process.o -c ../data_module/data_process.c
decision.o: ../yet_another_decision_module/decision.c
	$(CC) $(CFLAGS) -o decision.o -c ../yet_another_decision_module/decision.c






