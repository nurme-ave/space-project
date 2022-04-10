const checkboxText = document.querySelector('.checkbox-consent');
let formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let userFirstName = formData.get('first-name');
  let capitalizedFirstName =
    userFirstName.charAt(0).toUpperCase() +
    userFirstName.slice(1).toLowerCase();
  let userEmailAddress = formData.get('email-address');

  const firstCheckbox = document.getElementById('consent').checked;

  if (firstCheckbox) {
    let updatedHTMLContent = `
      <h2 class="updated-content">Thank you, ${capitalizedFirstName}, your form was submitted successfully!</h2>
      <p class="info-text-2">We'll be in contact within 24 hours and send a confirmation to <span class="accent">${userEmailAddress}!</span></p>
      <button id="go-back" class="submit-button">Go back</button>
      `;

    let cardContent = document.getElementById('card-content');
    cardContent.innerHTML = updatedHTMLContent;

    document.getElementById('go-back').addEventListener('click', () => {
      location.reload();
    });
  } else {
    checkboxText.style.color = 'red';
  }
});

checkboxText.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkboxText.style.color = 'white';
  }
});
