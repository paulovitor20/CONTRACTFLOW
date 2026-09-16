class SettingsPage {

    static init() {

        this.bindMenu();

    }


    static bindMenu() {

        const buttons =
            document.querySelectorAll(".settings-menu-item");

        const sections =
            document.querySelectorAll(".settings-section");


        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const section =
                    button.dataset.section;


                buttons.forEach(item => {
                    item.classList.remove("active");
                });


                sections.forEach(item => {
                    item.classList.remove("active");
                });


                button.classList.add("active");


                const target =
                    document.querySelector(
                        `#settings-${section}`
                    );


                if (target) {
                    target.classList.add("active");
                }

            });

        });

    }

}


window.SettingsPage = SettingsPage;