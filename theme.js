let themeSelect = document.getElementById("theme");

// load saved theme preference
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  themeSelect.value = savedTheme;
  document.body.classList.toggle("dark", savedTheme === "dark");
}

// Save theme preference when changed
themeSelect.addEventListener("change", function () {
  let selectedTheme = themeSelect.value;
  localStorage.setItem("theme", selectedTheme);
  document.body.classList.toggle("dark", savedTheme === "dark");
  alert("Theme preference saved!");
});
