let formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target);

  let formData = new FormData(e.target);
  let userFirstName = formData.get('first-name');
  let userEmailAddress = formData.get('email-address');

  const firstCheckbox = document.getElementById('consent').checked;

  if (firstCheckbox) {
    let updatedHTMLContent = `
      <h2 class="updated-content">Thank you, ${userFirstName}, your form was submitted successfully!</h2>
      <p class="be-in-contact">We'll be in contact within 24 hours and send a confirmation to ${userEmailAddress}!</p>
      <button id="go-back" class="submit-button">Go back</button>
      `;
  
    let cardContent = document.getElementById('card-content');
    cardContent.innerHTML = updatedHTMLContent;
  
    document.getElementById('go-back').addEventListener('click', () => {
      location.reload();
    });
  } else {
    document.querySelector('.cb1').style.color = 'red';
  }
});

document.querySelector('.cb1').addEventListener('change', (e) => {
  if (e.target.checked) {
    document.querySelector('.cb1').style.color = 'white';
  }

});
