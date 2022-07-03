import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CMatch } from '../model/cmatch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //to share data between different components
  private dataSource = new BehaviorSubject<Array<any>>([]);
  currentArray = this.dataSource.asObservable();

  constructor() { }

  changeCurrentArray(newArray:Array<any>) {
    this.dataSource.next(newArray);

  }
}
