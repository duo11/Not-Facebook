function show(){
    document.getElementById('search-area').style.display = "flex";
    document.getElementById("noti-area").style.display = "none";
    document.getElementById("create-area").style.display = "none";
    document.getElementById("chat-area").style.display = "none";
    document.getElementById('setting-area').style.display = "none";
}
function hide(){
    document.getElementById('search-area').style.display = "none";
}
function show2(){
    if(document.getElementById('setting-area').style.display == "flex"){
    document.getElementById('setting-area').style.display = "none";
}
    else{
        document.getElementById('setting-area').style.display = "flex";
        document.getElementById("noti-area").style.display = "none";
        document.getElementById("create-area").style.display = "none";
        document.getElementById("chat-area").style.display = "none";
        document.getElementById('search-area').style.display = "none";

    }
}
var body = document.body;
var html = document.documentElement;
function show3(){
    if(document.getElementById('writeArea').style.display == "flex"){
        document.getElementById('writeArea').style.display = "none";
        body.style.overflow = "auto";
        html.style.overflowY = "auto";
    }
    else{
        document.getElementById('writeArea').style.display = "flex";
        body.style.overflow = "hidden";
        html.style.overflowY = "hidden";
    }
}
function adjustSearchBar(){
    if(window.innerWidth < 500 ) {
        document.getElementById('searchtext').style.display = "none";
        document.getElementById('searchbar').style.width = '40px';
        

    }
    else{
        document.getElementById('searchtext').style.display = "block";
        document.getElementById('searchbar').style.width = '200px';
        

    }

    }
function adjustMainNavDisplay(){
    if(window.innerWidth < 800 ) {
        document.getElementById('main-nav-footer').style.display = "flex";
        document.getElementById('main-nav').style.display = "none";
    }
    else{
        document.getElementById('main-nav-footer').style.display = "none";
        document.getElementById('main-nav').style.display = "flex";
    }
    
}
function expandNotiArea(){
    const isExpanded = document.getElementById("noti-area").style.display;
    if(isExpanded == "block"){
        document.getElementById("noti-area").style.display = "none";


    }
    else{
        document.getElementById("noti-area").style.display = "block";
        document.getElementById("create-area").style.display = "none";
        document.getElementById('setting-area').style.display = "none";
        document.getElementById("chat-area").style.display = "none";
        document.getElementById('search-area').style.display = "none";


    }
}
function expandCreate(){
    const isExpanded = document.getElementById("create-area").style.display;
    if(isExpanded == "block"){
        document.getElementById("create-area").style.display = "none";

    }
    else{
        document.getElementById("create-area").style.display = "block";
        document.getElementById("noti-area").style.display = "none";
        document.getElementById('setting-area').style.display = "none";
        document.getElementById("chat-area").style.display = "none";
        document.getElementById('search-area').style.display = "none";


    }
}
function expandChat(){
    const isExpanded = document.getElementById("chat-area").style.display;
    if(isExpanded == "block"){
        document.getElementById("chat-area").style.display = "none";

    }
    else{
        document.getElementById("chat-area").style.display = "block";
        document.getElementById("create-area").style.display = "none";
        document.getElementById("noti-area").style.display = "none";
        document.getElementById('setting-area').style.display = "none";
        document.getElementById('search-area').style.display = "none";


    }
}
adjustMainNavDisplay();    
adjustSearchBar();
window.addEventListener('resize', adjustMainNavDisplay);
window.addEventListener('resize', adjustSearchBar);
    
const footer = document.getElementById('main-nav-footer');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    console.log(scroll);
    
    if(scroll > lastScroll){
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        if(currentMarginBottom > -50){
            footer.style.marginBottom = `${currentMarginBottom - 5}px`;
            
        }
    }
    else if(scroll < lastScroll ){ 
        const currentMarginBottom = parseInt(footer.style.marginBottom || 0,0);
        footer.style.marginBottom = `${currentMarginBottom + 5}px`;
        if(currentMarginBottom == 0){
            footer.style.marginBottom = 0;
        }
    }
    
    lastScroll = scroll;    
});
// Expand text caption 
const toggleButtons = document.querySelectorAll('.toggleButton');
const caption = document.querySelectorAll('.caption');
        // Add a click event listener to each button
        toggleButtons.forEach(button => {

            button.addEventListener('mousedown', function(event) {
                
                const toggleId = event.target.getAttribute('id');
                const captionId = "caption" + toggleId;
                const dotId = "dot" + toggleId;
                let maxheight = document.getElementById(captionId).style.maxHeight;
                caption.forEach(p => {
                    if(maxheight == "none"){
                        document.getElementById(captionId).style.maxHeight = "3em";
                        document.getElementById(toggleId).innerText = "See more"
                        document.getElementById(dotId).style.display ="block";

                    }
                    else{
                        document.getElementById(captionId).style.maxHeight = "none";
                        document.getElementById(toggleId).innerText = "Collapse"
                        document.getElementById(dotId).style.display ="none";

                    }
                });
                
            });
        });

// *****************   Make cursor move to search bar  ************************
document.getElementById("searchbar").addEventListener("click", function() {
    document.getElementById("input-box").focus(); // Sử dụng phương thức focus() để di chuyển con trỏ chuột
    });


// *****************   Make cursor move to write post area  ************************
document.getElementById("tk").addEventListener("click", function() {
    document.getElementById("textarea").focus(); // Sử dụng phương thức focus() để di chuyển con trỏ chuột
    });

    var textarea = document.getElementById("textarea");
    textarea.addEventListener("input",function(){
        if (textarea.value.trim() === "") {
            document.getElementById("fa3").style.cursor = "not-allowed";
            document.getElementById("fa3").style.backgroundColor = "#E4E6E9";
            document.getElementById("fa3").style.color = "black";
        }
          
        
        else{
            document.getElementById("fa3").style.cursor = "pointer";
            document.getElementById("fa3").style.backgroundColor = "#1770E6";
            document.getElementById("fa3").style.color = "white";
    
        }
    
    });
    
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            show();
        }
    }    