declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require("highcharts/highcharts-more.src");
HighchartsMore(Highcharts);
const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
HC_solid_gauge(Highcharts);
import * as Exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-temp-three',
  templateUrl: './temp-three.component.html',
  styleUrls: ['./temp-three.component.scss']
})
export class TempThreeComponent implements OnInit {

  option:any={
    chart: {
        type: 'solidgauge',
        height: '100%',
        plotBackgroundColor: '#303030',

    },

    title: {
        text: '',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {enabled: false
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[8])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[8],
            radius: '112%',
            innerRadius: '88%',
            y: 60
        }]
    }]
    

}
chart:any;
    // HighchartsMore.import ;(Highcharts);
    // HighchartsSolidGauge(Highcharts);
  constructor() { 
    // HighchartsMore.Highcharts;
    // HighchartsSolidGauge.factory(Highcharts);
  }

  ngOnInit(): void {
    this.option.chart.renderTo = 'container-three';
    this.chart = new Highcharts.Chart(this.option)
    // Highcharts.chart('container',this.option);
  }
// Add some life
// function (chart) {
//     if (!chart.renderer.forExport) {
//         setInterval(function () {
//             var point = chart.series[0].points[0],
//                 newVal,
//                 inc = Math.round((Math.random() - 0.5) * 20);

//             newVal = point.y + inc;
//             if (newVal < 0 || newVal > 200) {
//                 newVal = point.y - inc;
//             }

//             point.update(newVal);

//         }, 3000);
//     }
// });
}
