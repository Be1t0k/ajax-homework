const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const loadBtn2 = document.querySelector(".js-load-2");
const resultsContainer2 = document.querySelector(".js-results-2");
const searchInput2 = document.querySelector(".js-input-2");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
  .then(res => res.json())
  .then(
    (data) =>
      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
  );
});

loadBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue2 = searchInput2.value.trim().toLowerCase();
  axios.get(`https://jsonplaceholder.typicode.com/posts/${searchValue2}`)
  .then(res => res.data)
  .then(
    (data) =>
      (resultsContainer2.innerHTML = `<div class="response-container">
                <p> Id пользователя: <span>${data.userId}</span><p>
                <p> id: <span>${data.id}</span><p>
                <p> Название: <span>${data.title}</span><p>
                <p> Описание: <span>${data.body}</span><p>
            </div>`)
  );
});



