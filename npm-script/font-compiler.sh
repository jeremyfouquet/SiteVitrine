for font_name in "$@"
do
    echo "Searching for ./custom-fonts/$font_name"
    if [ ! -d ./custom-fonts/$font_name ];
    then
        echo "⟹  Font-compiler did not find $font_name folder" 1>&2;
    else
        cd ./custom-fonts;
        ./compile_font.sh $font_name;
        cd -;
        echo "⟹  Font-compiler done";
    fi
done
