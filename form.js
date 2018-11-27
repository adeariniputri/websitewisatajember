function terimainput(){
  var x=document.getElementById("saran").nama.value;
  var y=document.getElementById("saran").email.value;
  var z=document.getElementById("saran").judulweb.value;
  var a=document.getElementById("saran").komentar.value;
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (x=="") {
    alert("Nama Wajib diisi");
    alert("Data gagal dikirim");
    return false;
  }
  if (y==""){
    alert("Email Wajib diisi");
    alert("Data gagal dikirim");
    return false;
  }
  if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;


  alert("Komentar berhasil dikirim");

}
