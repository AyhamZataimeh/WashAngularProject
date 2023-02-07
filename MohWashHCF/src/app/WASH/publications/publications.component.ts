import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  data: any[]=[
    {
      "Date":Date.now(),
      "text":"  if you find yourself constnatly book markong and heatlh sections"


    },
    {
      "Date":Date.now(),
      "text":"  if you find yourself constnatly book markong and heatlh sections"


    },    {
      "Date":Date.now(),
      "text":"  if you find yourself constnatly book markong and heatlh sections"


    },    {
      "Date":Date.now(),
      "text":"  if you find yourself constnatly book markong and heatlh sections"


    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
