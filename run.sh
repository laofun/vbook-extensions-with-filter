#!/bin/bash
java --module-path javafx-sdk-21.0.2/lib --add-modules javafx.controls,javafx.fxml,javafx.web -jar ExtensionMaker.jar
# for dir in */ ; do
#     if [ -d "$dir" ] && [ "$dir" != "javafx-sdk-21.0.2/" ]; then
#         # Loại bỏ dấu '/' ở cuối tên thư mục
#         folder_name=${dir%/}
        
#         # Chuyển vào thư mục
#         cd "$folder_name"

#         # Nén nội dung thư mục, loại trừ các file .DS_Store, và lưu vào plugin.zip
#         zip -r "../${folder_name}/plugin.zip" * -x "*.DS_Store"

#         # Quay lại thư mục cha
#         cd ..
#     fi
# done
