if ( localStorage.getItem( "users" ) != null )
{
  usersinfo = JSON.parse( localStorage.getItem( "users" ) );
}

var username = localStorage.getItem( "sessionUsername" );

window.addEventListener( 'load', displayWelcomeUser() );

function displayWelcomeUser ()
{
  if ( username != null )
  {
    document.getElementById( "home" ).innerHTML = 'Welcome ' + username;
  }
}

console.log( username, usersinfo );

function logout ()
{
  localStorage.removeItem( 'sessionUsername' );
  location.href = "index.html";
}
