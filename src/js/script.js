const formUp = document.getElementById('form-up');
const darkMod = document.getElementById('dark-mod')
const body = document.body;
function signUp(){
    formUp.style.top = "0px"
    formUp.style.left = "550px"
    
};
function home(){
    formUp.style.top = "-1000px"
}
function dark(){
    if(darkMod.src == "file:///C:/Users/mohamad/OneDrive/Desktop/person%20of%20interest/assets/Group%204.svg" ){
        darkMod.src = "file:///C:/Users/mohamad/OneDrive/Desktop/person%20of%20interest/assets/Group%2030.svg"
        body.style.backgroundColor = "#000"
    }
    else if(darkMod.src == "file:///C:/Users/mohamad/OneDrive/Desktop/person%20of%20interest/assets/Group%2030.svg"){
        darkMod.src = "file:///C:/Users/mohamad/OneDrive/Desktop/person%20of%20interest/assets/Group%204.svg"
        body.style.backgroundColor = "#fff"
    }
}