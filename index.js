const DropDown = (() => {
  //This is where the functionality of the dropdown is stored
  let dropDowns = document.querySelectorAll(".drop-down");
  let dropDownContainer = document.querySelectorAll(".drop-down-container");

  const onHover = (drop, index) => {
    drop.addEventListener("click", () => {
      event.preventDefault();
    });
    drop.addEventListener("mouseover", () => {
      dropDown.style.display = "block";
      console.log(dropDownContainer[index]);
    });
    drop.addEventListener("mouseout", () => {
      dropDown.style.display = "block";
      console.log(dropDownContainer[index]);
    });
  };
  const onClick = (drop, index) => {
    drop.addEventListener("click", () => {
      event.preventDefault();
      shown = dropDownContainer[index].style.display == "block";
      dropDownContainer[index].style.display = shown ? "none" : "block";
      console.log(dropDownContainer[index]);
    });
  };
  dropDowns.forEach((dropDown, index) => {
    dropDown.style.display = "none";
    if (dropDown.classList.contains("hover")) onHover(dropDown, index);
    else onClick(dropDown, index);
  });
})();

export { DropDown };
