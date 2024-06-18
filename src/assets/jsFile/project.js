let dataBlog = [];
function submitBlog(event) {
  event.preventDefault();
  let nameProject = document.getElementById("nameProject").value;
  let startProject = document.getElementById("startProject").value;
  let endProject = document.getElementById("endProject").value;
  let descProject = document.getElementById("descProject").value;
  let techDisplay = "";
  let inputImage = document.getElementById("inputImage").files;

  for (var i = 0; i < bahasa.length; i++) {
    if (bahasa[i].checked) {
      techDisplay += bahasa[i].value;
    }
  }

  if (nameProject == "") {
    alert("Name project cannot be blank !");
  } else if (startProject == "") {
    alert("Start date cannot be blank !");
  } else if (endProject == "") {
    alert("End date cannot be blank");
  } else if (descProject == "") {
    alert("Description cannot be blank");
  } else if (inputImage == "") {
    alert("Can't find images");
  }
  inputImage = URL.createObjectURL(inputImage[0]);
  let blog = {
    Name: nameProject,
    Start: startProject,
    End: endProject,
    Description: descProject,
    Teknologi: techDisplay,
    Image: inputImage,
  };
  dataBlog.push(blog);
  console.log("dataArray", dataBlog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("project").innerHTML = "";
  for (var index = 0; index < dataBlog.length; index++) {
    document.getElementById("project").innerHTML += `<div class = "blog-list-item"> 
      <div class = "blog-image">
        <img src = "${dataBlog[index].Image}" alt="image upload" />
      </div>
      <div class = "blog-content">
        <h1 >
          <a href = "blog-detail.html">${dataBlog[index].Name}</a>
        </h1>
      </div>
        <div class ="detail-blog">
          ${dataBlog[index].Start} | ${dataBlog[index].End}
        </div>
        <p>
          ${dataBlog[index].Description}
        </p>
        <div>
        ${dataBlog[index].Teknologi}
        </div
        <div class = "btn-group">
          <button class = "blog-edit"> Edit Blog :</button><br>
          <button class = "blog-delete"> Delete Post :</button>
        </div>
      </div>
    </div>`;
  }
}
