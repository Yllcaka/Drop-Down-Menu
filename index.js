const DropDown = (() => {
  //This is where the functionality of the dropdown is stored
  let dropDowns = document.querySelectorAll(".drop-down");
  let dropDownContainer = document.querySelectorAll(".drop-down-container");

  const onHover = (drop, index) => {
    drop.addEventListener("click", () => {
      event.preventDefault();
    });
    drop.addEventListener("mouseover", () => {
      dropDownContainer[index].classList.add("visible");
      console.log(dropDownContainer[index]);
    });
    drop.addEventListener("mouseout", () => {
      dropDownContainer[index].classList.remove("visible");
      console.log(dropDownContainer[index]);
    });
  };
  const onClick = (drop, index) => {
    drop.addEventListener("click", () => {
      event.preventDefault();
      dropDownContainer[index].classList.toggle("visible");
      console.log(dropDownContainer[index]);
    });
  };
  const init = () => {
    dropDowns.forEach((dropDown, index) => {
      if (dropDown.classList.contains("hover")) onHover(dropDown, index);
      else onClick(dropDown, index);
    });
  };
  return { init };
})();

export { DropDown };
