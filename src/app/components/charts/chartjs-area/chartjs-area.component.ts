import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chartjs-area',
  templateUrl: './chartjs-area.component.html',
  styleUrls: ['./chartjs-area.component.scss']
})
export class ChartjsAreaComponent implements OnInit { 
  @ViewChild('myCanvas') canvas: ElementRef;
  chart :any;
  gradient:any;
  data:any= {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
    datasets: [{
      label: 'دمای رفت',
      backgroundColor: '#f66f200f',
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#f26c05',
      data: [50, 55, 30, 41, 54, 50]
    },{
      label: 'دمای برگشت',
      backgroundColor: '#00d4f61a',
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#00d4f6',
      data: [20, 45, 70, 10, 14, 36]
    }],
  };
  options:any = {
    
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(237, 255, 255, 0.1)',
          lineWidth: 1
        },ticks: {
          fontColor: 'white', // labels such as 10, 20, etc
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0.08)',
          lineWidth: 1
        },
        ticks: {
          fontColor: 'white', // labels such as 10, 20, etc
        },
      }]
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: 'white'
      }
    },
    point: {
      backgroundColor: 'white'
    },
    tooltips: {
      titleFontFamily: 'Open Sans',
      backgroundColor: 'rgba(0,0,0,0.3)',
      titleFontColor: 'red',
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10
    }
  };
  

  constructor(private _http: HttpClient) { 
       
  }

  ngOnInit(): void { 
    this.chart = new Chart('canvas', {
      type: 'line',
      data:this.data,
      options:this.options
    });
    setTimeout(() => {
      this.data.datasets[0].data=[80, 45, 70, 10, 14, 36];
      this.chart.update();
    }, 2000);
    // setInterval(function () {
    //   var x = new Date().getTime(), // current time
    //     y = Math.random();
    //     this.data.datasets[0].data;
        
    //   series.addPoint([x, y], true, true);
    // }, 1000);
    
  }






  dailyForecast() {
    return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22");
  }

}
