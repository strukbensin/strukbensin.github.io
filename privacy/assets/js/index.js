
var server = 'derigustiadi.svrcater.com';
var koneksi = 'https';
function  cek_persetujuan(){
    var check1 = document.getElementById("formCheck-1").checked;
    var check2 = document.getElementById("formCheck-2").checked;
    if (check1 == true && check2 == true){
        kirimpendaftaran();
    }else{
        alert("Silahkan Centang Semua Syarat dan Ketentuan Dihalaman Paling Bawah Ini")
    }
}

function kirimpendaftaran(){
    // $('#spinnerModal').modal('show');
    var nohp  = document.getElementById("nohp").value;
    var email  = document.getElementById("email").value;
    var pass1  = document.getElementById("pass1").value;
    var pass2  = document.getElementById("pass2").value;
    var data = new FormData();
    data.append("nohp", nohp);
    data.append("email", email);
    data.append("password1", pass1);
    data.append("password2", pass2);
    var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {

                if (this.responseText != '00'){
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        setTimeout(function () { 
                            // $('#spinnerModal').modal('hide');
                            $('#modal-1').modal('show');
                            
                        }, 1000); 
                        document.getElementById("nominal").innerText = this.responseText; 
                        document.getElementById("userstruk").value = nohp
                        document.getElementById("passwordstruk").value = pass1
                        // load_datakendaraan();
                        // // document.getElementById("pengendara").value = "";
                        // // document.getElementById("nowapengendara").value = "";
                        // alert ("Data Berhasil Disimpan");
                    }
                }else{
                    setTimeout(function () { 
                        // $('#spinnerModal').modal('hide');
                        
                    }, 1000);
                    alert ("Terjadi Kesalahan, Silahkan Cek Kembali Inputan Anda");                     
                }
  
         };
         
         xhr.open("POST", koneksi+"://"+server+"/daftar-user-struk/proses-pendaftaran.php");     
         xhr.send(data);   
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    
    }
    
