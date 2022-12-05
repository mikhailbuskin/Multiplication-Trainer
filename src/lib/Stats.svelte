<script>
    import { onMount } from 'svelte';
    //import { Chart } from 'chart.js'
    import Chart from 'chart.js/auto';
    
    onMount(async () => {
        const div = document.getElementById('myChart');
        let misha = "2022-11-27T21:02:18.912Z"
        let sasha = "2022-11-28T23:26:18.672Z"
        let results = await fetch("https://buskin.maintstar.co/mult-table/load.php", {method:"POST", body: JSON.stringify({ user: localStorage["user"] })});
        let resultsJson = await results.json();

        const data = {
            labels: resultsJson.map((r,i) => (i+1)),
            datasets: [
                {
                    label: 'Time',
                    //data: [65, 59, 80, 81, 56, 55, 40],
                    data: resultsJson.map(r => r.timespend),
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                },
                {
                    label: 'Accuracy',
                    //data: [65, 59, 80, 81, 56, 55, 40],
                    data: resultsJson.map(r => (r.score)),
                    fill: false,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1,
                    yAxisID: "percentage"
                }
            ]
        };

        let chart = new Chart(div, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Attempt #"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        position: "left",
                        title: {
                            display: true,
                            text: "Time in seconds"
                        }
                    },
                    percentage: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "Accuracy in decimals"
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    })
    
    </script>
    <canvas id="myChart"/>