function getData(tableName, id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: 'admin/includes/CRUD/getDataFromDB.php',
            type: 'POST',
            data: {
                'id': id,
                'tableName': tableName
            },
            dataType: 'json',
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
                console.error('Error:', xhr, status, error);
                reject(error);
            }
        });
    });
}

function stringToImageArray(imageString) {
    return imageString.split(',').map(image => image.trim());
}

function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

//Выгрузка всех новостей в новости
getData("news").then((response) => {
    response.forEach(event => {
        event.date = new Date(event.date);
    });
    
    function compareDates(event1, event2) {
        return event2.date - event1.date;
    }
    
    response.sort(compareDates);

    let block = $("#news_All").empty();
    const maxCharacters = 100;

    response.forEach((element) => {
        block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${element.title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      element.date.toISOString().split('T')[0]
                    }</div>
                    <a href="new.html?id_new=${
                      element.id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
    });
});

//Редактирование новости
const url_new = new URL(window.location.href);
const queryParams_new = url_new.searchParams;
const id_new = queryParams_new.get("id_new");
if (id_new) {
    getData("news", id_new, "admin").then((response) => {
        $("#news_find_new .new_block__title").text(response[1]);
        $("#newName").text(response[1]);

        for (let i = 0; i < stringToImageArray(response[4]).length; i++) {
            $("#news_find_new .new_block__img").append(`
                <img src="admin/img/${stringToImageArray(response[4])[i]}" alt="" />
            `);
        }

        $("#news_find_new .new_block__text").html(
            response[2]
        );
    });
}

//Выгрузка всех новостей на главную
getData("news").then((response) => {
    response.forEach(event => {
        event.date = new Date(event.date);
    });
    
    function compareDates(event1, event2) {
        return event2.date - event1.date;
    }
    
    response.sort(compareDates);

    let block = $("#news_show_main_page").empty();
    const maxCharacters = 100;

    let value = 6;
    let length = response.length;

    if (value > length) {
        value = length;
    }

    for (let i = 0; i < value; i++) {
        block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${stringToImageArray(response[i].img)[0]}" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${response[i].title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      response[i].date.toISOString().split('T')[0]
                    }</div>
                    <a href="new.html?id_new=${
                      response[i].id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
    }
});

// ---------------------------------------------------------

//выгрузка всех слайдов в слайдер
$(document).ready(function () {
    getData("slider")
        .then((response) => {
            let slides = '';
            response.forEach((element) => {
                slides += `
                    <div class="swiper-slide slider">
                        <div class="slider_left">
                            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="" />
                        </div>
                        <div class="slider_right">
                            <p class="slider_right__title">
                                ${element.title}
                            </p>
                            <p class="slider_right__desc">
                                ${element.text}
                            </p>
                            <a href="${element.link}" class="slider_right__button">Узнать больше</a>
                        </div>
                    </div>
                `;
            });

            const swiperHtml = `
                <swiper class="mySwiper" pagination="true">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-pagination"></div>
                </swiper>
            `;

            $("#slider_all_show").html(swiperHtml);

            if ($("#slider_all_show").length) {
                const swiper = new Swiper('.mySwiper', {
                    // Опциональные параметры
                    direction: 'horizontal',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 5000,
                    },
                });
            }
        });
});

// ---------------------------------------------------------

//Редактирование услуги
const url_service = new URL(window.location.href);
const queryParams_service = url_service.searchParams;
const id_service = queryParams_service.get("id_service");
if (id_service) {
    getData("services", id_service).then((response) => {
        $("#services_find_service .new_block__title").text(response[1]);
        $("#newName").text(response[1]);
        $("#services_find_service .new_block__nums").html(
            response[2]
        );
    });
}

