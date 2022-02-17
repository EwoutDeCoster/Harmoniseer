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

function getSelectr() {
  let content = document.getElementById("selectr");

  if (content.value == 1) {
    document.getElementById("msg").value =
      "Ik had graag wat meer informatie gekregen over de opruimsessie.";
  } else if (content.value == 2) {
    document.getElementById("msg").value =
      "Ik had graag wat meer informatie gekregen over het adviesgesprek.";
  }
}

function getSubject() {
  let formule = getUrlVars().formule;
  if (formule == undefined) {
    return "";
  } else {
    return unescape(formule + "\n");
  }
}

function init() {
  document.getElementById("msg").value = getSubject();

  document.getElementById("selectr").onclick = (event) => {
    event.preventDefault();
    getSelectr();
  };
}

window.onload = init;
