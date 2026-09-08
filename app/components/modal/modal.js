class UIModal {

    static element = null;


    static init() {

        this.element =
            document.querySelector("#ui-modal");


        if (!this.element) {

            this.create();

        }


        this.element =
            document.querySelector("#ui-modal");


        this.bindEvents();

    }


    static create() {

        const container =
            document.querySelector("#modal-container");


        if (!container) {

            console.error(
                "UIModal: #modal-container não encontrado."
            );

            return;

        }


        container.innerHTML = `

            <div
                id="ui-modal"
                class="ui-modal"
                aria-hidden="true"
            >

                <div class="ui-modal-overlay"></div>


                <div
                    class="ui-modal-container"
                    role="dialog"
                    aria-modal="true"
                >

                    <header class="ui-modal-header">

                        <div>

                            <h2
                                id="ui-modal-title"
                                class="ui-modal-title"
                            >
                                Modal
                            </h2>


                            <p
                                id="ui-modal-subtitle"
                                class="ui-modal-subtitle"
                            ></p>

                        </div>


                        <button
                            type="button"
                            class="ui-modal-close"
                            id="ui-modal-close"
                            aria-label="Fechar"
                        >

                            <i class="fa-solid fa-xmark"></i>

                        </button>

                    </header>


                    <div
                        id="ui-modal-body"
                        class="ui-modal-body"
                    ></div>


                    <footer
                        id="ui-modal-footer"
                        class="ui-modal-footer"
                    ></footer>

                </div>

            </div>

        `;

    }


    static bindEvents() {

        const closeButton =
            document.querySelector(
                "#ui-modal-close"
            );


        const overlay =
            document.querySelector(
                ".ui-modal-overlay"
            );


        closeButton?.addEventListener(
            "click",
            () => this.close()
        );


        overlay?.addEventListener(
            "click",
            () => this.close()
        );


        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    this.isOpen()
                ) {

                    this.close();

                }

            }
        );

    }


    static open({

        title = "Modal",

        subtitle = "",

        content = "",

        footer = ""

    } = {}) {

        if (!this.element) {

            this.init();

        }


        if (!this.element) return;


        document.querySelector(
            "#ui-modal-title"
        ).textContent = title;


        document.querySelector(
            "#ui-modal-subtitle"
        ).textContent = subtitle;


        document.querySelector(
            "#ui-modal-body"
        ).innerHTML = content;


        document.querySelector(
            "#ui-modal-footer"
        ).innerHTML = footer;


        this.element.classList.add(
            "open"
        );


        this.element.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );

    }


    static close() {

        if (!this.element) return;


        this.element.classList.remove(
            "open"
        );


        this.element.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    static isOpen() {

        return this.element?.classList.contains(
            "open"
        ) || false;

    }

}


UIModal.init();