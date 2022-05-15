let users = [];
let currentUser;
let index;
//הפונקציה מאתחלת את הזכרון
function initDB() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', '[]')
        initPrinciple();
    }
    else {
        users = JSON.parse(localStorage.getItem('users'));
    }
    if (!localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', 'null')
    } else {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    if (!localStorage.getItem('index')) {
        localStorage.setItem('index', 'null')
    } else {
        index = JSON.parse(localStorage.getItem('index'));
    }

}

//הפונקציה מאתחלת את המנהל
function initPrinciple() {
    let principle = {
        name: 'Zrubavel Zer',
        email: 'Zrubavel123@gmail.com',
        password: 8114,
        phon: '0548488114',
        code: 'zer'
    }
    users.unshift(principle);
    localStorage.setItem('users', JSON.stringify(users));
}

//GET

//Principle--------------------------------------------------------------------

// המנהל מקבל את רשימת שמות המשפחה
function getFamilyPriciple() {
    let family = users;
    family.pop(family[0]);
    let familyNames = [];
    family.forEach(element => {
        familyNames.push(element.familyName);
    });
    return familyNames;
}

// המנהל מקבל את רשימת התשלומים של כל משפחה
function getPricePrinciple() {
    let family = users;
    family.pop(family[0]);
    let familyPrice = [];
    family.forEach(element => {
        let obj = {
            familyName: element.familyName,
            price: getFee(element)
        }
        familyPrice.push(obj);
    });
    return familyPrice;
}


// סכום המצלצלים הנכנס לכיס המנהל
function getAllPrice() {
    let family = users;
    family.pop(family[0]);
    let fee = 0;
    family.forEach(element => {
        fee += getFee(element);
    });
    return { fee: fee };
}

//Family------------------------------------------------------------------------

// שליפה לכל משפחה ילד-חוג, ילד-חוג
function getChildAndCorse() {
    let children = [];
    if (!currentUser.children.length) return undefined;
    currentUser.children.forEach(element => {
        console.log(element)
        let arrayCourses = [];
        element.child.courses.forEach(ele => {
            arrayCourses.push(ele.course)
            console.log(ele);
        });
        let child = {
            name: element.child.name,
            courses: arrayCourses
        }
        console.log(child);
        children.push(child);
        console.log(children);
    });
    return children;
}

// פונקציה השולפת את התשלום למשפחה
function getFamilyFee() {
    return getFee(currentUser);

}

//מחשב תשלום למשתמש אחד
function getFee(user) {
    let fee = 0;
    user.children.forEach(element => {
        element.child.courses.forEach(ele => {
            fee += ele.price;
        });
    });
    return { fee: fee };
}

// שליפת ילד יחיד עם חוגיו ומחירי החוגים שלו
function getCoursesChild(nameChild) {
    if (!currentUser.children)
        return [];
    currentUser.children.forEach(element => {
        if (element.child.name === nameChild) {
            return element;
        }
    });
}

function getCurrentUser() {
    return currentUser;
}
// תשלום חוגים לילד מסוים


//POST
function postFamily(family) {
    let i = serchFamily(family, false);
    console.log(i);
    if (isNaN(i)) {
        users.push(family);
        currentUser = family;
        index = users.length - 1;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('index', JSON.stringify(users.length - 1));
        return currentUser;;
    }
    return undefined;
}

//DELETE

//מחיקת ילד מחוג
function deleteChild(course) {
    currentUser.children.forEach(element => {
        if (element.child.name === course.child) {
            for (let i = 0; i < element.child.courses.length; i++) {
                if (element.child.courses[i].course === course) {
                    element.child.courses.splice(i, 1);
                    users.splice(index, 1);
                    users.push(currentUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    localStorage.setItem('index', JSON.stringify(users.length - 1));
                    index = users.length - 1;
                    return currentUser;
                }
            }
        }
    });
    return undefined;
}

//PUT

//הוספת ילד חדש למערכת(+חוג)
function putChild(child) {
    currentUser.children.push(child);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    users.splice(index, 1);
    users.push(currentUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('index', JSON.stringify(users.length - 1));
    index = users.length - 1;
    return currentUser;
}

//log in
function putCurrentUser(user) {
    let i = serchFamily(user, true);
    if (i !== NaN) {
        localStorage.setItem('currentUser', JSON.stringify(users[i]));
        localStorage.setItem('index', JSON.stringify(i));
        index = i;
        currentUser = users[i];
        return currentUser;
    }
    return undefined;
}

//log in as a principle
function putManager(manager) {
    let passWord = 8114;
    let code = 'zer';
    if (manager.password === passWord && manager.code === code) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        localStorage.setItem('index', JSON.stringify(0));
    }
    return undefined
}
//search a family in current user
function serchFamily(user, islog) {
    for (let i = 0; i < users.length; i++) {
        if ((!islog && users[i].email === user.email) || (islog && users[i].password === user.password && users[i].email === user.email)) {
            return i;
        }
    }
    return NaN;
}

//log out
function putCurrentUserNull() {
    localStorage.setItem('currentUser', 'null');
    localStorage.setItem('index', NaN);
    index = NaN;
    currentUser = null
    return { number: 5 };
}

//הוספת חוג חדש לילד
function putCourse(child) {
    currentUser.children.forEach(element => {
        if (element.child.name === child.name) {
            element.child.courses.push(child.course);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            users.splice(index, 1);
            users.push(currentUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('index', JSON.stringify(users.length - 1));
            index = users.length - 1;
            return currentUser;
        }
    });
    return undefined;
}

document.addEventListener('DOMContentLoaded', initDB);