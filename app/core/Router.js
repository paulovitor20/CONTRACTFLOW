class Router {
    static routes = {
        dashboard: {
            html: "app/pages/dashboard/dashboard.html",
            js: "app/pages/dashboard/dashboard.js",
            className: "DashboardPage"
        },
        contracts: {
            html: "app/pages/contracts/list.html",
            js: "app/pages/contracts/list.js",
            className: "ContractsPage"
        },
        companies: {
            html: "app/pages/companies/list.html",
            js: "app/pages/companies/list.js",
            className: "CompaniesPage"
        },
    };
    static async go(route) {
        const current = this.routes[route];
        if (!current) return;
        await Loader.load(
            "#page-content",
            current.html
        );
        await ModuleLoader.load(
            current.js
        );
        const page = window[current.className];
        if (page && typeof page.init === "function") {
            page.init();
        }
    }
}