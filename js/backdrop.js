// блокировка скролла на бекдропе
(() => {
    const refs = {
    scrollEndBtn: document.querySelector("[data-scroll]"),    
    scrollBlockBtn: document.querySelector("[data-scroll-block]"),    
    bodyScroll: document.querySelector("[data-menu-body]"),
    };

  refs.scrollBlockBtn.addEventListener("click", toggleModal);
  refs.scrollEndBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.bodyScroll.classList.toggle("is-open");
   }
})();