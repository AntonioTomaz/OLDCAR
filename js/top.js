
function cadastroemail() {
  alert("E-mail Cadastrado com Sucesso!!!");
}




function cadastroemail() {
  if (document.forms[0].email.value.length == 0) {
    alert('Por favor, informe o seu EMAIL.');
  document.frmEnvia.email.focus();
    return false;
  }
  return true;
}



function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
  {
    alert( "Por favor, informe um E-MAIL válido!" );
    return false;
  }
}
</script>
