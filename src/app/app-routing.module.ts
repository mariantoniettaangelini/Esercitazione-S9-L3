import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ActivePostsComponent } from './Components/active-posts/active-posts.component';
import { InactivePostsComponent } from './Components/inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'active-post',
    component: ActivePostsComponent,
    title: 'Active Post'
  },
  {
    path: 'inactive-post',
    component: InactivePostsComponent,
    title: 'Inactive Post'
  },
  {
    path: 'home/:id',
    component: PostDetailsComponent,
    title: 'Post Details'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
