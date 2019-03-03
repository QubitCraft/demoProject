import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  // DUMMY SIDEBAR DATA
  mainData: Object = [{
    image: "https://rukminim1.flixcart.com/image/312/312/jnnhua80/mobile/a/d/j/mi-redmi-y2-y2-original-imafaabg2b2kyrct.jpeg?q=70",
    heading: "Redmi Y2 (Black, 32 GB)",
    price: "₹8,999",
    lists: [{
      description: "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB"
    },{
      description: "15.21 cm (5.99 inch) HD+ Display"
    },{
      description: "12MP + 5MP | 16MP Front Camera"
    },{
      description: "3080 mAh Li Polymer Battery"
    },{
      description: "Qualcomm Snapdragon 625 Processor"
    }]
  },
  {
    image: "https://rukminim1.flixcart.com/image/312/312/jog2nbk0/mobile/e/x/b/mi-redmi-e7t-na-original-imafazxdh2bd6hep.jpeg?q=70",
    heading: "Redmi Note 6 Pro (Black, 64 GB)",
    price: "₹13,999",
    lists: [{
      description: "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB"
    },{
      description: "15.21 cm (5.99 inch) HD+ Display"
    },{
      description: "12MP + 5MP | 16MP Front Camera"
    },{
      description: "3080 mAh Li Polymer Battery"
    },{
      description: "Qualcomm Snapdragon 625 Processor"
    }]
  },
  {
    image: "https://rukminim1.flixcart.com/image/312/312/jnnhua80/mobile/a/d/j/mi-redmi-y2-y2-original-imafaabg2b2kyrct.jpeg?q=70",
    heading: "Redmi Y2 (Blue, 32 GB)",
    price: "₹8,999",
    lists: [{
      description: "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB"
    },{
      description: "15.21 cm (5.99 inch) HD+ Display"
    },{
      description: "12MP + 5MP | 16MP Front Camera"
    },{
      description: "3080 mAh Li Polymer Battery"
    },{
      description: "Qualcomm Snapdragon 625 Processor"
    }]
  },
  {
    image: "https://rukminim1.flixcart.com/image/312/312/jog2nbk0/mobile/e/x/b/mi-redmi-e7t-na-original-imafazxdh2bd6hep.jpeg?q=70",
    heading: "Redmi Note 6 Pro (Blue, 64 GB)",
    price: "₹13,999",
    lists: [{
      description: "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB"
    },{
      description: "15.21 cm (5.99 inch) HD+ Display"
    },{
      description: "12MP + 5MP | 16MP Front Camera"
    },{
      description: "3080 mAh Li Polymer Battery"
    },{
      description: "Qualcomm Snapdragon 625 Processor"
    }]
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
