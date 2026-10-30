const text = [
"DevOps Engineer",
"AWS Cloud Engineer",
"Kubernetes Enthusiast",
"Terraform Automation",
"Linux Administrator"
];

let index = 0;
let letter = 0;
let current = "";
let isDeleting = false;

function type(){

    current = text[index];

    if(!isDeleting){

        document.getElementById("typing").innerHTML =
        current.substring(0,letter++);

        if(letter > current.length){

            isDeleting = true;

            setTimeout(type,1200);

            return;

        }

    }

    else{

        document.getElementById("typing").innerHTML =
        current.substring(0,letter--);

        if(letter===0){

            isDeleting=false;

            index++;

            if(index==text.length)
                index=0;

        }

    }

    setTimeout(type,isDeleting?40:100);

}

type();

function scrollToContact(){

document.getElementById("contact").scrollIntoView({

behavior:"smooth"

});

}