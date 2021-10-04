import React from 'react';
import { Alert } from './Alert';

export function Footer() {
  return (
    <footer className="mt-16 py-16 border-t">
      <div className="px-6 max-w-7xl mx-auto text-center lg:text-left lg:grid grid-cols-4 gap-24">
        <div className="col-start-1 col-end-3">
          <p className="text-gray-500">
            Kara&apos;s Coffee is an demo E-Commerce and Stripe application, showcasing various Firebase Extensions,
            integrations with Firebase services and more. Learn more by visiting the GitHub repository.
          </p>
          <div className="mt-8">
            <Alert type="warning">The data for this application is reset every 24 hours!</Alert>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 flex flex-col space-y-2">
          <Heading>Extensions</Heading>
          <ul role="list" className="mt-4 space-y-4">
            <Link to="https://firebase.google.com/products/extensions/delete-user-data">Delete User Data</Link>
            <Link to="https://firebase.google.com/products/extensions/firestore-algolia-search">
              Firestore Algolia Search
            </Link>
            <Link to="https://firebase.google.com/products/extensions/firestore-send-email">Firestore Send Email</Link>
            <Link to="https://firebase.google.com/products/extensions/firestore-stripe-subscriptions">
              Firestore Stripe Subscriptions
            </Link>
            <Link to="https://github.com/conversationai/firestore-perspective-toxicity">
              Firestore Perspective Toxicity
            </Link>
          </ul>
        </div>
        <div className="mt-16 lg:mt-0 flex flex-col space-y-2">
          <Heading>Firebase</Heading>
          <ul role="list" className="mt-4 space-y-4">
            <Link to="https://console.firebase.google.com/">Firebase Console</Link>
            <Link to="https://firebase.google.com/products-build">Build</Link>
            <Link to="https://firebase.google.com/products-release">Release</Link>
            <Link to="https://firebase.google.com/products-engage">Engage</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Heading({ children }: { children: string }) {
  return <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">{children}</h3>;
}

function Link({ to, children }: { to: string; children: string }) {
  return (
    <li>
      <a href={to} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
        {children}
      </a>
    </li>
  );
}