class ModuleLoader {

    static loaded = new Set();

    static async load(scriptPath) {

        if (this.loaded.has(scriptPath)) {
            return;
        }

        return new Promise((resolve, reject) => {

            const script = document.createElement("script");

            script.src = scriptPath;

            script.onload = () => {

                this.loaded.add(scriptPath);

                resolve();

            };

            script.onerror = reject;

            document.body.appendChild(script);

        });

    }

}