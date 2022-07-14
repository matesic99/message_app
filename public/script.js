
const button = document.querySelector('.button-19');
button.addEventListener('click', async event => {
  const message = document.getElementById('input_field').value;
  const data = { message };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
  const congrats = document.getElementById('poslano');
    congrats.style.color = 'green';
    setInterval(function () {congrats.textContent = "Poslano !"}, 1000);
    congrats.style.textAlign = 'center';
    congrats.style.fontSize = '30px';
    
});

