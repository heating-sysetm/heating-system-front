import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
@Component({
  selector: 'app-solid-gauge-three',
  templateUrl: './solid-gauge-three.component.html',
  styleUrls: ['./solid-gauge-three.component.scss']
})
export class SolidGaugeThreeComponent implements OnInit {
  option:any={
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'دمای مخزن'
        }
    },
  
    credits: {
        enabled: false
    },
  
    series: [{
        name: 'temp3',
        data: [80],
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span class="temp" style="color: var(--foreground-white);font-size:25px">{y}</span><br/>' +
                '<span class="temp-desc" style="color: var(--foreground-white);font-size:12px;opacity:0.4">سانتی گراد</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' سانتی گراد'
        }
    }]
  
  }
  chartSpeed:any;
  public gaugeOptions:any = {
      chart: {
          type: 'solidgauge'
      },
  
      title: null,
  
      pane: {
          center: ['50%', '85%'],
          size: '100%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor:
                  Highcharts.defaultOptions.legend.backgroundColor || '#fcc',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },
  
      exporting: {
          enabled: false
      },
  
      tooltip: {
          enabled: false
      },
  
      // the value axis
      yAxis: {
          stops: [
              [0.1, '#22e0d1'], // blue
              [0.5, '#ff9900'], // yellow
              [0.9, '#d14200'] // red
          ],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70
          },
          labels: {
              y: 16
          }
      },
  
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      }
  };
  constructor() { }
  
  ngOnInit(): void {
      ChartModuleMore.Highcharts;
      HCSoldGauge(Highcharts);
      this.chartSpeed = Highcharts.chart('container-temp-makhzan', Highcharts.merge(this.gaugeOptions, this.option));
  
    this.setInterval();
  }
  // The speed gauge
  
  
  // Bring life to the dials
  setInterval() {
      // Speed
      var point,
          newVal,
          inc;
  
      if (this.chartSpeed) {
          point = this.chartSpeed.series[0].points[0];
          inc = Math.round((Math.random() - 0.5) * 100);
          newVal = point.y + inc;
  
          if (newVal < 0 || newVal > 100) {
              newVal = point.y - inc;
          }
  
          point.update(newVal);
      }
  }
  
  
  
  }
  
