class Panel{

    static render(target,title){

        document.querySelector(target).innerHTML=`

            <section class="fx-panel">

                <div class="fx-panel-header">

                    <div class="fx-panel-title">

                        ${title}

                    </div>

                </div>

                <div class="fx-panel-body">

                </div>

            </section>

        `;

    }

}