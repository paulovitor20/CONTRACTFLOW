function loadSidebar(){

document.getElementById("sidebar").innerHTML=`

<div class="sidebar">

<div>

<div class="sidebar-header">

<div class="logo">

<div class="logo-icon">

<i class="fa-solid fa-file-contract"></i>

</div>

<div class="logo-text">

<h2>CONTRATOS</h2>

<span>Controle de Contratos</span>

</div>

</div>

</div>

<nav class="sidebar-menu">

<a class="active">

<i class="fa-solid fa-house"></i>

<span>Dashboard</span>

</a>

<a>

<i class="fa-solid fa-file-signature"></i>

<span>Contratos</span>

</a>

<a>

<i class="fa-solid fa-building"></i>

<span>Empresas</span>

</a>

<a>

<i class="fa-solid fa-folder"></i>

<span>Documentos</span>

</a>

<a>

<i class="fa-solid fa-bell"></i>

<span>Alertas</span>

</a>

<a>

<i class="fa-solid fa-chart-line"></i>

<span>Relatórios</span>

</a>

<a>

<i class="fa-solid fa-users"></i>

<span>Usuários</span>

</a>

<a>

<i class="fa-solid fa-gear"></i>

<span>Configurações</span>

</a>

</nav>

</div>

<div class="sidebar-footer">

<div class="storage">

<div class="storage-title">

<span>Armazenamento</span>

<strong>24%</strong>

</div>

<div class="progress">

<span></span>

</div>

<small>

2.4GB de 10GB utilizados

</small>

</div>

</div>

</div>

`;

}