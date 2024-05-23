import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { ActivatedRoute } from '@angular/router';
import { iJsonImp } from '../../Models/iJsonImp';
import { zipAll } from 'rxjs';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
  postArr:iPost[] = [];
  onlyActive!: iPost[];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.getPosts().then(()=> {
      let onlyActive = this.getOnlyActive()
      if(onlyActive){
        this.onlyActive = onlyActive
      }
      console.log(onlyActive)
    })
  }
  async getPosts() {
    const response = await fetch ('../../../assets/db.json')
    const allPosts = <iJsonImp> await response.json();
    this.postArr = allPosts.posts;
  }
  getOnlyActive() {
    return this.postArr.filter (p => p.active === true)
  }
}
