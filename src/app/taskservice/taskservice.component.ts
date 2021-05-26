import { Component, OnInit, ViewChild,TemplateRef, AfterViewInit } from '@angular/core';
import { TaskDetails } from 'src/taskdetails';
import { TaskdataserviceService } from '../taskdataservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogmodalComponent } from '../dialogmodal/dialogmodal.component';
import { EditdialogmodalComponent } from '../editdialogmodal/editdialogmodal.component';
import { ViewdialogComponent } from '../viewdialog/viewdialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taskservice',
  templateUrl: './taskservice.component.html',
  styleUrls: ['./taskservice.component.css']
})
export class TaskserviceComponent implements OnInit, AfterViewInit {
  faEye = faEye
  faEdit = faEdit
  faTrash = faTrash
  TaskData : TaskDetails[] = [];
  displayedColumns: string[] = ['QuoteID','Quote_Type','Contact','Task','Due_Date','Task_type','Actions'];
  dataSource = new MatTableDataSource<TaskDetails>(this.TaskData);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loading: boolean = false;
  errorMessage:string='';

  constructor(private service:TaskdataserviceService, public dialog: MatDialog, private myrouter: Router) { }

  ngOnInit(): void {
    // if(!sessionStorage.getItem('token')){
    //   this.myrouter.navigate(['']);
    // }
    this.getTaskDetails();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public getTaskDetails(){
    // debugger
    let resp = this.service.tasktable();
    resp.subscribe(task=>this.dataSource.data=task as TaskDetails[])

  }

  openDialog(){

    let dialogRef = this.dialog.open(DialogmodalComponent, {
      width: '100%', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit(); 
    });

  }

  openEditDialog(element){
    this.service.getDataElement(element);

    let editref = this.dialog.open(EditdialogmodalComponent, {
      width: '100%',
    });

    editref.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit(); 
    });

  }

  openViewDialog(id){
    this.service.getID(id);

    let viewref = this.dialog.open(ViewdialogComponent, {
      width: '40%',
      height: '40%',
    });

    viewref.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit(); 
    });

  }


  deleteRow(element){
      debugger
      let id = element.QuoteID;
      this.loading = true;
      this.errorMessage = "";
      this.service.deleteTask(id)
      .subscribe((response : any) => {                           //next() callback
            console.log('response received');
            this.dataSource.data = this.dataSource.data;
            this.dataSource._updateChangeSubscription();
            this.ngOnInit(); 
          },
          (error : any) => {                              //error() callback
            console.error('Request failed with error');
            this.errorMessage = error;
            this.loading = false;
          })
      
      
  }

  



}
