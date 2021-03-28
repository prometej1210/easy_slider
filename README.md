# easy_slider

Простой и лёгкий слайдер с подложками под кнопки и под описания.
На рабочем сайте элементы можно выводить циклом из массива. Пример кода:
<?foreach(МАССИВ СЛАЙДОВ as ВЫВОД ФОТО):?>
  <div class="slider-wrapper">
            <div class="slider-item">
                <div id="oneslide" style=" background-image: url(<?ВЫВОД ФОТО?>);"></div>
            </div>
        </div>
    <?endforeach?>
