class Loader {

    static async load(target, file) {

        const response = await fetch(file);

        const html = await response.text();

        document.querySelector(target).innerHTML = html;

    }

}