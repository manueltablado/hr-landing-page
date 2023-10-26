const countDownDate = new Date("December 31, 2023 00:00:00").getTime();

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = formatNumber(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("timer-title monserat").innerHTML =
      "EXPIRED";
  }
}, 1000);