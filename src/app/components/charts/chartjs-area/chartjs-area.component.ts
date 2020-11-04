import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { DataShareService } from 'src/app/services/data-share.service';
@Component({
  selector: 'app-chartjs-area',
  templateUrl: './chartjs-area.component.html',
  styleUrls: ['./chartjs-area.component.scss'],
  inputs: [`changed`]
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
  

  constructor(private dataService: DataShareService) { 
       
  }

  ngOnInit(): void { 
    this.chart = new Chart('canvas', {
      type: 'line',
      data:this.data,
      options:this.options
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      this.dataService.tempDates.subscribe(data=>{
        this.data.labels=data;
        console.log(data);
        
        this.chart.update();
      });
      this.dataService.outputData.subscribe((newVal) => {
        this.data.datasets[0].data=newVal;
        this.chart.update();
      });
      this.dataService.inputData.subscribe((newVal) => {
        this.data.datasets[1].data=newVal;
        this.chart.update();
      });
      
    }
  }

}
