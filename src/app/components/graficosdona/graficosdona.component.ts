import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficosdona',
  templateUrl: './graficosdona.component.html',
  styles: []
})
export class GraficosdonaComponent implements OnInit {

  @Input('ChartData') doughnutChartData:number[] = [];
  @Input('ChartLabels') doughnutChartLabels:string[] = [];
  @Input('chartType') doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
