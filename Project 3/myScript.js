
//הפונקציה תחזיר מערך של הכפתורים
function getCourseOfKid() {
    let fxhr = new FXMLHttpRequest();
    fxhr.open("GET", "coursesUser/getChildAndCorse", {});
    let response = fxhr.send();
    const ans = answer();
    for (let i = 0; i < response.body.length; i++) {
        const button = document.createElement('button');
        button.className+="childButton";
        button.innerHTML = response.body[i].name;
        button.addEventListener('click', () => { coursesChild(response.body[i].courses) });
        ans.appendChild(button);
    }
    const div = document.createElement('div');
    div.id = "childCourse";
    ans.appendChild(div);
}

function coursesChild(courses) {
    document.getElementById('childCourse').innerHTML = "";
    for (let i = 0; i < courses.length; i++) {
        const p = document.createElement('p');
        p.classList.add("p");
        p.innerHTML = `${i + 1}. ${courses[i]}`;
        document.getElementById('childCourse').appendChild(p);
    }

}


