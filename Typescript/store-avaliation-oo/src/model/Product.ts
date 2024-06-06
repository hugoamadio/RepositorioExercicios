import { ProductType } from "../types";
import { v4 as uuid } from "uuid";
import User from "./User";
import CommentClass from "./Comment";
import { comments } from "../database/comments.db";
import CommentsType from "../types/CommentsType";

class Product {
  private id: string;
  name: string;
  value: number;

  constructor(product: ProductType) {
    this.id = uuid();
    this.name = product.name;
    this.value = product.value;
  }

  show() {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
    };
  }

  getId() {
    return this.id;
  }

  showComments() {
    const commentsFind = comments.find((item) => item.product == this.id);

    return commentsFind?.comments.map((item) => {
      return {
        id: item.getId(),
        comment: item.content,
      };
    });
  }

  showDetails(){
    const details = this.show()
    const comments = this.showComments()
    
    const detailsReturn = {
      id: details.id,
      name: details.name,
      value: details.value,
      coments: comments
    }
    return detailsReturn
  }

  comment(comment: CommentClass) {
    const index = comments.findIndex((item) => item.product === this.id);
    if (index === -1) {
      const dataComments: CommentsType = {
        product: this.id,
        comments: [comment],
      };
      comments.push(dataComments);
    } else {
      comments[index].comments.push(comment);
    }
  }

  deleteComment(commentId: string) {
    const commentsFind = comments.find((item) => item.product == this.id);

    const index = commentsFind?.comments.findIndex(
      (item) => item.getId() == commentId
    );

    if (index !== undefined && index !== -1) {
      console.log(index);
      commentsFind?.comments.splice(index, 1);
      console.log("Comment deleted.");
    } else {
      console.log("Comment not found.");
    }
  }

  updateComment(commentId: string, newContent: string) {
    const commentsFind = comments.find((item) => item.product == this.id);

    const index = commentsFind?.comments.findIndex(
      (item) => item.getId() == commentId
    );

    if (index !== undefined && index !== -1 && commentsFind) {
      console.log(index);
      commentsFind.comments[index].content = newContent;
      console.log("Comment updated.");
    } else {
      console.log("Comment not found.");
    }
  }

  rate(value: number, user: User) {}
}

export default Product;
