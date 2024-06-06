import { CartType, ProductType, UserType } from "../types";
import { v4 as uuid } from "uuid";
import Product from "./Product";
import { carts } from "../database/carts.db";

class User {
  private id: string;
  name: string;
  username: string;
  email: string;

  constructor(user: UserType) {
    this.id = uuid();
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
  }

  addToCart(product: Product) {
    const index = carts.findIndex((item) => item.user === this.id);
    if (index === -1) {
      const cart: CartType = {
        user: this.id,
        products: [product],
      };
      carts.push(cart);
    } else {
      carts[index].products.push(product);
    }
  }

  removefromCart(product: Product) {
    const index = carts.findIndex((item) => item.user === this.id);
    if (index === -1) {
      return;
    }
    const indexProduct = carts[index].products.findIndex(
      (item) => item.getId() === product.getId()
    );

    if (indexProduct === -1) {
      return;
    }
    carts[index].products.splice(indexProduct, 1);
  }

  showProducts() {
    const index = carts.findIndex((item) => item.user === this.id);
    if (index === -1) {
      return;
    }
    return carts[index].products;
  }

  showUserDetails() {
    const userDetail: any = {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
    };

    const cart = this.showProducts()?.map((item) => item.show());

    if (cart?.length) {
      userDetail.cart = cart;
    }

    return userDetail;
  }
}

export default User;
