const sign = document.querySelector(".sign");
const log = document.querySelector(".login");
const signform = document.getElementById("signform");
const loginform = document.getElementById("loginform");
const header = document.getElementById("header");

sign.addEventListener("click", function () {
    if (signform.classList.contains("remove")) {
        signform.classList.toggle("show");
        loginform.classList.remove("show");
    }
});

log.addEventListener("click", function () {
    if (loginform.classList.contains("remove")) {
        loginform.classList.toggle("show");
        signform.classList.remove("show");
    }
});


const menu = document.getElementById("menu");
menu.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".classlinks-2").style.visibility="visible";
})
const closemenu = document.getElementById("cut");

closemenu.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".classlinks-2").style.visibility="hidden";
})

const intern = document.querySelectorAll(".intern")

for (let i = 0; i < intern.length; i++) {
    intern[i].addEventListener("mouseover", function () {
        intern[i].style.width = "100%";
    })
}

const internship = document.getElementById("int");
const courses = document.getElementById("cs");

document.addEventListener("click", function (event) {
    if (event.target.value === "Internship") {
        internship.style.display = "block";
    } else if (event.target.value === "Courses") {
        courses.style.display = "block";
    }
});

const showmore = document.querySelectorAll(".more");
const work = document.querySelectorAll(".work");
for (let i = 0; i < showmore.length; i++) {
    showmore[i].addEventListener("click", function () {
        work[i].style.height = "100%";
    })
}

const showless = document.querySelectorAll(".less");
for (let i = 0; i < showless.length; i++) {
    showless[i].addEventListener("click", function () {
        work[i].style.height = "55vh";
    });
}

const loadProgramsbtn = document.getElementById('load');
const Allprograms = document.querySelector(".hired");
const otherprograms = document.querySelector(".hiredagain");

loadProgramsbtn.addEventListener("click", function () {

    Allprograms.classList.toggle("show-courses");
    otherprograms.classList.toggle("show-courses");

    if (Allprograms.classList.contains('show-courses') && otherprograms.classList.contains('show-courses')) {
        loadProgramsbtn.innerText = "go back";
    } else {
        loadProgramsbtn.innerText = "load more";
    }

});


const loadcoursesbtn = document.querySelector('#go');
const morecourse = document.querySelector(".core");

loadcoursesbtn.addEventListener('click', function () {

    morecourse.classList.toggle("core");

    if (morecourse.classList.contains('core')) {
        loadcoursesbtn.innerText = "load more";
    }
    else {
        loadcoursesbtn.innerText = "go back";
    }
});

const quote = document.getElementById("line");
const author = document.getElementById("author");
const morequotesbtn = document.getElementById("more-quotes");

let arr = [
    {
        quote: "Don't worry about being successful but work toward being significant and the success will naturally follow.",
        author: "-Oprah Winfrey",
    },
    {
        quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
        author: "-Warren Buffet",
    },
    {
        quote: "Be so good they can't ignore you",
        author: "-Steve Martin",
    },
    {
        quote: "I  have not failed.I've just found 10,000 ways that won't work",
        author: "-EExmas Edison",
    }
];

morequotesbtn.addEventListener("click", function () {

    let index = Math.round(Math.random() * arr.length);

    quote.innerText = arr[index].quote;
    author.innerText = arr[index].author;
});

const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        if (answer[i].classList.contains("answer")) {
            answer[i].classList.remove("answer")
            answer[i].classList.add("showAnswer")
        }
        else {
            answer[i].classList.add("answer")
            answer[i].classList.remove("showAnswer")
        }
    });
}