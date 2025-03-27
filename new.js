function showDetails(item) {
    document.getElementById('details-text').innerText = "تفاصيل عن: " + item;
    document.getElementById('details-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('details-popup').style.display = 'none';
}

function confirmOrder(button) {
    button.textContent = "تم الطلب ✅";  // تغيير النص إلى "تم الطلب"
    button.style.background = "#4CAF50";  // تغيير لون الزر إلى أخضر
    button.style.cursor = "default";  // منع التفاعل بعد الطلب
    button.disabled = true;  // تعطيل الزر بعد الضغط
}
