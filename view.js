$(document).ready(main);

function main(){
  getImageId();
}

let w = 960;
let h = 720;

// https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
function getImageId() {
  const params = (new URL(document.location)).searchParams;
  const id = params.get("id");
  console.log(id);

  const imgLink = "https://i.imgur.com/" + id;
  console.log(imgLink);
  $('.frame').css("background-image", "url(" + imgLink + ")");
  $('.frame').css("background-size", w + "px " + h + "px");
  $('.frame').css("width", w/4);
  $('.frame').css("height", h/2);
}
