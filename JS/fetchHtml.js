fetch('https://mani111355.github.io/A1-Report/HTML/header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-content').innerHTML = data;
})
.catch(error => console.error('Error fetching the HTML:', error));
