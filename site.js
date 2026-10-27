// Loads YouTube only after a click (privacy-friendly, no tracking before consent).
document.querySelectorAll(".video[data-yt]").forEach(function (box) {
  var btn = box.querySelector("button");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var id = box.getAttribute("data-yt");
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    f.title = box.getAttribute("data-title") || "Video";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.referrerPolicy = "strict-origin-when-cross-origin";
    box.innerHTML = "";
    box.appendChild(f);
  });
});
