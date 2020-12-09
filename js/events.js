const checkBox = document.getElementById("chkBox");

checkBox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark');
})