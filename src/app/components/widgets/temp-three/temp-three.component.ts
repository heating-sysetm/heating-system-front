import { DataShareService } from 'src/app/services/data-share.service';
declare var require: any;
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);
import * as Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-temp-three',
  templateUrl: './temp-three.component.html',
  styleUrls: ['./temp-three.component.scss'],
  inputs: [`wtemp_three`],
})
export class TempThreeComponent implements OnInit {
  option: any = {
    chart: {
      type: 'solidgauge',
      height: '100%',
      plotBackgroundColor: '#303030',
    },

    title: {
      text: '',
      style: {
        fontSize: '24px',
      },
    },

    tooltip: { enabled: false },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[8])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        },
      ],
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
      },
    },

    series: [
      {
        name: 'Move',
        data: [
          {
            color: Highcharts.getOptions().colors[8],
            radius: '112%',
            innerRadius: '88%',
            y: 60,
          },
        ],
      },
    ],
  };
  chart: any;
  visibleValue: number = 0;

  constructor(private dataService: DataShareService) {
  }

  ngOnInit(): void {
    this.option.chart.renderTo = 'container-three';
    this.chart = new Highcharts.Chart(this.option);
  }

  ngOnChanges(changes: SimpleChanges){ 
    if(this.chart){
        var point = this.chart.series[0].points[0];
        this.dataService.currentMytext.subscribe(
            (newVal) =>{
                this.visibleValue = newVal;
                point.update(newVal);
            } 
          );
      }
  }

}
