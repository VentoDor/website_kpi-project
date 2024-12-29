// script.js
addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('.img--menu').addEventListener('click', function() {
    const menu = document.querySelector('.dropdown-menu');
    menu.classList.toggle('show'); // Добавляем или убираем класс 'show'
  });
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

reviewsContainer.innerHTML = ''; // Очищаем перед добавлением данных

fetch('http://localhost:3000/reviews')
  .then(response => response.json())
  .then(data => {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = ''; // Очистите контейнер перед добавлением
    data.forEach(review => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      reviewDiv.innerHTML = `
        <div class="section-3">
          <img class="img-section-3" src="${review.photo}" alt="${review.student}">
          <div class="text-container">
            <p class="text-section-3-1"><strong>${review.student}</strong> (${review.course})</p>
            <p class="text-section-3-2">Рейтинг: ${review.rating}</p>
            <p class="text-section-3-3">${review.comment}</p>
          </div>
        </div>
      `;
      reviewsContainer.appendChild(reviewDiv);
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки отзывов:', error);
    reviewsContainer.innerHTML = `<p>Не удалось загрузить отзывы. Попробуйте позже.</p>`;
  });
