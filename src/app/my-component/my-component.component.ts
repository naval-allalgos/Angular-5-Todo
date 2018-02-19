import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }
  
  items = ["Angular JS","React JS","Vue JS"];
  newItem = "";
  editItemindex="";
  showDiv=true;
  showEdit=false;

  ngOnInit() {
  }
  
  addItem(){
	if(this.newItem!=""){  
		this.items.push(this.newItem);
		this.newItem="";	
	}
	  
  }
  removeItem(index){  
	this.items.splice(index,1);
  }
  edititem(index){
	  this.newItem=this.items[index];
	  this.editItemindex = index;
	  this.showDiv=false;
	  this.showEdit=true;
	  
  }
  updateItem(){
	  
	  if(this.newItem!=""){  
		
		this.items[this.editItemindex] = this.newItem;
		this.newItem="";
	  
	  }
	  this.showDiv=true;
	  this.showEdit=false;	  
  }
}
