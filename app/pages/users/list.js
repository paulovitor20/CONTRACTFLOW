class UsersPage {

    static users = [

        {
            id: 1,
            name: "Paulo Vitor",
            email: "paulo@carvalho.com.br",
            role: "Administrador",
            lastAccess: "Hoje, 08:42",
            status: "ativo",
            initials: "PV"
        },

        {
            id: 2,
            name: "Carlos Henrique",
            email: "carlos@carvalho.com.br",
            role: "Gestor",
            lastAccess: "Hoje, 08:15",
            status: "ativo",
            initials: "CH"
        },

        {
            id: 3,
            name: "Mariana Silva",
            email: "mariana@carvalho.com.br",
            role: "Gestor",
            lastAccess: "Hoje, 07:58",
            status: "ativo",
            initials: "MS"
        },

        {
            id: 4,
            name: "Ana Costa",
            email: "ana@carvalho.com.br",
            role: "Operador",
            lastAccess: "Ontem, 17:25",
            status: "ativo",
            initials: "AC"
        },

        {
            id: 5,
            name: "Ricardo Lima",
            email: "ricardo@carvalho.com.br",
            role: "Operador",
            lastAccess: "14/09/2026, 16:40",
            status: "inativo",
            initials: "RL"
        },

        {
            id: 6,
            name: "Fernanda Souza",
            email: "fernanda@carvalho.com.br",
            role: "Visualizador",
            lastAccess: "12/09/2026, 09:15",
            status: "inativo",
            initials: "FS"
        }

    ];


    static filteredUsers = [];


    static init() {

        this.filteredUsers = [...this.users];

        this.bindEvents();
        this.render();

    }


    static bindEvents() {

        const search = document.querySelector("#users-search");
        const roleFilter = document.querySelector("#users-role-filter");
        const statusFilter = document.querySelector("#users-status-filter");
        const newUserButton = document.querySelector("#btn-new-user");


        search?.addEventListener("input", () => {
            this.applyFilters();
        });


        roleFilter?.addEventListener("change", () => {
            this.applyFilters();
        });


        statusFilter?.addEventListener("change", () => {
            this.applyFilters();
        });


        newUserButton?.addEventListener("click", () => {

            alert("A criação de usuários será implementada na próxima etapa.");

        });

    }


    static applyFilters() {

        const searchValue =
            document.querySelector("#users-search")?.value
                .trim()
                .toLowerCase() || "";

        const roleValue =
            document.querySelector("#users-role-filter")?.value || "";

        const statusValue =
            document.querySelector("#users-status-filter")?.value || "";


        this.filteredUsers = this.users.filter(user => {

            const matchesSearch =
                !searchValue ||
                user.name.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue);


            const matchesRole =
                !roleValue ||
                user.role === roleValue;


            const matchesStatus =
                !statusValue ||
                user.status === statusValue;


            return (
                matchesSearch &&
                matchesRole &&
                matchesStatus
            );

        });


        this.render();

    }


    static render() {

        this.renderStats();
        this.renderTable();

    }


    static renderStats() {

        const total = this.users.length;

        const active =
            this.users.filter(user => user.status === "ativo").length;

        const inactive =
            this.users.filter(user => user.status === "inativo").length;

        const admins =
            this.users.filter(user => user.role === "Administrador").length;


        const totalElement = document.querySelector("#users-total");
        const activeElement = document.querySelector("#users-active");
        const inactiveElement = document.querySelector("#users-inactive");
        const adminsElement = document.querySelector("#users-admins");


        if (totalElement) {
            totalElement.textContent = total;
        }

        if (activeElement) {
            activeElement.textContent = active;
        }

        if (inactiveElement) {
            inactiveElement.textContent = inactive;
        }

        if (adminsElement) {
            adminsElement.textContent = admins;
        }

    }


    static renderTable() {

        const tbody = document.querySelector("#users-table-body");
        const counter = document.querySelector("#users-counter");


        if (!tbody) {
            return;
        }


        if (counter) {

            counter.textContent =
                `${this.filteredUsers.length} ${
                    this.filteredUsers.length === 1
                        ? "usuário"
                        : "usuários"
                }`;

        }


        if (!this.filteredUsers.length) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="users-empty">
                        <div class="users-empty-content">
                            <i class="fa-solid fa-user-slash"></i>
                            <strong>Nenhum usuário encontrado</strong>
                            <span>
                                Tente alterar os filtros ou realizar uma nova busca.
                            </span>
                        </div>
                    </td>
                </tr>
            `;

            return;
        }


        tbody.innerHTML = this.filteredUsers.map(user => {

            const statusLabel =
                user.status === "ativo"
                    ? "Ativo"
                    : "Inativo";


            const statusClass =
                user.status === "ativo"
                    ? "status-active"
                    : "status-inactive";


            return `
                <tr>

                    <td>
                        <div class="user-info">

                            <div class="user-avatar">
                                ${user.initials}
                            </div>

                            <div class="user-name">
                                <strong>${user.name}</strong>
                            </div>

                        </div>
                    </td>


                    <td>
                        <span class="user-email">
                            ${user.email}
                        </span>
                    </td>


                    <td>
                        <span class="role-badge">
                            ${user.role}
                        </span>
                    </td>


                    <td>
                        <span class="last-access">
                            ${user.lastAccess}
                        </span>
                    </td>


                    <td>
                        <span class="user-status ${statusClass}">
                            <span></span>
                            ${statusLabel}
                        </span>
                    </td>


                    <td>

                        <div class="user-actions">

                            <button
                                type="button"
                                title="Visualizar"
                                onclick="UsersPage.viewUser(${user.id})"
                            >
                                <i class="fa-regular fa-eye"></i>
                            </button>

                            <button
                                type="button"
                                title="Editar"
                                onclick="UsersPage.editUser(${user.id})"
                            >
                                <i class="fa-solid fa-pen"></i>
                            </button>

                            <button
                                type="button"
                                title="Mais opções"
                                onclick="UsersPage.moreOptions(${user.id})"
                            >
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>

                        </div>

                    </td>

                </tr>
            `;

        }).join("");

    }


    static viewUser(id) {

        const user = this.users.find(item => item.id === id);

        if (!user) {
            return;
        }

        alert(`Visualizar usuário: ${user.name}`);

    }


    static editUser(id) {

        const user = this.users.find(item => item.id === id);

        if (!user) {
            return;
        }

        alert(`Editar usuário: ${user.name}`);

    }


    static moreOptions(id) {

        const user = this.users.find(item => item.id === id);

        if (!user) {
            return;
        }

        alert(`Mais opções para: ${user.name}`);

    }

}


window.UsersPage = UsersPage;