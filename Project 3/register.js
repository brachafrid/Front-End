function signUp(event) {
    event.preventDefault();
    let input = event.target
    if (input.password.value === input.passwordReapet.value) {
        let fxhr = new FXMLHttpRequest();
        let family = new Family(input.name.value,input.email.value,input.email.value,input.adress.value,input.password.value,[]);
        fxhr.open("POST", "users/postFamily", family);
        let response = fxhr.send()
        console.log(`status:${response.status}  statuseText:${response.statusText}`);
        if (response.status == 200) {
            app.change('application');
            let fxhr = new FXMLHttpRequest();
            fxhr.open("GET", "users/getCurrentUser", {});
            let response2 = fxhr.send()
            console.log(`status:${response2.status}  statuseText:${response2.statusText}`)
            if (response2.status == 200) {
                printCurrentUser(response2.body)
            }
        }
    }

}

function logIn(event, func, apl) {
    event.preventDefault();
    let input = event.target;
    let fxhr = new FXMLHttpRequest();
    fxhr.open("PUT", `currentUser/${putCurrentUser}`, { email: input.email.value, password: input.password.value });
    let response = fxhr.send()
    console.log(`status:${response.status}  statuseText:${response.statusText}`);
    if (response.status == 200) {
        app.change('application');
        let fxhr = new FXMLHttpRequest();
        fxhr.open("GET", "users/getCurrentUser", {});
        let response2 = fxhr.send()
        console.log(`status:${response2.status}  statuseText:${response2.statusText}`)
        if (response2.status == 200) {
            printCurrentUser(response2.body)
        }
    }
}

function logOut() {
    let fxhr = new FXMLHttpRequest();
    fxhr.open("PUT", "currentUser/putCurrentUserNull", {});
    let response = fxhr.send()
    console.log(`status:${response.status}  statuseText:${response.statusText}`);
    if (response.status == 200) {
        alert("you log out seccsfuly")
    }
}

function logInPrinciple(event) {
    let input = document.querySelectorALL('#logIn>input');
    let fxhr = new FXMLHttpRequest();
    fxhr.open("PUT", "users/singIn", { userName: input[0].value, paswword: input[1].value });
    fxhr.send()
}
