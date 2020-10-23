declare var require: any;
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require("highcharts/highcharts-more.src");
HighchartsMore(Highcharts);
const HC_solid_gauge = require("highcharts/modules/solid-gauge.src");
HC_solid_gauge(Highcharts);
import * as Exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-gauge-temp',
  templateUrl: './gauge-temp.component.html',
  styleUrls: ['./gauge-temp.component.scss']
})
export class GaugeTempComponent implements OnInit {

  option:any={
    chart: {
        type: 'solidgauge',
        height: '110%',
        plotBackgroundColor: '#303030',

    },

    title: {
        text: '',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
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
            color: Highcharts.getOptions().colors[0],
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
    this.option.chart.renderTo = 'gauge-container';
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
