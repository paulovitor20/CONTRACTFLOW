window.CompaniesPage = class CompaniesPage {

    static companies = [

        {
            id: 1,
            legalName: "Carvalho Comércio e Transportes Ltda",
            tradeName: "Carvalho Transportes",
            cnpj: "12.345.678/0001-90",
            contact: "Paulo Vitor",
            phone: "(77) 99999-0001",
            email: "contato@carvalhotransportes.com.br",
            status: "ativo"
        },

        {
            id: 2,
            legalName: "Vivo S.A.",
            tradeName: "Vivo",
            cnpj: "02.558.157/0001-62",
            contact: "Carlos Henrique",
            phone: "(11) 98888-0002",
            email: "contato@vivo.com.br",
            status: "ativo"
        },

        {
            id: 3,
            legalName: "Amazon Web Services Brasil Ltda",
            tradeName: "AWS",
            cnpj: "09.111.222/0001-33",
            contact: "Mariana Silva",
            phone: "(11) 97777-0003",
            email: "contato@aws.com",
            status: "ativo"
        },

        {
            id: 4,
            legalName: "Google Brasil Internet Ltda",
            tradeName: "Google",
            cnpj: "06.990.590/0001-23",
            contact: "João Pedro",
            phone: "(11) 96666-0004",
            email: "contato@google.com",
            status: "ativo"
        },

        {
            id: 5,
            legalName: "Banco Cooperativo Sicredi S.A.",
            tradeName: "Sicredi",
            cnpj: "01.181.521/0001-55",
            contact: "Ana Costa",
            phone: "(51) 95555-0005",
            email: "contato@sicredi.com.br",
            status: "ativo"
        },

        {
            id: 6,
            legalName: "Alelo S.A.",
            tradeName: "Alelo",
            cnpj: "09.227.125/0001-64",
            contact: "Ricardo Lima",
            phone: "(11) 94444-0006",
            email: "contato@alelo.com.br",
            status: "ativo"
        },

        {
            id: 7,
            legalName: "Fretebras Tecnologia Ltda",
            tradeName: "Fretebras",
            cnpj: "15.555.444/0001-77",
            contact: "Fernanda Souza",
            phone: "(11) 93333-0007",
            email: "contato@fretebras.com.br",
            status: "ativo"
        },

        {
            id: 8,
            legalName: "Banco do Brasil S.A.",
            tradeName: "Banco do Brasil",
            cnpj: "00.000.000/0001-91",
            contact: "Gustavo Almeida",
            phone: "(61) 92222-0008",
            email: "contato@bb.com.br",
            status: "inativo"
        }

    ];


    static init() {

        console.log("Tela Empresas carregada.");

        this.renderTable();

        this.bindEvents();

    }


    /* =====================================================
       EVENTOS
    ===================================================== */

    static bindEvents() {

        const search =
            document.querySelector("#company-search");


        search?.addEventListener(
            "input",
            () => {

                this.applyFilters();

            }
        );


        const statusFilter =
            document.querySelector(
                "#company-status-filter"
            );


        statusFilter?.addEventListener(
            "change",
            () => {

                this.applyFilters();

            }
        );


        /*
         * Botão Nova Empresa
         *
         * Por enquanto apenas abrimos o mesmo modal
         * que será utilizado pelo cadastro de contratos.
         */

        const newButton =
            document.querySelector(
                "#btn-new-company-page"
            );


        newButton?.addEventListener(
            "click",
            () => {

                this.openCompanyModal();

            }
        );

    }


    /* =====================================================
       FILTROS
    ===================================================== */

    static applyFilters() {

        const search =
            document.querySelector(
                "#company-search"
            )?.value
            .toLowerCase()
            .trim();


        const status =
            document.querySelector(
                "#company-status-filter"
            )?.value;


        let filtered =
            this.companies.filter(
                company => {

                    const matchesSearch =
                        !search ||
                        company.legalName
                            .toLowerCase()
                            .includes(search) ||
                        company.tradeName
                            .toLowerCase()
                            .includes(search) ||
                        company.cnpj
                            .toLowerCase()
                            .includes(search);


                    const matchesStatus =
                        !status ||
                        company.status === status;


                    return (
                        matchesSearch &&
                        matchesStatus
                    );

                }
            );


        this.renderTable(filtered);

    }


    /* =====================================================
       TABELA
    ===================================================== */

    static renderTable(
        companies = this.companies
    ) {

        const tbody =
            document.querySelector(
                "#companies-body"
            );


        if (!tbody) {
            return;
        }


        tbody.innerHTML =
            companies.map(
                company => {

                    const name =
                        company.tradeName ||
                        company.legalName;


                    const firstLetter =
                        name
                            .charAt(0)
                            .toUpperCase();


                    const statusText =
                        company.status === "ativo"
                            ? "Ativa"
                            : "Inativa";


                    const statusClass =
                        company.status === "ativo"
                            ? "active"
                            : "inactive";


                    return `

                        <tr>

                            <td>

                                <div class="company-info">

                                    <div class="company-avatar">

                                        ${firstLetter}

                                    </div>


                                    <div class="company-info-text">

                                        <strong>
                                            ${name}
                                        </strong>

                                        <span>
                                            ${company.legalName}
                                        </span>

                                    </div>

                                </div>

                            </td>


                            <td>
                                ${company.cnpj}
                            </td>


                            <td>
                                ${company.contact}
                            </td>


                            <td>
                                ${company.phone}
                            </td>


                            <td>
                                ${company.email}
                            </td>


                            <td>

                                <span
                                    class="company-status ${statusClass}"
                                >

                                    <i
                                        class="fa-solid fa-circle"
                                    ></i>

                                    ${statusText}

                                </span>

                            </td>


                            <td>

                                <div class="company-actions">


                                    <button
                                        type="button"
                                        class="company-action-btn"
                                        title="Visualizar"
                                        data-action="view"
                                        data-id="${company.id}"
                                    >

                                        <i
                                            class="fa-solid fa-eye"
                                        ></i>

                                    </button>


                                    <button
                                        type="button"
                                        class="company-action-btn"
                                        title="Editar"
                                        data-action="edit"
                                        data-id="${company.id}"
                                    >

                                        <i
                                            class="fa-solid fa-pen"
                                        ></i>

                                    </button>


                                    <button
                                        type="button"
                                        class="company-action-btn danger"
                                        title="Excluir"
                                        data-action="delete"
                                        data-id="${company.id}"
                                    >

                                        <i
                                            class="fa-solid fa-trash"
                                        ></i>

                                    </button>


                                </div>

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");


        this.updateCounters(companies);

    }


    /* =====================================================
       CONTADORES
    ===================================================== */

    static updateCounters(
        filteredCompanies
    ) {

        const total =
            this.companies.length;


        const active =
            this.companies.filter(
                company =>
                    company.status === "ativo"
            ).length;


        const inactive =
            this.companies.filter(
                company =>
                    company.status === "inativo"
            ).length;


        document.querySelector(
            "#companies-total"
        ).textContent = total;


        document.querySelector(
            "#companies-active"
        ).textContent = active;


        document.querySelector(
            "#companies-inactive"
        ).textContent = inactive;


        document.querySelector(
            "#companies-count"
        ).textContent =
            `${filteredCompanies.length} empresa(s)`;

    }


    /* =====================================================
       MODAL
    ===================================================== */

    static openCompanyModal() {

        UIModal.open({

            title: "Nova Empresa",

            subtitle:
                "Cadastre uma nova empresa no sistema.",


            content: `

                <form
                    id="company-page-form"
                    class="company-form"
                >

                    <div class="form-section">


                        <div class="form-section-title">

                            <i
                                class="fa-solid fa-building"
                            ></i>

                            <div>

                                <strong>
                                    Dados da empresa
                                </strong>

                                <span>
                                    Informações cadastrais
                                </span>

                            </div>

                        </div>


                        <div class="form-grid">


                            <div class="form-group">

                                <label>
                                    Razão Social
                                    <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    id="page-company-legal-name"
                                    placeholder="Digite a razão social"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Nome Fantasia
                                </label>

                                <input
                                    type="text"
                                    id="page-company-trade-name"
                                    placeholder="Digite o nome fantasia"
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    CNPJ
                                    <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    id="page-company-cnpj"
                                    placeholder="00.000.000/0000-00"
                                    required
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Contato
                                </label>

                                <input
                                    type="text"
                                    id="page-company-contact"
                                    placeholder="Nome do contato"
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    Telefone
                                </label>

                                <input
                                    type="text"
                                    id="page-company-phone"
                                    placeholder="(00) 00000-0000"
                                >

                            </div>


                            <div class="form-group">

                                <label>
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    id="page-company-email"
                                    placeholder="empresa@email.com"
                                >

                            </div>


                        </div>

                    </div>

                </form>

            `,


            footer: `

                <button
                    type="button"
                    class="fx-btn fx-btn-secondary"
                    onclick="UIModal.close()"
                >

                    Cancelar

                </button>


                <button
                    type="submit"
                    form="company-page-form"
                    class="fx-btn fx-btn-primary"
                >

                    <i class="fa-solid fa-check"></i>

                    Cadastrar empresa

                </button>

            `

        });

    }

};