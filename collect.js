// 初始化當前顯示的圖片索引
let currentPhoto = 1;

// 儲存所有圖片的路徑
const photos = [
    'images/collect-photo1.jpg',  // 請將這些圖片路徑改成你的圖片實際路徑
    'images/collect-photo2.jpg',
    'images/collect-photo3.jpg'
];

// 根據當前索引切換圖片
function changePhoto(direction) {
    // 更新當前顯示的圖片索引
    currentPhoto += direction;

    // 如果索引小於1，則回到最後一張圖片
    if (currentPhoto < 1) {
        currentPhoto = photos.length;
    }
    // 如果索引超過總數，則回到第一張圖片
    else if (currentPhoto > photos.length) {
        currentPhoto = 1;
    }

    // 更新圖片顯示
    document.getElementById('photo1').src = photos[currentPhoto - 1];
}
