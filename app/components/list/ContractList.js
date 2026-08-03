class ContractList{

    static render(target,data){

        const container=document.querySelector(target);

        let html='<div class="fx-list">';

        data.forEach(item=>{

            html+=`

            <div class="fx-list-item">

                <div class="fx-company">

                    <div class="fx-company-logo">

                        ${item.logo}

                    </div>

                    <div class="fx-company-info">

                        <strong>

                            ${item.company}

                        </strong>

                        <small>

                            ${item.type}

                        </small>

                    </div>

                </div>

                <div class="fx-contract-date">

                    <strong>

                        ${item.date}

                    </strong>

                    <small>

                        ${item.days}

                    </small>

                </div>

            </div>

            `;

        });

        html+="</div>";

        container.innerHTML=html;

    }

}