load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("iframe,ins").remove();
        return Response.success(doc.select("div#chapterContent").html());
    }

    return null;
}
// function execute(url) {
//     let response = fetch(url,{
//         method: 'GET',
//         headers: {
//             // 'Authorization': BASE_TOKEN,
//             'client-id': 'simbo',
//             'client-language': 'en',
//             'client-platform': 'android',
//             'client-token': 'tyt',
//             'client-version': '55',
//             'user-id': BASE_USER
//         }
//     });
//     if (response.ok) {
//         let json = response.json();
//         let content = json.data.content
//             .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
//             .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
//         return Response.success(content)
//     }
// }