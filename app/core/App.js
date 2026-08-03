document.addEventListener(

"DOMContentLoaded",

async()=>{

await Sidebar.render();

await Navbar.render();

await Router.go(

"dashboard"

);

});