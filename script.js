const accessKey = "b5270766-afd0-41c0-8f33-b44e3623d662";

const quoteForm = document.querySelector(`#quoteForm`);
const success = document.querySelector(`#success`); 
const mainContent = document.querySelector(`#main-content`); 
const returnHome = document.querySelector(`#returnHome`);

success.style.display = "none";

quoteForm.addEventListener("submit", handleSubmit);
returnHome.addEventListener("click", handleReturnHome);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(quoteForm);

  formData.append("access_key", accessKey);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }).then(response => response.json())
    .then(data => {
      if (data.success) {
        mainContent.style.display = "none";
        success.style.display = "flex";
        success.scrollIntoView({ behavior: "smooth"});
      }
  });
}

function handleReturnHome() {
  mainContent.style.display = "block";
  success.style.display = "none";
  quoteForm.reset();
}