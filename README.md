# Echart2study

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## API

- 1. 指令
echarts指令支持以下输入属性：

输入项 | 类型 | 默认 | 描述
---|---|---|---
[options]               | object    | null      | 同官方Echart文档中的选项相同。
[merge]                 | object    | null      | 您可以使用它来更新的部分options内容，当您需要更新图表数据时特别有用。实际上，的值merge将echartsInstance.setOption()与一起使用notMerge = false。因此，您可以参考[ECharts文档](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.setOption)以获取详细信息。
[loading]               | boolean   | false     | 当您的数据尚未准备好时，使用它来切换echarts加载动画。
[autoResize]            | boolean   | true      | 更改容器宽度时，图表将自动调整大小。
[initOpts]              | object    | null      | 属性的值将用于echarts.init()。它可能包含devicePixelRatio，renderer，width或height性质。有关详细信息，请参阅[ECharts文档](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.init)。
[theme]                 | string    | null      | 用它来初始化带有主题的echarts。您需要在中导入主题文件main.ts。
[loadingOpts]           | object    | [如下](loadingOpts属性默认值)       | 输入一个对象以自定义加载样式。有关详细信息，请参阅[ECharts文档](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.showLoading)。
[detectEventChanges]    | boolean   | true      | 是否在echartInstance上注册鼠标事件处理程序。使用它来避免不必要的更改检测。

- loadingOpts属性默认值

```javascript
{
  text: 'loading',
  color: '#c23531',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0
}
```


- 2. Echart API

如果您需要echarts API（例如）echarts.graphic，请从echarts导入。例如：

```typescript
/** 导入所有 */
import * as echarts from 'echarts/lib/echarts';

new echarts.graphic.LinearGradient(/** ... */);

/** 或者你也可以这样 */
import { graphic } from 'echarts/lib/echarts';

new graphic.LinearGradient(/** ... */);
```


- 3. Echart Instance

echartsInstance实例可以从`(chartInit) `事件函数中直接获取，通过实例调用Echart中的方法很简单。

- html中：
```html
<div echarts class="demo-chart" [options]="chartOptions" (chartInit)="onChartInit($event)"></div>
```

- component中：
```html
onChartInit(ec) {
  this.echartsIntance = ec;
}

resizeChart() {
  if (this.echartsIntance) {
    this.echartsIntance.resize();
  }
}
```


- 4. ECharts Extensions

在main.ts中导入echarts主题文件或其他扩展文件。例如：

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** echarts 扩展 */
import 'echarts-gl';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```


- 5. Events

作为echarts支持`'click'`, `'dblclick'`, `'mousedown'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'`鼠标事件，ngx-echarts指令也支持相同的鼠标事件，但需要额外的`chart`前缀。

- html中：

```html
<div echarts class="demo-chart" [options]="chartOptions" (chartClick)="onChartClick($event)"></div>
```

- `'$event'`与`Echarts`派发的`'params'`相同。

支持的事件有：

| @Output | Event |
| ------- | ----- |
| chartInit | Emitted when chart is intialized |
| chartClick | echarts event: `'click'` |
| chartDblClick | echarts event: `'dblclick'` |
| chartMouseDown | echarts event: `'mousedown'` |
| chartMouseMove | echarts event: `'mousemove'` |
| chartMouseUp | echarts event: `'mouseup'` |
| chartMouseOver | echarts event: `'mouseover'` |
| chartMouseOut | echarts event: `'mouseout'` |
| chartGlobalOut | echarts event: `'globalout'` |
| chartContextMenu | echarts event: `'contextmenu'` |
| chartLegendSelectChanged | echarts event: `'legendselectchanged'` |
| chartLegendSelected | echarts event: `'legendselected'` |
| chartLegendUnselected | echarts event: `'legendunselected'` |
| chartLegendScroll | echarts event: `'legendscroll'` |
| chartDataZoom | echarts event: `'datazoom'` |
| chartDataRangeSelected | echarts event: `'datarangeselected'` |
| chartTimelineChanged | echarts event: `'timelinechanged'` |
| chartTimelinePlayChanged | echarts event: `'timelineplaychanged'` |
| chartRestore | echarts event: `'restore'` |
| chartDataViewChanged | echarts event: `'dataviewchanged'` |
| chartMagicTypeChanged | echarts event: `'magictypechanged'` |
| chartPieSelectChanged | echarts event: `'pieselectchanged'` |
| chartPieSelected | echarts event: `'pieselected'` |
| chartPieUnselected | echarts event: `'pieunselected'` |
| chartMapSelectChanged | echarts event: `'mapselectchanged'` |
| chartMapSelected | echarts event: `'mapselected'` |
| chartMapUnselected | echarts event: `'mapunselected'` |
| chartAxisAreaSelected | echarts event: `'axisareaselected'` |
| chartFocusNodeAdjacency | echarts event: `'focusnodeadjacency'` |
| chartUnfocusNodeAdjacency | echarts event: `'unfocusnodeadjacency'` |
| chartBrush | echarts event: `'brush'` |
| chartBrushSelected | echarts event: `'brushselected'` |
| chartRendered | echarts event: `'rendered'` |
| chartFinished | echarts event: `'finished'` |