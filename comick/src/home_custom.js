load("config.js");
function execute(url, page) {
  let next = null;
  let novelList = [];
  novelList.push({
    name: "Dragon Ball [EN]",
    link: "https://comick.io/comic/dragon-ball?lang=en",
    cover: "https://meo2.comick.pictures/bNxL8.jpg",
    host: BASE_URL,
  });
  return Response.success(novelList, next);
}