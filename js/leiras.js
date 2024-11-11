function resizeIframe() {
  if (window.innerWidth < 1300) {
    const iframe = document.createElement("iframe");
    iframe.width = "400";
    iframe.height = "225";
    iframe.src =
      "https://www.youtube.com/embed/c80dVYcL69E?si=oFr_Ns_dHSj1_DZl";
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerpolicy = "strict-origin-when-cross-origin";
    iframe.allowfullscreen = true;

    const trailerVideo = document.querySelector(".trailer-video");
    trailerVideo.innerHTML = "";
    trailerVideo.appendChild(iframe);
  }
  if (window.innerWidth > 1300) {
    const iframe = document.createElement("iframe");
    iframe.width = "1120";
    iframe.height = "630";
    iframe.src =
      "https://www.youtube.com/embed/c80dVYcL69E?si=oFr_Ns_dHSj1_DZl";
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerpolicy = "strict-origin-when-cross-origin";
    iframe.allowfullscreen = true;

    const trailerVideo = document.querySelector(".trailer-video");
    trailerVideo.innerHTML = "";
    trailerVideo.appendChild(iframe);
  }
}

window.addEventListener("resize", resizeIframe);
resizeIframe(); // Run the function once on page load
