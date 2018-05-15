import { Component } from '@angular/core';

@Component({
  selector: 'app-dac',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DACBOOK';
  postPlaceholder = 'Whats app...';

  postOfDay = '“I can accept failure. Everyone fails at something. But I can’t accept not trying.”';
  likeCount = 100;
  dislikeCount = 1000;

  refPost = {
    'post' : '“I can accept failure. Everyone fails at something. But I can’t accept not trying.”',
    'likeCount': 100,
    'dislikeCount': 1000,
  };

  refPostList = [this.refPost, this.refPost];


  increaseLikeCount(post) {
    post.likeCount += 1;
  }

  increaseDislikeCount(post) {
    post.dislikeCount += 1;
  }

}
