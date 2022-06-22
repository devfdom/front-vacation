import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eachadvertisement',
  templateUrl: './eachadvertisement.component.html',
  styleUrls: ['./eachadvertisement.component.css']
})
export class EachadvertisementComponent implements OnInit {
  type = "tipo";
  city = "ciudad";
  bedrooms = "dormitorios";
  capacity = "capacidad";
  pool = "piscina";
  garden = "jardín";
  text ="A spetacular country house in the fiels, near of Valencia city, wiht a big garden, perfect to your pets run. We also have a big swiming pool.";
  itemImageUrl =".../assets/img/eachhome.png";

  constructor() { }

  ngOnInit(): void {
  }

}
