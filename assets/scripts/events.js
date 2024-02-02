const button = document.querySelector("button");

//button.onclick = function () {};
const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", boundFn);

/* setTimeout(() => {
  button.removeEventListener("click", boundFn);
}, 2000); */

/* buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", buttonClickHandler);
}); */

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");

/* listItems.forEach((listItem) => {
  listItem.addEventListener("click", (event) => {
    event.target.classList.toggle("highlight");
  });
}); */

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  //form.submit()
  // button.click()
});
