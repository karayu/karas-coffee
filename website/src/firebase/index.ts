import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, CollectionReference } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';
import { Session, Review, Subscription } from '../types';

import {
  productConverter,
  customerConverter,
  sessionConverter,
  reviewConverter,
  subscriptionConverter,
  contentConverter,
} from './converters';

export const firebaseConfig = {
  apiKey: 'AIzaSyCrbVzj7TfFBPjxardH4JTuYFr38CZealM',
  authDomain: 'karas-coffee.firebaseapp.com',
  projectId: 'karas-coffee',
  storageBucket: 'karas-coffee.appspot.com',
  messagingSenderId: '94487412900',
  appId: '1:94487412900:web:b96590557d4383a3fce631',
  measurementId: 'G-M9HH3JL1S7',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

export const collections = {
  products: collection(firestore, 'products').withConverter(productConverter),
  customers: collection(firestore, 'customers').withConverter(customerConverter),
  // TODO(ehesp): Add converter once schema agreed.
  cart: collection(firestore, 'cart'),
  sessions: (customerId: string): CollectionReference<Session> =>
    collection(firestore, 'customers', customerId, 'checkout_sessions').withConverter(sessionConverter),
  payments: (customerId: string): CollectionReference => collection(firestore, 'customers', customerId, 'payments'),
  subscriptions: (customerId: string): CollectionReference<Subscription> =>
    collection(firestore, 'customers', customerId, 'subscriptions').withConverter(subscriptionConverter),
  invoices: (customerId: string, subscriptionId: string): CollectionReference => {
    return collection(collections.subscriptions(customerId), subscriptionId, 'invoices');
  },
  productReviews: (productId: string): CollectionReference<Review> =>
    collection(firestore, 'products', productId, 'reviews').withConverter(reviewConverter),
  content: collection(firestore, 'content').withConverter(contentConverter),
};