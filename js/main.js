//create variables that will store the letters being typed into search bar
let searchbar= document.querySelector('input');
let inputText;
let imageCheck;
let imagesArray=document.getElementsByTagName("a");

//[0].getAttribute("data-title");
// 1) using an event listener compile all the letters being added into the textbox
searchbar.addEventListener('input',()=>{
     inputText=searchbar.value.toLowerCase();
     // 2) for letter added, use a for loop to itterate through the length of the main array -> then another for look for the length of the sub-array:
    for (let x = 0; x<imagesArray.length; x+=1){
        let selectedImage=imagesArray[x]
        imageCheck = selectedImage.getAttribute("data-title").toLowerCase();
     // 3) if the aggregate letters included into the input bar are NOT in the array being itterated, then set that image's display prop. to none, else set it to block
        if(imageCheck.includes(inputText)=== false){
            selectedImage.style.visibility= 'hidden';
        }else{
            selectedImage.style.visibility= 'visible';
        }

    }
});




