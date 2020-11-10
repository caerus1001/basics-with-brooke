import {Review} from './review';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  review: Review;
  createdDate: string;
}
