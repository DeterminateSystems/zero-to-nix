(() => {
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const setting = localStorage.getItem("vueuse-color-scheme") || "auto";
  if (setting === "dark" || (prefersDark && setting !== "light"))
    document.documentElement.classList.toggle("dark", true);
})();
