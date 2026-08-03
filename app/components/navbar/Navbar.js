class Navbar {

    static async render() {

        await Loader.load(

            "#navbar",

            "app/layouts/navbar.html"

        );

    }

}