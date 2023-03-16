function read_more(dots_id, mor_id, btn_id) {
  var dots = document.getElementById(dots_id);
  var moreText = document.getElementById(mor_id);
  var btnText = document.getElementById(btn_id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#128220; Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "&#128220; Read less";
    moreText.style.display = "inline";
  }
}
