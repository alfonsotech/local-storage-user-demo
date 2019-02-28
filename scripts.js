// console.log('success!');
function submitUser() {
  $('form').on('submit', event => {
    event.preventDefault();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();
    console.log('email, password', email, password);
    setStorage(email, password);
    $('form input').val('');
  })
}

function setStorage(email, password) {
  let user = {
    email: email,
    password: password
  }
  console.log('user object', user);
  window.localStorage.setItem( 'user', JSON.stringify(user) );
}

// function retrieveStorage() {
//   const user = JSON.parse(window.localStorage.getItem('user'));
//   console.log('user from etrieveStorage()', user);
// }
//
// retrieveStorage()

// window.localStorage.removeItem('user');

$(submitUser)
