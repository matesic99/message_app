getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('div');
    const message = document.createElement('p');
    root.classList.add('message');


    message.textContent = item.message
    
    root.append(message);
    document.body.append(root);
  }
}