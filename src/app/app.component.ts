import { Component } from '@angular/core';
import {JediService} from './jedi.service';
import {HttpClient} from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  chars = {
    "characters": [
      {
        "name": "Luke Skywalker",
        "url": "https://swapi.co/api/people/1/"
      },
      {
        "name": "Darth Vader",
        "url": "https://swapi.co/api/people/4/"
      },
      {
        "name": "Obi-wan Kenobi",
        "url": "https://swapi.co/api/people/unknown/"
      }, 
      {
        "name": "R2-D2",
        "url": "https://swapi.co/api/people/3/"
      }
    ]
  };

  image = [
    {
      "Luke Skywalker": "LukeSkywalker"
    },
    {
      "Darth Vader": "DarthVader"
    },
    {
     "Obi-wan Kenobi": "Obi-wanKenobi"
    }, 
    {
      "R2-D2":"R2-D2"
    }
  ]

  constructor(private mindtrick:JediService,private http:HttpClient){  }

  ngOnInit(){
    this.title = 'Star Wars';
    this.setDropdown();
  }

   val;

  setDropdown(){
       this.val = this.chars['characters'];
  }

  selectval:any ;
  film ;
  backimg = "../assets/Images/starwar.png";

  films(){
    //console.log(this.val[this.selectval]['url']);
    this.film =[];
    this.backimg = "../assets/Images/loading.png";
    this.mindtrick.getCharacters(this.val[this.selectval]['url']).subscribe(function(x){
    this.filmarray(x);
    this.backimg = "../assets/Images/"+this.image[this.selectval][this.val[this.selectval]['name']]+".jpg";
    }.bind(this),
    function(err){
      console.log(err);
      if(err["status"]=='404'){
        this.backimg = "../assets/Images/error404.png"      
      }else{
        this.backimg = "../assets/Images/error.jpg"
      }
    }.bind(this));
  }

  filmarray(x){
    this.mindtrick.getFilms(x['films']).subscribe(function(x){
      this.film = x;
    }.bind(this),
    function(err){
      console.log(err);
      if(err["status"]=='404'){
        this.backimg = "../assets/Images/error404.png"      
      }else{
        this.backimg = "../assets/Images/error.jpg"
      }
    }.bind(this));
  }

}
