import FeaturesImage from '../resources/img/seo/features.png';
export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: 'RoNA',
      description: 'RoNA is a compilation of things companies are doing during this lockdown period.',
      image: FeaturesImage,
    },
  },

];
