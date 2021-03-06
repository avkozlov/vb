$(function () {
    //ЗАГРУЗЧИК ФОТОГРАФИЙ
    (function () {
        //Загружаем фотографии
        $('.add-photo-button').dropzone
        ({
            url: "/api/pics/",
            method: 'post',
            parallelUploads: 1,
            maxFilesize: 10,
            paramName: 'filename',
            uploadMultiple: true,
            addRemoveLinks: false,
            createImageThumbnails: false,
            previewsContainer: false,
            clickable: true,
            acceptedFiles: 'image/*',
            dictInvalidFileType: 'Выбран недопустимый тип файла, доступны только картинки',
            dictFileTooBig: 'Размер файла слишком большой',
            dictResponseError: 'Сервер временно недоступен',
            params:{
                 slugi: window.location.pathname.split("/")[3],
                 title : ""
            },
            error: function (file, errorMessage) {
                alert(errorMessage);
            },
            success: function (file, response) {
                $(response).appendTo($('.uploaded-photos'));
            }
        });

        //Сохраняем информацию о фотографиях

        $(document).on('submit', '.img-info-form', function (e) {
            var data = $(this).serialize();

            $.ajax
            ({
                url: '/api/pics/' +  $(this).data('pic-id') + '/',
                type: 'patch',
                cache: false,
                data: data,
                error: function (file, errorMessage) {
                    alert(errorMessage);
                },
                success: function (response) {
                    alert('Информация успешно сохранена!');
                }
            });

            e.preventDefault();
        })

        //Удаляем фотографию
        $(document).on('click', '.img-remove-button', function () {
            var data = $(this).serialize();

            $(this).parents('.thumbnail').parent().remove();

            $.ajax
            ({
                url: '/api/pics/' + $(this).data('pic-id') + '/',
                type: 'delete',
                cache: false,
                data: data,
                error: function (file, errorMessage) {
                    alert(errorMessage);
                },
                success: function (response) {
                }
            });
        });
    })();

    //ГАЛЕРЕЯ
    (function () {
        //Загружаем фотографии из галереи (можно это делать сразу при генерации страницы, не подгружая как тут)
                   //Включаем карусель выбора фотографий
        $(".photo-gallery").owlCarousel
        ({
            items: 5,
            transitionStyle: "fade"
        });

        loop();
        updateState();


        //Показываем фотографию при нажатии на фотографию из галереи
        $(document).on('click', '.photo-gallery a', function (e) {
            $('.zoomContainer').remove();
            $('.photo img').removeData('elevateZoom').removeData('zoomImage')

            $('.photo').empty().append($(this).find('img').clone());

            history.pushState(null, null, window.location.pathname + '?img=' + $(this).attr('data-img-name'));

            loop();

            e.preventDefault();
        });

        function updateState() {
            if (window.location.search.length) {
                var img = window.location.search.substr(1).split('=');

                if (img[0] == 'img' && img.length > 1)
                    $(".photo-gallery .item img").first().clone().attr('src', '/pictures/' + img[1]).appendTo($('.photo').empty());
            }
            else
                $(".photo-gallery .item img").first().clone().appendTo($('.photo').empty());

            loop();
        };

        //ЛУПА ДЛЯ ФОТОГРАФИЙ
        function loop() {
            var elevateZoomParams =
            {
                cursor: 'pointer',
                responsive: true,
                scrollZoom: true,
                zoomWindowFadeIn: 800,
                borderSize: 1,
                zoomWindowWidth: 420,
                zoomWindowHeight: 420
            };

            $('.photo img').elevateZoom(elevateZoomParams);
        };

        $(window).on('popstate', updateState);
    })();



});
