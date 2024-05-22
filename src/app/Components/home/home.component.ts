import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iJsonImp } from '../../Models/iJsonImp';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:iPost[] = [];
  favPost!: iPost;

  ngOnInit() {
    this.getPosts().then(() => {

    let favPost = this.getFavPost()
    if(favPost) {
      this.favPost = favPost
    }
  })

  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json')
    const allPosts = <iJsonImp> await response.json()

    this.postArr = allPosts.posts
  }

  getFavPost() {
    return this.postArr.shift()
  }

}
