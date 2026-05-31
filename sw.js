// Cài đặt Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Đã cài đặt');
    self.skipWaiting();
});

// Kích hoạt Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Đã kích hoạt');
});

// Bắt các yêu cầu mạng (Giúp qua bài test PWA của trình duyệt)
self.addEventListener('fetch', (event) => {
    // Để trống hoặc thêm logic cache sau này
});
