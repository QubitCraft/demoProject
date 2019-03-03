import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  hideme: any = [];

  // DUMMY SIDEBAR DATA
  sidebarData: Object = [{
    name: "RAM",
    lists: [{
      name: "6 GB & Above"
    },{
      name: "4 GB"
    }]
  },
  {
    name: "Brand",
    lists: [{
      name: "MI"
    },{
      name: "Samsung"
    }]
  },
  {
    name: "Customer Ratings",
    lists: [{
      name: "4 * & Above "
    },{
      name: "3 * & Above "
    },{
      name: "2 * & Above "
    },{
      name: "1 * & Above "
    }]
  },
  {
    name: "Internal Storage",
    lists: [{
      name: "110 - 150 GB"
    },{
      name: "50 - 100 GB"
    }]
  },
  {
    name: "Battery Capacity",
    lists: [{
      name: "2000-3000 mAh"
    },{
      name: "3000-4000 mAh"
    }]
  },
  {
    name: "Operating System",
    lists: [{
      name: "Android"
    }]
  }
];
  constructor() { }
  
  ngOnInit() {
  
  }


}
