function a(){
	var s11 = document.querySelector("#s11").value;
	var s12 = document.querySelector("#s12").value;
	var s13 = document.querySelector("#s13").value;
	var s21 = document.querySelector("#s21").value;
	var s22 = document.querySelector("#s22").value;
	var s23 = document.querySelector("#s23").value;
	var s31 = document.querySelector("#s31").value;
	var s32 = document.querySelector("#s32").value;
	var s33 = document.querySelector("#s33").value;

	var res = (s11*s22*s33)-(s11*s23*s32)+(s12*s23*s13)-(s12*s33*s21)+(s13*s21*s32)-(s13*s31*s22);

	var aa = document.querySelector("#result").innerHTML=res;

	return aa;
}

document.querySelector("#determinant").addEventListener('click',a);