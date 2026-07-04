/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Caveat:wght@700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#F8F3EA;
    font-family:'Poppins',sans-serif;
    overflow:hidden;
}

/* Background Hearts */

#hearts{
    position:fixed;
    inset:0;
    pointer-events:none;
    z-index:0;
}

/* Pages */

.page{
    position:absolute;
    inset:0;
    width:100%;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    padding:25px;

    background:
    linear-gradient(rgba(255,255,255,.45),rgba(255,255,255,.45)),
    #F8F3EA;

    overflow:hidden;

    opacity:0;
    visibility:hidden;

    transition:opacity .8s ease;
}

.page.active{
    opacity:1;
    visibility:visible;
}

/* Cover */

.envelope{
    background:#FFF9F2;
    width:90%;
    max-width:380px;
    padding:35px;
    border-radius:25px;
    text-align:center;
    box-shadow:0 15px 35px rgba(0,0,0,.15);
}

.envelope h1{
    font-family:'Caveat',cursive;
    color:#6D4C41;
    font-size:58px;
}

.envelope h2{
    margin-top:10px;
    color:#8A6A50;
    font-size:38px;
}

.envelope p{
    margin:20px 0;
    color:#6B5B50;
    line-height:1.6;
}

/* Button */

button{
    border:none;
    background:#D9BEA7;
    color:white;
    padding:15px 35px;
    border-radius:50px;
    cursor:pointer;
    font-size:17px;
    transition:.3s;
}

button:hover{
    transform:scale(1.05);
    background:#CFA989;
}

/* Polaroid */

.polaroid{
    background:white;
    padding:12px;
    border-radius:18px;
    width:320px;
    box-shadow:0 15px 35px rgba(0,0,0,.15);
    transform:rotate(-2deg);
    animation:float 4s ease-in-out infinite;
}

.polaroid img{
    width:100%;
    height:360px;
    object-fit:cover;
    border-radius:12px;
}

.polaroid p{
    margin-top:15px;
    font-family:'Caveat',cursive;
    font-size:30px;
    color:#6D4C41;
    text-align:center;
}

/* ===========================
   LETTER PAGE (SCROLLABLE)
=========================== */

.letter-page{
    display:flex;
    justify-content:flex-start;
    align-items:center;

    overflow-y:auto;
    overflow-x:hidden;

    padding:40px 20px;
}

.letter-page.active{
    visibility:visible;
    opacity:1;
}

.letter{
    background:#FFF9F2;
    width:90%;
    max-width:600px;

    margin:40px auto;

    padding:35px;

    border-radius:20px;

    box-shadow:0 15px 35px rgba(0,0,0,.15);
}

.letter h1{
    text-align:center;
    font-family:'Caveat',cursive;
    font-size:48px;
    color:#6D4C41;
    margin-bottom:20px;
}

.letter p{
    white-space:pre-line;
    font-family:'Caveat',cursive;
    font-size:28px;
    line-height:1.8;
    color:#6D4C41;
}

/* Floating Animation */

@keyframes float{
    0%{
        transform:translateY(0) rotate(-2deg);
    }
    50%{
        transform:translateY(-8px) rotate(-1deg);
    }
    100%{
        transform:translateY(0) rotate(-2deg);
    }
}

/* Floating Hearts */

.heart{
    position:fixed;
    bottom:-40px;
    animation:rise 6s linear forwards;
    opacity:.7;
    z-index:1;
}

@keyframes rise{
    0%{
        transform:translateY(0);
        opacity:0;
    }
    20%{
        opacity:1;
    }
    100%{
        transform:translateY(-120vh);
        opacity:0;
    }
}

/* Mobile */

@media(max-width:480px){

    .envelope h1{
        font-size:48px;
    }

    .envelope h2{
        font-size:32px;
    }

    .polaroid{
        width:92%;
    }

    .polaroid img{
        height:300px;
    }

    .polaroid p{
        font-size:26px;
    }

    .letter{
        width:95%;
        padding:25px;
    }

    .letter h1{
        font-size:40px;
    }

    .letter p{
        font-size:24px;
        line-height:1.7;
    }
}
