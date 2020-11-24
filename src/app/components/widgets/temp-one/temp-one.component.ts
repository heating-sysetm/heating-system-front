import { DataShareService } from './../../../services/data-share.service';
import { Observable } from 'rxjs';
declare var require: any;
import { Component, OnInit, SimpleChanges, Inject, Input } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
const HighchartsMore = require('highcharts/highcharts-more.src');
HighchartsMore(Highcharts);
const HC_solid_gauge = require('highcharts/modules/solid-gauge.src');
HC_solid_gauge(Highcharts);
import * as Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-temp-one',
  templateUrl: './temp-one.component.html',
  styleUrls: ['./temp-one.component.scss'],
  inputs: [`changed`,`data`],
})
export class TempOneComponent implements OnInit {
  visibleValue = 0;

  chart: any;
  value=10;
  data:any;
  option: any ;
  constructor(
    private dataService: DataShareService
  ) {}

@Input('data')
public set items(items:any) 
{
  // YOU CAN MODIFY THE ITEMS HERE
  // BEFORE ASSIGNING TO _items
// console.log(items);

  this.data = items;
  this.option={
    chart: {
      type: 'solidgauge',
      height: '100%',
    },

    title: {
      text: '',
      style: {
        fontSize: '24px',
      },
    },

    tooltip: {
      enabled: false,
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[this.data.color])
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
            color: Highcharts.getOptions().colors[this.data.color],
            radius: '112%',
            innerRadius: '88%',
            y: 60,
          },
        ],
      },
    ],
  };
}

  ngOnInit(): void {
    console.log(this.data.id);
    setTimeout(() => {
      if (this.data) {
        this.option.chart.renderTo = String(this.data.id);
        this.chart = new Highcharts.Chart(this.option);
      }
    }, 50);

    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      var point = this.chart.series[0].points[0];
      this.dataService.boyler_1.subscribe((newVal) => {
        this.visibleValue = newVal;
        point.update(newVal);
      });
    }
  }

  changePowerStatus() {
    if (this.data.power) {
      this.data.power = !this.data.power;
    } else {
      this.data.power = !this.data.power;
    }
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '°';
    }
    this.value=value;
    return value;
  }



}


