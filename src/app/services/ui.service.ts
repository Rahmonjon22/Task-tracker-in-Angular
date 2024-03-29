import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }
  toggleAddTask(): void {
    // console.log(123); // on click add
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }
  onToggle(): Observable<any> {
    return this, this.subject.asObservable();
  }
}

