// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('formMessage');
    
    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'All fields are required!';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Form submitted successfully!';
      formMessage.style.color = 'green';
    }
  });
  
  // Image Slideshow
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  // Toggle Content
  document.getElementById('toggleButton').addEventListener('click', function() {
    let content = document.getElementById('content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  