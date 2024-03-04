const filmInputNode = document.querySelector(".js-films__input");
const filmAddButtonNode = document.querySelector(".films__btn");
const filmListNode = document.querySelector(".js-films__list");
const filmItemNode = document.querySelectorAll(".js-films__item");

filmAddButtonNode.addEventListener("click", function () {
  newFilm = filmInputNode.value;

  //   filmItemNode.push(newFilm);

  console.log(filmItemNode);
});
