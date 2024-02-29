$(document).ready(function () {
  $(".gallery").on("click", ".image-container img", function (e) {
    e.stopPropagation();
    const imageUrl = $(this).attr("src");
    showModal(imageUrl);
  });

  $(".modal").click(function (e) {
    if (
      !$(e.target).is("#modalImage") &&
      !$(e.target).closest(".modal-content").length
    ) {
      $(this).hide();
    }
  });

  $(".close").click(function () {
    $(".modal").hide();
  });

  function showModal(imageUrl) {
    $("#modalImage").attr("src", imageUrl);
    $(".modal").show();
  }
});


$('#sleepShowImg_newBorn').click(function () {
  let searchName = $(this).attr("data-name");

  let filterClick = $('.filter_newBorn');
  filterClick.map((element) => {
    filterClick[element].classList.remove("heading_title__active");
  })
  $(this).addClass('heading_title__active');

  searchData(searchName);
})

$('#babyShowImg_newBorn').click(function () {
  let searchName = $(this).attr("data-name");

  let filterClick = $('.filter_newBorn');
  filterClick.map((element) => {
    filterClick[element].classList.remove("heading_title__active");
  })
  $(this).addClass('heading_title__active');

  searchData(searchName);
})

$('#allShowImg_newBorn').click(function () {
  let filterClick = $('.filter_newBorn');
  filterClick.map((element) => {
    filterClick[element].classList.remove("heading_title__active");
  })
  $(this).addClass('heading_title__active');
  
  let searchData = $('.image-container');
  searchData.map((element) => {
    searchData[element].style.display = "flex";
  })
})


function searchData(searchName){
  let searchData = $('.image-container');
  searchData.map((element) => {
    if (searchData[element].getAttribute("data-search") !== searchName) {
      searchData[element].style.display = "none";
    } else {
      searchData[element].style.display = "flex";
    }
  })
}