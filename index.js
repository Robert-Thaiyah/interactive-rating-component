const ratingContainer = document.querySelector(".section-center");
const rate = document.querySelectorAll(".rate-btn");
const submit = document.querySelector(".btn");

rate.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    let score = event.currentTarget.textContent;
    // console.log(`You have selected the number ${score}`);

    submit.addEventListener("click", function (event) {
      event.preventDefault();
      ratingContainer.innerHTML = `
      <div>
      <div class="flex">
        <img src="images/illustration-thank-you.svg" alt="smarthphone" />
      </div>
      <div class="flex">
        <p class="text text-orange">
          You selected <span>${score}</span> out of 5
        </p>
      </div>
      <div class="flex flex-1">
        <h1 class="text">Thank you!</h1>
        <p class="text">
          We appreciate you taking the time to give a rating. If you ever
          need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>`;
    });
  });
});