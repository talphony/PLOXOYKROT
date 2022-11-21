const openPopUp = document.getElementsById('open_pop_up');
const closePopUp = document.getElementsById('pop_up_close');
const popUp = document.getElementsById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})