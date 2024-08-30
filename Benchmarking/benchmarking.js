var dropdown = document.getElementsByClassName("title");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var resultSection = document.getElementById("tabelPembanding");
var testedParty = document.getElementById("testedPartyNilai");
var nilai = document.getElementById("nilai");
var detail = document.querySelector("detail");
var detail2 = document.querySelector("detail2");
document.getElementById("hitung").addEventListener("click", function () {
  if (
    resultSection.style.display === "block" &&
    testedParty.style.display === "block"&&
    nilai.style.display === "block" &&
    detail.style.display === "none" &&
    detail2.style.display === "none"
  ) {
    resultSection.style.display = "none";
    testedParty.style.display = "none";
    nilai.style.display = "none";
    detail.style.display === "block";
    detail2.style.display === "block";
  } else {
    resultSection.style.display = "block";
    testedParty.style.display = "block";
    nilai.style.display = "block";
    detail.style.display === "none";
    detail2.style.display === "none";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.control-btn');

  // Function to update active items based on selected years
  function updateTimeline(year) {
      items.forEach(item => {
          if (item.getAttribute('data-year') === year) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  }

  // Event listener for buttons
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const year = this.getAttribute('data-year');
          this.classList.toggle('active');
          updateTimeline(year);
      });
  });
});
