CC=gcc
CFLAGS=-Wall -Werror -Wextra


rebuild: clean all

all: cipher logging_cipher

clean:
	rm -rf ../build/cipher ../build/logging_cipher

cipher:
	$(CC) $(CFLAGS) -c cipher.c
	$(CC) $(CFLAGS) -o ../build/cipher cipher.o
	rm -rf *.o

logging_cipher:
	$(CC) $(CFLAGS) -DQUEST5 -c logger.c cipher.c
	$(CC) $(CFLAGS) -o ../build/logging_cipher logger.o cipher.o
	rm -rf *.o

style:
	cp ../materials/linters/CPPLINT.cfg CPPLINT.cfg
	cp ../materials/linters/cpplint.py cpplint.py
	python3 cpplint.py --extensions=c cipher.c
	python3 cpplint.py --extensions=c cipher.h
	python3 cpplint.py --extensions=c logger.c
	python3 cpplint.py --extensions=c logger.h
	python3 cpplint.py --extensions=c log_levels.h
	rm -rf CPPLINT.cfg
	rm -rf cpplint.py