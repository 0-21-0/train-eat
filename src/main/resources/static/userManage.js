/** @type {Set} */
let userIds = new Set();
/** @type {HTMLDivElement} */
let unHiddenDiv;

const hideOtherDiv = function (div) {
    if (unHiddenDiv != null) {
        unHiddenDiv.hidden = true;
    }
    if (div == null) {
        return;
    }
    div.hidden = false;
    unHiddenDiv = div;
}

// 查询用户
const selectButton = document.getElementById("selectUser");
const selectUser = function () {
    fetch('/selectUser')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("userList");
            list.replaceChildren();
            userIds.clear();
            data.forEach(element => {
                const li = document.createElement("li");
                li.textContent = element.id + ": " + element.name;
                list.appendChild(li);
                userIds.add(element.id);
            });
        });
}
selectButton.addEventListener("click", function () {
    selectUser();
    hideOtherDiv(null);
});

//添加用户
const addButton = document.getElementById("addUser");
const addUserDiv = document.getElementById("addUserDiv");
const addUser = function () {
    hideOtherDiv(addUserDiv);
}
addButton.addEventListener("click", addUser);
const addCommit = document.getElementById("addCommit");
addCommit.addEventListener("click", function () {
    /** @type {HTMLInputElement} */
    const nameInput = document.getElementById("addUserName");
    const userName = nameInput.value.trim();
    if (!userName) {
        alert("用户名不能为空！");
        return;
    }
    console.log("添加：" + userName);
    fetch("/addUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: userName })
    }).then(res => {
        if (!res.ok) throw new Error("请求失败");
        return res.json();
    })
        .then(data => {
            console.log("添加成功：", data);
            alert("用户添加成功！");
            selectUser();
        })
        .catch(err => {
            console.error("添加失败", err);
            alert("添加失败，请检查日志");
        });
});

//修改用户
const updateButton = document.getElementById("updateUser");
const updateUser = function () {
    const updateUserDiv = document.getElementById("updateUserDiv");
    hideOtherDiv(updateUserDiv);
}
updateButton.addEventListener("click", updateUser);
const updateCommit = document.getElementById("updateCommit");
updateCommit.addEventListener("click", function () {
    /** @type {HTMLInputElement} */
    const idInput = document.getElementById("updateUserId");
    const updateId = idInput.value;
    if (!userIds.has(Number(updateId))) {
        alert("没有输入列表中存在的id！");
        return;
    }
    /** @type {HTMLInputElement} */
    const nameInput = document.getElementById("updateUserName");
    const newName = nameInput.value.trim();
    if (!newName) {
        alert("新名字不能为空！");
        return;
    }
    fetch(`/updateUser`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: updateId,
            name: newName
        })
    }).then(res => res.json())
        .then(data => {
            console.log("修改成功");
            selectUser();
        }).catch(err => {
            console.error(`修改失败：${err}`);
            alert(`修改失败：${err}`);
            selectUser();
        });
});

//删除用户
const deleteButton = document.getElementById("deleteUser");
const deleteUser = function () {
    const deleteUserDiv = document.getElementById("deleteUserDiv");
    hideOtherDiv(deleteUserDiv);
}
deleteButton.addEventListener("click", deleteUser);
const deleteCommit = document.getElementById("deleteCommit");
deleteCommit.addEventListener("click", function () {
    /** @type {HTMLInputElement} */
    const idInput = document.getElementById("deleteUserId");
    const deleteId = idInput.value.trim();
    if (!userIds.has(Number(deleteId))) {
        alert("没有输入列表中存在的id！");
        return;
    }
    fetch(`/deleteUser`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.parse(deleteId)
    }).then(res => {
        if(res.ok){
            console.log(`删除成功！`);
            selectUser();
        } else{
            console.error(`删除失败！`);
        }
    })
        .catch(err => {
            alert(`删除失败：${err}`);
            console.log(`请求失败：${err}`);
        });
})

selectUser();