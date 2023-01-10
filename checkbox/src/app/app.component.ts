import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkbox';
  parentSelector = false

  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: false, name: 'burger' },
    { id: 3, select: false, name: 'sandwich' },
  ];

  ngOnInit() {

  }
  onChange($event: any) {
    const id = $event.target.value
    const isChecked = $event.target.checked
    console.log(id, isChecked)


    this.food = this.food.map((d) => {
      if (d.id === id) {
        d.select = isChecked;
        return d
      }
      if (id === -1) {
        d.select = this.parentSelector
      }
      return d

    })
    console.log(this.food)
  }



}
