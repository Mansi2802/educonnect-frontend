let btnDownload=document.querySelector('button');
let img=document.querySelector('img');

btnDownload.addEventListener('click',()=>{
    let imgPath=img.getAttribute('src');            //ye img ka path
    let fileName=getFileName(imgPath);              //png,jpg
    
    SVGAnimatedPreserveAspectRatio(imgPath,fileName);
});

function getFileName(str){
    return str.substring(str,lastIndexOf('/')+1);       //jgp,png ko extract
}