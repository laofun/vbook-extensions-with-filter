var excludedIds = [2,12,13,15,18,27,34,38,40,42,44,45,46,58,59,60];
var notgenres = '2,12,13,15,18,27,34,38,40,42,44,45,46,58,59,60'
// Danh sách các tên thể loại không phù hợp cho trẻ em
var excludedCategories = {}
let BASE_URL = 'https://www.nettruyenviet.com.com';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}