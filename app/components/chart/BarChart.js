class BarChart{

    static render(target,data){

        const container=document.querySelector(target);

        container.innerHTML="<canvas></canvas>";

        const ctx=container.querySelector("canvas");

        new Chart(ctx,{

            type:"bar",

            data:{

                labels:data.labels,

                datasets:[{

                    data:data.values,

                    borderRadius:10,

                    backgroundColor:data.colors

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{

                        display:false

                    }

                },

                scales:{

                    x:{

                        grid:{

                            display:false

                        }

                    },

                    y:{

                        beginAtZero:true

                    }

                }

            }

        });

    }

}