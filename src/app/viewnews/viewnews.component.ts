import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewnews',
  templateUrl: './viewnews.component.html',
  styleUrls: ['./viewnews.component.css']
})
export class ViewnewsComponent implements OnInit {

  constructor(private api:ApiService) { this.dataFromApi()}
dataFromApi=()=>{
  this.api.fetchNews().subscribe((response:any)=>{this.news=response.news})
  
}
  news:any=[]

  ngOnInit(): void {
  }

}
