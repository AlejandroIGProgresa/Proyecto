import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  options = {
    slidesPerView: 4.25,
  }

  constructor() { }

  ngOnInit() {
  }

}
