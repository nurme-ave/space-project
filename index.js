let formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target);

  let formData = new FormData(e.target);
  let userFirstName = formData.get('first-name');
  let capitalizedFirstName = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1).toLowerCase()
  let userEmailAddress = formData.get('email-address');

  const firstCheckbox = document.getElementById('consent').checked;

  if (firstCheckbox) {
    let updatedHTMLContent = `
      <h2 class="updated-content">Thank you, ${capitalizedFirstName}, your form was submitted successfully!</h2>
      <p class="info-text-2">We'll be in contact within 24 hours and send a confirmation to ${userEmailAddress}!</p>
      <button id="go-back" class="submit-button">Go back</button>
      `;
  
    let cardContent = document.getElementById('card-content');
    cardContent.innerHTML = updatedHTMLContent;
  
    document.getElementById('go-back').addEventListener('click', () => {
      location.reload();
    });
  } else {
    document.querySelector('.checkbox-consent').style.color = 'red';
  }
});

document.querySelector('.checkbox-consent').addEventListener('change', (e) => {
  if (e.target.checked) {
    document.querySelector('.checkbox-consent').style.color = 'white';
  }

});
