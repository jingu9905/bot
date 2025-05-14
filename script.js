// script.js
function toggleBot() {
  const status = document.getElementById('status');
  if (status.textContent.includes("꺼짐")) {
    status.textContent = "봇 상태: 켜짐 🔥";
  } else {
    status.textContent = "봇 상태: 꺼짐 ❄️";
  }
}
