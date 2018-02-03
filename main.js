function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

const auth = config.AUTH;
const postmanToken = config.POSTMAN_TOKEN;

let resp;
let form = new FormData();

function uploadImage() {
  form.append("image", "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  form.append("title", "1x1 Pixel");
  form.append("description", "This is an 1x1 pixel image.");
  form.append("name", "pixel.gif");
  form.append("type", "gif");

  $.ajax(settings).done(function (response) {
    resp = response;
    console.log(response);
  });

  window.location = "view.html"
}

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.imgur.com/3/image",
  "method": "POST",
  "headers": {
    "authorization": auth,
    // "cache-control": "no-cache",
    // "postman-token": postmanToken
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}