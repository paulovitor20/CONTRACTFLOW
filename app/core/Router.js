class Router {

    static routes = {

        dashboard: {

            html: "app/pages/dashboard/dashboard.html",

            js: "app/pages/dashboard/dashboard.js",

            className: "DashboardPage"

        },

        contracts: {

            html: "app/pages/contracts/list.html",

            js: [
                "app/components/Table/table.js",
                "app/components/Dropdown/dropdown.js",
                "app/components/Modal/modal.js",
                "app/pages/contracts/list.js"
            ],

            className: "ContractsPage"

        },

        companies: {

            html: "app/pages/companies/list.html",

            js: "app/pages/companies/list.js",

            className: "CompaniesPage"
        },

        documents: {
            html: "app/pages/documents/list.html",
            js: "app/pages/documents/list.js",
            className: "DocumentsPage"
        },

        alerts: {
            html: "app/pages/alerts/list.html",
            js: "app/pages/alerts/list.js",
            className: "AlertsPage"
        },
        reports: {
            html: "app/pages/reports/list.html",
            js: "app/pages/reports/list.js",
            className: "ReportsPage"
        },

    };


    static async go(route) {

        const current =
            this.routes[route];


        if (!current) {

            console.error(
                "Rota não encontrada:",
                route
            );

            return;

        }


        await Loader.load(

            "#page-content",

            current.html

        );


        await ModuleLoader.load(

            current.js

        );


        const page =
            window[current.className];


        if (
            page &&
            typeof page.init === "function"
        ) {

            page.init();

        }

    }

}