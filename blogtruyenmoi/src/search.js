load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let categoryExcluded = excludedIds.toString();
    let response = fetch(BASE_URL + "/timkiem/nangcao/1/0/-1/-1", {
        method: "GET",
        queries: {
            txt: key,
            p: page,
            CategoryExcluded: categoryExcluded
        }
    });
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        let next = doc.select(".pagination > li.active + li").last().text();

        doc.select(".list .tiptip").forEach(e => {
            let id = e.attr("data-tiptip");

            let info = doc.select("#" + id);
            novelList.push({
                name: e.select("a").text(),
                link: e.select("a").attr("href"),
                cover: info.select("img").attr("src"),
                host: BASE_URL
            });
        });

        return Response.success(novelList, next)
    }
    return null;
}
