// Lấy các phần tử cần thiết
const rejectBtn = document.getElementById('rejectBtn');
const acceptBtn = document.getElementById('acceptBtn');
const heartOverlay = document.getElementById('heartOverlay');

// Hàm để di chuyển nút "Không Chấp Nhận" đến vị trí ngẫu nhiên
function moveRejectButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = rejectBtn.getBoundingClientRect();

    // Tính toán kích thước của nút và container
    const maxX = containerRect.width - btnRect.width - 20; // thêm margin để tránh nút bị cắt
    const maxY = containerRect.height - btnRect.height - 20;

    // Tạo tọa độ ngẫu nhiên
    const randX = Math.floor(Math.random() * maxX) + 10; // thêm margin
    const randY = Math.floor(Math.random() * maxY) + 10;

    // Đặt vị trí mới cho nút
    rejectBtn.style.position = 'absolute';
    rejectBtn.style.left = `${randX}px`;
    rejectBtn.style.top = `${randY}px`;
}

// Thêm sự kiện khi di chuột qua nút "Không Chấp Nhận"
rejectBtn.addEventListener('mouseenter', moveRejectButton);

// Cũng có thể di chuyển khi người dùng cố gắng nhấn vào nút
rejectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveRejectButton();
});

// Hàm để hiển thị lớp phủ trái tim
function showHeartOverlay() {
    heartOverlay.classList.add('show');
    // Nếu muốn lớp phủ trái tim hiển thị mãi mãi, không cần thêm dòng sau
    // Nếu muốn lớp phủ có thể ẩn sau khi hiển thị, bạn có thể thêm thời gian ẩn
    // Ví dụ:
    // setTimeout(() => {
    //     heartOverlay.classList.remove('show');
    // }, 5000);
}

// Thêm sự kiện khi nhấn nút "Chấp nhận Lời Xin Lỗi"
acceptBtn.addEventListener('click', showHeartOverlay);