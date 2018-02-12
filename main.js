const auth = config.AUTH;

function previewFile() {
  var preview = document.querySelector('.thumb');
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
console.log(form);

function uploadImage() {
  $("#upload-butt").toggle();
  $("#loader").toggle();

  let $img = $('.thumb');
  localStorage.imageBase64 = $img.attr('src').replace(/.*,/, '');
  form.append("image", localStorage.imageBase64);
  form.append("album", "WqXoc");

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
    "authorization": auth
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}