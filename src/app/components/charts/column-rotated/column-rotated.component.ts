import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column-rotated',
  templateUrl: './column-rotated.component.html',
  styleUrls: ['./column-rotated.component.scss']
})
export class ColumnRotatedComponent implements OnInit {

  option:any={
    chart: {
        type: 'column'
    },
    title: {
        text: 'دمای رفت'
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
            ['یکشنبه', 8.1],
            ['دوشنبه', 9.6],
            ['سه شنبه', 6.6],
            ['چهار شنبه', 7.6],
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
    Highcharts.chart('column-rotated',this.option );
  }

}
