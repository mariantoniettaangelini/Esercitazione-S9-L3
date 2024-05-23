import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iJsonImp } from '../../Models/iJsonImp';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  postArr:iPost[] = []
  postInDetail!: iPost;

  constructor(
    private route:ActivatedRoute
  ) {
}

ngOnInit() {
  this.route.params.subscribe((params:any)=> {
    let dettaglio = this.postArr.find(d => d.id === params.id)
    if(dettaglio) {
      this.postInDetail = dettaglio
      console.log(this.postInDetail)
    }
  })
}

  async getPosts() {
    const response = await fetch ('../../../assets/db.json')
    const details = <iJsonImp> await response.json()
    this.postArr = details.posts
  }
}
