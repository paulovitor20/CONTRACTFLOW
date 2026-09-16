window.ReportsPage = class ReportsPage {

    static init() {

        console.log("Tela Relatórios carregada.");

        this.bindEvents();

    }


    static bindEvents() {

        document
            .querySelector("#btn-filter-reports")
            ?.addEventListener("click", () => {

                console.log("Filtros aplicados.");

            });


        document
            .querySelectorAll(".report-card-action")
            .forEach(button => {

                button.addEventListener("click", () => {

                    console.log(
                        "Relatório selecionado."
                    );

                });

            });

    }

};