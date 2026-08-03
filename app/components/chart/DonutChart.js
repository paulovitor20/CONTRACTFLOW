class DonutChart {

    static render(target, data) {

        const container = document.querySelector(target);

        container.innerHTML = `
            <canvas></canvas>
        `;

        const canvas = container.querySelector("canvas");

        new Chart(canvas, {

            type: "doughnut",

            data: {

                labels: data.labels,

                datasets: [

                    {

                        data: data.values,

                        backgroundColor: data.colors,

                        borderWidth: 0

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "68%",

                plugins: {

                    legend: {

                        position: "right",

                        labels: {

                            boxWidth: 14,

                            usePointStyle: true,

                            pointStyle: "circle",

                            padding: 18

                        }

                    }

                }

            }

        });

    }

}