import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bill:number = 0
  tip: number = 0
  people: number = 1

  @ViewChild('custom') custom!: ElementRef
  @ViewChild('billInput') billInput!: ElementRef
  @ViewChild('peopleInput') peopleInput!: ElementRef

  setTip(event: any) {
    this.tip = +event.target.value
    if (this.custom.nativeElement.value.length > 1) {
      if (this.tip === 5 || this.tip === 10 || this.tip === 15 || this.tip === 25 || this.tip === 50) {
        this.custom.nativeElement.value = ''
      }
    }
  }

  getBill(event: any) {
    this.bill = +event.target.value
  }

  getPeople(event: any) {
    this.people = +event.target.value
    if (event.target.value === '') {
      this.people = 1
    }
  }

  reset() {
    this.custom.nativeElement.value = ''
    this.billInput.nativeElement.value = ''
    this.peopleInput.nativeElement.value = ''
    this.bill = 0
    this.tip = 0
    this.people = 1
  }


}
