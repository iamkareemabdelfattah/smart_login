//Sign Up Inputs 
var usernameSignUp = document.getElementById( "nameInp" );
var userEmailSignUp = document.getElementById( "emailInp" );
var userPasswordSignUp = document.getElementById( "passwordInp" );

var signUpBtn = document.getElementById( "signUpBtn" );

var usernameAlert = document.getElementById( 'usernameAlert' );
var emailAlert = document.getElementById( 'emailAlert' );
var passwordAlert = document.getElementById( 'passwordAlert' );

let alertMsg = document.getElementById( "alert" );
let successMsg = document.getElementById( "success" );
let ExistMsg = document.getElementById( "existMsg" );

//Sign In & Sign Up Inputs All
var inputs = document.getElementsByClassName( "form-control" );

let usersInfo = [];

if ( localStorage.getItem( 'users' ) != null )
{
  usersInfo = JSON.parse( localStorage.getItem( 'users' ) );
}

// Btn Sign Up
signUpBtn.onclick = function ()
{
  userInputsValidation();
  isExist();
  signUp();

  // clearForm();
};

function signUp ()
{
  if ( userInputsValidation() == true && isExist() !=true )
  {
    var user = {
      name: usernameSignUp.value,
      email: userEmailSignUp.value,
      password: userPasswordSignUp.value
    };
    usersInfo.push( user );
    localStorage.setItem( 'users', JSON.stringify( usersInfo ) );
    console.log( usersInfo );
    usernameSignUp.classList.remove( 'is-valid' );
    userEmailSignUp.classList.remove( 'is-valid' );
    userPasswordSignUp.classList.remove( 'is-valid' );
    successMsg.classList.replace( "d-none", "d-block" );
    alertMsg.classList.replace( "d-block", "d-none" );
  } else
  {
    alertMsg.classList.replace( "d-none", "d-block" );
  }
}

//Clear Inputs
// function clearForm ()
// {
//   for ( var i = 0; i < inputs.length; i++ )
//   {
//     inputs[ i ].value = "";
//   }
// }

function isExist ()
{
  for ( let i = 0; i < usersInfo.length; i++ )
  {

    if ( usersInfo[ i ].name.toLowerCase() == usernameSignUp.value.toLowerCase() || usersInfo[ i ].email.toLowerCase() == userEmailSignUp.value.toLowerCase() )
    {
      ExistMsg.classList.replace( "d-none", "d-block" );
      alertMsg.innerHTML = 'signUp failed ! Try again';
      usernameSignUp.classList.remove( "is-valid" );
      userEmailSignUp.classList.remove( "is-valid" );
      userPasswordSignUp.classList.remove( 'is-valid' );
      return true;
    }
  }
  ExistMsg.classList.replace( "d-block", "d-none" );
  return false;
}

function validateName ()
{
  var nameRegx = /^[A-Z][a-z]{2,8}$/;
  if ( nameRegx.test( usernameSignUp.value ) == true && usernameSignUp.value !='' )
  {
    usernameAlert.classList.replace( "d-block", "d-none" );
    usernameSignUp.classList.add( 'is-valid' );
    usernameSignUp.classList.remove( 'is-invalid' );
    return true;
  } else
  {
    usernameSignUp.classList.add( 'is-invalid' );
    usernameSignUp.classList.remove( 'is-valid' );
    usernameAlert.classList.replace( "d-none", "d-block" );
    return false;
  }
}

function validateEmail ()
{
  var emailRegx = /@[a-z]{5,10}(\.com)$/;
  if ( emailRegx.test( userEmailSignUp.value ) == true && userEmailSignUp.value != '' )
  {
    emailAlert.classList.replace( "d-block", "d-none" );
    userEmailSignUp.classList.add( 'is-valid' );
    userEmailSignUp.classList.remove( 'is-invalid' );
    return true;
  } else
  {
    userEmailSignUp.classList.add( 'is-invalid' );
    userEmailSignUp.classList.remove( 'is-valid' );
    emailAlert.classList.replace( "d-none", "d-block" );
    return false;
  }
}

function validatePassword ()
{
  var passRegx = /^[A-Z][a-z]{2,8}$/;
  if ( passRegx.test( userPasswordSignUp.value ) == true && userPasswordSignUp.value != '' )
  {
    passwordAlert.classList.replace( "d-block", "d-none" );
    userPasswordSignUp.classList.add( 'is-valid' );
    userPasswordSignUp.classList.remove( 'is-invalid' );
    return true;
  } else
  {
    userPasswordSignUp.classList.add( 'is-invalid' );
    userPasswordSignUp.classList.remove( 'is-valid' );
    passwordAlert.classList.replace( "d-none", "d-block" );
    return false;
  }
}

function userInputsValidation ()
{
  validateName();
  validateEmail();
  validatePassword();

  if ( ( validateName() === true && validateEmail() === true && validatePassword() === true ) )
  {
    return true;
  }
  else
  {
    return false;
  }
}

