function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}

function getSubject() {
  let formule = getUrlVars().formule;
  if (formule == undefined) {
    return ""
  } else {
    return unescape(formule);
  }
}


function init() {
    document.getElementById("msg").value = getSubject() + "\n";

}

window.onload = init;
