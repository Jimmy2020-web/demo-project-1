const boibhik = document.getElementById("boibhik");
const nagorik = document.getElementById("nagorik");
const sonod_Name = document.getElementById("sonod_Name");

boibhik.addEventListener("click", () => {
  sonod_Name.innerHTML = "বৈবাহিক সনদ পত্র";
  localStorage.setItem("printIT", 20);
});

nagorik.addEventListener("click", () => {
  sonod_Name.innerHTML = "নাগরিকত্ব সনদ পত্র";
  localStorage.setItem("printIT", 10);
});

const dis = document.getElementById("dis");
const polish = document.getElementById("polish");
const union = document.getElementById("union");
const chair = document.getElementById("chair");
const slidre = document.getElementById("section");
const progress = document.querySelector("#stats");
const progress1 = document.querySelector("#stats1");
const progress2 = document.querySelector("#stats2");
const sonodN2 = document.getElementById("sonodN2");
const sonodN3 = document.getElementById("sonodN3");

slidre.classList.add("back-box");
progress.classList.add("dblock");
progress1.classList.add("dnone");
progress2.classList.add("dnone");

function getItem(dis, polish) {
  var dis = document.getElementById("dis").value;
  var polish = document.getElementById("polish");

  polish.innerHTML = "";

  if (dis == "নওগাঁ") {
    var optionrry = ["--নির্বাচন করুন--", "রাণীনগর", "আত্রাই","মহাদেবপুর", "বদলগাছী", "পন্তীতলা", "ধামইরহাট", "নিয়ামতপুর", "মান্দা", "পোরশা", "সাপাহার", "নওগাঁ-সদর"];
  } else {
    var optionrry = ["--Coming Soon--","Coming", "Coming"];
  }

  for (var option in optionrry) {
    var pair = optionrry[option];
    var newOption = document.createElement("option");
    newOption.value = pair;
    newOption.innerHTML = pair;
    polish.options.add(newOption);
  }
};

function getItem2(polish, union) {
  var polish = document.getElementById("polish").value;
  var union = document.getElementById("union");

  union.innerHTML = "";

  if (polish == "রাণীনগর") {
    var optionrry = ["--নির্বাচন করুন--", "০১নং খট্টেশ্বর রাণীনগর", "০২নং কাশিমপুর","০৩নং গোনা", "০৪নং কালিগ্রাম", "০৫নং বড়গাছা", "০৬নং পারইল", "০৭নং একডালা", "০৮নং মিরাট"];
  } else {
    var optionrry = ["--Coming Soon--","Coming", "Coming"];
  }

  for (var option in optionrry) {
    var pair = optionrry[option];
    var newOption = document.createElement("option");
    newOption.value = pair;
    newOption.innerHTML = pair;
    union.options.add(newOption)
  }
};

function getItem3(union, chair) {
  var union = document.getElementById("union").value;
  var chair = document.getElementById("chair");

  chair.innerHTML = "";

  if (union == "০২নং কাশিমপুর") {
    var optionrry = ["মোঃ মকলেছুর রহমান (বাবু)"];
  } else if (union == "০১নং খট্টেশ্বর রাণীনগর") {
    var optionrry = ["মোছাঃ চন্দনা সারমিন রুমকী"];
  } else if (union == "০৩নং গোনা") {
    var optionrry = ["মোঃ আব্দুল খালেক"];
  } else { 
    var optionrry = ["Coming"]
  };

  for (var option in optionrry) {
    var pair = optionrry[option];
    var newOption = document.createElement("option");
    newOption.value = pair;
    newOption.innerHTML = pair;
    chair.options.add(newOption);
  }
};

function next() {
  const printIT = localStorage.getItem("printIT");
  progress1.classList.replace("dnone", "dblock");
  localStorage.setItem("dis", dis.value);
  localStorage.setItem("polish", polish.value);
  localStorage.setItem("union", union.value);
  localStorage.setItem("chair", chair.value);
  slidre.classList.replace("back-box", "anis-box");
  if (printIT > 15) {
    sonodN2.innerHTML = "বৈবাহিক সনদ পত্র";
    sonodN3.innerHTML = "বৈবাহিক সনদ পত্র";
    localStorage.setItem("sonodTitle2", "বৈবাহিক সনদ পত্র");
    localStorage.setItem(
      "boiID",
      "সে কোন প্রকার বিবাহ বন্ধনে আবদ্ধ হয় নাই বা বিবাহ করে নাই।"
    );
  } else if (printIT < 15) {
    sonodN2.innerText = "নাগরিক সনদ পত্র";
    sonodN3.innerText = "নাগরিক সনদ পত্র";
    localStorage.setItem("sonodTitle2", "নাগরিক সনদ পত্র");
  }
}

function Resate() {
  window.location.reload();
  localStorage.clear();
}

function back() {
  progress.classList.replace("dnone", "dblock");
  slidre.classList.replace("anis-box", "back-box");
  progress1.classList.replace("dblock", "dnone");
  localStorage.clear();
}

function setInfo() {
  var selfName = document.querySelector("#self_name").value;
  var fh_name = document.querySelector("#fh_name").value;
  var mother_name = document.querySelector("#mother_name").value;
  var vil_name = document.querySelector("#vil_name").value;
  var w_name = document.querySelector("#w_name").value;
  var post_name = document.querySelector("#post_name").value;

  localStorage.setItem("selfName", selfName);
  localStorage.setItem("fh_name", fh_name);
  localStorage.setItem("mother_name", mother_name);
  localStorage.setItem("vil_name", vil_name);
  localStorage.setItem("w_name", w_name);
  localStorage.setItem("post_name", post_name);
}

function next2() {
  setInfo();
  progress2.classList.replace("dnone", "dblock");
  slidre.classList.replace("anis-box", "anis-box2");
  const selfName = localStorage.getItem("selfName");
  const fh_name = localStorage.getItem("fh_name");
  const mother_name = localStorage.getItem("mother_name");
  const vil_name = localStorage.getItem("vil_name");
  const w_name = localStorage.getItem("w_name");
  const post_name = localStorage.getItem("post_name");
  const zila = localStorage.getItem("dis");
  const thana = localStorage.getItem("polish");
  const up = localStorage.getItem("union");

  document.getElementById("selfName1").innerHTML = selfName;
  document.getElementById("fh_name1").innerHTML = fh_name;
  document.getElementById("mother_name1").innerHTML = mother_name;
  document.getElementById("vil_name1").innerHTML = vil_name;
  document.getElementById("w_name1").innerHTML = w_name;
  document.getElementById("post_name1").innerHTML = post_name;

  document.getElementById("zila").innerHTML = zila;
  document.getElementById("thana").innerHTML = thana;
  document.getElementById("up").innerHTML = up;
}

function back2() {
  progress2.classList.replace("dblock", "dnone");
  slidre.classList.replace("anis-box2", "anis-box");
}

function printA4() {
   window.open("./pages/printPage.html", "", "width=600px").focus();
}
