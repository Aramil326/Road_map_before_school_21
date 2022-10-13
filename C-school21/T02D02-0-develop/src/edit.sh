read -p "Введите путь: " filepath
read -p "Введите строку поиска: " search
read -p "Введите строку замены: " replace


if [[ $search != "" && $replace != "" ]]; then
    sed -i ".bak" "s/$search/$replace/gi" ~/$filepath
    
    path=$(basename $filepath)
    size=$(stat -f %z ~/$filepath)
    date=$(date "+%Y-%m-%d %H:%M")
    sha=$(shasum -a 256 ~/$filepath | awk '{print$1}')
    sizelog="src/${path}"
    
    printf '\n%s -%s -%s -%s sha256' "$sizelog" "$size" "$date" "$sha" >> files.log
fi



#  Desktop/T02D02-0/src/history_of_vim.txt