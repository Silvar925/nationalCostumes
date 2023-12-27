function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        // function compareDates(a, b) {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);

        //     // Сравниваем даты
        //     if (dateA > dateB) {
        //         return -1;
        //     } else if (dateA < dateB) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // }

        let dataArray = Object.values(data);

        //resolve(dataArray.sort(compareDates));
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

// ------------------------------------------------------------------------------------------------

getData("woman").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});

getData("man").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});

getData("child").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});

getData("baby").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});

getData("study").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});

getData("atelier").then((response) => {
  console.log(response);
  response.forEach((element) => {
    console.log(element);
  });
});
