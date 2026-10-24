// Go back to the previous page, or open YouTube home if there is no history.
document.getElementById("back").addEventListener("click", function () {
  if (history.length > 1) {
    history.back();
  } else {
    location.href = "https://www.youtube.com/";
  }
});
