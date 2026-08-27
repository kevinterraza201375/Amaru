const video = document.getElementById("projectVideo");
const empty = document.getElementById("videoEmpty");
const upload = document.getElementById("videoUpload");

function updateVideoState() {
  const hasSource = video.currentSrc && !video.currentSrc.endsWith("video.mp4") ? true : false;
  const source = video.querySelector("source");
  if (source && source.getAttribute("src") === "assets/video.mp4") {

    video.addEventListener("loadeddata", () => empty.classList.add("hidden"), { once: true });
    video.addEventListener("error", () => empty.classList.remove("hidden"), { once: true });
  }
}
updateVideoState();

upload.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  video.src = url;
  video.removeAttribute("poster");
  video.load();
  empty.classList.add("hidden");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
