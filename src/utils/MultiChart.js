import Chart from 'chart.js';

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      const activePoint = this.chart.tooltip._active[0];
      const { ctx } = this.chart;
      const { x } = activePoint.tooltipPosition();
      
      const topY = this.chart.scales['A'] ? this.chart.scales['A'].top : 0;
      const bottomY = this.chart.scales['A'] ? this.chart.scales['A'].bottom : 0;

    //   const topY1 = this.chart.scales['B'].top;
    //   const bottomY2 = this.chart.scales['B'].bottom;

      // Draw the line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
    //   ctx.moveTo(x, topY1);
    //   ctx.lineTo(x, bottomY2);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#ddd';
      ctx.stroke();
      ctx.restore();
    }
  },
});

export default Chart;
