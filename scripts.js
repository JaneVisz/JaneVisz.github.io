let myChart = document.getElementById('myChart').getContext('2d');

let massChart = new Chart(myChart, {
  type: 'doughnut', // bar, horizontalBar, pie, doughnut, radar, polarArea
  data: {
    labels: ['Working', 'Friends/Family', 'Sport/Relaxing', 'Self-development'],
    datasets: [{
      label: 'My time',
      data: [
        25,
        25,
        25,
        25
      ],
      // backgroundColor: 'green'
      backgroundColor: [
        'black',
        '#7D7E75',
        'white',
        '#BEA8A7'
        

      ],
      fontColor: 'black',
      borderWidth: 0.5,
      borderColor: 'transparent',
      // borderColor: 'black',
      hoverBorderWidth: 4,
      hoverBorderColor: 'black',
    }]
  },

  options: {
    plugins: {
      legend: {
        labels: {
          color: 'black',
          // This more specific font property overrides the global property
          font: {
            size: 16,
            family: 'Catamaran',
            color: 'black'

          }
        }
      }
    }
  }


});



