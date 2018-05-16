import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dac',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = '';
  title = 'DACBOOK';
  postPlaceholder = 'Whats app...';
  refPostList = [];

  // FOR HTTP REQUEST
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  increaseLikeCount(post) {
    post.LIKE_COUNT += 1;
  }

  increaseDislikeCount(post) {
    post.DISLIKE_COUNT += 1;
  }

  postOnWall() {
    console.log(this.post);

    const newPost = {
      'POST' : this.post,
      'LIKE_COUNT' : 0,
      'DISLIKE_COUNT' : 0,
      'comment' : '',
      'commentList' : []
    };

    this.refPostList.push(newPost);
    this.post = '';

    // lets connect to server
    const url = 'http://localhost:4000/insertpost';
    this.http.post(url, newPost);
  }


  addComment(item) {
    item.commentList.push(item.comment);
    item.comment = '';
  }

  toggleComment(item) {
    item.toggleComment = !item.toggleComment;
  }

}
