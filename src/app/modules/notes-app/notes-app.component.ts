import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INote } from 'src/app/interfaces/note';
import { CustomValidation } from './classes/custom-validation';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent implements OnInit {
  frmNotes!: FormGroup; 
  frmEdit!: FormGroup;
  editMdl = false; 
  viewMdl = false;
  oldTitle!: string; 
  oldNote!: string; 
  viewTitle!: string; 
  viewNote!: string; 
  chosen!: number;
  notes: INote[] = JSON.parse(localStorage.getItem('notes')!) || [];
  deleted: INote[] = JSON.parse(localStorage.getItem('deleted-notes')!) || [];
  tab = localStorage.getItem("notes-tab") || "notes";
  constructor(private fbuild: FormBuilder){}
  ngOnInit():void{
    this.frmNotes = this.fbuild.group({
      title: ['', [Validators.required, CustomValidation.spaceValidation]],
      note: ['',[Validators.required, CustomValidation.spaceValidation]]
    })
  }
  switchTab(t:string){
    this.tab = t;
    localStorage.setItem('notes-tab',this.tab);
  }
  addNote(){
    const {title,note} = this.frmNotes.value;
    let data: INote = {title:title,note:note};
    this.notes.push(data);
    localStorage.setItem('notes',JSON.stringify(this.notes));
    this.frmNotes.reset({title:"",note:""})
  }
  editNote(){
    const {newTitle,newNote} = this.frmEdit.value;
    this.notes[this.chosen].title = newTitle;
    this.notes[this.chosen].note = newNote;
    localStorage.setItem('notes',JSON.stringify(this.notes));
    this.frmEdit.reset({newTitle: "",newNote: "",});
    this.closeEditModal();
  }
  deleteNote(i:number){
    this.deleted.push(this.notes[i]);this.notes.splice(i,1);
    localStorage.setItem('notes',JSON.stringify(this.notes));
    localStorage.setItem('deleted-notes',JSON.stringify(this.deleted));
  }
  openEditModal(i:number){
    this.editMdl = true;
    this.frmEdit = this.fbuild.group({
      newTitle: ["",[Validators.required, CustomValidation.spaceValidation]],
      newNote: ["",[Validators.required, CustomValidation.spaceValidation]]
    })
    this.oldTitle = this.notes[i].title;
    this.oldNote = this.notes[i].note;
    this.chosen = i;
  }
  openViewModal(i:number){
    this.viewMdl= true;
    this.viewTitle = this.notes[i].title;
    this.viewNote = this.notes[i].note;
  }
  closeEditModal(){this.editMdl = false;}
  closeViewModal(){this.viewMdl = false;}
  deleteForever(i:number){
    const sure = confirm("Are you sure to delete this note forever?");
    if(sure){
      this.deleted.splice(i,1);
      localStorage.setItem('deleted-notes',JSON.stringify(this.deleted));
    }
  }
}
