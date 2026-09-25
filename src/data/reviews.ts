export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rahul Sharma',
    role: 'Burhanpur Local',
    rating: 5,
    comment: 'Authentic Burhanpur taste! The mawa jalebi is crisp outside and bursting with rich saffron syrup. Always our first stop when relatives visit.',
    date: '2 days ago',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priya Khandelwal',
    role: 'Local Resident',
    rating: 5,
    comment: 'Best fresh khoya in town. Their gulab jamun and fresh mawa are unmatched in purity. Delivery within 30 minutes in Patidar Colony.',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Anand Mahajan',
    role: 'Frequent Visitor',
    rating: 5,
    comment: 'Traveled from Indore just to taste this legendary black-brown mawa jalebi. Far superior to ordinary jalebi, truly unique heritage taste.',
    date: '2 weeks ago',
    verified: true,
  },
];
