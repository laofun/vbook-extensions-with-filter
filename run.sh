#!/bin/bash

for dir in */ ; do
    if [ -d "$dir" ]; then
        # Loại bỏ dấu '/' ở cuối tên thư mục
        folder_name=${dir%/}
        
        # Chuyển vào thư mục
        cd "$folder_name"

        # Nén nội dung thư mục, loại trừ các file .DS_Store, và lưu vào plugin.zip
        zip -r "../${folder_name}/plugin.zip" * -x "*.DS_Store"

        # Quay lại thư mục cha
        cd ..
    fi
done
