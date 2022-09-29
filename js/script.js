$(document).ready(() => {
  //Change Language
  $("#language").click(function () {
    setLanguage("EN");
  });
  //Calendar
  // var disableDates = ["21-12-2021", "23-12-2021", "25-12-2021","27-12-2021"];
  var options = {
    format: "yyyy-mm-dd",
    todayHighlight: true,
    autoclose: true,
    // To Disable Certain Dates
    //beforeShowDay: function (date) {
    //  // dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    //  //   if(disableDates.indexOf(dmy) != -1){
    //  //       return false;
    //  //   }
    //  //   else{
    //  //       return true;
    //  //   }

    //  // Activate Monday and Thursday of every week, disable other days.
    //  // Week Starts from Sunday = 0, Monday = 1, ... etc
    //  //if (date.getDay() == 1 || date.getDay() == 4) return true;
    //  //else return false;
    //    return true;
    //},
  };

  if ($(".date-field").length) {
    $(".date-field").datepicker(options);
  }

  // $('.date-field').focus(function () {
  //   $(this).prop('readonly', true);
  // }).focusout(function () {
  //   $(this).prop('readonly', false);
  // });

  $("select").selectpicker({
    noneSelectedText: "لا يوجد اختيار",
    noneResultsText: "لا يوجد",
    container: 'body'
  });


  // Confirmation Digits
  $(".confirm-digit").keyup(function () {
    if ($(this).val().length >= 1) {
      var index = $(".confirm-digit").index($(this));
      if (index > 0) $(".confirm-digit:eq(" + (index - 1) + ")").focus();
    }
  });
  // OwlCarousel
  $("#medicalTeam.owl-carousel").owlCarousel({
    // stagePadding: 50,
    rtl: true,
    //loop: false,
    autoWidth: true,
    // rewind: true,
    margin: 20,
    nav: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 2,
    //   },
    //   1000: {
    //     items: 3,
    //   },
    // },
  });

  $("#categoriesCarousel.owl-carousel").owlCarousel({
    // stagePadding: 50,
    rtl: true,
    autoWidth: true,
    rewind: true,
    margin: 10,
    nav: true,
    // responsive: {
    //   0: {
    //     items: 2,
    //   },
    //   600: {
    //     items: 4,
    //   },
    //   1000: {
    //     items: 6,
    //   },
    // },
  });

  $("#badges-carousel.owl-carousel").owlCarousel({
    stagePadding: 0,
    rtl: true,
    loop: false,
    // rewind: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $("#relatedArticles.owl-carousel").owlCarousel({
    // stagePadding: 50,
    rtl: true,
    loop: false,
    // rewind: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // button[id^="chronic"]
  // $(".chronic-btn").click(function () {
  //   if ($(this).hasClass("edit")) {
  //     $(this).removeClass("edit");
  //     $(this).addClass("save");
  //     $(this).html('<i class="fas fa-check mx-1 highlight"></i>حفظ');
  //     // remove readonly from inputs
  //     var order = $(".chronic-btn").index($(this)) + 1;
  //     $(".chronic" + order).prop("readonly", false);
  //     $(".chronic" + order).prop("disabled", false);
  //     $("select").selectpicker("refresh");
  //   } else {
  //     $(this).removeClass("save");
  //     $(this).addClass("edit");
  //     $(this).html('<i class="fas fa-pencil-alt mx-1 highlight"></i>تعديل');
  //     // add readonly from inputs
  //     var order = $(".chronic-btn").index($(this)) + 1;
  //     $(".chronic" + order).prop("readonly", true);
  //     $(".chronic" + order).prop("disabled", true);
  //     $("select").selectpicker("refresh");
  //   }
  // });

  // $("#addNewChronicBtn").click(function () {
  //   if ($(this).hasClass("add")) {
  //     $(this).removeClass("add");
  //     $(this).addClass("save");
  //     $(this).text("حفظ");
  //     showPanelWithId("newChronic");
  //   } else {
  //     $(this).removeClass("save");
  //     $(this).addClass("add");
  //     $(this).text("أضف المزيد من الأمراض");
  //     showPanelWithId("newChronic");
  //   }
  // });
  //

  $('.notification-menu.dropdown-menu').on('click', function (event) {
    event.stopPropagation();
  });


  $("#payments-radios input").change(function (e) {
    if (this.id == "visaMaster") {
      $("#visaMasterPanel").slideDown();
      // add require attribute
      $("#visaMasterPanel input").attr("required", true);
    } else {
      $("#visaMasterPanel").slideUp();
      // remove require attribute
      $("#visaMasterPanel input").attr("required", false);
    }
  });
});

//functions
//Change Language
setLanguage = (language) => {
  if (language === "AR") {
    //convert to Arabic
    $("#cssFile").attr({
      href: "../css/css-ar.css",
    });
    $("#language").text("English");
  } else {
    //convert to English

    $("#cssFile").attr({
      href: "../css/css-eng.css",
    });
    $("#language").text("عربي");
  }
};

// Form Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Preview File image
function previewInputFile(inputFile) {
  if (inputFile.files && inputFile.files[0]) {
    var inputId = $(inputFile).attr("id");
    var reader = new FileReader();

    reader.onload = function (e) {
      var img = $("#" + inputId + "-img");
      $(img).attr("src", e.target.result);
    };
    reader.readAsDataURL(inputFile.files[0]);
  }
}

function previewImages(inputFile) {
  // 1. Empty the preview area
  $('.preview-area').empty();
  // 2. Loop through the files & render images
  if (inputFile.files && inputFile.files[0]) {
    var anyWindow = window.URL || window.webkitURL;
    var images = inputFile.files;
    $(images).each(function (index, value) {
      // console.log(index);
      //get a blob to play with
      var objectUrl = anyWindow.createObjectURL(value);
      // for the next line to work, you need something class="preview-area" in your html
      $('.preview-area').append(
        '<div class="attach-container"><img src="' +
        objectUrl +
        '" class="attach m-2 mx-auto mx-md-2 my-box-shadow" /><span><i class="fas fa-times image-delete" onclick="removeAttach(this, 2)"></i></span></div>'
      );
      // get rid of the blob
      window.URL.revokeObjectURL(value);
    });
  }
}

//let storedImagesFiles = new DataTransfer();
//function previewImages(inputFile) {
  // 1. Empty the preview area
  // $('.preview-area').empty();
  // 2. Loop through the files & render images
 // if (inputFile.files && inputFile.files[0]) {
  //  var anyWindow = window.URL || window.webkitURL;
   // var images = inputFile.files;

    //add new files + update input 
   // for(const image of images)
    //  storedImagesFiles.items.add(image);
    //inputFile.files = storedImagesFiles.files;
      // inputFile.prop('files', storedImagesFiles.files);
    //

    //$(images).each(function (index, value) {
      // console.log(index);
      //get a blob to play with
     // var objectUrl = anyWindow.createObjectURL(value);
      // for the next line to work, you need something class="preview-area" in your html
     // $('.preview-area').append(
     //   '<div class="attach-container"><img src="' +
     //   objectUrl +
    //    '" class="attach m-2 mx-auto mx-md-2 my-box-shadow" /><span><i class="fas fa-times image-delete" onclick="removeAttach(this, 2)"></i></span></div>'
     // );
      // get rid of the blob
    //  window.URL.revokeObjectURL(value);
   // });
//  }
//}

function previewImagesWithType(inputFile, type) {
  // 0. find the preview area
  var previewArea = $('#' + type);
  // 1. Empty the preview area
  $(previewArea).empty();
  // 2. Loop through the files & render images
  if (inputFile.files && inputFile.files[0]) {
    var anyWindow = window.URL || window.webkitURL;
    var images = inputFile.files;
    $(images).each(function (index, value) {
      //get a blob to play with
      var objectUrl = anyWindow.createObjectURL(value);
      // for the next line to work, you need something class="preview-area" in your html
      $(previewArea).append(
        `<div class="attach-container"><img src="
        ${objectUrl}
        " class="attach m-2 mx-auto mx-md-2 my-box-shadow" /><span><i class="fas fa-times ${type}-delete" onclick="removeAttach(this,'${type}')"></i></span></div>`
      );
      // get rid of the blob
      window.URL.revokeObjectURL(value);
    });
  }
}

function previewAudios(inputFile) {
  // 1. Empty the preview area
  $('.audio-preview-area').empty();
  // 2. Loop through the files & render audios
  if (inputFile.files && inputFile.files[0]) {
    var anyWindow = window.URL || window.webkitURL;
    var audios = inputFile.files;
    $(audios).each(function (index, value) {
      //get a blob to play with
      var objectUrl = anyWindow.createObjectURL(value);
      // for the next line to work, you need something class="preview-area" in your html
      $(".audio-preview-area").append(
        '<div class="attach-container"><audio controls class="mw-100 mx-1"> <source src="' + objectUrl + '" type="audio/mpeg" /> Your browser does not support the audio tag.</audio><span><i class="fas fa-times audio-delete" onclick="removeAttach(this, 1)"></i></span></div>'
      );
      // get rid of the blob
      window.URL.revokeObjectURL(value);
    });

  }
}

function previewVideos(inputFile) {
  // 1. Empty the preview area
  $('.video-preview-area').empty();
  if (inputFile.files && inputFile.files[0]) {
    var anyWindow = window.URL || window.webkitURL;
    var videos = inputFile.files;
    $(videos).each(function (index, value) {
      //get a blob to play with
      var objectUrl = anyWindow.createObjectURL(inputFile.files[0]);
      // for the next line to work, you need something class="preview-area" in your html
      $(".video-preview-area").append(
        '<div class="attach-container"><video controls class="attach m-2 mx-auto mx-md-2 my-box-shadow"><source src="' + objectUrl + '" type="video/mp4"><source src="' + objectUrl + '" type="video/ogg">Your browser does not support the video tag.</video><span><i class="fas fa-times video-delete" onclick="removeAttach(this, 3)"></i></span></div>'
      );
      // get rid of the blob
      window.URL.revokeObjectURL(inputFile.files[0]);
    });
  }
}

function showPanelWithId(panelId) {
  $("#" + panelId).slideToggle("slow");
  console.log("toggled");
}

function showLoadingScreen() {
  $("#loadingScreen").css("display", "flex");
  $("body").css("overflow", "hidden");
}

function hideLoadingScreen() {
  $("#loadingScreen").css("display", "none");
  $("body").css("overflow", "inherit");
}

function showAlert() {
  $("#dangerAlert").css("display", "block");
}

function editChronicDisease(chronicBtn) {
  var order = $(".edit-chronic-btn").index($(chronicBtn));
  $(chronicBtn).css('display', 'none');
  $('.save-chronic-btn:eq(' + order + ')').css('display', 'inline-block');
  $(".chronic" + (order + 1)).prop("readonly", false);
  $(".chronic" + (order + 1)).prop("disabled", false);
  $("select").selectpicker("refresh");
  // show add and delete buttons
  $("table#chronic" + (order + 1) + " tr td:last-child").css('display', 'table-cell');
  // $("table#chronic" + (order + 1) + " tbody tr:last-child").css('display', 'table-row');
  $('.new-medicine-table:eq(' + order + ')').css('display', 'table');
}

function saveChronicDisease(chronicBtn) {
  var order = $(".save-chronic-btn").index($(chronicBtn));
  $(chronicBtn).css('display', 'none');
  $('.edit-chronic-btn:eq(' + order + ')').css('display', 'inline-block');
  $(".chronic" + (order + 1)).prop("readonly", true);
  $(".chronic" + (order + 1)).prop("disabled", true);
  $("select").selectpicker("refresh");
  // hide add and delete buttons
  $("table#chronic" + (order + 1) + " tr td:last-child").css('display', 'none');
  // $("table#chronic" + (order + 1) + " tbody tr:last-child").css('display', 'none');
  $('.new-medicine-table:eq(' + order + ')').css('display', 'none');

}

function addNewChronic(addChronic) {
  $(addChronic).css('display', 'none');
  $('#saveNewChronicBtn').css('display', 'block');
  showPanelWithId("newChronic");
}

function saveNewChronic(saveChronic) {
  $(saveChronic).css('display', 'none');
  $('#addNewChronicBtn').css('display', 'block');
  showPanelWithId("newChronic");
}

function removeRow(row) {
  $(row).closest("tr").remove();
}

function addRow(addBtn) {
  var index = $('.new-med-btn').index(addBtn);
  var newMedicineTable = $('.new-medicine-table:eq(' + index + ')');
  var medicineTable = $('.medicine-table:eq(' + index + ')');

  var name = ($(newMedicineTable).find('#newMedicineName')).selectpicker('val');
  var portion = ($(newMedicineTable).find('#newMedicinePortion')).val();
  var every = ($(newMedicineTable).find('#newMedicineEvery')).selectpicker('val');
  var time = ($(newMedicineTable).find('#newMedicineTime')).val();

  $(medicineTable).find('tbody').prepend(`
    <tr>
      <td>${name}</td>
      <td>${portion}</td>
      <td>${every}</td>
      <td>${time}</td>
      <td style="display: table-cell">
        <button type="button" class="btn p-0" onclick="removeRow(this)">
          <i class="fas fa-times text-danger"></i>
        </button>
      </td>
    </tr>
  `);

  // var medicineTableId = $(addBtn).closest('table').attr('id');


  // var name = $('#' + medicineTableId + ' #newMedicineName').selectpicker('val');
  // var portion = $('#' + medicineTableId + ' #newMedicinePortion').val();
  // var every = $('#' + medicineTableId + ' #newMedicineEvery').selectpicker('val');
  // var time = $('#' + medicineTableId + ' #newMedicineTime').val();


  // $('#' + medicineTableId + " tbody").prepend(`
  //   <tr>
  //     <td>
  //       <select class="form-control searchable-select ${medicineTableId}" data-live-search="true">
  //        <option value="دواء 1">دواء 1</option>
  //        <option value="دواء 2">دواء 2</option>
  //        <option value="دواء 3">دواء 3</option>
  //       </select>
  //     </td>
  //     <td>
  //       <input type="number" class="form-control ${medicineTableId}" value="${portion}" />
  //     </td>
  //     <td>
  //       <select class="form-control searchable-select ${medicineTableId}" data-live-search="true">
  //         <option value="في اليوم">في اليوم</option>
  //         <option value="في الاسبوع">في الاسبوع</option>
  //       </select>
  //     </td>
  //     <td>
  //       <input type="time" class="form-control ${medicineTableId}" value="${time}" />
  //     </td>
  //     <td style="display: table-cell">
  //       <button type="button" class="btn p-0" onclick="removeRow(this)">
  //         <i class="fas fa-times text-danger"></i>
  //       </button>
  //     </td>
  //   </tr>
  // `);

  // $('#' + medicineTableId + " select:first").selectpicker('val', name);
  // $('#' + medicineTableId + " select:eq(1)").selectpicker('val', every);
  // $('select').selectpicker('refresh');
}

function removeAttach(deleteBtn, attachType) {
  // 1 for audio, 2 for images, 3 for videos, 4 for rays, 5 for tests
  // delete from filesList
  switch (attachType) {
    // audio
    case 1:
      var index = $('.audio-delete').index($(deleteBtn));
      removeFileFromFileList(index, $('#audio'));
      break;

      // Images
    case 2:
      var index = $('.image-delete').index($(deleteBtn));
      removeFileFromFileList(index, $('#attach'));
      break;

      //Videos 
    case 3:
      var index = $('.video-delete').index($(deleteBtn));
      removeFileFromFileList(index, $('#video'));
      break;

      //rays
    case 'rays':
      var index = $('.rays-delete').index($(deleteBtn));
      removeFileFromFileList(index, $('#raysInput'));
      break;
      //tests
    case 'tests':
      var index = $('.tests-delete').index($(deleteBtn));
      removeFileFromFileList(index, $('#testsInput'));
      break;
  }
  // delete preview
  $(deleteBtn).closest('.attach-container').remove();
}

function removeFileFromFileList(index, input) {
  // console.log(input.prop('files').length);
  const dt = new DataTransfer();
  for (let i = 0; i < input.prop('files').length; i++) {
    const file = input.prop('files')[i];
    if (index !== i)
      dt.items.add(file)
  }
  input.prop('files', dt.files);
  // console.log(input.prop('files'));
}

function toggleFAQ(faq) {
  var index = $('.faq').index($(faq));
  $('.faq i:eq(' + index + ')').toggleClass('rotate-180 ');
  $('.faq-answer:eq(' + index + ')').slideToggle();
}

function deleteNotification(deleteIcon) {
  $(deleteIcon).closest('.dropdown-item').remove();
}
// function stayOpen(e) {
//   // alert('here here');
//   e.stopPropagation();
//   e.preventDefault();
// }