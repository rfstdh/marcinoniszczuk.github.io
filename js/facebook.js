
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1974674119342732',
      cookie     : true,
      xfbml      : true,
      version    : 'v6.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

   
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me', function (response) {
                document.getElementById('fbdiv').innerHTML = response.name + '. Witaj na mojej stronie!';
            });
        } else {
            document.getElementById('fbdiv').innerHTML = 'Coś poszło nie tak, spróbuj zalogować się ponownie';
        }
    });
}

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


