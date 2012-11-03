config :{
  // CONFIG VARS: 
 
    app_id : '501114913236328', 
 
    use_xfbml : true,
 
    extendPermissions : 'publish_stream' , 
 
    locale : 'es_ES' 
 
  // END CONFIG VARS
  },
  perms : [],
  hasPerm : function (perm) { for(var i=0, l=fb.perms.length; i<l; i++) { if(fb.perms[i] == perm) {return true;}} return false; },
  logged : false,
  user : false,
  login : function (callback){
    //FUNCIÓN QUE REALIZA EL LOGIN
    FB.login(function(r) {
      if (r.session) {
        fb.logged = true;
        if(r.perms)
          fb.perms = r.perms.split(",");
        else
          fb.perms = [];
 fb.getUser(callback);
      } else {
        fb.logged = false;
        fb.perms = [];
 callback();
      }
    },{perms:fb.config.extendPermissions});
    return false;
  },
  syncLogin : function (callback){
    if (!callback) callback = function(){};
    FB.getLoginStatus(function(r) {
      if (r.session) {
        fb.logged = true;
        if(r.perms)
          fb.perms = r.perms.split(",");
        else
          fb.perms = [];
 fb.getUser(callback);
        return true;
      } else {
        fb.logged = false;
        callback();
        return false;
      }
    });
  },
  logout : function(callback) {FB.logout(callback);},
  getUser : function(callback){
    //SE OBTIENEN LOS DATOS DEL USUARIO CON ESTÁ FUNCIÓN
    FB.api('/me', function(r){
      var user = r;
      user.picture = "https://graph.facebook.com/"+user.id+"/picture";
      fb.user=user; callback(user);
    });

  },
  readyFuncs : [],
  ready: function(func){fb.readyFuncs.push(func)},
  launchReadyFuncs : function () {for(var i=0,l=fb.readyFuncs.length;i<l;i++){fb.readyFuncs[i]();};}
}
window.fbAsyncInit = function() {
  if (fb.config.app_id) FB.init({appId: fb.config.app_id, status: true, cookie: true, xfbml: fb.config.use_xfbml});
  fb.syncLogin(fb.launchReadyFuncs);
};
var oldload = window.onload;
//SE CARGA EL API DE JAVASCRIPT DE FACEBOOK CONNECT
window.onload = function() {
  var d = document.createElement('div'); d.id="fb-root"; document.getElementsByTagName('body')[0].appendChild(d);
  var e = document.createElement('script'); e.async = true; e.src = document.location.protocol + '//connect.facebook.net/'+fb.config.locale+'/all.js';
  document.getElementById('fb-root').appendChild(e);
  if (typeof oldload == 'function') oldload();
};

fb.ready(function(){
// SE COMPRUEBA AL CARGAR LA PÁGINA SI HAY USUARIO LOGUEADO.
  if (fb.logged)
  {
    // CAMBIAMOS EL LINK DE IDENTIFICARSE POR LOS DATOS DEL USUARIO.
    html = "<p>Hola " + fb.user.name + "</p>";
    html += '<p><img src="' + fb.user.picture + '"/></p>';

    document.getElementById("conectar_facebook").innerHTML = html;

  }
});

function login() {
//FUNCIÓN QUE HACE EL LOGIN DEL FACEBOOK
  fb.login(function(){
    if (fb.logged) {
    // CAMBIAMOS EL LINK DE IDENTIFICARSE POR LOS DATOS DEL USUARIO.
      html = "<p>Hola " + fb.user.name + "</p>";
      html += "<p><img src='" + fb.user.picture + "'/></p>";
      document.getElementById("conectar_facebook").innerHTML = html;
  
    } else {
      alert("No se ha identificado el usuario");
    }
  })
};