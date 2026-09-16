window.AlertsPage = class AlertsPage {

    static alerts = [

        {
            id: 1,
            title: "Contrato vencido",
            description: "O contrato CT-003 da empresa AWS está vencido.",
            type: "contrato",
            date: "Hoje, 08:42",
            status: "pendente",
            priority: "critical"
        },

        {
            id: 2,
            title: "Contrato próximo do vencimento",
            description: "O contrato CT-002 da Vivo vence em 30 dias.",
            type: "vencimento",
            date: "Hoje, 08:15",
            status: "pendente",
            priority: "warning"
        },

        {
            id: 3,
            title: "Documento pendente",
            description: "O contrato CT-005 possui documento que precisa ser atualizado.",
            type: "documento",
            date: "Ontem, 16:30",
            status: "lido",
            priority: "warning"
        },

        {
            id: 4,
            title: "Novo documento recebido",
            description: "Um novo documento foi associado ao contrato CT-001.",
            type: "documento",
            date: "Ontem, 14:20",
            status: "lido",
            priority: "info"
        },

        {
            id: 5,
            title: "Contrato renovado",
            description: "O contrato CT-007 foi renovado com sucesso.",
            type: "contrato",
            date: "15/09/2026, 11:45",
            status: "resolvido",
            priority: "success"
        }

    ];


    static init() {

        console.log("Tela Alertas carregada.");

        this.render();
        this.updateStats();
        this.bindEvents();

    }


    static bindEvents() {

        const search =
            document.querySelector("#alert-search");

        const typeFilter =
            document.querySelector("#alert-type-filter");

        const statusFilter =
            document.querySelector("#alert-status-filter");


        search?.addEventListener("input", () => {
            this.applyFilters();
        });


        typeFilter?.addEventListener("change", () => {
            this.applyFilters();
        });


        statusFilter?.addEventListener("change", () => {
            this.applyFilters();
        });


        document
            .querySelector("#btn-mark-all-read")
            ?.addEventListener("click", () => {

                this.alerts.forEach(alert => {

                    if (alert.status === "pendente") {
                        alert.status = "lido";
                    }

                });

                this.render();
                this.updateStats();

            });

    }


    static applyFilters() {

        const search =
            document
                .querySelector("#alert-search")
                ?.value
                .toLowerCase()
                .trim();


        const type =
            document
                .querySelector("#alert-type-filter")
                ?.value;


        const status =
            document
                .querySelector("#alert-status-filter")
                ?.value;


        const filtered =
            this.alerts.filter(alert => {

                const matchesSearch =
                    !search ||
                    alert.title
                        .toLowerCase()
                        .includes(search) ||
                    alert.description
                        .toLowerCase()
                        .includes(search);


                const matchesType =
                    !type ||
                    alert.type === type;


                const matchesStatus =
                    !status ||
                    alert.status === status;


                return (
                    matchesSearch &&
                    matchesType &&
                    matchesStatus
                );

            });


        this.render(filtered);

    }


    static render(data = this.alerts) {

        const container =
            document.querySelector("#alerts-list");


        if (!container) return;


        if (!data.length) {

            container.innerHTML = `
                <div class="alerts-empty">

                    <i class="fa-regular fa-bell-slash"></i>

                    <strong>
                        Nenhum alerta encontrado
                    </strong>

                    <span>
                        Não existem alertas para os filtros selecionados.
                    </span>

                </div>
            `;

            return;

        }


        container.innerHTML =
            data.map(alert => {

                const icon =
                    this.getIcon(alert.priority);


                const typeLabel =
                    this.getTypeLabel(alert.type);


                const statusLabel =
                    this.getStatusLabel(alert.status);


                return `

                    <div
                        class="alert-item ${alert.status === "pendente" ? "unread" : ""}"
                    >

                        <div class="alert-icon ${alert.priority}">
                            <i class="${icon}"></i>
                        </div>


                        <div class="alert-content">

                            <div class="alert-title-row">

                                <strong>
                                    ${alert.title}
                                </strong>

                                ${
                                    alert.status === "pendente"
                                        ? `<span class="alert-new">Novo</span>`
                                        : ""
                                }

                            </div>


                            <p>
                                ${alert.description}
                            </p>


                            <div class="alert-meta">

                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                    ${alert.date}
                                </span>

                                <span>
                                    <i class="fa-solid fa-tag"></i>
                                    ${typeLabel}
                                </span>

                            </div>

                        </div>


                        <div class="alert-side">

                            <span class="alert-status ${alert.status}">
                                ${statusLabel}
                            </span>


                            <button
                                type="button"
                                class="action-btn"
                                title="Visualizar"
                            >
                                <i class="fa-solid fa-eye"></i>
                            </button>

                        </div>

                    </div>

                `;

            }).join("");

    }


    static updateStats() {

        const critical =
            this.alerts.filter(
                alert =>
                    alert.priority === "critical" &&
                    alert.status !== "resolvido"
            ).length;


        const expiring =
            this.alerts.filter(
                alert =>
                    alert.priority === "warning" &&
                    alert.status !== "resolvido"
            ).length;


        const unread =
            this.alerts.filter(
                alert =>
                    alert.status === "pendente"
            ).length;


        const resolved =
            this.alerts.filter(
                alert =>
                    alert.status === "resolvido"
            ).length;


        const criticalElement =
            document.querySelector("#alerts-critical");

        const expiringElement =
            document.querySelector("#alerts-expiring");

        const unreadElement =
            document.querySelector("#alerts-unread");

        const resolvedElement =
            document.querySelector("#alerts-resolved");


        if (criticalElement)
            criticalElement.textContent = critical;


        if (expiringElement)
            expiringElement.textContent = expiring;


        if (unreadElement)
            unreadElement.textContent = unread;


        if (resolvedElement)
            resolvedElement.textContent = resolved;

    }


    static getIcon(priority) {

        const icons = {

            critical:
                "fa-solid fa-triangle-exclamation",

            warning:
                "fa-solid fa-clock",

            info:
                "fa-solid fa-file",

            success:
                "fa-solid fa-check"

        };


        return icons[priority] ||
            "fa-solid fa-bell";

    }


    static getTypeLabel(type) {

        const labels = {

            vencimento: "Vencimento",

            documento: "Documento",

            contrato: "Contrato",

            sistema: "Sistema"

        };


        return labels[type] || type;

    }


    static getStatusLabel(status) {

        const labels = {

            pendente: "Pendente",

            lido: "Lido",

            resolvido: "Resolvido"

        };


        return labels[status] || status;

    }

};