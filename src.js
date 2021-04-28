var isDark = true;

function SwapTheme(){
    if(isDark){
        document.querySelector('header').style.backgroundColor = "rgb(187, 221, 240, 0.8)";
        document.querySelector('footer').style.backgroundColor = "rgb(187, 221, 240, 0.8)";

        document.querySelector('p').style.color= "rgb(232, 197, 23, 1)";

        var buttons = document.querySelectorAll('.InterestingItem');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(187, 221, 240, 0.8)";
        });

        var buttons = document.querySelectorAll('.Buttons');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(93, 151, 182, 0.5)";
            element.style.color= "rgb(232, 197, 23, 1)";
        });

        var buttons = document.querySelectorAll('.Buttons4flex');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(93, 151, 182, 0.5)";
            element.style.color= "rgb(232, 197, 23, 1)";
        });

        isDark = !isDark;
    }
    else{
        document.querySelector('header').style.backgroundColor = "rgb(56, 78, 92, 0.8)";
        document.querySelector('footer').style.backgroundColor = "rgb(56, 78, 92, 0.8)";

        document.querySelector('p').style.color= "rgb(0, 204, 198, 1)";

        var buttons = document.querySelectorAll('.InterestingItem');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(56, 78, 92, 0.8)";
        });

        var buttons = document.querySelectorAll('.Buttons');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(38, 48, 46, 0.8)";
            element.style.color= "rgb(0, 204, 198, 1)";
        });

        var buttons = document.querySelectorAll('.Buttons4flex');
        buttons.forEach(element => {
            element.style.backgroundColor = "rgb(38, 48, 46, 0.8)";
            element.style.color= "rgb(80, 204, 198, 1)";
        });

        isDark = !isDark;
    }
}