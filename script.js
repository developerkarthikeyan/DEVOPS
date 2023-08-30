function convert(){
let cie1=Number(document.getElementById("CIE1").value)
let cie2=Number(document.getElementById("CIE2").value)
let cie3=Number(document.getElementById("CIE3").value)
let moodle=Number(document.getElementById("Moodle").value)
let assignment=Number(document.getElementById("Assignment mark").value)
//let seminar=Number(document.getElementById("seminar").value)
let attendance=Number(document.getElementById("attendance").value)
let cie1o=(cie1/50)*8
let cie2o=(cie2/50)*8
let cie3o=(cie3/50)*8
let final=cie1o+cie2o+cie3o+moodle+assignment+attendance
let result=document.getElementById("result")
result.innerText=final
}