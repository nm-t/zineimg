$(document).ready(main);

function main(){
  getImageId();
}

// https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
function getImageId() {
  let params = (new URL(document.location)).searchParams;
  let id = params.get("id");
  console.log(id);
}