const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data:
     {
        labels: [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6],
        datasets: [{
            axis: 'x',
            label: 'Instagram',
            data: [30, 39, 30, 50, 41, 35,37,45,29,48,40,60,30,35,40],
            backgroundColor: '#DAD7FE',
            borderRadius: 30,
            barThickness: 15,
            minBarLength: 2,
            hoverBackgroundColor: '#4339F2',
            
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
              display: true,
              text: 'Text'
            }
          },
        scales: {
            
            x:{
                
                ticks: false
            },
            y:{
                 
                min: 10,
                max: 80,
                
            },
        },
        indexAxis: 'x',
    }
    
});




const tx = document.getElementById('chart').getContext('2d');
const chart = new Chart(tx, {
    type: 'bar',
    data:
	 {
        labels: [1,2,3,4,5],
        datasets: [{
            axis: 'y',
            label: 'view',
            data: [32, 19, 30, 25, 35],
            backgroundColor: '#FF3A29',
			borderRadius: 30,
			hoverBackgroundColor: 'red',
			barThickness: 15
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
              display: true,
              text: 'Title'
            }
          },
        scales: {
            x: {
                min: 10,
                max: 80    
            },
            y: {
                 
                ticks: false  
            },

        },
        indexAxis: 'y',
    
    }
        
    
});