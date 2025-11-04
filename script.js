const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const button = document.getElementById('button');

function getAdvice() {
    adviceText.textContent = "Loading Advice...";
    fetch ('https://api.adviceslip.com/advice')
    .then (response => response.json())
    .then (data => {
        const advice = data.slip;
        adviceId.textContent = advice.id;
        adviceText.textContent = `"${advice.advice}"`;
    })

    .catch (error => {
        adviceText.textContent = "Oops! Couldn't load advice 😢";
        console.log ('Error fetching advice:', error);
    });
}

getAdvice();

button.addEventListener ("click", getAdvice);

