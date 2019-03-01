// console.log('success!');
function submitUser() {
  $('#createUser').on('submit', event => {
    event.preventDefault();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();
    console.log('email, password', email, password);
    setStorage(email, password);
    $('#createUser input').val('');

    //Hide Signup Form
    $('#createUser').addClass('hidden')
    //Show Log-in Form
    $('#isUser').removeClass('hidden')
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


//Verify User Has account
function isUser() {
  $('#isUser').on('submit', event => {
    event.preventDefault();
    let userEmail = $('#user-email').val().trim();
    let userPassword = $('#user-password').val().trim();
    console.log('userEmail, userPassword', userEmail, userPassword);
    retrieveStorage(userEmail, userPassword)

})
}

function retrieveStorage(userEmail, userPassword) {
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log('user from retrieveStorage()', user);

  if(userEmail === user.email && userPassword === user.password){
    alert('user found!')
    return true
  } else {
    alert('user NOT found')
    return false
  }
}


// window.localStorage.removeItem('user');

$(submitUser)
$(isUser)
