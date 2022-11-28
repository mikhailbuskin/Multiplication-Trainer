<script>
import { onMount } from 'svelte';
let results = [
    {"date":"2022-11-26T03:04:34.516Z","timespend":10,"score":0.4},
    {"date":"2022-11-27T03:09:27.787Z","timespend":4,"score":0.8},
    {"date":"2022-11-28T03:13:49.049Z","timespend":11,"score":0.9}
];

onMount(async () => {
    const ctx = document.getElementById('myChart');
    alert(ctx);
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
})

</script>
<div id="myChart"></div>