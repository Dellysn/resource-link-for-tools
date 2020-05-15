let body = document.querySelector("body");
let cmdOutput = document.querySelector("#CMDTOOL");

cmdOutput.textContent = "Loading links please wait...";
window.onload = function () {
  function displayResources(data) {
    console.log(data);

    let dataReturned = data.CMDtools.map(function (tools) {
      function miniloop(data) {
        data.forEach(function (tag) {
          return `
              <a href="${tag}" >${tag} </a>
              `;
        });
      }
      return `
          <ul id="list">
          <li class="list-menu">${tools.name} </li>
          <li class="list-menu"> <a href="${tools.link}" >${tools.link} </a> </li>
          <li class="list-menu">${tools.desc} </li>
          <li class="list-menu">  <span class="tag">${tools.tags} </span>
          
          
          </li>
          </ul>
          
            `;
    }).join("");

    cmdOutput.innerHTML = dataReturned;
  }
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => displayResources(data))
    .catch((err) => {
      console.log(err);
    });
};
// function loadCMDResources() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "./data.json");
//   xhr.onload = function () {
//     const self = xhr;
//     if (xhr.status === 200 && xhr.status < 400) {
//       const data = JSON.parse(self.response);
//       displayResources(data);
//     } else {
//       cmdOutput.textContent =
//         "something went wrong while loading links, please try again!";
//     }
//   };
//   xhr.send();
// }
// loadCMDResources();
