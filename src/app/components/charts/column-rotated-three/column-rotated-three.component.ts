import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column-rotated-three',
  templateUrl: './column-rotated-three.component.html',
  styleUrls: ['./column-rotated-three.component.scss']
})
export class ColumnRotatedThreeComponent implements OnInit {


  option:any={
    chart: {
        type: 'column'
    },
    title: {
        text: 'دمای مخزن آب بهداشتی'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        },
        
    },
    yAxis: {
        min: 0,
        title: {
          text: 'دما (°C)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            
            ['شنبه', 11.2],
            ['یکشنبه', 11.1],
            ['دوشنبه', 10.6],
            ['سه شنبه', 10.6],
            ['چهار شنبه', 10.6],
            ['پنج شنبه', 10.3],
            ['جمعه', 9.8],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
}
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('column-rotated-three',this.option );
  }

}
