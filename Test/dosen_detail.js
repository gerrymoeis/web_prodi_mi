var buttonPublikasi = document.getElementById("button-publikasi");
var buttonRiset = document.getElementById("button-riset");
var buttonPengabdian = document.getElementById("button-pengabdian");

var blockPublikasi = document.getElementById("block-publikasi");
var blockRiset = document.getElementById("block-riset");
var blockPengabdian = document.getElementById("block-pengabdian");

buttonPublikasi.onclick = function () {
    console.log("Publikasi Ditekan");
    blockPublikasi.setAttribute("style", "display:block;");
    blockRiset.setAttribute("style", "display:none;");
    blockPengabdian.setAttribute("style", "display:none;");
};

buttonRiset.onclick = function () {
    console.log("Riset Ditekan");
    blockPublikasi.setAttribute("style", "display:none;");
    blockRiset.setAttribute("style", "display:block;");
    blockPengabdian.setAttribute("style", "display:none;");
};

buttonPengabdian.onclick = function () {
    console.log("Pengabdian Ditekan");
    blockPublikasi.setAttribute("style", "display:none;");
    blockRiset.setAttribute("style", "display:none;");
    blockPengabdian.setAttribute("style", "display:block;");
};

// tab
let tabs = document.querySelectorAll(".tabs h2");
let tabContents = document.querySelectorAll(".content div");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    console.log("clicked");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");

    const tabWidth = tab.offsetWidth;
    const offset = index * tabWidth;
    tabContent.style.transform = 'translateX(-${offset}px)';

  });
});