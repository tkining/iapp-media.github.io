var DEGBUG = 1;
$(function () {
  // 'use strict';
  // Demo
  // -------------------------------------------------------------------------
  var current = 0;
  var width = getValue('w');
  var height = getValue('h');
  if(DEGBUG){
    width=640;
    height=960;
  }
  console.log(width,height);
  (function () {
    var $image = $('.img-container > img'),
    $dataX = $('#dataX'),
    $dataY = $('#dataY'),
    $dataHeight = $('#dataHeight'),
    $dataWidth = $('#dataWidth'),
    $dataRotate = $('#dataRotate'),
    options = {
          // strict: false,
          // responsive: false,
          // checkImageOrigin: false

          // modal: false,
          // guides: false,
          // highlight: false,
          // background: false,

          // autoCrop: false,
          autoCropArea: 1.0,
          dragCrop: false,
          movable: false,
          resizable: false,
          // rotatable: false,
          // zoomable: false,
          // touchDragZoom: false,
          // mouseWheelZoom: false,

          // minCanvasWidth: 320,
          // minCanvasHeight: 180,
          // minCropBoxWidth: 480,
          // minCropBoxHeight: 90,
          // minContainerWidth: 320,
          // minContainerHeight: 180,

          // build: null,
          // built: null,
          // dragstart: null,
          // dragmove: null,
          // dragend: null,
          // zoomin: null,
          // zoomout: null,

          aspectRatio: (width / height),
          preview: '.img-preview',
          crop: function (data) {
            $dataX.val(Math.round(data.x));
            $dataY.val(Math.round(data.y));
            $dataHeight.val(Math.round(data.height));
            $dataWidth.val(Math.round(data.width));
            $dataRotate.val(Math.round(data.rotate));
          }
        };

        $image.on({
          'build.cropper': function (e) {
            console.log(e.type);
          },
          'built.cropper': function (e) {
            console.log(e.type);
          },
          'dragstart.cropper': function (e) {
            console.log(e.type, e.dragType);
          },
          'dragmove.cropper': function (e) {
            console.log(e.type, e.dragType);
          },
          'dragend.cropper': function (e) {
            console.log(e.type, e.dragType);
          },
          'zoomin.cropper': function (e) {
            console.log(e.type);
          },
          'zoomout.cropper': function (e) {
            console.log(e.type);
          }
        }).cropper(options);


    // Methods
    $(document.body).on('click', '[data-method]', function () {
      var data = $(this).data(),
      $target,
      result;
          // console.log(data);
          if (data.method) {
        data = $.extend({}, data); // Clone a new one

        if (typeof data.target !== 'undefined') {
          $target = $(data.target);

          if (typeof data.option === 'undefined') {
            try {
              data.option = JSON.parse($target.val());
            } catch (e) {
              console.log(e.message);
            }
          }
        }

        //
        result = $image.cropper(data.method, data.option);
        // $('.img-container').hide();
        

        // console.log(result);
        if (data.method === 'getCroppedCanvas') {
          document.getElementById('preview').setAttribute('src',result.toDataURL("image/jpeg", 0.6));
          // console.log(result.toDataURL("image/jpeg", 0.6));
          console.log(document.getElementById('preview'));          
          console.log(document.getElementById('preview').src);
          document.getElementById('preview').setAttribute('src',jic.compress(document.getElementById('preview'),width,height,"jpg").src);
          // console.log(document.getElementById('preview').src);
          document.getElementById('base64').innerText = document.getElementById('preview').src.replace(/^data:image\/(png|jpeg);base64,/, "");
          document.getElementById('p'+current).setAttribute('src',document.getElementById('preview').src);
          // document.getElementById('p'+current+'b').style.backgroundImage = 'url('+document.getElementById('preview').src+')';
          $('.edit').hide();
          // console.log($('this'));
          // $('#preview').show();
        }

        if ($.isPlainObject(result) && $target) {
          try {
            $target.val(JSON.stringify(result));
          } catch (e) {
            console.log(e.message);
          }
        }

      }
    });
$(document.body).on('keydown', function (e) {

  switch (e.which) {
    case 37:
    e.preventDefault();
    $image.cropper('move', -1, 0);
    break;

    case 38:
    e.preventDefault();
    $image.cropper('move', 0, -1);
    break;

    case 39:
    e.preventDefault();
    $image.cropper('move', 1, 0);
    break;

    case 40:
    e.preventDefault();
    $image.cropper('move', 0, 1);
    break;
  }

});


    // Import image
    // var $inputImage = $('#file-input1'),
    var URL = window.URL || window.webkitURL,
    blobURL;

    if (URL) {
      $('input').change(function () {
        $('.edit').show();
        var $inputImage = $(this);
        current = $(this).attr('id').replace(/file-input/g,"");
        console.log(current);
        var files = this.files,
        file;

        if (files && files.length) {
          file = files[0];

          if (/^image\/\w+$/.test(file.type)) {
            blobURL = URL.createObjectURL(file);
            $image.one('built.cropper', function () {
              URL.revokeObjectURL(blobURL); // Revoke when load complete
            }).cropper('reset', true).cropper('replace', blobURL);
            $inputImage.val('');
          } else {
            showMessage('Please choose an image file.');
          }
        }
      });
    } else {
      $inputImage.parent().remove();
    }

  }());

});

function getValue(varname){
  var url = window.location.href;
  try{
    var qparts = url.split("?");
    if (qparts.length == 0){return "";}
    var query = qparts[1];
    var vars = query.split("&");
    var value = "";
    for (i=0; i<vars.length; i++)
    {
      var parts = vars[i].split("=");
      if (parts[0] == varname)
      {
        value = parts[1];
        break;
      }
    }
    value = unescape(value);
    value.replace(/\+/g," ");
    return value;
  }
  catch(err){
    return "";
  }
}
