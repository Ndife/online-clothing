// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


firestore.collection('users').doc('oQgs8W42ZSk3sQ6tqMvN').collection('cartItems').doc('ItjLpm6q47BA2HimWQ1Z');
firestore.doc('/users/oQgs8W42ZSk3sQ6tqMvN/cartItems/xVQBJRkkCcXx8KdELT3v');
firestore.collection('/users/oQgs8W42ZSk3sQ6tqMvN/cartItems');


// addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
// collectionsArray: selectCollectionsForPreview