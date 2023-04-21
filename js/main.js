//Fetch de data from data.json
fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        createChart(data)
    });
//Create the function to desplay the cart. 
function createChart(data) {

    //Extract the values from data.json
    const labels = data.map((day) => {
        return day.day
    })
    const values = data.map((amount) => {
        return amount.amount
    })
    
    //Get the reference to the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    //Create new chart using Chart.js
    const myChart =   new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels, //Use the labels array
            datasets: [{
              borderRadius: 6,
              data: values, //Use the values array
              borderWidth: 1,
              backgroundColor: "hsl(10, 79%, 65%)",
              hoverBackgroundColor: "hsl(186, 34%, 60%)"
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.data[context.dataIndex];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}

