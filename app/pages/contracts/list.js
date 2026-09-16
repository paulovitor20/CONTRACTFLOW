window.ContractsPage = class ContractsPage {

    static contracts = [

        {
            number: "CT-001",
            company: "Carvalho Transportes",
            category: "Transporte",
            responsible: "Paulo Vitor",
            value: "R$ 15.000,00",
            start: "10/01/2026",
            end: "10/01/2027",
            status: "ativo",
            notes: "Contrato referente à prestação de serviços de transporte."
        },

        {
            number: "CT-002",
            company: "Vivo",
            category: "Telefonia",
            responsible: "Carlos Henrique",
            value: "R$ 8.500,00",
            start: "15/02/2026",
            end: "15/08/2026",
            status: "vencendo",
            notes: "Contrato referente à prestação de serviços de transporte."
        },

        {
            number: "CT-003",
            company: "AWS",
            category: "Cloud",
            responsible: "Mariana Silva",
            value: "R$ 2.800,00",
            start: "01/03/2025",
            end: "01/03/2026",
            status: "vencido"
        },

        {
            number: "CT-004",
            company: "Google",
            category: "Serviços",
            responsible: "João Pedro",
            value: "R$ 1.400,00",
            start: "20/04/2026",
            end: "20/04/2027",
            status: "ativo"
        },

        {
            number: "CT-005",
            company: "Sicredi",
            category: "Financeiro",
            responsible: "Ana Costa",
            value: "R$ 950,00",
            start: "10/05/2026",
            end: "10/05/2027",
            status: "ativo"
        },

        {
            number: "CT-006",
            company: "Alelo",
            category: "Benefícios",
            responsible: "Ricardo Lima",
            value: "R$ 3.200,00",
            start: "01/06/2026",
            end: "01/06/2027",
            status: "vencendo"
        },

        {
            number: "CT-007",
            company: "Fretebras",
            category: "Logística",
            responsible: "Fernanda Souza",
            value: "R$ 4.800,00",
            start: "15/01/2026",
            end: "15/01/2027",
            status: "ativo"
        },

        {
            number: "CT-008",
            company: "Banco do Brasil",
            category: "Financeiro",
            responsible: "Gustavo Almeida",
            value: "R$ 12.000,00",
            start: "01/02/2025",
            end: "01/02/2026",
            status: "vencido"
        }

    ];

    static init() {

        console.log("Tela Contratos carregada.");

        this.renderTable();

        this.bindActionEvents();

        const newContractButton =
            document.querySelector("#btn-new-contract");


        newContractButton?.addEventListener("click", () => {

            UIModal.open({

                title: "Novo Contrato",

                subtitle:
                    "Preencha os dados do contrato para realizar o cadastro.",


                content: `

                    <form
                        id="contract-form"
                        class="contract-form"
                    >


                        <!-- =====================================
                             INFORMAÇÕES DO CONTRATO
                        ====================================== -->

                        <div class="form-section">

                            <div class="form-section-title">

                                <i class="fa-solid fa-file-contract"></i>

                                <div>

                                    <strong>
                                        Informações do contrato
                                    </strong>

                                    <span>
                                        Dados principais do contrato
                                    </span>

                                </div>

                            </div>


                            <div class="form-grid">


                                <!-- Nº CONTRATO -->

                                <div class="form-group">

                                    <label for="contract-number">
                                        Nº do contrato
                                    </label>

                                    <input
                                        type="text"
                                        id="contract-number"
                                        placeholder="Ex.: CT-009"
                                    >

                                </div>


                                <!-- EMPRESA -->

                                <div class="form-group">

                                    <label for="contract-company">

                                        Empresa

                                        <span>*</span>

                                    </label>


                                    <div class="company-select-wrapper">


                                        <select
                                            id="contract-company"
                                            required
                                        >

                                            <option value="">
                                                Selecione a empresa
                                            </option>

                                            <option value="Carvalho Transportes">
                                                Carvalho Transportes
                                            </option>

                                            <option value="Vivo">
                                                Vivo
                                            </option>

                                            <option value="AWS">
                                                AWS
                                            </option>

                                            <option value="Google">
                                                Google
                                            </option>

                                            <option value="Sicredi">
                                                Sicredi
                                            </option>

                                            <option value="Alelo">
                                                Alelo
                                            </option>

                                            <option value="Fretebras">
                                                Fretebras
                                            </option>

                                            <option value="Banco do Brasil">
                                                Banco do Brasil
                                            </option>

                                        </select>


                                        <button
                                            type="button"
                                            class="btn-new-company"
                                            id="btn-new-company"
                                            title="Cadastrar nova empresa"
                                        >

                                            <i class="fa-solid fa-plus"></i>

                                        </button>


                                    </div>

                                </div>


                                <!-- CATEGORIA -->

                                <div class="form-group">

                                    <label for="contract-category">

                                        Categoria

                                        <span>*</span>

                                    </label>


                                    <select
                                        id="contract-category"
                                        required
                                    >

                                        <option value="">
                                            Selecione
                                        </option>

                                        <option>
                                            Transporte
                                        </option>

                                        <option>
                                            Telefonia
                                        </option>

                                        <option>
                                            Cloud
                                        </option>

                                        <option>
                                            Serviços
                                        </option>

                                        <option>
                                            Financeiro
                                        </option>

                                        <option>
                                            Benefícios
                                        </option>

                                        <option>
                                            Logística
                                        </option>

                                        <option>
                                            Seguro
                                        </option>

                                        <option>
                                            Aluguel
                                        </option>

                                    </select>

                                </div>


                                <!-- RESPONSÁVEL -->

                                <div class="form-group">

                                    <label for="contract-responsible">

                                        Responsável

                                        <span>*</span>

                                    </label>


                                    <input
                                        type="text"
                                        id="contract-responsible"
                                        placeholder="Nome do responsável"
                                        required
                                    >

                                </div>


                            </div>

                        </div>



                        <!-- =====================================
                             VIGÊNCIA E VALORES
                        ====================================== -->

                        <div class="form-section">


                            <div class="form-section-title">

                                <i class="fa-solid fa-calendar-days"></i>

                                <div>

                                    <strong>
                                        Vigência e valores
                                    </strong>

                                    <span>
                                        Período e informações financeiras
                                    </span>

                                </div>

                            </div>


                            <div class="form-grid">


                                <!-- VALOR -->

                                <div class="form-group">

                                    <label for="contract-value">

                                        Valor

                                        <span>*</span>

                                    </label>


                                    <div class="input-money">

                                        <span>
                                            R$
                                        </span>


                                        <input
                                            type="text"
                                            id="contract-value"
                                            placeholder="0,00"
                                            required
                                        >

                                    </div>

                                </div>


                                <!-- DATA INÍCIO -->

                                <div class="form-group">

                                    <label for="contract-start">

                                        Data de início

                                        <span>*</span>

                                    </label>


                                    <input
                                        type="date"
                                        id="contract-start"
                                        required
                                    >

                                </div>


                                <!-- DATA VENCIMENTO -->

                                <div class="form-group">

                                    <label for="contract-end">

                                        Data de vencimento

                                        <span>*</span>

                                    </label>


                                    <input
                                        type="date"
                                        id="contract-end"
                                        required
                                    >

                                </div>


                                <!-- STATUS -->

                                <div class="form-group">

                                    <label for="contract-status">
                                        Status
                                    </label>


                                    <select id="contract-status">

                                        <option value="ativo">
                                            Ativo
                                        </option>

                                        <option value="vencendo">
                                            Vencendo
                                        </option>

                                        <option value="vencido">
                                            Vencido
                                        </option>

                                    </select>

                                </div>


                            </div>

                        </div>



                        <!-- =====================================
                             OBSERVAÇÕES
                        ====================================== -->

                        <div class="form-section">


                            <div class="form-section-title">

                                <i class="fa-solid fa-align-left"></i>

                                <div>

                                    <strong>
                                        Observações
                                    </strong>

                                    <span>
                                        Informações adicionais
                                    </span>

                                </div>

                            </div>


                            <div class="form-group">

                                <label for="contract-notes">
                                    Observações
                                </label>


                                <textarea
                                    id="contract-notes"
                                    rows="4"
                                    placeholder="Digite observações sobre este contrato..."
                                ></textarea>

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
                        form="contract-form"
                        class="fx-btn fx-btn-primary"
                    >

                        <i class="fa-solid fa-check"></i>

                        Cadastrar contrato

                    </button>

                `

            });

        });

        /* =====================================================
        NOVA EMPRESA
        ===================================================== */

        document.addEventListener("click", (event) => {

            const button =
                event.target.closest("#btn-new-company");


            if (!button) {
                return;
            }


            UIModal.open({

                title: "Nova Empresa",

                subtitle:
                    "Cadastre uma nova empresa para utilizar no contrato.",


                content: `

                    <form
                        id="company-form"
                        class="company-form"
                    >

                        <div class="form-section">


                            <div class="form-section-title">

                                <i class="fa-solid fa-building"></i>

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


                                <!-- RAZÃO SOCIAL -->

                                <div class="form-group">

                                    <label for="company-legal-name">

                                        Razão Social

                                        <span>*</span>

                                    </label>


                                    <input
                                        type="text"
                                        id="company-legal-name"
                                        placeholder="Digite a razão social"
                                        required
                                    >

                                </div>


                                <!-- NOME FANTASIA -->

                                <div class="form-group">

                                    <label for="company-trade-name">

                                        Nome Fantasia

                                    </label>


                                    <input
                                        type="text"
                                        id="company-trade-name"
                                        placeholder="Digite o nome fantasia"
                                    >

                                </div>


                                <!-- CNPJ -->

                                <div class="form-group">

                                    <label for="company-cnpj">

                                        CNPJ

                                        <span>*</span>

                                    </label>


                                    <input
                                        type="text"
                                        id="company-cnpj"
                                        placeholder="00.000.000/0000-00"
                                        required
                                    >

                                </div>


                                <!-- CONTATO -->

                                <div class="form-group">

                                    <label for="company-contact">

                                        Contato

                                    </label>


                                    <input
                                        type="text"
                                        id="company-contact"
                                        placeholder="Nome do contato"
                                    >

                                </div>


                                <!-- TELEFONE -->

                                <div class="form-group">

                                    <label for="company-phone">

                                        Telefone

                                    </label>


                                    <input
                                        type="text"
                                        id="company-phone"
                                        placeholder="(00) 00000-0000"
                                    >

                                </div>


                                <!-- E-MAIL -->

                                <div class="form-group">

                                    <label for="company-email">

                                        E-mail

                                    </label>


                                    <input
                                        type="email"
                                        id="company-email"
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
                        form="company-form"
                        class="fx-btn fx-btn-primary"
                    >

                        <i class="fa-solid fa-check"></i>

                        Cadastrar empresa

                    </button>

                `

            });

        });



        /* =====================================================
           SALVAR EMPRESA NO SELECT
        ===================================================== */

        document.addEventListener("submit", (event) => {

            if (
                event.target.id !== "company-form"
            ) {
                return;
            }


            event.preventDefault();


            const legalName =
                document
                    .querySelector("#company-legal-name")
                    ?.value
                    .trim();


            const tradeName =
                document
                    .querySelector("#company-trade-name")
                    ?.value
                    .trim();


            /*
             * Se tiver Nome Fantasia,
             * usamos ele no SELECT.
             * Caso contrário usamos Razão Social.
             */

            const companyName =
                tradeName || legalName;


            const companySelect =
                document.querySelector(
                    "#contract-company"
                );


            if (
                !companyName ||
                !companySelect
            ) {
                return;
            }


            /* ==========================================
               VERIFICA SE JÁ EXISTE
            ========================================== */

            const existingOption =
                Array.from(
                    companySelect.options
                ).find(
                    option =>
                        option.value.toLowerCase() ===
                        companyName.toLowerCase()
                );


            if (existingOption) {

                companySelect.value =
                    existingOption.value;

            }


            else {

                const option =
                    document.createElement("option");


                option.value =
                    companyName;


                option.textContent =
                    companyName;


                companySelect.appendChild(
                    option
                );


                companySelect.value =
                    companyName;

            }


            /*
             * Fecha o modal de empresa.
             *
             * O modal.js atualizado vai restaurar
             * o modal Novo Contrato.
             */

            UIModal.close();

        });

    }

    static bindActionEvents() {

        const table =
            document.querySelector("#contracts-table");

        if (!table) {
            return;
        }


        table.addEventListener("click", (event) => {

            const button =
                event.target.closest("[data-action]");

            if (!button) {
                return;
            }


            const action =
                button.dataset.action;

            const contractNumber =
                button.dataset.contract;


            if (!contractNumber) {
                return;
            }


            switch (action) {

                case "view":
                    this.viewContract(contractNumber);
                    break;


                case "edit":
                    this.editContract(contractNumber);
                    break;


                case "documents":
                    this.openDocuments(contractNumber);
                    break;


                case "duplicate":
                    this.duplicateContract(contractNumber);
                    break;


                case "renew":
                    this.renewContract(contractNumber);
                    break;


                case "archive":
                    this.archiveContract(contractNumber);
                    break;


                case "delete":
                    this.deleteContract(contractNumber);
                    break;

            }

        });

    }

    /* =========================================================
       TABELA
    ========================================================= */

    static renderTable(
        data = this.contracts
    ) {

        UITable.render({

            target:
                "#contracts-table",


            columns: [

                {
                    label: "Nº",
                    width: "90px"
                },

                {
                    label: "Empresa",
                    width: "260px"
                },

                {
                    label: "Categoria",
                    width: "140px"
                },

                {
                    label: "Responsável",
                    width: "180px"
                },

                {
                    label: "Valor",
                    width: "140px"
                },

                {
                    label: "Início",
                    width: "120px"
                },

                {
                    label: "Vencimento",
                    width: "120px"
                },

                {
                    label: "Status",
                    width: "120px"
                },

                {
                    label: "Ações",
                    width: "150px"
                }

            ],


            data: data,


            rowRenderer: (contract) => {


                let statusText =
                    "Ativo";


                let statusClass =
                    "status-active";


                if (
                    contract.status ===
                    "vencendo"
                ) {

                    statusText =
                        "Vencendo";


                    statusClass =
                        "status-expiring";

                }


                if (
                    contract.status ===
                    "vencido"
                ) {

                    statusText =
                        "Vencido";


                    statusClass =
                        "status-expired";

                }


                const firstLetter =
                    contract.company
                        .charAt(0)
                        .toUpperCase();


                return `

                    <tr>


                        <td>

                            <strong>
                                ${contract.number}
                            </strong>

                        </td>


                        <td>

                            <div class="company-cell">

                                <div class="company-avatar">

                                    ${firstLetter}

                                </div>


                                <span class="company-name">

                                    ${contract.company}

                                </span>

                            </div>

                        </td>


                        <td>

                            ${contract.category}

                        </td>


                        <td>

                            ${contract.responsible}

                        </td>


                        <td>

                            ${contract.value}

                        </td>


                        <td>

                            ${contract.start}

                        </td>


                        <td>

                            ${contract.end}

                        </td>


                        <td>

                            <span
                                class="contract-status ${statusClass}"
                            >

                                <i class="fa-solid fa-circle"></i>

                                ${statusText}

                            </span>

                        </td>

                        <td>
                            <div class="contract-actions">

                                <!-- VISUALIZAR -->
                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Visualizar"
                                    data-action="view"
                                    data-contract="${contract.number}"
                                >
                                    <i class="fa-solid fa-eye"></i>
                                </button>

                                <!-- EDITAR -->
                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Editar"
                                    data-action="edit"
                                    data-contract="${contract.number}"
                                >
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <!-- DOCUMENTOS -->
                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Documentos"
                                    data-action="documents"
                                    data-contract="${contract.number}"
                                >
                                    <i class="fa-solid fa-file"></i>
                                </button>

                                <!-- MENU -->
                                <div class="ui-dropdown">

                                    <button
                                        type="button"
                                        class="ui-dropdown-toggle"
                                        title="Mais opções"
                                    >
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </button>

                                    <div class="ui-dropdown-menu">

                                        <!-- DUPLICAR -->
                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                            data-action="duplicate"
                                            data-contract="${contract.number}"
                                        >
                                            <i class="fa-regular fa-copy"></i>
                                            Duplicar contrato
                                        </button>

                                        <!-- RENOVAR -->
                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                            data-action="renew"
                                            data-contract="${contract.number}"
                                        >
                                            <i class="fa-solid fa-rotate"></i>
                                            Renovar contrato
                                        </button>

                                        <!-- ARQUIVAR -->
                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                            data-action="archive"
                                            data-contract="${contract.number}"
                                        >
                                            <i class="fa-solid fa-box-archive"></i>
                                            Arquivar contrato
                                        </button>

                                        <div class="ui-dropdown-divider"></div>

                                        <!-- EXCLUIR -->
                                        <button
                                            type="button"
                                            class="ui-dropdown-item danger"
                                            data-action="delete"
                                            data-contract="${contract.number}"
                                        >
                                            <i class="fa-solid fa-trash"></i>
                                            Excluir contrato
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </td>

                    </tr>

                `;

            }


        });

    }
    static viewContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );

        if (!contract) {
            return;
        }


        let statusText = "Ativo";

        if (contract.status === "vencendo") {
            statusText = "Vencendo";
        }

        if (contract.status === "vencido") {
            statusText = "Vencido";
        }

        if (contract.status === "arquivado") {
            statusText = "Arquivado";
        }


        UIModal.open({

            title: `Contrato ${contract.number}`,

            subtitle:
                "Visualização completa das informações do contrato.",


            content: `

            <div class="contract-view-form">


                <!-- =========================================
                     INFORMAÇÕES DO CONTRATO
                ========================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-file-contract"></i>
                        </div>

                        <div>

                            <strong>
                                Informações do contrato
                            </strong>

                            <span>
                                Dados principais do contrato
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-grid">


                        <div class="contract-view-field">

                            <label>
                                Nº do contrato
                            </label>

                            <div class="contract-view-value">
                                ${contract.number}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Empresa
                            </label>

                            <div class="contract-view-value">
                                ${contract.company}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Categoria
                            </label>

                            <div class="contract-view-value">
                                ${contract.category}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Responsável
                            </label>

                            <div class="contract-view-value">
                                ${contract.responsible}
                            </div>

                        </div>


                    </div>

                </div>



                <!-- =========================================
                     VIGÊNCIA E VALORES
                ========================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>

                        <div>

                            <strong>
                                Vigência e valores
                            </strong>

                            <span>
                                Período e informações financeiras
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-grid">


                        <div class="contract-view-field">

                            <label>
                                Valor
                            </label>

                            <div class="contract-view-value">
                                ${contract.value}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Data de início
                            </label>

                            <div class="contract-view-value">
                                ${contract.start}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Data de vencimento
                            </label>

                            <div class="contract-view-value">
                                ${contract.end}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Status
                            </label>

                            <div class="contract-view-status">

                                <span
                                    class="contract-status ${contract.status === "ativo"
                    ? "status-active"
                    : contract.status === "vencendo"
                        ? "status-expiring"
                        : contract.status === "vencido"
                            ? "status-expired"
                            : "status-archived"
                }"
                                >

                                    <i class="fa-solid fa-circle"></i>

                                    ${statusText}

                                </span>

                            </div>

                        </div>


                    </div>

                </div>



                <!-- =========================================
                     OBSERVAÇÕES
                ========================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-align-left"></i>
                        </div>

                        <div>

                            <strong>
                                Observações
                            </strong>

                            <span>
                                Informações adicionais
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-notes">

                        ${contract.notes
                    ? contract.notes
                    : "Nenhuma observação cadastrada."
                }

                    </div>

                </div>


            </div>

        `,


            footer: `

            <button
                type="button"
                class="fx-btn fx-btn-secondary"
                onclick="UIModal.close()"
            >
                Fechar
            </button>

        `

        });

    }

    static viewContract(number) {

        const contract = this.contracts.find(
            item => item.number === number
        );

        if (!contract) {
            return;
        }

        let statusText = "Ativo";
        let statusClass = "status-active";

        if (contract.status === "vencendo") {
            statusText = "Vencendo";
            statusClass = "status-expiring";
        }

        if (contract.status === "vencido") {
            statusText = "Vencido";
            statusClass = "status-expired";
        }

        if (contract.status === "arquivado") {
            statusText = "Arquivado";
            statusClass = "status-archived";
        }


        UIModal.open({

            title: "Visualizar contrato",

            subtitle:
                "Confira todas as informações cadastradas.",


            content: `

            <div class="contract-view-form">


                <!-- =====================================
                     INFORMAÇÕES DO CONTRATO
                ====================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-file-contract"></i>
                        </div>

                        <div>

                            <strong>
                                Informações do contrato
                            </strong>

                            <span>
                                Dados principais do contrato
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-grid">


                        <div class="contract-view-field">

                            <label>
                                Nº do contrato
                            </label>

                            <div class="contract-view-value">
                                ${contract.number || "-"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Empresa
                            </label>

                            <div class="contract-view-value">
                                ${contract.company || "-"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Categoria
                            </label>

                            <div class="contract-view-value">
                                ${contract.category || "-"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Responsável
                            </label>

                            <div class="contract-view-value">
                                ${contract.responsible || "-"}
                            </div>

                        </div>


                    </div>

                </div>



                <!-- =====================================
                     VIGÊNCIA E VALORES
                ====================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>

                        <div>

                            <strong>
                                Vigência e valores
                            </strong>

                            <span>
                                Período e informações financeiras
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-grid">


                        <div class="contract-view-field">

                            <label>
                                Valor
                            </label>

                            <div class="contract-view-value">
                                ${contract.value || "R$ 0,00"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Data de início
                            </label>

                            <div class="contract-view-value">
                                ${contract.start || "-"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Data de vencimento
                            </label>

                            <div class="contract-view-value">
                                ${contract.end || "-"}
                            </div>

                        </div>


                        <div class="contract-view-field">

                            <label>
                                Status
                            </label>

                            <div class="contract-view-status">

                                <span class="contract-status ${statusClass}">

                                    <i class="fa-solid fa-circle"></i>

                                    ${statusText}

                                </span>

                            </div>

                        </div>


                    </div>

                </div>



                <!-- =====================================
                     OBSERVAÇÕES
                ====================================== -->

                <div class="contract-view-section">

                    <div class="contract-view-section-title">

                        <div class="contract-view-section-icon">
                            <i class="fa-solid fa-align-left"></i>
                        </div>

                        <div>

                            <strong>
                                Observações
                            </strong>

                            <span>
                                Informações adicionais
                            </span>

                        </div>

                    </div>


                    <div class="contract-view-notes">

                        ${contract.notes &&
                    contract.notes.trim()
                    ? contract.notes
                    : "Nenhuma observação cadastrada."
                }

                    </div>

                </div>


            </div>

        `,


            footer: `

            <button
                type="button"
                class="fx-btn fx-btn-secondary"
                onclick="UIModal.close()"
            >
                Fechar
            </button>

        `

        });

    }
    static editContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        UIModal.open({

            title: `Editar ${contract.number}`,

            subtitle:
                "Altere as informações do contrato.",

            content: `

            <form id="edit-contract-form">

                <div class="form-grid">

                    <div class="form-group">

                        <label>Empresa</label>

                        <input
                            type="text"
                            id="edit-company"
                            value="${contract.company}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Categoria</label>

                        <input
                            type="text"
                            id="edit-category"
                            value="${contract.category}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Responsável</label>

                        <input
                            type="text"
                            id="edit-responsible"
                            value="${contract.responsible}"
                        >

                    </div>


                    <div class="form-group">

                        <label>Valor</label>

                        <input
                            type="text"
                            id="edit-value"
                            value="${contract.value}"
                        >

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
                type="button"
                class="fx-btn fx-btn-primary"
                id="save-edit-contract"
            >
                <i class="fa-solid fa-check"></i>
                Salvar alterações
            </button>

        `

        });


        setTimeout(() => {

            const saveButton =
                document.querySelector(
                    "#save-edit-contract"
                );


            saveButton?.addEventListener("click", () => {

                contract.company =
                    document.querySelector("#edit-company").value;

                contract.category =
                    document.querySelector("#edit-category").value;

                contract.responsible =
                    document.querySelector("#edit-responsible").value;

                contract.value =
                    document.querySelector("#edit-value").value;


                UIModal.close();

                this.renderTable();

            });

        }, 50);

    }
    static openDocuments(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        UIModal.open({

            title: `Documentos — ${contract.number}`,

            subtitle:
                `${contract.company} • ${contract.category}`,

            content: `

            <div class="contract-documents-empty">

                <i class="fa-solid fa-folder-open"></i>

                <strong>
                    Nenhum documento cadastrado
                </strong>

                <span>
                    Os documentos vinculados a este contrato
                    aparecerão aqui.
                </span>

            </div>

        `,

            footer: `

            <button
                type="button"
                class="fx-btn fx-btn-secondary"
                onclick="UIModal.close()"
            >
                Fechar
            </button>

        `

        });

    }
    static duplicateContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        const numbers =
            this.contracts
                .map(item => {
                    return parseInt(
                        item.number.replace("CT-", "")
                    );
                })
                .filter(number => !isNaN(number));


        const nextNumber =
            Math.max(...numbers, 0) + 1;


        const newNumber =
            `CT-${String(nextNumber).padStart(3, "0")}`;


        const duplicated = {
            ...contract,
            number: newNumber,
            status: "ativo"
        };


        this.contracts.push(duplicated);


        this.renderTable();


        this.editContract(newNumber);

    }
    static renewContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        const confirmed =
            confirm(
                `Deseja renovar o contrato ${contract.number} por mais 1 ano?`
            );


        if (!confirmed) {
            return;
        }


        const parts =
            contract.end.split("/");


        const date =
            new Date(
                parts[2],
                parts[1] - 1,
                parts[0]
            );


        date.setFullYear(
            date.getFullYear() + 1
        );


        const day =
            String(date.getDate()).padStart(2, "0");

        const month =
            String(date.getMonth() + 1).padStart(2, "0");

        const year =
            date.getFullYear();


        contract.end =
            `${day}/${month}/${year}`;


        contract.status = "ativo";


        this.renderTable();

    }
    static archiveContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        const confirmed =
            confirm(
                `Deseja arquivar o contrato ${contract.number}?`
            );


        if (!confirmed) {
            return;
        }


        contract.status = "arquivado";


        this.renderTable();

    }
    static deleteContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        const confirmed =
            confirm(
                `Deseja excluir o contrato ${contract.number}?\n\nEsta ação não poderá ser desfeita.`
            );


        if (!confirmed) {
            return;
        }


        this.contracts =
            this.contracts.filter(
                item => item.number !== number
            );


        this.renderTable();

    }
    static bindActionEvents() {

        const table =
            document.querySelector("#contracts-table");

        if (!table) {
            return;
        }


        table.addEventListener("click", (event) => {

            const button =
                event.target.closest("[data-action]");

            if (!button) {
                return;
            }


            const action =
                button.dataset.action;

            const contractNumber =
                button.dataset.contract;


            if (!contractNumber) {
                return;
            }


            switch (action) {

                case "view":

                    this.viewContract(contractNumber);

                    break;


                case "edit":

                    this.editContract(contractNumber);

                    break;


                case "documents":

                    this.openDocuments(contractNumber);

                    break;

            }

        });

    }
    static editContract(number) {

        const contract =
            this.contracts.find(
                item => item.number === number
            );


        if (!contract) {
            return;
        }


        /*
         * Converte DD/MM/AAAA para AAAA-MM-DD
         * para preencher os campos type="date".
         */
        const formatDateForInput = (date) => {

            if (!date) {
                return "";
            }


            const parts =
                date.split("/");


            if (parts.length !== 3) {
                return "";
            }


            return `${parts[2]}-${parts[1]}-${parts[0]}`;

        };


        const startDate =
            formatDateForInput(contract.start);

        const endDate =
            formatDateForInput(contract.end);


        UIModal.open({

            title: "Editar Contrato",

            subtitle:
                "Altere os dados do contrato cadastrado.",


            content: `

            <form
                id="edit-contract-form"
                class="contract-form"
            >


                <!-- =====================================
                     INFORMAÇÕES DO CONTRATO
                ====================================== -->

                <div class="form-section">

                    <div class="form-section-title">

                        <i class="fa-solid fa-file-contract"></i>

                        <div>

                            <strong>
                                Informações do contrato
                            </strong>

                            <span>
                                Dados principais do contrato
                            </span>

                        </div>

                    </div>


                    <div class="form-grid">


                        <!-- Nº -->

                        <div class="form-group">

                            <label for="edit-contract-number">
                                Nº do contrato
                            </label>

                            <input
                                type="text"
                                id="edit-contract-number"
                                value="${contract.number || ""}"
                                readonly
                            >

                        </div>


                        <!-- EMPRESA -->

                        <div class="form-group">

                            <label for="edit-contract-company">
                                Empresa
                                <span>*</span>
                            </label>


                            <div class="company-select-wrapper">

                                <select
                                    id="edit-contract-company"
                                    required
                                >

                                    <option value="">
                                        Selecione a empresa
                                    </option>

                                    <option
                                        value="Carvalho Transportes"
                                        ${contract.company === "Carvalho Transportes" ? "selected" : ""}
                                    >
                                        Carvalho Transportes
                                    </option>

                                    <option
                                        value="Vivo"
                                        ${contract.company === "Vivo" ? "selected" : ""}
                                    >
                                        Vivo
                                    </option>

                                    <option
                                        value="AWS"
                                        ${contract.company === "AWS" ? "selected" : ""}
                                    >
                                        AWS
                                    </option>

                                    <option
                                        value="Google"
                                        ${contract.company === "Google" ? "selected" : ""}
                                    >
                                        Google
                                    </option>

                                    <option
                                        value="Sicredi"
                                        ${contract.company === "Sicredi" ? "selected" : ""}
                                    >
                                        Sicredi
                                    </option>

                                    <option
                                        value="Alelo"
                                        ${contract.company === "Alelo" ? "selected" : ""}
                                    >
                                        Alelo
                                    </option>

                                    <option
                                        value="Fretebras"
                                        ${contract.company === "Fretebras" ? "selected" : ""}
                                    >
                                        Fretebras
                                    </option>

                                    <option
                                        value="Banco do Brasil"
                                        ${contract.company === "Banco do Brasil" ? "selected" : ""}
                                    >
                                        Banco do Brasil
                                    </option>

                                </select>


                                <button
                                    type="button"
                                    class="btn-new-company"
                                    title="Cadastrar nova empresa"
                                >
                                    <i class="fa-solid fa-plus"></i>
                                </button>

                            </div>

                        </div>


                        <!-- CATEGORIA -->

                        <div class="form-group">

                            <label for="edit-contract-category">
                                Categoria
                                <span>*</span>
                            </label>

                            <select
                                id="edit-contract-category"
                                required
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option
                                    ${contract.category === "Transporte" ? "selected" : ""}
                                >
                                    Transporte
                                </option>

                                <option
                                    ${contract.category === "Telefonia" ? "selected" : ""}
                                >
                                    Telefonia
                                </option>

                                <option
                                    ${contract.category === "Cloud" ? "selected" : ""}
                                >
                                    Cloud
                                </option>

                                <option
                                    ${contract.category === "Serviços" ? "selected" : ""}
                                >
                                    Serviços
                                </option>

                                <option
                                    ${contract.category === "Financeiro" ? "selected" : ""}
                                >
                                    Financeiro
                                </option>

                                <option
                                    ${contract.category === "Benefícios" ? "selected" : ""}
                                >
                                    Benefícios
                                </option>

                                <option
                                    ${contract.category === "Logística" ? "selected" : ""}
                                >
                                    Logística
                                </option>

                                <option
                                    ${contract.category === "Seguro" ? "selected" : ""}
                                >
                                    Seguro
                                </option>

                                <option
                                    ${contract.category === "Aluguel" ? "selected" : ""}
                                >
                                    Aluguel
                                </option>

                            </select>

                        </div>


                        <!-- RESPONSÁVEL -->

                        <div class="form-group">

                            <label for="edit-contract-responsible">
                                Responsável
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="edit-contract-responsible"
                                value="${contract.responsible || ""}"
                                placeholder="Nome do responsável"
                                required
                            >

                        </div>


                    </div>

                </div>



                <!-- =====================================
                     VIGÊNCIA E VALORES
                ====================================== -->

                <div class="form-section">

                    <div class="form-section-title">

                        <i class="fa-solid fa-calendar-days"></i>

                        <div>

                            <strong>
                                Vigência e valores
                            </strong>

                            <span>
                                Período e informações financeiras
                            </span>

                        </div>

                    </div>


                    <div class="form-grid">


                        <!-- VALOR -->

                        <div class="form-group">

                            <label for="edit-contract-value">
                                Valor
                                <span>*</span>
                            </label>

                            <div class="input-money">

                                <span>R$</span>

                                <input
                                    type="text"
                                    id="edit-contract-value"
                                    value="${(contract.value || "")
                    .replace("R$", "")
                    .trim()}"
                                    placeholder="0,00"
                                    required
                                >

                            </div>

                        </div>


                        <!-- INÍCIO -->

                        <div class="form-group">

                            <label for="edit-contract-start">
                                Data de início
                                <span>*</span>
                            </label>

                            <input
                                type="date"
                                id="edit-contract-start"
                                value="${startDate}"
                                required
                            >

                        </div>


                        <!-- VENCIMENTO -->

                        <div class="form-group">

                            <label for="edit-contract-end">
                                Data de vencimento
                                <span>*</span>
                            </label>

                            <input
                                type="date"
                                id="edit-contract-end"
                                value="${endDate}"
                                required
                            >

                        </div>


                        <!-- STATUS -->

                        <div class="form-group">

                            <label for="edit-contract-status">
                                Status
                            </label>

                            <select id="edit-contract-status">

                                <option
                                    value="ativo"
                                    ${contract.status === "ativo" ? "selected" : ""}
                                >
                                    Ativo
                                </option>

                                <option
                                    value="vencendo"
                                    ${contract.status === "vencendo" ? "selected" : ""}
                                >
                                    Vencendo
                                </option>

                                <option
                                    value="vencido"
                                    ${contract.status === "vencido" ? "selected" : ""}
                                >
                                    Vencido
                                </option>

                                <option
                                    value="arquivado"
                                    ${contract.status === "arquivado" ? "selected" : ""}
                                >
                                    Arquivado
                                </option>

                            </select>

                        </div>


                    </div>

                </div>



                <!-- =====================================
                     OBSERVAÇÕES
                ====================================== -->

                <div class="form-section">

                    <div class="form-section-title">

                        <i class="fa-solid fa-align-left"></i>

                        <div>

                            <strong>
                                Observações
                            </strong>

                            <span>
                                Informações adicionais
                            </span>

                        </div>

                    </div>


                    <div class="form-group">

                        <label for="edit-contract-notes">
                            Observações
                        </label>

                        <textarea
                            id="edit-contract-notes"
                            rows="4"
                            placeholder="Digite observações sobre este contrato..."
                        >${contract.notes || ""}</textarea>

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
                type="button"
                class="fx-btn fx-btn-primary"
                id="btn-save-edit-contract"
            >
                <i class="fa-solid fa-check"></i>
                Salvar alterações
            </button>

        `

        });


        setTimeout(() => {

            const saveButton =
                document.querySelector(
                    "#btn-save-edit-contract"
                );


            saveButton?.addEventListener(
                "click",
                () => {

                    const form =
                        document.querySelector(
                            "#edit-contract-form"
                        );


                    if (!form.checkValidity()) {

                        form.reportValidity();

                        return;

                    }


                    /*
                     * Atualiza o objeto em memória
                     */

                    contract.company =
                        document.querySelector(
                            "#edit-contract-company"
                        ).value;


                    contract.category =
                        document.querySelector(
                            "#edit-contract-category"
                        ).value;


                    contract.responsible =
                        document.querySelector(
                            "#edit-contract-responsible"
                        ).value;


                    const value =
                        document.querySelector(
                            "#edit-contract-value"
                        ).value.trim();


                    contract.value =
                        value.startsWith("R$")
                            ? value
                            : `R$ ${value}`;


                    contract.start =
                        this.formatDateFromInput(
                            document.querySelector(
                                "#edit-contract-start"
                            ).value
                        );


                    contract.end =
                        this.formatDateFromInput(
                            document.querySelector(
                                "#edit-contract-end"
                            ).value
                        );


                    contract.status =
                        document.querySelector(
                            "#edit-contract-status"
                        ).value;


                    contract.notes =
                        document.querySelector(
                            "#edit-contract-notes"
                        ).value.trim();


                    /*
                     * Fecha modal
                     * e atualiza a tabela
                     */

                    UIModal.close();

                    this.renderTable();

                }
            );

        }, 50);

    }
    static formatDateFromInput(value) {

        if (!value) {
            return "";
        }


        const parts =
            value.split("-");


        if (parts.length !== 3) {
            return value;
        }


        return `${parts[2]}/${parts[1]}/${parts[0]}`;

    }
};