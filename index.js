function register() {
    var n=document.getElementById("nama").value;
    var o=document.getElementById("asal").value;
    var a=document.getElementById("alamat").value;
    var k=document.getElementById("kodepos").value;
    var p=document.getElementById("provinsi").value;
    var t=document.getElementById("telp").value;
    var e=document.getElementById("email").value;
    var np=document.getElementById("namper").value;
    var ap=document.getElementById("alper").value;
    var kp=document.getElementById("konper").value;
    var tp=document.getElementById("telper").value;
    var ep=document.getElementById("emper").value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (n==''||o==''||a==''||k==''||p==''||t==''||e==''||np==''||ap==''||kp==''||tp==''||ep=='') {
        alert("Seluruh bidang harus diisi");
    } else {
        alert("Registrasi berhasil");

    };
}