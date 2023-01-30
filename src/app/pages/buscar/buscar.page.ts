import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll!: IonInfiniteScroll;

  public data: string[] = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [...this.data];

  handleChange(event: any) {
    const query: string = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }


  loadData(event: any) {
    console.log('Cargando siguientes ...');
    setTimeout(() =>{
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(3);
      this.data.push(...nuevoArr);
      event.target.complete();
    })
  }
}
