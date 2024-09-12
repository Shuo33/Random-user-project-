// addEventListener to the button
document.querySelector('#generate').addEventListener('click', fetchUser)


// get the random info of the user from an API 
function fetchUser() {
    showSpinner(); 
    fetch('https://randomuser.me/api')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            hideSpinner();
            displayUser(data.results[0]);
            // console.log(data.results[0]);
        
    })
}

// use the info of the random user
function displayUser(user) {
    //background color change in terms of the gender
    if (user.gender === 'male') {
        document.body.style.backgroundColor = 'steelblue';
    } else {
        document.body.style.backgroundColor = 'rebeccapurple';
    }

    //user info random change 
    const userDisplay = document.querySelector('#user');

    userDisplay.innerHTML = `
      <div class="flex justify-between">
          <div class="flex">
             <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"/>
              
             <div class="space-y-3">
               <p class="text-xl">
                <span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
               </p>
               <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
               </p>
               <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
               </p>
               <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
               </p>
               <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}  </p>
             </div>
          </div>
        </div>
    ` 
}


// show and hide the spinner 
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

// fire the fetchUser every time we load the page 
fetchUser();