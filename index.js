/* 
  Fixing the mobile viewport problem with 'height: 100vh'
  which does not apply correctly on mobile devices due to
  the address bar on top of the screen.
 */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const checkboxText = document.querySelector('.checkbox-consent');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let userFirstName = formData.get('first-name');
  let capitalizedFirstName =
    userFirstName.charAt(0).toUpperCase() +
    userFirstName.slice(1).toLowerCase();
  let userEmailAddress = formData.get('email-address');

  const userConsent= document.getElementById('consent').checked;

  if (userConsent) {
    let updatedHTMLContent = `
      <h2 class="updated-content">Thank you, ${capitalizedFirstName}, your form was submitted successfully!</h2>
      <p class="updated-info-text">We'll be in contact within 24 hours and send a confirmation to <span class="accent">${userEmailAddress}!</span></p>
      <button id="go-back" class="submit-button">Go back</button>
      `;
    document.getElementById('card-content').innerHTML = updatedHTMLContent;

    document.getElementById('go-back').addEventListener('click', () => {
      // location.reload(); - may not work on Firefox
      window.location.href = window.location.href;
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
