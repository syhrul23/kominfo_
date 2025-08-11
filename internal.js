<<<<<<< HEAD
const modal = document.getElementById("imageModalPopup");
const modalImg = document.getElementById("popupImg");
const captionText = document.getElementById("caption-popup");
const closeBtn = document.querySelector(".close-popup");

// Get all images inside the news grid
const images = document.querySelectorAll('.news-card img');

// Loop through each image and add a click event listener
images.forEach(img => {
  img.onclick = function() {
    // When an image is clicked, show the modal
    modal.style.display = "block";
    // Set the image source of the modal to the clicked image's source
    modalImg.src = this.src;
    // Get the caption from the sibling '.caption' element
    const caption = this.nextElementSibling;
    if (caption && caption.classList.contains('caption')) {
      captionText.innerHTML = caption.innerHTML;
    } else {
      // As a fallback, use the image's alt text if no caption is found
      captionText.innerHTML = this.alt;
    }
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = closeModal;

// When the user clicks anywhere on the modal background (outside the image), close it
modal.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
=======
const modal = document.getElementById("imageModalPopup");
const modalImg = document.getElementById("popupImg");
const captionText = document.getElementById("caption-popup");
const closeBtn = document.querySelector(".close-popup");

// Get all images inside the news grid
const images = document.querySelectorAll('.news-card img');

// Loop through each image and add a click event listener
images.forEach(img => {
  img.onclick = function() {
    // When an image is clicked, show the modal
    modal.style.display = "block";
    // Set the image source of the modal to the clicked image's source
    modalImg.src = this.src;
    // Get the caption from the sibling '.caption' element
    const caption = this.nextElementSibling;
    if (caption && caption.classList.contains('caption')) {
      captionText.innerHTML = caption.innerHTML;
    } else {
      // As a fallback, use the image's alt text if no caption is found
      captionText.innerHTML = this.alt;
    }
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = closeModal;

// When the user clicks anywhere on the modal background (outside the image), close it
modal.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
>>>>>>> 136981d72d43f1180f08aca46282ae47d28f894e
