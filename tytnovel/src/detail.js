load("config.js");
function execute(url) {
    let sid = url.match(/([a-z0-9]{24})/)[1];
    let response = fetch(`${BASE_HOST}/api/v2/stories/${sid}/detail`,{
        method: 'GET',
        headers: {
            'client-id': 'simbo',
            'client-language': 'en',
            'client-platform': 'ios',
            'client-token': 'simbo',
            'client-version': BASE_VERSION,
        }
    });
    if (response.ok) {
        let json = response.json().data;
        let genres = [];
        json.genre.forEach(e => {
            genres.push({
                title: e,
                input: e,
                script: "source.js"
            });
        });
        return Response.success({
            name: json.title,
            cover: json.cover,
            author: json.author,
            description: json.desc,
            genres: genres,
            detail: json.star + " đánh giá<br>" + json.chapter_count + " chương" + "<br>" + json.view_count + " đọc",
            ongoing: json.full === false
        });
    }
    return Response.success('Many Request!');
}
