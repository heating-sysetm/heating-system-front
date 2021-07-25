import { DialogData } from './../../components/side-nav/side-nav.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog,MatDialogClose } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from './../../services/api.service';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface User {
  name: string;
  username: string;
  password: string;
  id: string;
  phone: string;
  email: string;
  isAdmin: boolean;
}
const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  name="";
  displayedColumns: string[] = [
    'name',
    'username',
    'phone',
    'password',
    'isAdmin',
    'sendSMS',
    'delete',
  ];
  dataSource = [];

  public loading = false;
  constructor(public dialog: MatDialog,
    private notif: NotificationService,
    private _formBuilder: FormBuilder,
    private api: ApiService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();

  }


  getAllUsers() {
    this.api.getusers().subscribe((result) => {
      console.log(result['data']);
      this.dataSource = result['data'];
    });
  }

  deleteUser(user) {

    this.api.deleteUser(user.id).subscribe(
      (result) => {
        this.notif.createSuccess('', 'کاربر با موفقیت حذف شد');
        const index: number = this.dataSource.indexOf(user);
        if (index !== -1) {
          let x = this.dataSource
            .slice(0, index)
            .concat(this.dataSource.slice(index + 1, this.dataSource.length));
          this.dataSource = x;
        }
      },
      (error) => {
        console.log(error);

        this.notif.createError(
          'خطا',
          'کاربر حذف نشد لطفا دوباره امتحان کنید'
        );
      }
    );

  }

  openDialog(user): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '250px',
      data: {name: user.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteUser(user);
      }
    });
  }

  openAddUserModal(){
    const dialogRef = this.dialog.open(UserModalDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    flag=true;
  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.html',
})
export class UserModalDialog {

  constructor(
    public dialogRef: MatDialogRef<UserModalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  flag=true;
  onNoClick(): void {
    this.dialogRef.close();
  }

}
