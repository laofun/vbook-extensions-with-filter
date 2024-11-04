load("config.js");
function execute(url, page) {
  let next = null;
  let novelList = [];

  novelList.push({
    name: "Dragon Ball - Bảy Viên Ngọc Rồng",
    link: "https://metruyentranh.pro/truyen-tranh/dragon-ball-bay-vien-ngoc-rong-2485",
    cover: "https://cdn.metruyentranh.pro/35571/dragon-ball-bay-vien-ngoc-rong.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Đôrêmon Truyện Dài",
    link: "https://metruyentranh.pro/truyen-tranh/doremon-truyen-dai-3652",
    cover: "https://cdn.metruyentranh.pro/50090/doremon-truyen-dai.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Ô Long Viện",
    link: "https://metruyentranh.pro/truyen-tranh/o-long-vien-756",
    cover: "https://cdn.metruyentranh.pro/12170/o-long-vien.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Ô Long Viện Tình Huynh Đệ",
    link: "https://metruyentranh.pro/truyen-tranh/o-long-vien-tinh-huynh-de-33256",
    cover: "https://cdn.metruyentranh.pro/175340/o-long-vien-tinh-huynh-de.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Ô Long Viện Linh Vật Sống (Truyện dài)",
    link: "https://metruyentranh.pro/truyen-tranh/o-long-vien-linh-vat-song-15096",
    cover: "https://cdn.metruyentranh.pro/66770/o-long-vien-linh-vat-song.jpg",
    host: BASE_URL,
  });

  
  return Response.success(novelList, next);
}
