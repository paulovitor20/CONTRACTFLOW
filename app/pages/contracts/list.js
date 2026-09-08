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
            status: "ativo"
        },

        {
            number: "CT-002",
            company: "Vivo",
            category: "Telefonia",
            responsible: "Carlos Henrique",
            value: "R$ 8.500,00",
            start: "15/02/2026",
            end: "15/08/2026",
            status: "vencendo"
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


        const newContractButton =
            document.querySelector("#btn-new-contract");

        newContractButton?.addEventListener("click", () => {

            UIModal.open({

                title: "Novo Contrato",

                subtitle: "Cadastre um novo contrato no sistema.",

                content: `
            <div style="
                padding:20px 0;
                text-align:center;
            ">

                <i
                    class="fa-solid fa-file-contract"
                    style="
                        font-size:40px;
                        color:var(--primary);
                        margin-bottom:15px;
                    "
                ></i>

                <h3>
                    Formulário de contrato
                </h3>

                <p style="
                    margin-top:8px;
                    color:var(--muted);
                ">
                    O formulário completo
                    será implementado no próximo passo.
                </p>

            </div>
        `,

                footer: `
            <button
                type="button"
                class="btn-secondary"
                onclick="UIModal.close()"
            >
                Cancelar
            </button>

            <button
                type="button"
                class="btn-primary"
            >
                Continuar
            </button>
        `

            });

        });

    }


    static renderTable(data = this.contracts) {

        UITable.render({

            target: "#contracts-table",

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


                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Visualizar"
                                >

                                    <i class="fa-solid fa-eye"></i>

                                </button>


                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Editar"
                                >

                                    <i class="fa-solid fa-pen"></i>

                                </button>


                                <button
                                    type="button"
                                    class="action-btn"
                                    title="Documentos"
                                >

                                    <i class="fa-solid fa-file"></i>

                                </button>


                                <div class="ui-dropdown">

                                    <button
                                        type="button"
                                        class="ui-dropdown-toggle"
                                        title="Mais opções"
                                    >

                                        <i class="fa-solid fa-ellipsis-vertical"></i>

                                    </button>


                                    <div class="ui-dropdown-menu">

                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                        >

                                            <i class="fa-regular fa-copy"></i>

                                            Duplicar contrato

                                        </button>


                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                        >

                                            <i class="fa-solid fa-rotate"></i>

                                            Renovar contrato

                                        </button>


                                        <button
                                            type="button"
                                            class="ui-dropdown-item"
                                        >

                                            <i class="fa-solid fa-box-archive"></i>

                                            Arquivar contrato

                                        </button>


                                        <div class="ui-dropdown-divider"></div>


                                        <button
                                            type="button"
                                            class="ui-dropdown-item danger"
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

};