font_name=$1;
icons_path="./$font_name";
root_path="../../";
css_path="$root_path/src/assets/fonts/";
scss_path="$root_path/src/assets/styles/fonts";

pwd;

rm -rf $icons_path/css/_$font_name.scss $icons_path/$font_name $css_path/$font_name.scss $css_path/$font_name;
cd $icons_path && fontcustom compile;
cp ./css/_$font_name.scss $scss_path/$font_name.scss;
mv $scss_path/$font_name.scss $scss_path/$font_name.old
sed 's,\.\./\.\./\.\./src/,,g' $scss_path/$font_name.old > $scss_path/$font_name.scss
rm -f $scss_path/$font_name.old
rm -rf ./css;
