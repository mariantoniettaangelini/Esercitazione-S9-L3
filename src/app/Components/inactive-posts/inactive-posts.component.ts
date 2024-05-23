import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iJsonImp } from '../../Models/iJsonImp';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  postArr: iPost[] = [];
  onlyInactive!: iPost[]

  constructor() {
    this.getPosts().then(()=> {
      let onlyInactive = this.getOnlyInactive()
      if(onlyInactive) {
        this.onlyInactive = onlyInactive
      }
      console.log(onlyInactive)
    })
  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json')
    const allPosts = <iJsonImp> await response.json()
    this.postArr = allPosts.posts
  }

  getOnlyInactive() {
    return this.postArr.filter(p => p.active === false)
  }
}
