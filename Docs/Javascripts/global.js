const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const navScroll = document.getElementById("navScroll");
const showNavbar = document.getElementById("showNavbar");
const showSearch = document.getElementById("showSearch");
const logoWhite = document.getElementById("logoWhite");
const logoBlack = document.getElementById("logoBlack");
const resNav = document.getElementById("resNav");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        logoBlack.style.display = "block";
        navScroll.style.position = "fixed"
        navScroll.style.borderBottom = "1.5px solid #f4f4f5";
        scrollToTop.style.display = "block"
    }
    else if (window.scrollY > 65) {
        navScroll.style.background = "#fff";
        navScroll.style.borderBottom = "0px solid gray";
        navScroll.style.color = "#000";
        logoWhite.style.display = "none";
        logoBlack.style.display = "block";
        scrollToTop.style.display = "none"
    }
    else {
        navScroll.style.position = "sticky"
        navScroll.style.background = "transparent";
        navScroll.style.color = "#fff";
        logoWhite.style.display = "block";
        logoBlack.style.display = "none";
    }
});

openNav.addEventListener('click', () => {
    resNav.style.width = "100%";
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%";
})

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})

const SearchMenu = () => {
    addEventListener('click', () => {
        showSearch.style.display = "block"
        showNavbar.style.display = "none"
    })
}
const NavbarMenu = () => {
    addEventListener('click', () => {
        showSearch.style.display = "none"
        showNavbar.style.display = "block"
    })
}

document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
        tab: 0
    });

    Alpine.data('accordion', (idx) => ({
        init() {
            this.idx = idx;
        },
        idx: -1,
        handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
        },
        handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
        },
        handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
        }
    }));
})
