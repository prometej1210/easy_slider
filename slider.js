 function multiItemSlider(selector, config) {
        var
          element = document.querySelector(selector), // основный элемент блока
          wrapper = element.querySelector('.slider-wrapper'), // обертка для .slider-item
          sliderItems = element.querySelectorAll('.slider-item'), // элементы слайдера (.slider-item)
          сontrols = element.querySelectorAll('.slider-control'), // элементы управления
          controlLeft = element.querySelector('.slider-control-left'), // кнопка лево
          controlRight = element.querySelector('.slider-control-right'), // кнопка право
          wrapperWidth = parseFloat(getComputedStyle(wrapper).width), // ширина обёртки
          itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
          positionLeftItem = 0, // позиция левого активного элемента
          transform = 0, // значение транфсофрмации .slider_wrapper
          step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
          items = []; // массив элементов
        // наполнение массива этого 
        sliderItems.forEach(function (item, index) {
          items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: items.length - 1,
        }


 
 function transformItem (direction) {/*Основная функция создающая трансформацию элементов*/
    
    if (direction === 'right') 
        {if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {return;}
    if (!controlLeft.classList.contains('slider-control-show')) 
        {controlLeft.classList.add('slider-control-show');}
    if (controlRight.classList.contains('slider-control-show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {controlRight.classList.remove('slider-control-show');}
    positionLeftItem++;
    transform -= step;
}

if (direction === 'left') {
    if (positionLeftItem <= position.getMin) {return;}
    if (!controlRight.classList.contains('slider-control-show')) {controlRight.classList.add('slider-control-show');}
    if (controlLeft.classList.contains('slider-control-show') && positionLeftItem - 1 <= position.getMin) {controlLeft.classList.remove('slider-control-show');}

    positionLeftItem--;
    transform += step;
}

wrapper.style.transform = 'translateX(' + transform + '%)';

/*Задаю названия для слайдов*/

if (positionLeftItem == 0){document.getElementById("fotoname").innerHTML = "Фото 1" ;}
if (positionLeftItem == 1){document.getElementById("fotoname").innerHTML = "Фото 2" ;}
if (positionLeftItem == 2){document.getElementById("fotoname").innerHTML = "Фото 3";}
if (positionLeftItem == 3){document.getElementById("fotoname").innerHTML = "Фото 4";}

}


/*Добавляем слушателя*/
function controlClick (e)  {
  if (e.target.classList.contains('slider-control')) {
    e.preventDefault();
    var direction = e.target.classList.contains('slider-control-right') ? 'right' : 'left';
    transformItem(direction);
  }
};

function listeners () {
  сontrols.forEach(
    function (item) {
      item.addEventListener('click', controlClick);
    }
    );
}
listeners();

return {
    right: function () {transformItem('right');}, 
    left: function () {transformItem('left');}}
 };

var slider = multiItemSlider('.slider');
