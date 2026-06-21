/* ==========================
GLOBAL
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#0D0D0D;
    color:white;
    font-family:'Open Sans',sans-serif;
    line-height:1.7;
    overflow-x:hidden;
}

/* ==========================
HEADER
========================== */

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    padding:20px 8%;
    background:#111;
    border-bottom:2px solid #D4AF37;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:1000;
}

.logo h1{
    color:#D4AF37;
    font-family:'Montserrat',sans-serif;
    font-size:20px;
    line-height:1.2;
}

.menu-toggle{
    display:none;
    color:#D4AF37;
    font-size:30px;
    cursor:pointer;
}

nav ul{
    display:flex;
    gap:30px;
    list-style:none;
}

nav a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

nav a:hover{
    color:#D4AF37;
}

/* ==========================
HERO
========================== */

.hero{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:0 10%;
    background:
    linear-gradient(
    rgba(0,0,0,.88),
    rgba(0,0,0,.93)
    ),
    url("../images/hero.jpg");
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
}

.hero-content h2{
    font-size:64px;
    line-height:1.2;
    margin-bottom:30px;
    font-family:'Montserrat',sans-serif;
}

.hero-content p{
    max-width:800px;
    margin:auto;
    font-size:22px;
    color:#ddd;
}

/* ==========================
BUTTONS
========================== */

.btn{
    display:inline-block;
    margin-top:40px;
    padding:18px 35px;
    background:#D4AF37;
    color:black;
    border-radius:8px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    transform:translateY(-5px);
}

.btn-secondary{
    display:inline-block;
    margin-top:40px;
    margin-left:15px;
    padding:18px 35px;
    border:2px solid #D4AF37;
    color:#D4AF37;
    border-radius:8px;
    text-decoration:none;
    transition:.3s;
}

.btn-secondary:hover{
    transform:translateY(-5px);
}

/* ==========================
SECTIONS
========================== */

section{
    padding:100px 10%;
    scroll-margin-top:120px;
}

section h2{
    color:#D4AF37;
    font-size:42px;
    margin-bottom:40px;
    font-family:'Montserrat',sans-serif;
}

/* ==========================
STATS
========================== */

.stats{
    padding:80px 10%;
}

.stats-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:30px;
}

.stat-card{
    background:#181818;
    padding:40px;
    text-align:center;
    border-top:4px solid #D4AF37;
    border-radius:15px;
    transition:.3s;
}

.stat-card:hover{
    transform:translateY(-10px);
}

.stat-card h3{
    color:#D4AF37;
    font-size:48px;
    font-family:'Montserrat',sans-serif;
    margin-bottom:10px;
}

.stat-card p{
    color:#ccc;
}

/* ==========================
ABOUT
========================== */

#about p{
    max-width:1000px;
    color:#ccc;
    font-size:20px;
}

/* ==========================
SERVICES
========================== */

.services-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    display:block;
    background:#181818;
    padding:35px;
    border-left:5px solid #D4AF37;
    border-radius:12px;
    transition:.3s;
    font-size:20px;
    text-decoration:none;
    color:white;
}

.card:hover{
    transform:translateY(-8px);
}

.card h3{
    color:#D4AF37;
    margin-bottom:15px;
}

.card p{
    color:#ccc;
    font-size:16px;
}

/* ==========================
GALLERY
========================== */

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.gallery-item{
    overflow:hidden;
    border-radius:15px;
    background:#181818;
}

.gallery-item img{
    width:100%;
    height:320px;
    object-fit:cover;
    transition:.5s;
    display:block;
}

.gallery-item:hover img{
    transform:scale(1.1);
}

.gallery-item h3{
    color:#D4AF37;
    text-align:center;
    padding:20px 0;
    font-size:20px;
}

/* ==========================
REVIEWS
========================== */

.reviews-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.review-card{
    background:#181818;
    padding:40px;
    border-left:5px solid #D4AF37;
    border-radius:15px;
}

.review-card p{
    font-size:20px;
    color:#ddd;
    font-style:italic;
}

.review-card h4{
    color:#D4AF37;
    margin-top:20px;
}

/* ==========================
AREAS COVERED
========================== */

.areas-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.area-card{
    background:#181818;
    padding:30px;
    text-align:center;
    border-left:4px solid #D4AF37;
    border-radius:12px;
    transition:.3s;
    font-size:20px;
}

.area-card:hover{
    transform:translateY(-8px);
}

/* ==========================
EQUIPMENT / PACKAGES (used on service pages)
========================== */

.equipment-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.equipment-card{
    background:#181818;
    padding:35px;
    border-radius:15px;
    border-top:4px solid #D4AF37;
    transition:.3s;
}

.equipment-card:hover{
    transform:translateY(-10px);
}

.equipment-card h3{
    color:#D4AF37;
    margin-bottom:15px;
}

.equipment-card p{
    color:#ccc;
}

/* ==========================
TESTIMONIAL / FAQ (used on service pages)
========================== */

.testimonial{
    background:#181818;
    padding:35px;
    border-left:5px solid #D4AF37;
    border-radius:15px;
    margin-bottom:25px;
}

.testimonial p{
    font-size:18px;
    color:#ddd;
    margin-bottom:15px;
}

.testimonial h4{
    color:#D4AF37;
    font-weight:normal;
    font-size:17px;
}

/* ==========================
CONTACT FORM
========================== */

.contact-form{
    max-width:700px;
    margin:auto;
}

#contact > p{
    color:#ccc;
    font-size:18px;
    margin-bottom:30px;
}

.contact-form input,
.contact-form select,
.contact-form textarea{
    width:100%;
    padding:18px;
    margin-bottom:20px;
    background:#181818;
    color:white;
    border:1px solid #333;
    border-radius:8px;
    font-size:16px;
    font-family:'Open Sans',sans-serif;
}

.contact-form select{
    appearance:none;
    -webkit-appearance:none;
    background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D4AF37'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat:no-repeat;
    background-position:right 18px center;
    cursor:pointer;
    color:#aaa;
}

.contact-form select:valid{
    color:white;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus{
    outline:none;
    border:1px solid #D4AF37;
}

.contact-form button{
    background:#D4AF37;
    color:black;
    border:none;
    padding:18px 40px;
    border-radius:8px;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

.contact-form button:hover{
    transform:translateY(-5px);
}

/* ==========================
FOOTER
========================== */

footer{
    background:#111;
    border-top:2px solid #D4AF37;
    margin-top:100px;
}

.footer-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:40px;
    padding:60px 10%;
}

.footer-section h3{
    color:#D4AF37;
    margin-bottom:20px;
}

.footer-section p{
    color:#ccc;
    line-height:1.8;
}

.footer-section ul{
    list-style:none;
}

.footer-section ul li{
    margin-bottom:10px;
}

.footer-section ul li a{
    color:#ccc;
    text-decoration:none;
    transition:.3s;
}

.footer-section ul li a:hover{
    color:#D4AF37;
}

.copyright{
    text-align:center;
    padding:25px;
    border-top:1px solid #222;
    color:#888;
}

/* ==========================
SCROLL ANIMATIONS
========================== */

.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

/* ==========================
SERVICE PAGE HERO
========================== */

.service-hero{
    height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:
    linear-gradient(
    rgba(0,0,0,.75),
    rgba(0,0,0,.85)
    ),
    url("../images/hero.jpg");
    background-size:cover;
    background-position:center;
}

.service-overlay h1{
    font-size:70px;
    color:white;
    margin-bottom:25px;
}

.service-overlay p{
    font-size:24px;
    color:#ddd;
    max-width:800px;
}

/* ==========================
MOBILE
========================== */

@media(max-width:768px){

    header{
        flex-direction:column;
        gap:20px;
    }

    .menu-toggle{
        display:block;
        position:absolute;
        top:25px;
        right:8%;
    }

    nav{
        display:none;
        width:100%;
    }

    nav.active{
        display:block;
    }

    nav ul{
        flex-direction:column;
        gap:20px;
        text-align:center;
        margin-top:20px;
    }

    .hero-content h2{
        font-size:38px;
    }

    .hero-content p{
        font-size:18px;
    }

    .btn,
    .btn-secondary{
        display:block;
        margin:20px auto;
        width:250px;
    }

    section{
        padding:80px 7%;
    }

}

