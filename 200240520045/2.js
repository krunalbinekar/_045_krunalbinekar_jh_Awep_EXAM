


function User(){
    let userName=document.querySelector("#inp1").value;

    let newElemet=document.querySelector("#Cmt-Box").cloneNode(true);

    newElemet.innerHtml=userName;

    let cmt=document.querySelector("#Cmt-Box");

cmt.appendChild(newElemet);

document.querySelector("#inp1").value=""





}