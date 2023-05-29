const search_btn = document.querySelector(".search");
const remove_btn = document.querySelector(".remove");
const hello = document.querySelector(".hello");
const home = document.querySelector(".bc");
const search_subject = document.querySelector(".search_subject");
const remove_subject = document.querySelector(".remove_subject");
search_btn.addEventListener("click", () => {
  hello.classList.add("ab");
  home.classList.remove("bc");
  search_subject.classList.remove("bc");
  remove_subject.classList.add("cd");
});
remove_btn.addEventListener("click", () => {
  search_subject.classList.add("bc");
  remove_subject.classList.remove("cd");
  hello.classList.add("ab");
});
