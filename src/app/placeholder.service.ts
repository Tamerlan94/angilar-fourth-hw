import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Comment, Photo, Post, Todo, User } from 'src/models/placeholderModel';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  url: string = "https://jsonplaceholder.typicode.com";

  constructor(private client: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.url}/posts`);
  }
  getPostById(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.url}/posts/${id}`);
  }
  getPostComments(id: number): Observable<Comment[]> {
    return this.client.get<Comment[]>(`${this.url}/posts/${id}/comments`);
  }
  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.url}/albums`);
  }
  getAlbumsById(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.url}/albums/${id}`);
  }
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.url}/albums/${id}/photos`);
  }
  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(`${this.url}/users`);
  }
  getUserById(id: number): Observable<User> {
    return this.client.get<User>(`${this.url}/users/${id}`);
  }
  getUserTodos(id: number): Observable<Todo[]> {
    return this.client.get<Todo[]>(`${this.url}/users/${id}/todos`);
  }
  getUserPosts(id: number): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.url}/users/${id}/posts`);
  }
}
