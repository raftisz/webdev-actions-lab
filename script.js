const helloBtn = document.getElementById("helloBtn");
const themeBtn = document.getElementById("themeBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", () => {
  message.textContent = "สวัสดีครับ! ขอบคุณที่แวะมาเยี่ยมชมเว็บของผม";
});

// โหลดธีมที่เคยเลือกไว้
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
