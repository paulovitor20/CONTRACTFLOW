class Sidebar {

    static async render() {

        await Loader.load(
            "#sidebar",
            "app/layouts/sidebar.html"
        );

        document.querySelectorAll("[data-route]").forEach(item => {

            item.addEventListener("click", (e) => {

                e.preventDefault();

                Router.go(item.dataset.route);

            });

        });

    }

}