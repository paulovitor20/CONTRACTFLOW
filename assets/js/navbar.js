function loadNavbar() {

    document.getElementById("navbar").innerHTML = `

<div class="navbar">

<div class="search">

<input
type="text"
placeholder="Buscar contrato, empresa ou responsável...">

</div>

<div class="navbar-right">

<div class="icon-btn">

<i class="fa-regular fa-bell"></i>

</div>

<div class="icon-btn">

<i class="fa-regular fa-calendar"></i>

</div>

<button class="new-button">

<i class="fa-solid fa-plus"></i>

Novo Contrato

</button>

<div class="user">

<div class="avatar">

PV

</div>

<div class="user-info">

<strong>Paulo Vitor</strong>

<span>Administrador</span>

</div>

</div>

</div>

</div>

`;

}