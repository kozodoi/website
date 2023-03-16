function show_abstract(dots_id, abs_id, btn_id) {
  var dots = document.getElementById(dots_id);
  var moreText = document.getElementById(abs_id);
  var btnText = document.getElementById(btn_id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "&#128220; Abstract";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "&#128220; Hide abstract";
    moreText.style.display = "inline";
  }
}