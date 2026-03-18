function popsss() {
    const username = document.getElementById("uname")
    const password = document.getElementById("pass")
    if (username.value === "" || password.value === ""){
        alert("input is not filled")
        return false
    }
    return true
}


