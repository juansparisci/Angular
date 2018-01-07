import { Component } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {

  constructor() { }

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  public numeros_random() {
    this.doughnutChartData = [
      Math.round(Math.random()),
      Math.round(Math.random()),
      Math.round(Math.random())
    ];
  }
}
