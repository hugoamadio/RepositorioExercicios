import { combineReducers } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import CategoriesSlice from './CategoriesSlice';
import ProductsSlice from './ProductsSlice';
import ThemeSlice from './ThemeSlice';
import UsersSlice from './UsersSlice';

export default combineReducers({
  counter: CounterSlice,
  categories: CategoriesSlice,
  products: ProductsSlice,
  theme: ThemeSlice,
  users: UsersSlice,
});
