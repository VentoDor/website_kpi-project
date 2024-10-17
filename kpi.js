// script.js
document.querySelector('.img--menu').addEventListener('click', function() {
  const menu = document.querySelector('.dropdown-menu');
  menu.classList.toggle('show'); // Добавляем или убираем класс 'show'
});

function toggleAnswer(element) {
  // Находим ответ (следующий элемент за вопросом)
  var answer = element.nextElementSibling;
  
  // Переключаем видимость ответа
  if (answer.style.display === "none") {
    answer.style.display = "block"; // Показываем ответ
    element.querySelector('.img-section-5').style.transform = "rotate(90deg)"; // Поворачиваем стрелку
  } else {
    answer.style.display = "none"; // Скрываем ответ
    element.querySelector('.img-section-5').style.transform = "rotate(0deg)"; // Возвращаем стрелку в исходное положение
  }
}

