class StatCard {

    static render({

        target,
        color,
        icon,
        title,
        value,
        description

    }){

        document.querySelector(target).innerHTML=`

            <article class="fx-stat-card">

                <div class="stat-top">

                    <div
                        class="stat-icon"
                        style="
                            background:${color}20;
                            color:${color};
                        ">

                        <i class="${icon}"></i>

                    </div>

                </div>

                <div class="stat-title">

                    ${title}

                </div>

                <div class="stat-value">

                    ${value}

                </div>

                <div class="stat-description">

                    ${description}

                </div>

            </article>

        `;

    }

}