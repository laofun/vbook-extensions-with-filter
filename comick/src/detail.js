function execute(url) {
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    // Lấy tất cả các thẻ thể loại
    let categoryElements = doc.select(".meta.box a[href~=genres]");
    
  }
}