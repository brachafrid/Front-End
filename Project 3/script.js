class Family {
    constructor(familyName, email, phone, adress, password, children) {
        this.familyName = familyName;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.password = password;
        this.children = children;
    }
}

class Child {
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
}

class Course {
    constructor(course, price) {
        this.course = course;
        this.price = price;
    }
}
let arrCourse = ["Backing", "Dancing", "Singing", "jumping", "swiming", "drawing"];


function answer() {
    const ans = document.getElementById("ans");
    if (ans.children.length > 0) {
        ans.innerHTML = "";
    }
    return ans;
}

function getChildren() {
    let fxhr = new FXMLHttpRequest();
    fxhr.open("GET", "coursesUser/getChildAndCorse", {});
    let response = fxhr.send();
   
    const ans = answer();

    const table = document.createElement("table");
    for (let i = 0; i < response.body.length; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.classList.add("table-td");
        td.innerHTML = response.body[i].name;
        tr.appendChild(td);

        for (let j = 0; j < response.body[i].courses.length; j++) {
            const td = document.createElement("td");
            td.classList.add("table-td");
            td.innerHTML = response.body[i].courses[j];
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }
    ans.appendChild(table);
}

function getMyFee() {
    let myFee;
    let fxhr = new FXMLHttpRequest();
    fxhr.open("GET", "coursesUser/getFamilyFee", {});
    myFee = fxhr.send();
    console.log(myFee);
    const ans = answer();
    const div = document.createElement("div");

    div.innerHTML = myFee.body.fee;
    ans.appendChild(div);

}
//הפונקציה מקבלת current user ומציגה אותה ב-html
function printCurrentUser(currentUser) {
    console.log(currentUser)
    document.getElementById('current').innerHTML = currentUser.familyName;
}

//add new child
function creatChild() {

    const ans = answer();
    const yourChild = document.createElement("input");
    yourChild.setAttribute('placeholder', "enter your new child");
    const age = document.createElement("input");
    age.setAttribute('placeholder', "enter your age of child");
    const input = document.createElement("input");
    input.setAttribute('placeholder', "enter your new course");
    input.setAttribute('list', "choice");
    const datalist = document.createElement('datalist');
    datalist.id = "choice";
    for (let i = 0; i < arrCourse.length; i++) {
        const option = document.createElement('option');
        option.value = arrCourse[i];
        datalist.appendChild(option);
    }
    const submit = document.createElement("input");
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "send");


    // yourChild.addEventListener("change", () => {
    //     age.addEventListener("change", () => {
            submit.addEventListener("click", () => {
               if(input.value!==""&&yourChild.value!==""&&age.value!=="")
               { 
                   let childCourses = [new Course(input.value, getPrice(input.value))];
                let child = new Child(yourChild.value, age.value, childCourses)

                let fxhr = new FXMLHttpRequest();
                fxhr.open("PUT", "putCourse/putChild", { child });
                let respons = fxhr.send();
                answer();}
      
            })
    //     })
    // })
    // yourChild.innerHTML = "enter your new child";
    ans.appendChild(yourChild);
    ans.appendChild(age);
    ans.appendChild(input);
    ans.appendChild(datalist);
    ans.appendChild(submit);
    // if (yourChild.value) {

    //     //בדיקת סטטוס הבקשה
    //     // const ans = answer();
    // }

}
//add new course
function newCourse(){
    let fxhr = new FXMLHttpRequest();
    fxhr.open("GET", "coursesUser/getChildAndCorse", {});
    let response = fxhr.send();
   
    const ans = answer();
    // const yourCourse = document.createElement("input");
    // yourCourse.setAttribute('placeholder', "enter your new course");
 
    const input = document.createElement("input");
    input.setAttribute('placeholder', "enter your child");
    input.setAttribute('list', "choice");
    const datalist = document.createElement('datalist');
    datalist.id = "choice";
    for (let i = 0; i < response.body.length; i++) {
        const option = document.createElement('option');
        option.value = response.body[i].name;
        datalist.appendChild(option);
    }
    // inputOption(response.body,"enter your child",name)
    const input2 = document.createElement("input");
    input2.setAttribute('placeholder', "enter your new course");
    input2.setAttribute('list', "choice");
    const datalist2 = document.createElement('datalist');
    datalist2.id = "choice";
    for (let i = 0; i < arrCourse.length; i++) {
        const option2 = document.createElement('option');
        option2.value = arrCourse[i];
        // console.log( option2.value )
        datalist2.appendChild(option2);
    }

    const submit = document.createElement("input");
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "send");

    // ans.appendChild(yourCourse);

    
    if(input.value)
    { 
        let course=yourCourse.value;
        let fxhr = new FXMLHttpRequest();
        fxhr.open("PUT", "putCourse/putCourse", {course});
        let respons = fxhr.send();
        console.log(respons)
        //בדיקת סטטוס הבקשה
        // const ans = answer();
    }

    ans.appendChild(input);
    ans.appendChild(datalist);
    ans.appendChild(input2);
    ans.appendChild(datalist2);
    ans.appendChild(submit);
}
// function inputOption(arr,placeholder1,vl){
//     const input = document.createElement("input");
//     input.setAttribute('placeholder',placeholder1);
//     input.setAttribute('list', "choice");
//     const datalist = document.createElement('datalist');
//     datalist.id = "choice";
//     for (let i = 0; i < arr.length; i++) {
//         const option = document.createElement('option');
//         option.value = arr[i].vl;
//         datalist.appendChild(option);
//     }
//     ans.appendChild(input);
//     ans.appendChild(datalist);
// }
function getPrice(input) {
    switch (input) {
        case "Backing":
            return 100;
            break;

        case "Dancing":
            return 150;
            break;

        case "Singing":
            return 90;
            break;

        case "jumping":
            return 100;
            break;

        case "swiming":
            return 200;
            break;

        case "drawing":
            return 120;
            break;
        default:
            break;
    }
}
