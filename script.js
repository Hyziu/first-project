(() => {
  const navElement = document.querySelectorAll(".nav_element");

  // for (let index = 0; index < navElement.length; index++) {
  //   const element = navElement[index];
  //   element.addEventListener("click", (event) => {
  //     console.log(element.innerHTML);
  //   });
  // }

  navElement.forEach((el) => {
    el.addEventListener("click", (event) => {
      console.log("zakładka " + el.innerHTML + " nie działa");
    });
  });
})();
