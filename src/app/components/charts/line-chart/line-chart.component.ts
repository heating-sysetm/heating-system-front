import { DataShareService } from 'src/app/services/data-share.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  inputs: [`gaz_data`],
})
export class LineChartComponent implements OnInit {
  options: any = {
    chart: {
      type: 'spline',
      animation: true, // don't animate in old IE
      marginRight: 10,
    },

    time: {
      useUTC: false,
    },

    title: {
      text: 'کربن منواکسید',
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: 'مقدار',
        visiblity: false,
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
    },

    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
    },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  };
  chart: any;
  constructor(private dataService: DataShareService) {}

  ngOnInit(): void {
    this.chart = Highcharts.chart('container-line', this.options);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart) {
      var series = this.chart.series[0];
      this.dataService.currentMytext.subscribe((newVal) => {
        var x = new Date().getTime(); // current time
        series.addPoint([x, newVal], true, true);
      });
    }
  }
}
