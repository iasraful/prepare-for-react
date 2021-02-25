fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => showData(data));

  function showData(data) {
      let list = '';
      data.forEach(users => {
          list = list + `<li>${users.name} E-mail:${users.email}  </li>`
      });
      const ul =  document.getElementById('practice');
      ul.innerHTML = list;
  }
