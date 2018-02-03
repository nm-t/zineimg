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
  // form.append("image", "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  // form.append("title", "1x1 Pixel");
  // form.append("description", "This is an 1x1 pixel image.");
  // form.append("name", "pixel.gif");
  // form.append("type", "gif");

  // $.ajax(settings).done(function (response) {
    // console.log(response);
    // let resp = JSON.parse(response);
    let resp = JSON.parse('{"data":{"id":"Gql8QTi","title":"1x1 Pixel","description":"This is an 1x1 pixel image.","datetime":1517657611,"type":"image\/gif","animated":false,"width":1,"height":1,"size":42,"views":0,"bandwidth":0,"vote":null,"favorite":false,"nsfw":null,"section":null,"account_url":null,"account_id":335575,"is_ad":false,"in_most_viral":false,"has_sound":false,"tags":[],"ad_type":0,"ad_url":"","in_gallery":false,"deletehash":"bvrt9shXXQ5b7sq","name":"pixel.gif","link":"https:\/\/i.imgur.com\/Gql8QTi.gif"}}');
    let imgId = String(resp.data.link).split('/')[3];

    window.location = "view.html?id=" + imgId;
  // });
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