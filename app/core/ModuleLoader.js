class ModuleLoader {

    static loaded = new Set();


    static async load(scriptPaths) {

        /*
         * Permite carregar:
         *
         * "arquivo.js"
         *
         * ou vários:
         *
         * [
         *     "arquivo1.js",
         *     "arquivo2.js"
         * ]
         */

        if (!Array.isArray(scriptPaths)) {

            scriptPaths = [scriptPaths];

        }


        for (const scriptPath of scriptPaths) {

            await this.loadScript(scriptPath);

        }

    }


    static async loadScript(scriptPath) {

        /*
         * Evita carregar o mesmo arquivo
         * mais de uma vez.
         */

        if (this.loaded.has(scriptPath)) {

            return;

        }


        return new Promise((resolve, reject) => {

            const script =
                document.createElement("script");


            script.src = scriptPath;


            script.onload = () => {

                this.loaded.add(scriptPath);

                resolve();

            };


            script.onerror = () => {

                console.error(
                    "Erro ao carregar módulo:",
                    scriptPath
                );

                reject(
                    new Error(
                        `Não foi possível carregar ${scriptPath}`
                    )
                );

            };


            document.body.appendChild(script);

        });

    }

}