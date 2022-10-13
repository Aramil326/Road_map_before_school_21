read -p "Введите путь: " filepath

if [ -e $file ]; then
    totalNumberOfRecords=$(awk 'END{print NR}' ~/$filepath)

    countOfUniqueValues=$(awk '{print $1}' ~/$filepath | sort | uniq | wc -l)

    unicHash=$(awk 'END{print NR}' ~/$filepath)

    echo $totalNumberOfRecords $countOfUniqueValues $unicHash
fi


#  Desktop/T02D02-0/src/files.log