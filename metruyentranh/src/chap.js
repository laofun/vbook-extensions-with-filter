function execute(url) {
    // url = url.replace("m.blogtruyen.vn", "blogtruyen.vn");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        var imgs = [];
        doc.select("#barChapter > img").forEach(e => {
            let url = e.attr("src") || e.attr("data-src");
            if (url.indexOf("donate.png") === -1 && url.indexOf("creblogtruyen.jpg") === -1) {
                imgs.push(url);
            }
        });
        return Response.success(imgs);
    }
    return null;
}