
// add background to heder

function addBackground() {
    let header = document.getElementById("header");
    window.onscroll = function(){
    if(this.scrollY > 0){
        header.classList.add("addBac")
    }else{
        header.classList.remove("addBac")
    }
}
}
addBackground()




// open min-ul when you click on i-icon


function clickIcon() {
let iIcon = document.querySelectorAll(".i-icon");
let parentH = document.querySelector(".parentH");
let minUl = document.querySelector(".min-div-ul")
    iIcon.forEach((e)=>{
    e.onclick = function(){
        minUl.classList.toggle("none-left")
        parentH.classList.toggle("block")
    }
    parentH.onclick = function() {
        minUl.classList.remove("none-left")
        parentH.classList.remove("block")
    }
})
}
clickIcon()








//click on demos  in haber smile screen

function c_Demos() {
    let min_aa = document.querySelector(".min-aa");
    let li_part2 = document.querySelector(".li_part2");
    let downIcon = document.querySelector(".min-aa span");
    min_aa.onclick = function(){
        downIcon.classList.toggle("addRotate")
        li_part2.classList.toggle("down")
    }
}
c_Demos()




    // click on icon to open video
function c_video() {
let bg_video = document.querySelector(".video");
let start = document.querySelector(".start");
start.onclick = function () {
    bg_video.style.display="flex";
    bg_video.classList.remove("none");
}

// close video when i click on x icon or background
let x_icon = document.querySelector(".video-icon");
x_icon.addEventListener("click",()=> bg_video.classList.add("none"));
bg_video.addEventListener("click",()=> bg_video.classList.add("none"));


//this part for icon load
let load = document.querySelector(".load");
let video = document.querySelector(".video iframe");
video.addEventListener("load",()=>{
    load.style.display="none";
});
}
c_video()















//add class active to element a to showImg
function showImg(){
//add class active to element a
let days = document.querySelectorAll(".days a");
days.forEach((e)=>{
    e.onclick = function(){
        document.querySelector(".active")?.classList.remove("active");
        e.classList.add("active");
    }
    e.addEventListener("click",showImg);
    
})


// cheng the photo when i click on a
    let part4_img = document.querySelectorAll(".part-4-img");
    part4_img.forEach((img)=>{
    img.style.cssText =`
    opacity: 0;
    overflow: hidden;
    transition: opacity 200ms ease 0s;
    `;
});
days.forEach((a)=>{
    if(a.classList == "active"){
    document.querySelector(a.dataset.cat).style.cssText =`
    opacity: 1;
    transition: opacity 200ms ease 0s;
    `;
    }
    });
    

}
showImg();







//imgGallery
function imgGallery() {
    let box_img= document.querySelectorAll(".img-box");
    let x_icon = document.querySelector(".imgGallery-icon");
    let img_Gallery = document.querySelector(".imgGallery");
    let min_img = document.querySelector(".min-img img");
    let array_img = document.querySelectorAll(".array img")
    box_img.forEach((e)=>{
        e.addEventListener("click",()=>{
            //show blok img
            img_Gallery.style.display="flex";
            img_Gallery.classList.remove("nonePart6");
            // get src to img
            min_img.src= e.children[0].children[0].src;
            min_img.dataset.id= e.children[0].children[0].dataset.id;
            min_img.classList.add("qMove");
            imgGallery()
        });
    });
    // close video when i click on x icon or background
x_icon.addEventListener("click",()=> img_Gallery.classList.add("nonePart6"));


////
array_img.forEach((e)=>{
    if(e.dataset.id === min_img.dataset.id){
        document.querySelector(".active-img")?.classList.remove("active-img");
        e.classList.add("active-img")
    }
    e.addEventListener("click",()=>{
        // add active-img
        document.querySelector(".active-img")?.classList.remove("active-img");
        // document.querySelector(".qMove")?.classList.remove("qMove");
        e.classList.add("active-img")
        // add src to min-img
        min_img.src= e.src;
        min_img.style.transform=" translateX(-100px)"
        setTimeout(()=>{
            min_img.style.transform=" translateX(0)"
        },500)
    });
});




};
imgGallery();















// show massage send part_7
function massage1() {
let formP7 = document.querySelector(".part_7-div form");
let inputSiP7 = document.querySelector(".submit input")
let oKP7 = document.querySelector(".part_7 .ok")
let okYP7 = document.querySelector(".part_7 .oky")
    formP7.addEventListener("submit",(e)=>{
        e.preventDefault()
        inputSiP7.value="Please wait..."
        setTimeout(()=>{
            okYP7.style.display="none";
            oKP7.style.display="block";
        },1000)
        })
}
massage1()




// show massage send part_10
function massage2() {
let inputEmP10 = document.querySelector(".input-email")
let inputSiP10 = document.querySelector(".input-submit")
let formP10 = document.querySelector(".input form")
let oKP10 = document.querySelector(".part_10 .ok")
let okYP10 = document.querySelector(".part_10 .oky")
formP10.addEventListener("submit",(e)=>{
e.preventDefault()
inputSiP10.value="Please wait..."
setTimeout(()=>{
    okYP10.style.display="none";
    oKP10.style.display="block";
},1000)
})
}
massage2()









// cheng our teem when i click on them


function chengTeem() {
    let usersP8 = document.querySelectorAll(".users .user");
    let all_p_P8 = document.querySelectorAll(".part_8 .all-p p")
    usersP8.forEach((e)=>{
    e.onclick = function(){
        document.querySelector(".activeP8")?.classList.remove("activeP8");
        e.classList.add("activeP8")
    }
    e.addEventListener("click",chengTeem);
})


// p show p
all_p_P8.forEach((p)=>{
    p.style.cssText =`
    opacity: 0;
    overflow: hidden;
    transition: opacity 300ms ease 0s;
    `;
})

usersP8.forEach((u)=>{
    if(u.classList.contains("activeP8")){
    document.querySelector(u.dataset.user).style.cssText =`
    opacity: 1;
    transition: opacity 300ms ease 0s;
    `;
    }
    });
    
}
chengTeem()  





//scrollreveal
// حاسس اني عاكك هناءاوي
function scrollRevelFu() {
    
ScrollReveal().reveal('.left-content',{
    origin: "right",
    distance: "150px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal('.right-content h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal('.big-title',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal('.right-content p',{
    origin: "bottom",
    distance: "150px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal('.div-link',{
    origin: "bottom",
    distance: "200px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

//part_2

ScrollReveal().reveal('.part_2 .center-content h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_2 .center-content p',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_2 .center-content .div-link',{
    origin: "bottom",
    distance: "130px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});




ScrollReveal().reveal('.down-content',{
    origin: "bottom",
    distance: "150px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});




//part_3

ScrollReveal().reveal('.part_3 .part_3-h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal(' .part_3 .img-part_3',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    interval:500,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});


//part_4


ScrollReveal().reveal('.part_4 .part_4-div h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_4 .part_4-div h2',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_4 .part_4-div p',{
    origin: "bottom",
    distance: "150px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});

ScrollReveal().reveal('.part_4 .all-img-content',{
    origin: "bottom",
    distance: "200px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});



// part_5

ScrollReveal().reveal('.part_5 .part_5-div h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});



ScrollReveal().reveal('.part_5 .box',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    interval:500,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});



//part-6

ScrollReveal().reveal('.box-6',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});



//part_7


ScrollReveal().reveal('.part_7 .part_7-div',{
    origin: "bottom",
    distance: "70px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});




//part_8




ScrollReveal().reveal('.part_8 .part_4-div h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_8 .part_4-div h2',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_8 .part_4-div .all-p',{
    origin: "bottom",
    distance: "120px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_8 .part_4-div .users',{
    origin: "bottom",
    distance: "120px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});



// part_9

ScrollReveal().reveal('.part_9 .content',{
    origin: "bottom",
    distance: "80px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_9 .box-9',{
    origin: "bottom",
    distance: "120px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});





// part_10

ScrollReveal().reveal('.part_10 h3',{
    origin: "bottom",
    distance: "50px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_10 h2',{
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
ScrollReveal().reveal('.part_10 .input',{
    origin: "bottom",
    distance: "150px",
    opacity: 0,
    duration: 2000,
    reset: false,
    mobile: true,
    desktop: true,
});
}
scrollRevelFu()