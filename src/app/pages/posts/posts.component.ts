import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  mensajes:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.mensajes = this.dataService.getData();
    //.subscribe( ( post: any[] ) => {
      //console.log(post);
      //this.mensajes = post;
    //});
  }

  escuchaClick( id: number ) {
    console.log('Click en:' , id)
  }

}
