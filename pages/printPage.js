let sonodTitle2 = localStorage.getItem("sonodTitle2");
document.querySelector(".pageTitle").innerHTML = sonodTitle2;

const disName = localStorage.getItem("dis");
const PolishSName = localStorage.getItem("polish");
const UPNameI = localStorage.getItem("union");
const selfName = localStorage.getItem("selfName");
const fh_name = localStorage.getItem("fh_name");
const mother_name = localStorage.getItem("mother_name");
const vil_name = localStorage.getItem("vil_name");
const w_name = localStorage.getItem("w_name");
const post_name = localStorage.getItem("post_name");
const chairName = localStorage.getItem("chair");
const boiID = localStorage.getItem("boiID");

const upTitle = document.querySelector("#upTitle");
const upAddress = document.querySelector("#upAdd");
const upChairman = document.querySelector("#upChairman");
const SName =document.getElementById("SName");
const FSname =document.getElementById("FSname");
const Mname =document.getElementById("Mname");
const Vname =document.getElementById("Vname");
const Wno =document.getElementById("Wno");
const PostName =document.getElementById("PostName");
const upName =document.getElementById("upName");
const PsName =document.getElementById("PsName");
const DisName =document.getElementById("DisName");
const upName1 =document.getElementById("upName1");
const chariman_name =document.getElementById("chariman_name");
const upName2 = document.getElementById("upName2");
const ps2 = document.getElementById("ps2");
const Dis2 = document.getElementById("Dis2");
const sobav = document.getElementById("sobav");

upTitle.innerHTML = UPNameI;
upChairman.innerHTML = chairName;
upAddress.innerHTML = `উপজেলাঃ ${PolishSName}, জেলাঃ ${disName}।`;
SName.innerHTML = selfName;
FSname.innerHTML = fh_name;
Mname.innerHTML = mother_name;
Vname.innerHTML = vil_name;
Wno.innerHTML = w_name;
PostName.innerHTML = post_name;
upName.innerHTML = UPNameI;
PsName.innerHTML = PolishSName;
DisName.innerHTML = disName;
sobav.innerHTML = boiID;

upName1.innerHTML = UPNameI;
chariman_name.innerHTML = chairName;
upName2.innerHTML = UPNameI;
ps2.innerHTML = PolishSName;
Dis2.innerHTML = disName;

function cuerntdate() {
  let today = new Date();
  let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
  let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
  let year = today.getFullYear();
  let cdate = `তারিখঃ ${day}/${month}/${year} ইং।`;
  document.getElementById("cdate").innerHTML = cdate;
}
cuerntdate();

const btnClose = document.getElementById("btnClose");

btnClose.addEventListener("click", () => {
  document.querySelector(".printTut").classList.add("tuHeid");
})

// function printItem() {
//   window.print();
//   window.close();
// }

// setTimeout(() => {
//   printItem();
// }, 1000);