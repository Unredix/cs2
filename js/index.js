window.addEventListener("scroll", function () {
  //let element = document.getElementById("myElement");
  if (window.scrollY > 50) {
    this.document.getElementById("article1").classList.add("animate");
  }
  if (window.scrollY > 300) {
    this.document.getElementById("article2").classList.add("animate");
  }
  if (window.scrollY > 700) {
    this.document.getElementById("article3").classList.add("animate");
  }
  if (window.scrollY > 1300) {
    this.document.getElementById("article4").classList.add("animate");
  }
  if (window.scrollY > 1500) {
    this.document.getElementById("article5").classList.add("animate");
  } else {
  }
});
