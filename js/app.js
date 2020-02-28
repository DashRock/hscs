

document.getElementById("openFacBio").addEventListener("click", openBio);
document.getElementById("mainWinBtn").addEventListener("click", openMainWin);
document.getElementById("rapidBtn").addEventListener("click", openRapi);
document.getElementById("reikiBtn").addEventListener("click", openReiki);
document.getElementById("testimonialsBtn").addEventListener("click", openReviews);
document.getElementById("bioPicBtn").addEventListener("click", closeBio);



document.getElementById("rapidEyeInfoPoint_1").addEventListener("click", InfoPoint1);
document.getElementById("rapidEyeInfoPoint_2").addEventListener("click", InfoPoint2);
document.getElementById("rapidEyeInfoPoint_3").addEventListener("click", InfoPoint3);
document.getElementById("rapidEyeInfoPoint_4").addEventListener("click", InfoPoint4);


document.getElementById("rapidEyeInfoPoint_5").addEventListener("click", InfoPoint5);
document.getElementById("rapidEyeInfoPoint_6").addEventListener("click", InfoPoint6);
document.getElementById("rapidEyeInfoPoint_7").addEventListener("click", InfoPoint7);
document.getElementById("rapidEyeInfoPoint_8").addEventListener("click", InfoPoint8);





function openBio() {
    document.getElementById('facBio').style.display = 'grid';
    document.getElementById('shCase').style.display = 'none';
}

function closeBio() {

    document.getElementById('facBio').style.display = 'none';
    document.getElementById('shCase').style.display = 'grid';
}

function openMainWin() {
    document.getElementById('rapidEyeMore').style.display = 'none';
    document.getElementById('mainWindow').style.display = 'grid';
    document.getElementById('reikiNews').style.display = 'none';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('services').style.display = 'grid';

}

function openReiki() {
    document.getElementById('rapidEyeMore').style.display = 'none';
    document.getElementById('mainWindow').style.display = 'grid';
    document.getElementById('reikiNews').style.display = 'grid';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('services').style.display = 'none';

}

function openRapi() {


    document.getElementById('mainWindow').style.display = 'grid';
    document.getElementById('rapidEyeMore').style.display = 'grid';
   document.getElementById('reikiNews').style.display = 'none';
    document.getElementById('reviews').style.display = 'none';
    document.getElementById('services').style.display = 'none';

}

function openReviews() {
    document.getElementById('rapidEyeMore').style.display = 'none';
    document.getElementById('mainWindow').style.display = 'grid';
    document.getElementById('services').style.display = 'none';
    document.getElementById('reikiNews').style.display = 'none';
   document.getElementById('reviews').style.display = 'grid';


}

function InfoPoint1() {

    document.getElementById('first').style.display = 'block';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
  document.getElementById('retTitle').style.display = 'block';
    document.getElementById('retP').style.display = 'block';
    document.getElementById('menuList').style.top  = '20%';

}

function InfoPoint2() {

    document.getElementById('second').style.display = 'block';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('first').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
  document.getElementById('retTitle').style.display = 'block';
    document.getElementById('retP').style.display = 'block';
    document.getElementById('menuList').style.top  = '20%';

}

function InfoPoint3() {

    document.getElementById('third').style.display = 'block';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('first').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
  document.getElementById('retTitle').style.display = 'block';
    document.getElementById('retP').style.display = 'block';
    document.getElementById('menuList').style.top  = '20%';


}

function InfoPoint4() {

    document.getElementById('fourth').style.display = 'block';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('first').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
    document.getElementById('retTitle').style.display = 'block';
    document.getElementById('retP').style.display = 'block';
    document.getElementById('menuList').style.top   = '20%';

}


/* ==================== Ret Elemnts ==========*/

function InfoPoint5() {

    document.getElementById('first').style.display = 'none';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('whatWill').style.display = 'block';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
    document.getElementById('retTitle').style.display = 'none';
    document.getElementById('retP').style.display = 'none';
     document.getElementById('menuList').style.top  = '0%';
}

function InfoPoint6() {

    document.getElementById('first').style.display = 'none';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'block';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'none';
    document.getElementById('retTitle').style.display = 'none';
    document.getElementById('retP').style.display = 'none';
    document.getElementById('menuList').style.top  = '0%';


}

function InfoPoint7() {

    document.getElementById('first').style.display = 'none';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'block';
    document.getElementById('whatMakes').style.display = 'none';
    document.getElementById('retTitle').style.display = 'none';
    document.getElementById('retP').style.display = 'none';
    document.getElementById('menuList').style.top  = '0%';


}

function InfoPoint8() {

    document.getElementById('first').style.display = 'none';
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('third').style.display = 'none';
    document.getElementById('second').style.display = 'none';
    document.getElementById('whatWill').style.display = 'none';
    document.getElementById('howDoes').style.display = 'none';
    document.getElementById('whereDid').style.display = 'none';
    document.getElementById('whatMakes').style.display = 'block';
    document.getElementById('retTitle').style.display = 'none';
    document.getElementById('retP').style.display = 'none';
    document.getElementById('menuList').style.top  = '0%';

}


