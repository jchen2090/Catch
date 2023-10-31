const signInLink = document.querySelector('.signInLink');

const signUpLink = document.querySelector('.makeAccount');

const myContainer = document.querySelector('.loginContainer');

signUpLink.addEventListener('click', () => {
    myContainer.classList.toggle('active');
});

signInLink.addEventListener('click', () => {
    myContainer.classList.toggle('active');
}); 