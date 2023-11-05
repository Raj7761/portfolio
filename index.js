let navlink = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');
console.log(navlink);
window.onscroll = ()=> {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset  && top<offset+height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*='+id+']').classList.add('active');
            });
        };
    });
};
