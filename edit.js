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

function getImageSize(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function() {
      resolve({ width: this.width, height: this.height });
    };
    img.onerror = reject;
    img.src = url;
  });
}

// ------------------------------------------------------------------------------------------------

getData("woman").then(async (response) => {
  let blocks = $("#gallery_woman").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});


getData("man").then(async (response) => {
  let blocks = $("#gallery_man").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});


getData("child").then(async (response) => {
  let blocks = $("#gallery_child").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}" data-search="${element.type}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});

getData("baby").then(async (response) => {
  let blocks = $("#gallery_baby").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}" data-search="${element.type}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});


getData("study").then(async (response) => {
  let blocks = $("#gallery_study").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});


getData("atelier").then(async (response) => {
  let blocks = $("#gallery_atelier").empty();

  for (const element of response) {
    for (const imageName of stringToImageArray(element.img)) {
      const imageUrl = `admin/img/${imageName}`;
      try {
        const { width, height } = await getImageSize(imageUrl);
        const tallClass = width < height ? 'tall' : '';
        blocks.append(`
          <div class="image-container ${tallClass}">
            <img src="${imageUrl}" alt="" srcset="">
          </div>
        `);
      } catch (error) {
        console.error("Error loading image:", imageUrl, error);
      }
    }
  }
});

