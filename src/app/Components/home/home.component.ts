import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iJsonImp } from '../../Models/iJsonImp';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:iPost[] = []

  ngOnInit() {
    this.getPosts()
  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json')
    const allPosts = <iJsonImp> await response.json()

    this.postArr = allPosts.posts
  }

}
