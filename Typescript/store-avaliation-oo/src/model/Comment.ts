import { v4 as uuid } from "uuid";

class CommentClass {
  private id: string;
  content: string;
  constructor(content: string) {
    this.id = uuid();
    this.content = content;
  }

  getId() {
    return this.id;
  }
}

export default CommentClass;
