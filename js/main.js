const nav = document.getElementById('nav');

document.onscroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
};