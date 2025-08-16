let themeSelect = document.getElementById("theme");

let savedTheme = localStorage.getItem("theme")
if (savedTheme) {
  themeSelect.value = savedTheme;
} else {

}