// app.component.ts
import { Component } from '@angular/core';
import { foodmenu } from './foodmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  total: number = 0;
  qty: number = 0;

  sum(event: any, price: number) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }
  }

  foodmenu: foodmenu[] = [
    { id: 1, name: "دجاج", price: 30, description: "دجاج مشوي على الفحم", img: "assets/images/cheken.jpg" },
    { id: 2, name: "شوربة دجاج", price: 30, description: "دجاج شواية", img: "assets/images/cheken2.jpg" },
    { id: 3, name: "ايدام", price: 20, description: "ايدام خضار مشكل", img: "assets/images/edam.jpg" },
    { id: 4, name: "بيتزا", price: 55, description: "بيتزا بيبروني على الطريقة الأمريكية", img: "assets/images/pizza.jpeg" },
    { id: 5, name: "باستا", price: 35, description: "باستا باللحم وصوص البولونيز", img: "assets/images/pasta.jpeg" }
  ];
  prodName: string = "";

  find(foodmenu: any[]) {
    return foodmenu.filter(item => item.name.toLowerCase().includes(this.prodName.toLowerCase()));
  }
}
