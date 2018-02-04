const auth = config.AUTH;
const postmanToken = config.POSTMAN_TOKEN;

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

let resp;
let form = new FormData();

function uploadImage() {
  let $img = $('img');
  localStorage.imageBase64 = $img.attr('src').replace(/.*,/, '');
  form.append("image", localStorage.imageBase64);

  $.ajax(settings).done(function (response) {
    console.log(response);
    let resp = JSON.parse(response);
    let imgId = String(resp.data.link).split('/')[3];

    window.location = "view.html?id=" + imgId;
  });
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