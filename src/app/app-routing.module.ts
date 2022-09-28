import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const postRoutes: Routes = [
  { path: "comments", component: CommentsComponent },
]

const albumRoutes: Routes = [
  {path: "photos", component: PhotosComponent}
]

const albumTodoPostRoutes: Routes = [
  {path: "albums", component: AlbumsComponent},
  {path: "todos", component: TodosComponent},
  {path: "posts", component: PostsComponent}
]

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent },

  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostComponent },
  { path: "posts/:id", component: PostComponent, children: postRoutes },

  { path: "albums", component: AlbumsComponent },
  { path: "albums/:id", component: AlbumComponent },
  { path: "albums/:id", component: AlbumComponent, children: albumRoutes },

  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UserComponent },
  { path: "users/:id", component: UserComponent, children: albumTodoPostRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
