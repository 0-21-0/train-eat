const button = document.getElementById("testButton");
button.addEventListener("click",function(){
    fetch('/users')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            const list = document.getElementById("userList");
            data.forEach(element => {
                const li = document.createElement("li");
                li.textContent = element.id + ": " + element.name;
                list.appendChild(li);
            });
        });
})