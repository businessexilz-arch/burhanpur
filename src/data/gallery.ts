import heroImage from '@/src/assets/images/hero_mawa_jalebi_1790258984609.jpg';
import signatureDishImage from '@/src/assets/images/mawa_jalebi_signature_1790259021738.jpg';
import kadhaiShopImage from '@/src/assets/images/burhanpur_shop_kadhai_1790259005382.jpg';
import sweetBoxImage from '@/src/assets/images/assorted_indian_sweets_box_1790259035662.jpg';
import regularJalebiImage from '@/src/assets/images/regular_golden_jalebi_1790259077944.jpg';
import gulabJamunImage from '@/src/assets/images/gulab_jamun_warm_1790259095098.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Simmering Iron Kadhai',
    description: 'Thick mawa jalebi spirals slowly bubbling in pure desi ghee at 180°C in our traditional broad kadhai.',
    image: heroImage,
    tag: 'Fresh Kadhai',
  },
  {
    id: 'gallery-2',
    title: 'Master Craftsman at Work',
    description: 'Generational sweetmakers hand-piping concentric khoya rings with muscle memory passed down through decades.',
    image: kadhaiShopImage,
    tag: 'Generational Craft',
  },
  {
    id: 'gallery-3',
    title: 'Signature Plating & Saffron Drizzle',
    description: 'Warm caramelized dark spirals served on handcrafted earthenware with Iranian pistachios and kesar threads.',
    image: signatureDishImage,
    tag: 'Signature Dish',
  },
  {
    id: 'gallery-4',
    title: 'Loharmandi Heritage Counter',
    description: 'Morning preparation at our Burhanpur counter, where copper containers hold fragrant cardamoms and rose syrups.',
    image: regularJalebiImage,
    tag: 'Heritage Shop',
  },
  {
    id: 'gallery-5',
    title: 'Festive Confection Gift Box',
    description: 'Hand-packed royal brass boxes with assorted mawa delicacies, prepared for celebrations across Nimar region.',
    image: sweetBoxImage,
    tag: 'Festive Box',
  },
  {
    id: 'gallery-6',
    title: 'Steamy Fresh Kadhai Stacks',
    description: 'Direct from hot chashni soaking vat to your table, with the legendary crisp mahogany exterior and melt-in-mouth core.',
    image: gulabJamunImage,
    tag: 'Daily Batches',
  },
];
