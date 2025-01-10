load("config.js");
function execute(url, page) {
  let next = null;
  let novelList = [];

  novelList.push({
    name: "Thám Tử Conan",
    link: "https://metruyentranh.pro/truyen-tranh/tham-tu-conan-3378",
    cover: "https://cdn.metruyentranh.pro/46394/tham-tu-conan-7281.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Yu-Gi-Oh! Vua Trò Chơi",
    link: "https://metruyentranh.pro/truyen-tranh/vua-tro-choi-full-mau-33266",
    cover: "https://cdn.metruyentranh.pro/175450/vua-tro-choi-full-mau.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Kattobi Itto - Đường Dẫn Đến Khung Thành",
    link: "https://metruyentranh.pro/truyen-tranh/kattobi-itto-duong-dan-den-khung-thanh-bo-1-17173",
    cover: "https://cdn.metruyentranh.pro/84280/kattobi-itto-duong-dan-den-khung-thanh-b-3831.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Naruto - Cửu Vĩ Hồ Ly",
    link: "https://metruyentranh.pro/truyen-tranh/naruto-cuu-vi-ho-ly-30021",
    cover: "https://cdn.metruyentranh.pro/119964/naruto-cuu-vi-ho-ly.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Naruto - Màu",
    link: "https://metruyentranh.pro/truyen-tranh/cuu-vi-ho-ly-mau-36457",
    cover: "https://cdn.metruyentranh.pro/235830/cuu-vi-ho-ly-mau-139.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "One-Punch Man",
    link: "https://metruyentranh.pro/truyen-tranh/anh-hung-onepunch-3172",
    cover: "https://cdn.metruyentranh.pro/43890/anh-hung-onepunch.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Toriko - Thợ Săn Ẩm Thực",
    link: "https://metruyentranh.pro/truyen-tranh/tho-san-am-thuc-31008",
    cover: "https://cdn.metruyentranh.pro/137260/toriko.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Shaman King - Vua pháp thuật",
    link: "https://metruyentranh.pro/truyen-tranh/vua-phap-thuat-867",
    cover: "https://cdn.metruyentranh.pro/13650/shaman-king.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Dragon Ball - Bảy Viên Ngọc Rồng",
    link: "https://metruyentranh.pro/truyen-tranh/dragon-ball-bay-vien-ngoc-rong-2485",
    cover: "https://cdn.metruyentranh.pro/35571/dragon-ball-bay-vien-ngoc-rong.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "One Piece - Đảo Hải Tặc",
    link: "https://metruyentranh.pro/truyen-tranh/dao-hai-tac-17798",
    cover: "https://cdn.metruyentranh.pro/91691/dao-hai-tac-5452.jpg",
    host: BASE_URL,
  });
  novelList.push({
    name: "Doraemon",
    link: "https://metruyentranh.pro/truyen-tranh/doraemon-14098",
    cover: "https://cdn.metruyentranh.pro/57230/doraemon-3368.jpg",
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
