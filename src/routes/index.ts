import Root from '../views/Root';
import Index from '../views/Index';
import Counter from '../views/Counter';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Index,
      },
      {
        path: '/counter',
        exact: true,
        component: Counter,
      }
    ],
  },
];
