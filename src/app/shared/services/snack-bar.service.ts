import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  onOpenSnackbar(messege:string){
    this._snackBar.open(messege, "Close",{
      duration: 3000,
    })
  }
}
