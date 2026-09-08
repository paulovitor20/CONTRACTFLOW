class UITable {

    static render({

        target,

        columns,

        data,

        rowRenderer

    }) {

        const container =
            document.querySelector(target);


        if (!container) {

            console.error(
                "UITable: elemento não encontrado:",
                target
            );

            return;

        }


        container.innerHTML = `

            <div class="ui-table-wrapper">

                <table class="ui-table">

                    <thead>

                        <tr>

                            ${columns.map(column => `

                                <th
                                    style="
                                        width:${column.width || "auto"}
                                    "
                                >

                                    ${column.label}

                                </th>

                            `).join("")}

                        </tr>

                    </thead>


                    <tbody>

                        ${data.map(row =>

                            rowRenderer(row)

                        ).join("")}

                    </tbody>

                </table>

            </div>

        `;

    }

}