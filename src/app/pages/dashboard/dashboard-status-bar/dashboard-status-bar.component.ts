import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { DataShareService } from './../../../services/data-share.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard-status-bar',
  templateUrl: './dashboard-status-bar.component.html',
  styleUrls: ['./dashboard-status-bar.component.scss']
})
export class DashboardStatusBarComponent implements OnInit {


  myDate = '';
  constructor(public dialog: MatDialog,
    private dataService: DataShareService,
    public translate: TranslateService
  ) {
    this.myDate = formatDate(new Date(), 'fullDate', 'en');
  }
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleDialog, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  styleUrls: ['dialog.scss'],
  templateUrl: 'dialog.html',
})
export class DialogExampleDialog {
  value = 0;
  
  constructor(
    public dialogRef: MatDialogRef<DialogExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.value = 70;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value / 1) + '°';
    }
    this.value = value;
    return value;
  }

  submitTemp() {
    this.data.temp = this.value;
  }
}

