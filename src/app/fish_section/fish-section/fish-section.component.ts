import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/commonUtilities/common-api.service';
@Component({
  selector: 'app-fish-section',
  templateUrl: './fish-section.component.html',
  styleUrls: ['./fish-section.component.css']
})
export class FishSectionComponent implements OnInit {
  fishes: any;
  constructor(public CAS: CommonApiService) {
    console.log('ooooooooooo');

  }

  ngOnInit(): void {
    this.CAS.getJSON().subscribe((data) => {
      console.log(data);
      this.fishes = data;
    })
  }

}
