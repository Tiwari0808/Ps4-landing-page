// var menuList = document.getElementById("menu-List");
// menuList.style.maxHeight = "0px";

// function toggleMenu() {
//     if (menuList.style.maxHeight === "0px") {
//         menuList.style.maxHeight = "160px"
//     }
//     else {
//         menuList.style.maxHeight = "0px"
//     }
// }
var menulist=document.getElementById("menulist");

menulist.style.maxHeight="0px";

function togglemenu(){
   if(menulist.style.maxHeight == "0px")
   {
    menulist.style.maxHeight="150px";
   }
   else
   {
    menulist.style.maxHeight="0px";
   }
}