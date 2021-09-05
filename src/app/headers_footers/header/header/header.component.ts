import { Component, OnInit,ElementRef } from '@angular/core';
import { CommonApiService } from 'src/app/commonUtilities/common-api.service';
  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fishes : any;
  selectedCarousel = 0;
  constructor(public CAS:CommonApiService, private el: ElementRef) { }

  ngOnInit(): void {
    this.CAS.getJSON().subscribe((data) => {
      console.log(data);
      this.fishes = data;
    })
  }
  openNav(){
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  }
  makeCarouselActive($event,id){
     let allTags = this.el.nativeElement.querySelectorAll("li");
     allTags.forEach(element => {
       element.className = "none";
     });
 
    let myTag = this.el.nativeElement.querySelector("#carousel"+id); 
    myTag.className = 'active';
    let innerItems = this.el.nativeElement.querySelectorAll(".carousel-item");
    innerItems.forEach(element => {
      element.className = "carousel-item";
    });
    let carouselitem = this.el.nativeElement.querySelector("#carousel-item"+id); 
    carouselitem.className = 'carousel-item active';
    // console.log(id,'selectedCarousel');
    // console.log(myTag,'myTag');
    // document.getElementById('carousel'+id).classList.toggle("active");

    this.selectedCarousel = id;
    
  }
}
