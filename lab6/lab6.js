window.onload=function(){
    thumbnails=document.getElementById("thumbnails").children;
    bigPicture=document.getElementById("featured").children;
    listernPicture(thumbnails[0]);
    listernPicture(thumbnails[1]);
    listernPicture(thumbnails[2]);
    listernPicture(thumbnails[3]);
    listernPicture(thumbnails[4]);
    listenBigPicture(bigPicture[0]);
    
    var style=document.createElement("style");
    style.type="text/css";
    style.appendChild(document.createTextNode("figure figcaption{opacity:0;transition:all 1s}"));
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(style);
   
    function listernPicture(thumbnail){
        thumbnail.addEventListener("click",function(){
            imgSrc=thumbnail.src;
            title=thumbnail.title;
            imgSrc=imgSrc.replace("small","medium")
            bigPicture=document.getElementById("featured").children;
            bigPicture[0].src=imgSrc;
            bigPicture[1].innerHTML=title;
        })
    }
    
    function listenBigPicture(picture){
        picture.addEventListener("mouseover",function(){
            bigPicture=document.getElementById("featured").children;
            bigPicture[1].style.opacity=0.8;
        })
        picture.addEventListener("mouseout",function(){
            bigPicture=document.getElementById("featured").children;
            bigPicture[1].style.opacity=0;
        })

    }
    
}