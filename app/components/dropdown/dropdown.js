class UIDropdown {

    static closeAll() {

        document
            .querySelectorAll(".ui-dropdown.open")
            .forEach(dropdown => {

                dropdown.classList.remove("open");

            });

    }


    static toggle(button) {

        const dropdown =
            button.closest(".ui-dropdown");

        if (!dropdown) return;


        const isOpen =
            dropdown.classList.contains("open");


        this.closeAll();


        if (!isOpen) {

            dropdown.classList.add("open");

        }

    }


    static init() {

        document.addEventListener("click", (event) => {

            const button =
                event.target.closest(
                    ".ui-dropdown-toggle"
                );


            if (button) {

                event.stopPropagation();

                this.toggle(button);

                return;

            }


            if (
                !event.target.closest(
                    ".ui-dropdown"
                )
            ) {

                this.closeAll();

            }

        });

    }

}


UIDropdown.init();