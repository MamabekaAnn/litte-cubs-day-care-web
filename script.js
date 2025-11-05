const galleryImages = document.querySelectorAll('.gallery .images img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let currentIndex = 0;

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lightbox.style.display = 'block';
    lightboxImg.src = galleryImages[currentIndex].src;
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  function changeSlide(direction) {
    currentIndex += direction;
    if(currentIndex < 0) currentIndex = galleryImages.length - 1;
    if(currentIndex >= galleryImages.length) currentIndex = 0;
    lightboxImg.src = galleryImages[currentIndex].src;
  }

  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLightbox();
  });
