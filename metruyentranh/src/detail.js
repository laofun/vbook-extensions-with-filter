load("config.js");
function execute(url) {
    var response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        let info = doc.select(".banner_detail_form .info");
        var title = info.select("p.title");
        title.select("span").remove();

        // Tiếp tục xử lý nếu truyện phù hợp
        var author = doc.select(".banner_detail_form p.subtitle a").first().text();
        var desc = info.select(".content");
        desc.select("span.fold_open").remove();
        desc.select("span.fold_close").remove();
        return Response.success({
            name: title.text(),
            cover: doc.select(".banner_detail_form .cover img").first().attr("src"),
            host: BASE_URL,
            author: author,
            description: desc.html(),
            ongoing: doc.select(".banner_detail_form .tip .block span").last().html().indexOf("Hoàn thành") >= 0,
        });
    }
    return null;
}