function showContacts() {
    var contactBtn = document.getElementById('contact-btn');
    var contactSpan = document.getElementById('contact-span');
    var contactLinkGh = document.getElementById('contact-link-gh');
    var contactLinkLi = document.getElementById('contact-link-li');
    var contactLinkFb = document.getElementById('contact-link-fb');

    contactBtn.style.cssText = `
        transform: scale(1.1);
        border: 0.8px solid #E8E9EE;
        box-shadow: 0px 0px 5px 5px #C3C2FF;
        background-color: #d5d4ff;
        transition: all 2s ease-in-out;
    `;

    contactSpan.style.cssText = `
        transform: translateX(-100%);
        transition: all 2s ease-in-out;
    `;

    contactLinkGh.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;

    contactLinkLi.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;

    contactLinkFb.style.cssText = `
        opacity: 1;
        transform: translateX(0);
        transition: all 2s ease-in-out;
    `;
}

function hideContacts() {
    var contactBtn = document.getElementById('contact-btn');
    var contactSpan = document.getElementById('contact-span');
    var contactLinkGh = document.getElementById('contact-link-gh');
    var contactLinkLi = document.getElementById('contact-link-li');
    var contactLinkFb = document.getElementById('contact-link-fb');

    var width = $(window).width();

    contactBtn.style.cssText = ``;

    contactSpan.style.cssText = ``;

    contactLinkGh.style.cssText = ``;

    contactLinkLi.style.cssText = ``;

    contactLinkFb.style.cssText = ``;
}

function showCoopExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title');  
    var textBox = document.getElementById('textbox');  
    var coopText = "MAY 2021 - DEC 2021 [CO-OP]<br/><ul><li><i class='bi bi-caret-right-fill'></i>deploy & upgrade client servers</li><li><i class='bi bi-caret-right-fill'></i>troubleshooting</li><li><i class='bi bi-caret-right-fill'></i>domain names configuration</li></ul>";      

    expTitle.style.display = "none";
    textBox.style.display = "inline-block";
    title.innerHTML = "DEPLOYMENT & TECHNICAL SUPPORT | Artefactual Systems Inc."
    title.style.cssText = `
        text-transform: capitalize;
        display: inline-block;
        width: 130%;
    `
    textBox.innerHTML = coopText;
}

function showWorkExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title');  
    var textBox = document.getElementById('textbox');
    var workText = "JAN 2022 - PRESENT<br/><ul><li><i class='bi bi-caret-right-fill'></i>full-stack web development</li><li><i class='bi bi-caret-right-fill'></i>data migration</li><li><i class='bi bi-caret-right-fill'></i>system integration</li><li><i class='bi bi-caret-right-fill'></i>system design</li></ul>";

    expTitle.style.display = "none";
    textBox.style.display = "inline-block";
    title.innerHTML = "AtoM Maintainer | Artefactual Systems Inc.";
    title.style.cssText = `
        text-transform: capitalize;
        display: inline-block;
        width: 130%;
    `

    textBox.innerHTML = workText;
}

function hideExp() {
    var expTitle = document.getElementById('exp-title');
    var title = document.getElementById('title')
    var textBox = document.getElementById('textbox');

    expTitle.style.display = "inline-block";
    title.style.display = "none";
    textBox.style.display = "none";
}