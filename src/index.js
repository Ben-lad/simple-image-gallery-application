const uploadForm = document.getElementById('uploadForm');
const imageInput = document.getElementById('imageInput');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
// Array to store the uploaded images
let images = [];

// Event listener for form submission
uploadForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the selected files
  const files = Array.from(imageInput.files);

  // Process each file
  files.forEach((file) => {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      // Create an image element for each uploaded image
      const img = document.createElement('img');
      img.src = reader.result;
      img.addEventListener('click', function () {
        openModal(reader.result);
      });

      // Add the image to the gallery
      gallery.appendChild(img);

      // Add the image to the array
      images.push(reader.result);
    });

    reader.readAsDataURL(file);
  });

  // Reset the input field
  imageInput.value = '';
});
// Function to open the modal and display the selected image
function openModal(imageUrl) {
  modalImage.src = imageUrl;
  modal.style.display = 'block';
}

// Event listener to close the modal
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Event listener to close the modal when clicking outside the image
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
