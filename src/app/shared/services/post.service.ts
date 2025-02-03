import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',   // Makes this service globally available throughout the application
})
export class PostService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches all posts from the API.
   * @returns An response containing a list of posts.
   */

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'); // Makes a GET request to retrieve all posts
  }

  /**
   * Fetches a single post by its ID.
   * @param id - The ID of the post to fetch.
   * @returns An response containing the requested post.
   */
  
  getPostById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`); // Makes a GET request to retrieve a specific post by ID
  }
}
