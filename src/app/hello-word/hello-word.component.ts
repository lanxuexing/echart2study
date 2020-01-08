import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.scss']
})
export class HelloWordComponent implements OnInit {
  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
