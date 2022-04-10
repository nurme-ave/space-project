let formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let userFirstName = formData.get('first-name');

  let updatedHTMLContent = `
    <h2 class="updated-content">Thank you, ${userFirstName}, your form was submitted successfully!</h2>
    <p class="be-in-contact">We'll be in contact within 24 hours!</p>
    `;
  let cardContent = document.getElementById('card-content');
  cardContent.innerHTML = updatedHTMLContent;
});
