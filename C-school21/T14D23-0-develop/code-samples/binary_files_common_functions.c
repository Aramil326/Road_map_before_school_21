/**
 * Функция чтения записи заданного типа из файла по ее порядковому номеру.
 * @param pfile указатель на открытый поток
 * @param index порядковый номер записи
*/
struct my_struct read_record_from_file(FILE *pfile, int index) {
    // Вычисление смещения, по которому искомая запись должна располагаться от начала файла.
    int offset = index * sizeof(struct my_struct);
    // Перемещение указателя позиции на вычисленное смещение от начала файла
    fseek(pfile, offset, SEEK_SET);

    // Чтение записи указанного типа из файла
    struct my_struct record;
    fread(&record, sizeof(struct my_struct), 1, pfile);

    // В целялх безопасности возвращаем указатель позиции файла в начало файла
    rewind(pfile);

    // Возвращаем прочитанную запись
    return record;
}

/**
 * Функция внесения записи указанного типа в файл по указанному индексу
 * @param pfile указатель на открытый поток
 * @param record_to_write запись для чтения
 * @param index индекс, куда нужно вставить
*/
void write_record_in_file(FILE *pfile, const struct my_struct *record_to_write, int index) {
    // Вычисление смещения, по которому искомая запись должна располагаться от начала файла.
    int offset = index * sizeof(struct my_struct);
    // Перемещение указателя позиции на вычисленное смещение от начала файла
    fseek(pfile, offset, SEEK_SET);

    // Внести запись указанного типа в файл
    fwrite(record_to_write, sizeof(struct my_struct), 1, pfile);

    // На всякий случай заставляем подсистему ввода-вывода прямо сейчас записать содержимое буфера в файл
    fflush(pfile);

    // В целялх безопасности возвращаем указатель позиции файла в начало файла
    rewind(pfile);
}

/**
 * Функция взаимного переноса двух записей в файле по их индексам.
 * @param pfile указатель на открытый поток
 * @param record_index1 индекс первого файла
 * @param record_index2 индекс второго файла
*/
void swap_records_in_file(FILE *pfile, int record_index1, int record_index2) {
    // Прочитать обе записи из файла в переменные
    struct my_struct record1 = read_record_from_file(pfile, record_index1);
    struct my_struct record2 = read_record_from_file(pfile, record_index2);

    // Переписать записи в файл
    write_record_in_file(pfile, &record1, record_index2);
    write_record_in_file(pfile, &record2, record_index1);
}

/**
 * Функция для получения размера файла в байтах.
 * @param pfile указатель на открытый поток
*/
int get_file_size_in_bytes(FILE *pfile) {
    int size = 0;
    fseek(pfile, 0, SEEK_END);    // Переместите указатель позиции в конец файла.
    size = ftell(pfile);          // Прочитать количество байтов от начала файла до указателя текущей позиции.
    rewind(pfile);                // Из соображений безопасности переместите указатель в обратное начало файла.
    return size;
}

/**
 * Функция для получения количества записей в файле
 * @param pfile указатель на открытый поток
*/
int get_records_count_in_file(FILE *pfile) {
    return get_file_size_in_bytes(pfile) / sizeof(struct my_struct);
}
