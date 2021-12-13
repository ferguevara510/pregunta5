function loadContent(){
    let ul = document.createElement("ul");

    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then((response) => {
        for(let content of response.data){
            let li = document.createElement("li");
            li.innerHTML = content.name + " vive en " + content.city + "<br>";
            ul.appendChild(li);
        }

        let div = document.getElementById("content");
        div.appendChild(ul);
    });
}