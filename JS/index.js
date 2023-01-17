const thermometer= document.getElementById('thermometer_icon');
const change_icon=()=>{
    thermometer.innerHTML="&#xf2cb";
    thermometer.style.color= "#000000";

    setTimeout(()=>{
        thermometer.innerHTML="&#xf2ca";
        console.log(thermometer.innerHTML);
        console.log("I am an Icon");
        thermometer.style.color= "#000000";
      
    },1000);
    setTimeout(()=>{
        thermometer.innerHTML="&#xf2c9";
        console.log("I am an Icon 2");
        thermometer.style.color= "#fbff16";

        
    },2000);
    setTimeout(()=>{
        thermometer.innerHTML="&#xf2c8";
        console.log("I am an Icon 2");
    thermometer.style.color= "#000000";

        
    },3000);
    setTimeout(()=>{
        thermometer.innerHTML="&#xf2c7";

        console.log("I am an Icon 2");
        thermometer.style.color= "#ff0000";

        
    },4000);
}
change_icon();

setInterval(change_icon,5000);