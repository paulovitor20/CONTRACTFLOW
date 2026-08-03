window.DashboardPage = class DashboardPage {

    static init() {

        console.log("Dashboard carregado.");

        StatCard.render({

            target: "#card-total",

            color: "#4F46E5",

            icon: "fa-solid fa-file-contract",

            title: "Total de Contratos",

            value: "243",

            description: "100% do total"

        });

        StatCard.render({

            target: "#card-active",

            color: "#22C55E",

            icon: "fa-solid fa-circle-check",

            title: "Ativos",

            value: "192",

            description: "79% do total"

        });

        StatCard.render({

            target: "#card-expiring",

            color: "#F59E0B",

            icon: "fa-regular fa-clock",

            title: "Vencendo (30 dias)",

            value: "28",

            description: "12% do total"

        });

        StatCard.render({

            target: "#card-expired",

            color: "#EF4444",

            icon: "fa-solid fa-triangle-exclamation",

            title: "Vencidos",

            value: "23",

            description: "9% do total"

        });

        StatCard.render({

            target: "#card-value",

            color: "#3B82F6",

            icon: "fa-solid fa-dollar-sign",

            title: "Valor Total",

            value: "R$ 8.742.450",

            description: "Contratos ativos"

        });


        DonutChart.render("#contracts-chart", {

            labels: [

                "Fornecedores",

                "Clientes",

                "Prestação",

                "Aluguel",

                "Seguros"

            ],

            values: [

                68,

                49,

                44,

                36,

                24

            ],

            colors: [

                "#4F46E5",

                "#60A5FA",

                "#F59E0B",

                "#14B8A6",

                "#EF4444"

            ]

        });
        BarChart.render(

            "#status-chart",

            {

                labels: [

                    "Ativos",

                    "Vencendo",

                    "Vencidos",

                    "Encerrados"

                ],

                values: [

                    192,

                    28,

                    23,

                    15

                ],

                colors: [

                    "#22C55E",

                    "#F59E0B",

                    "#EF4444",

                    "#9CA3AF"

                ]

            }

        );
        ContractList.render(

            "#next-contracts",

            [

                {

                    logo: "B",

                    company: "Bridgestone",

                    type: "Fornecedor",

                    date: "15/06/2026",

                    days: "7 dias"

                },

                {

                    logo: "V",

                    company: "Vivo",

                    type: "Telefonia",

                    date: "18/06/2026",

                    days: "10 dias"

                },

                {

                    logo: "S",

                    company: "Porto Seguro",

                    type: "Seguro",

                    date: "23/06/2026",

                    days: "15 dias"

                },

                {

                    logo: "L",

                    company: "Localiza",

                    type: "Aluguel",

                    date: "28/06/2026",

                    days: "20 dias"

                },

                {

                    logo: "AWS",

                    company: "Amazon Web Services",

                    type: "Cloud",

                    date: "02/07/2026",

                    days: "30 dias"

                }

            ]

        );

    }

}