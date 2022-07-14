getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const message = document.createElement('div');


    message.textContent = item.message
    
    root.append(message);
    document.body.append(root);
  }
  console.log(data);
}