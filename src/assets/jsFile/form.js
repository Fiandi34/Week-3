function submitData() {
  var inputName = document.getElementById("inputName").value;
  var inputEmail = document.getElementById("inputEmail").value;
  var inputNumber = document.getElementById("inputNumber").value;
  var inputSubject = document.getElementById("inputSubject").value;
  var inputMessage = document.getElementById("inputMessage").value;
  if (inputName == "") {
    alert("Name harus diisi");
  } else if (inputEmail == "") {
    alert("Email harus diisi");
  } else if (inputNumber == "") {
    alert("Number harus diisi");
  } else if (inputSubject == "") {
    alert("Subject harus diisi");
  } else if (inputMessage == "") {
    alert("Message harus diisi");
  }
  console.log(`Name : ${inputName}\n Email: ${inputEmail}\n Number: ${inputNumber}\n Subject: ${inputSubject}\n Message: ${inputMessage}`);
  var a = document.createElement("a");
  a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${inputMessage}`;
  a.click();
}
