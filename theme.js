let themeSelect = document.getElementById("theme");

let savedTheme = localStorage.getItem("theme")
if (savedTheme) {
  themeSelect.value = savedTheme;
  document.body.classList("dark", savedTheme === "dark");
}

themeSelect.addEventListener('change', function () {
  let selectedTheme = themeSelect.value;
  localStorage.setItem("theme", selectedTheme)
})