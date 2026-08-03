class PageRegistry {

    static pages = {

        dashboard: DashboardPage

    };

    static init(page) {

        if (!this.pages[page]) return;

        this.pages[page].init();

    }

}