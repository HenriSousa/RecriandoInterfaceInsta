var photo1 = 1;
var photo2 = 0;

function perfilChang(){   
    if(photo1 > photo2){
    document.getElementById("photo2").style.zIndex = "1";
    photo2++;
} else if(photo2 = photo1){
    document.getElementById("photo2").style.zIndex = "0";
    photo2--;
}
}