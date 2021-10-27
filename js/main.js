const  handleClick = () => {
    const aButtons = document.querySelectorAll('.button');
    aButtons.forEach((oButton) =>{
        oButton.onclick = (e) => {
            console.log(e.currentTarget.innerText);
        }
    });
};
