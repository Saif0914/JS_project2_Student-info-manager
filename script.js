    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    let users = [];

    userForm.addEventListener('submit', function(e) {
      e.preventDefault();  //it stops the form refreshing the page when submitted.

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name && age && email) {
        const user = {
          name, 
          age, 
          email 
        };
        users.push(user);
        updateUserList();   //to refresh the displayed user list.
        userForm.reset();   //resets the form after submission.
      }
    });


    function updateUserList() {
      userList.innerHTML = '';
      users.forEach((user, index) => {
        const li = document.createElement('li');
    
        const nameLine = document.createElement('span');
        nameLine.style.fontWeight = 'bold';
        nameLine.textContent = `${index + 1}. Name: ${user.name}`;
        li.appendChild(nameLine);
    
        const ageLine = document.createElement('p');
        ageLine.textContent = `Age: ${user.age}`;
        ageLine.style.margin = '5px 0';
        li.appendChild(ageLine);
    
        const emailLine = document.createElement('p');
        emailLine.textContent = `Email: ${user.email}`;
        emailLine.style.margin = '5px 0';
        li.appendChild(emailLine);
    
        userList.appendChild(li);
      });
    }
    
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();   // Convert the search input value to lowercase for case-insensitive searching
      const matched = users.filter(user => user.name.toLowerCase().includes(query));
      displaySearchResults(matched);
    });

    function displaySearchResults(results) {
      searchResults.innerHTML = '';
      if (searchInput.value.trim() === '') {
        searchResults.textContent = '';
        return;
      }
      else if (results.length > 0) {
        results.forEach(user => {
          const p = document.createElement('p');
          p.textContent = `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
          searchResults.appendChild(p);
        });
      } else if (searchInput.value.trim() !== '') {
        searchResults.textContent = 'User not found.';
      }
    }
