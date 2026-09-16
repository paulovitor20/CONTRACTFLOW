window.DocumentsPage = class DocumentsPage {

    static documents = [

        {
            id: 1,
            name: "Contrato de Prestação de Serviços",
            contract: "CT-001",
            company: "Carvalho Transportes",
            type: "Contrato",
            date: "10/01/2026",
            expiration: "10/01/2027",
            status: "vigente"
        },

        {
            id: 2,
            name: "Aditivo Contratual nº 01",
            contract: "CT-001",
            company: "Carvalho Transportes",
            type: "Aditivo",
            date: "15/03/2026",
            expiration: "10/01/2027",
            status: "vigente"
        },

        {
            id: 3,
            name: "Contrato de Telefonia",
            contract: "CT-002",
            company: "Vivo",
            type: "Contrato",
            date: "15/02/2026",
            expiration: "15/08/2026",
            status: "vencendo"
        },

        {
            id: 4,
            name: "Contrato Cloud AWS",
            contract: "CT-003",
            company: "AWS",
            type: "Contrato",
            date: "01/03/2025",
            expiration: "01/03/2026",
            status: "vencido"
        },

        {
            id: 5,
            name: "Comprovante de Serviço",
            contract: "CT-004",
            company: "Google",
            type: "Comprovante",
            date: "20/04/2026",
            expiration: "20/04/2027",
            status: "vigente"
        }

    ];


    static init() {

        console.log("Tela Documentos carregada.");

        this.renderTable();
        this.updateStats();
        this.bindEvents();

    }


    static bindEvents() {

        const search =
            document.querySelector("#document-search");

        const typeFilter =
            document.querySelector("#document-type-filter");

        const statusFilter =
            document.querySelector("#document-status-filter");


        search?.addEventListener("input", () => {
            this.applyFilters();
        });


        typeFilter?.addEventListener("change", () => {
            this.applyFilters();
        });


        statusFilter?.addEventListener("change", () => {
            this.applyFilters();
        });

    }


    static applyFilters() {

        const search =
            document
                .querySelector("#document-search")
                ?.value
                .toLowerCase()
                .trim();


        const type =
            document
                .querySelector("#document-type-filter")
                ?.value;


        const status =
            document
                .querySelector("#document-status-filter")
                ?.value;


        const filtered =
            this.documents.filter(document => {

                const matchesSearch =
                    !search ||
                    document.name
                        .toLowerCase()
                        .includes(search) ||
                    document.contract
                        .toLowerCase()
                        .includes(search) ||
                    document.company
                        .toLowerCase()
                        .includes(search);


                const matchesType =
                    !type ||
                    document.type.toLowerCase() === type;


                const matchesStatus =
                    !status ||
                    document.status === status;


                return (
                    matchesSearch &&
                    matchesType &&
                    matchesStatus
                );

            });


        this.renderTable(filtered);

    }


    static renderTable(data = this.documents) {

        const tbody =
            document.querySelector("#documents-body");


        if (!tbody) return;


        tbody.innerHTML = data.map(document => {

            let statusText = "Vigente";
            let statusClass = "status-active";


            if (document.status === "vencendo") {
                statusText = "Vencendo";
                statusClass = "status-expiring";
            }


            if (document.status === "vencido") {
                statusText = "Vencido";
                statusClass = "status-expired";
            }


            return `

                <tr>

                    <td>

                        <div class="document-name-cell">

                            <div class="document-file-icon">
                                <i class="fa-solid fa-file-pdf"></i>
                            </div>

                            <div>
                                <strong>
                                    ${document.name}
                                </strong>

                                <span>
                                    Documento PDF
                                </span>
                            </div>

                        </div>

                    </td>


                    <td>
                        <strong>${document.contract}</strong>
                    </td>


                    <td>
                        ${document.company}
                    </td>


                    <td>
                        <span class="document-type">
                            ${document.type}
                        </span>
                    </td>


                    <td>
                        ${document.date}
                    </td>


                    <td>
                        ${document.expiration}
                    </td>


                    <td>

                        <span class="document-status ${statusClass}">
                            <span class="status-dot"></span>
                            ${statusText}
                        </span>

                    </td>


                    <td>

                        <div class="document-actions">

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
                                title="Baixar"
                            >
                                <i class="fa-solid fa-download"></i>
                            </button>

                            <button
                                type="button"
                                class="action-btn"
                                title="Mais opções"
                            >
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>

                        </div>

                    </td>

                </tr>

            `;

        }).join("");

    }


    static updateStats() {

        const total =
            this.documents.length;


        const active =
            this.documents.filter(
                document =>
                    document.status === "vigente"
            ).length;


        const expiring =
            this.documents.filter(
                document =>
                    document.status === "vencendo"
            ).length;


        const expired =
            this.documents.filter(
                document =>
                    document.status === "vencido"
            ).length;


        document.querySelector("#documents-total")
            ?.textContent = total;


        document.querySelector("#documents-active")
            ?.textContent = active;


        document.querySelector("#documents-expiring")
            ?.textContent = expiring;


        document.querySelector("#documents-expired")
            ?.textContent = expired;

    }

};