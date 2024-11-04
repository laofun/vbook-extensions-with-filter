load('config.js');

function execute(url) {
    // // Đảm bảo URL kết thúc bằng dấu "/"
    // if (url.slice(-1) !== "/")
    //     url = url + "/";
    
    // Khởi tạo và mở trình duyệt
    let browser = Engine.newBrowser();
    browser.launchAsync(url);

    // Định nghĩa đoạn JavaScript để thực hiện yêu cầu AJAX
    let injectJs = `
        function loadChapterList(comicId) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "ajax?handler=getListChapterByComicId", true);
            // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = document.createElement("div");
                    data.className = "chapter-list";
                    data.textContent = xhr.responseText;
                    document.body.appendChild(data);
                }
            };
            var body = JSON.stringify({
                comicId: comicId,
                sort: 0,
                isFirstLoadFb: true,
                isAuthenticated: false
            });
            // console.log(body);
            xhr.send(body);
        }
    `;
    // console.log(injectJs);
    /**
     * Hàm để tải danh sách chương truyện từ AJAX
     * @param {string} comicId - ID của truyện tranh
     * @returns {string} - Dữ liệu JSON chứa danh sách chương
     */
    function loadChapterListAjax(comicId) {
        console.log('loadChapterListAjax');
        // Inject và gọi hàm loadChapterList trong trình duyệt
        // browser.callJs(injectJs + `loadChapterList('${comicId}');`, 100);
        var retry = 0;
        var json = '';
        
        // Thử tải dữ liệu với tối đa 5 lần
        while (retry < 5) {
            sleep(1000); // Chờ 2 giây
            let doc = browser.html();
            // console.log(doc);
            var data = doc.select("#detail-list-select a");
            if (data.length > 0) {
                try {
                    json = data;
                    break;
                } catch (e) {
                    // Nếu có lỗi khi phân tích JSON, tiếp tục thử lại
                }
            }
            retry++;
        }
        return json;
    }

    /**
     * Hàm chờ URL chứa thông tin danh sách chương
     * @returns {string} - Dữ liệu JSON chứa danh sách chương
     */
    function waitChapterListUrl() {
        console.log('waitChapterListUrl');
        // Chờ URL phù hợp được tải
        browser.waitUrl(".*?ajax\\?handler=getListChapterByComicId.*?", 1000);
        var urls = JSON.parse(browser.urls());
        var json = '';
        urls.forEach(requestUrl => {
            if (requestUrl.indexOf("getListChapterByComicId") >= 0 && !json) {
                // Giả sử comicId được lấy từ URL
                let comicId = extractComicId(url);
                json = loadChapterListAjax(comicId);
            }
        });
        return json;
    }

    /**
     * Hàm trích xuất comicId từ URL
     * @param {string} url - URL truyện
     * @returns {string} - comicId
     */
    function extractComicId(url) {
        // Giả sử comicId là phần cuối cùng của URL sau dấu "/"
        let comicId = /truyen-tranh\/([^\/]+)-(\d+)/g.exec(url)[2];
        console.log('extractComicId: ' + comicId);
        return comicId;
    }

    var chapters = '';
    var retry = 0;

    // Thử tìm phần tử chứa danh sách chương với tối đa 5 lần
    while (retry < 5) {
        sleep(1000); // Chờ 2 giây
        let doc = browser.html();
        if (doc.select("#chapterlistload").length > 0) {
            // Cuộn đến phần chứa danh sách chương để kích hoạt tải dữ liệu
            browser.callJs("document.getElementById('chapterlistload').scrollIntoView();", 100);
            chapters = waitChapterListUrl();
            break;
        }
        retry++;
    }

    // Đóng trình duyệt sau khi hoàn thành
    browser.close();
    if (chapters) {
        // console.log(json);
        let list = [];

        chapters.forEach(item => {
            // console.log(item);
            list.push({
                name: item.text(),
                url: BASE_URL + item.attr("href"),
            });
        });

        list.sort((a, b) => {
            let aNum = Number(a.name.match(/\d+/));
            let bNum = Number(b.name.match(/\d+/));
            return aNum - bNum;
        });


        return Response.success(list);
    }
    return null;
}
