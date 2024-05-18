//Sign In Inputs 
var emailSignIn = document.getElementById( "emailSignIn" );
var passwordSignIn = document.getElementById( "passwordSignIn" );
var signInBtn = document.getElementById( "signInBtn" );

//Sign In & Sign Up Inputs All
var inputs = document.getElementsByClassName( "form-control" );

// for choose username from array
var username = localStorage.getItem( "sessionUsername" );

if ( localStorage.getItem( 'users' ) != null )
{
  usersInfo = JSON.parse( localStorage.getItem( 'users' ) );
}

console.log( usersInfo );

// Btn Sign In
signInBtn.onclick = function ()
{
  userInputsValidation();
  signIn();
  // clearForm();
};

function signIn ()
{
  for ( var i = 0; i < usersInfo.length; i++ )
  {
    if ( usersInfo[ i ].email.toLowerCase() == emailSignIn.value.toLowerCase() && usersInfo[ i ].password.toLowerCase() == passwordSignIn.value.toLowerCase() )
    {
      localStorage.setItem( 'sessionUsername', usersInfo[ i ].name );
      // loginBtn.setAttribute( "href", "home.html" );
      location.href = "home.html";
    } else
    {
      document.getElementById( "alert" ).innerHTML = '<span class="text-danger m-3">incorrect email or password</span>';
    }
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

function validateEmail ()
{
  var emailRegx = /@[a-z]{5,10}(\.com)$/;
  if ( emailRegx.test( emailSignIn.value ) == true )
  {
    emailSignIn.classList.add( 'is-valid' );
    emailSignIn.classList.remove( 'is-invalid' );
    return true;
  } else
  {
    emailSignIn.classList.add( 'is-invalid' );
    emailSignIn.classList.remove( 'is-valid' );
    return false;
  }
}

function validatePassword ()
{
  var passRegx = /^[A-Z][a-z]{2,8}$/;
  if ( passRegx.test( passwordSignIn.value ) == true )
  {
    passwordSignIn.classList.add( 'is-valid' );
    passwordSignIn.classList.remove( 'is-invalid' );
    return true;
  } else
  {
    passwordSignIn.classList.add( 'is-invalid' );
    passwordSignIn.classList.remove( 'is-valid' );
    return false;
  }
}

function userInputsValidation ()
{
  validateEmail();
  validatePassword();

  if ( ( validateEmail() === true && validatePassword() === true ) )
  {
    return true;
  }
  else
  {
    return false;
  }
}