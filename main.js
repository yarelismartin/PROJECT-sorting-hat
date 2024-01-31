
// the main array that eill be used, conating all the students
const students = [
  { id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {   id: 2,
      name: "Hermione Granger",
      house: "Gryffindor"
  },
  {   id: 3,
      name: "Ron Weasley",
      house: "Gryffindor"
  },
  {   id: 4,
      name: "Ginny Weasley",
      house: "Gryffindor"
  },
  {   id: 5,
      name: "Neville Longbottom",
      house: "Gryffindor"
  },
  {   id: 6,
      name: "Luna Lovegood",
      house: "Ravenclaw"
  },
  {   id: 7,
      name: "Cho Chang",
      house: "Ravenclaw"
  },
  {   id: 8,
      name: "Padma Patil",
      house: "Ravenclaw"
  },
  {   id: 9,
      name: "Terry Boot",
      house: "Ravenclaw"
  },
  {   id: 10,
      name: "Draco Malfoy",
      house: "Slytherin"
  },
  {   id: 11,
      name: "Pansy Parkinson",
      house: "Slytherin"
  },
  {   id: 12,
      name: "Blaise Zabini",
      house: "Slytherin"
  },
  {   id: 13,
      name: "Millicent Bulstrode",
      house: "Slytherin"
  },
  {   id: 14,
      name: "Cedric Diggory",
      house: "Hufflepuff"
  },
  {   id: 15,
      name: "Ernie Macmillan",
      house: "Hufflepuff"
  },
  {   id: 16,
      name: "Hannah Abbott",
      house: "Hufflepuff"
  },
  {   id: 17,
      name: "Justin Finch-Fletchley",
      house: "Hufflepuff"
  },
  ];

//renderToDom function expression
const renderToDom = (divId, html)=>{
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

// render cardsOnDom function expression
const cardsOnDom =(array) => {
  let domString = "";
    array.forEach((student)=> {
      domString += `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <span></span>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <button type="click" class="btn btn-outline-danger"  id="expel--${student.id}">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`
    });
  renderToDom("#displayStudents",domString);
};

//key
const sortBtn = document.querySelector("#sortingBtn");
const form = document.querySelector("form");
const btnGroup = document.querySelector("#btn-group");


//render FormOnDom
const formOnDom =()=>{
  let domString = `<div class="mb-3">
  <label for="name-of-student" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Name"
  required>
  </div>
  <button type="submit" class="btn btn-primary" id="sortingBtn">Sort</button>`
renderToDom("#sortingForm", domString);
}

//render btnsOnDom
const btnsOnDom =()=>{
  let domString = `
  <button type="click" class="btn btn-secondary" id="all">All</button>
  <button type="click" class="btn btn-danger" id="gryffindor">Gryffindor</button>
  <button type="click" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
  <button type="click" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
  <button type="click" class="btn btn-success" id="slytherin">Slytherin</button>`
renderToDom("#btn-group", domString);
}

// array of names thatmath.random will select from from within the creatStudent function
const allHouses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin",
]

//create  a student function
const createStudent =() =>{
  const newStudentObj ={
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: allHouses[Math.floor(Math.random()*allHouses.length)]
  };
    students.push(newStudentObj);
    cardsOnDom(students)
    form.reset();
    console.log("submitting")
}
//eventListener for the form btn by using click and submit 
sortBtn.addEventListener("click", formOnDom);

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  createStudent();
  btnsOnDom();
});

const buttonFilter = (e)=>{
  if(e.target.id.includes("gryffindor")){
    const gryffindorArray = students.filter(item => item.house.toLocaleLowerCase() === "gryffindor");
    cardsOnDom(gryffindorArray)
  }
  if(e.target.id.includes("hufflepuff")){
    const hufflepuffArray = students.filter(item => item.house.toLocaleLowerCase() === "hufflepuff");
    cardsOnDom(hufflepuffArray)
  }
  if(e.target.id.includes("ravenclaw")){
    const ravenclawArray = students.filter(item => item.house.toLocaleLowerCase() === "ravenclaw");
    cardsOnDom(ravenclawArray)
  }
  if(e.target.id.includes("slytherin")){
    const slytherinArray = students.filter(item => item.house.toLocaleLowerCase() === "slytherin");
    cardsOnDom(slytherinArray)
  }
  if(e.target.id.includes("all")){
    cardsOnDom(students);
    ExpelCardsOnDom(expelledStudents);
  }
}

document.querySelector("#btn-group").addEventListener('click', buttonFilter);
