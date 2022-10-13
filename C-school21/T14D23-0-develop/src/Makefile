CC=gcc
CFLAGS=-Wall -Werror -Wextra


rebuild: clean all

clean:
	rm -rf ../build/Quest_1 ../build/Quest_2 ../build/Quest_3

all: state_sort state_search clear_state




state_sort:
	$(CC) $(CFLAGS) -c state_sort.c
	$(CC) $(CFLAGS) -o ../build/Quest_1 state_sort.o
	rm -rf *.o

state_search:
	$(CC) $(CFLAGS) -c state_search.c
	$(CC) $(CFLAGS) -o ../build/Quest_2 state_search.o
	rm -rf *.o

clear_state:
	$(CC) $(CFLAGS) -c clear_state.c
	$(CC) $(CFLAGS) -o ../build/Quest_3 clear_state.o
	rm -rf *.o