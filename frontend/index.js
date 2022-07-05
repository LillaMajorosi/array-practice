async function getStudents () {
    const response = await fetch("http://127.0.0.1:3000/students") //az endpointot adom meg
    return await response.json() //ez egy js-es tömb lesz
}

function init() {
    const students = await getStudents(); //lekérjük a diákokat, objektum formában
    document.body.innerHTML = getStudentlistHTML; 
}

function getStudentlistHTML(students){
    console.log(students)
    const studentlistHTMLs = students.map(studentComponent) //map függvényt használjuk, h egy nagy html kódba kapjuk meg a student listát, amit lent hoztunk létre
    console.log(studentlistHTMLs);
    return studentlistHTMLs.join("")
}

function studentComponent(student){ 
    return `
    <div class="student">
        <p>${student.name}</p>
        <p>${student.status}</p>
    </div>
    `
    //string listát ad vissza html formátumba, majd felette létrehozom a map-et, hogy ne egy tömbbe adja vissza, hanem eszerint
}

init()

