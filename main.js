const containerEl = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(containerEl);
    data.map((el) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      wrapper.innerHTML += `
        <h1>${el["id"]}</h1>
        </br>
        <p><b>userId</b>: ${el["userId"]}</p>
        <p><b>title</b>: ${el["title"]}</p>
        <p><b>body</b>: ${el["body"]}</p>
        `;
      containerEl.appendChild(wrapper);
    });
  })
  .catch((err) => {
    console.log(err);
  });
