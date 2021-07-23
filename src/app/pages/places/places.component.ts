import { Router } from '@angular/router';
import { PlaceModalFormComponent } from './../../components/place-modal-form/place-modal-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places:any[]=[1]
  constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  addToPalces(){
    this.places.push(1);
  }
  openDialog() {
    const dialogRef = this.dialog.open(PlaceModalFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showDashboard(index){
    this.router.navigate(['pages/dashboard']);
  }
}
