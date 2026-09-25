export interface SweetItem {
  id: string;
  name: string;
  category: 'Signature' | 'Traditional Mithai' | 'Savouries';
  badge?: string;
  price: number;
  unit: string;
  description: string;
  longDescription: string;
  image: string;
  weightOptions: string[];
}

import heroImage from '@/src/assets/images/hero_mawa_jalebi_1790258984609.jpg';
import signatureDishImage from '@/src/assets/images/mawa_jalebi_signature_1790259021738.jpg';
import regularJalebiImage from '@/src/assets/images/regular_golden_jalebi_1790259077944.jpg';
import kadhaiShopImage from '@/src/assets/images/burhanpur_shop_kadhai_1790259005382.jpg';
import gulabJamunImage from '@/src/assets/images/gulab_jamun_warm_1790259095098.jpg';
import kajuKatliImage from '@/src/assets/images/kaju_katli_cashew_1790259108707.jpg';
import namkeenImage from '@/src/assets/images/indian_namkeen_mix_1790259125250.jpg';
import sweetBoxImage from '@/src/assets/images/assorted_indian_sweets_box_1790259035662.jpg';

export const SWEETS_DATA: SweetItem[] = [
  {
    id: 'mawa-jalebi',
    name: 'Mawa Jalebi',
    category: 'Signature',
    badge: 'BURHANPUR SPECIAL',
    price: 140,
    unit: 'UNIT: 250G',
    description: 'Dark, thick, juicy khoya spiral jalebi steeped in rich saffron syrup.',
    longDescription: 'Crafted exclusively with buffalo milk khoya, fried slow to a deep dark finish, and drenched in warm Kashmiri saffron and cardamom syrup.',
    image: heroImage,
    weightOptions: ['250g', '500g', '1kg', '2kg'],
  },
  {
    id: 'regular-jalebi',
    name: 'Regular Jalebi',
    category: 'Traditional Mithai',
    price: 80,
    unit: 'UNIT: 250G',
    description: 'Thin, crispy golden spirals fried in pure ghee, dipped fresh daily.',
    longDescription: 'Traditional fermented batter piped into hot desi ghee kadhai for an irresistible crunch that bursts with floral cardamom sweetness.',
    image: regularJalebiImage,
    weightOptions: ['250g', '500g', '1kg'],
  },
  {
    id: 'fresh-dairy-mawa',
    name: 'Fresh Dairy Mawa',
    category: 'Signature',
    price: 220,
    unit: 'UNIT: 500G',
    description: 'Pure unadulterated khoya prepared from fresh slow-cooked buffalo milk.',
    longDescription: 'Simmered gently for four hours in open iron pans, preserving the natural buttery richness without any starch or artificial thickeners.',
    image: kadhaiShopImage,
    weightOptions: ['500g', '1kg', '2kg'],
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    category: 'Traditional Mithai',
    price: 150,
    unit: 'UNIT: PER BOX',
    description: 'Soft melt-in-mouth khoya dumplings soaked in warm rose cardamom syrup.',
    longDescription: 'Plump khoya dough balls fried to a rich mahogany glaze and immersed in delicate rose-water and green cardamom nectar.',
    image: gulabJamunImage,
    weightOptions: ['Box (6 pcs)', 'Box (12 pcs)', 'Box (24 pcs)'],
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    category: 'Traditional Mithai',
    price: 140,
    unit: 'UNIT: PER BOX',
    description: 'Spongy, delicate cottage cheese balls immersed in light fragrant syrup.',
    longDescription: 'Hand-kneaded fresh chenna cooked to cloud-like springiness in pure cane sugar syrup infused with crushed cardamom pods.',
    image: sweetBoxImage,
    weightOptions: ['Box (6 pcs)', 'Box (12 pcs)'],
  },
  {
    id: 'traditional-barfi',
    name: 'Traditional Barfi',
    category: 'Traditional Mithai',
    price: 180,
    unit: 'UNIT: 250G',
    description: 'Rich slow-reduced milk barfi finished with pure silver varq and pistachio.',
    longDescription: 'Velvety mawa fudge flavored with green cardamom, cut in classic squares and garnished with Iranian pistachios and pure edible silver foil.',
    image: signatureDishImage,
    weightOptions: ['250g', '500g', '1kg'],
  },
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    category: 'Traditional Mithai',
    price: 260,
    unit: 'UNIT: 250G',
    description: 'Diamond-cut premium cashew fudge with gentle cardamom notes.',
    longDescription: 'Premium Goan cashews stone-ground and cooked to perfection, rolled paper-thin into pristine diamond cuts adorned with pure silver varq.',
    image: kajuKatliImage,
    weightOptions: ['250g', '500g', '1kg'],
  },
  {
    id: 'special-namkeen',
    name: 'Special Namkeen',
    category: 'Savouries',
    price: 90,
    unit: 'UNIT: PER PACK',
    description: 'Crispy, savory snacks & sev blended with authentic Malwa-Nimar spices.',
    longDescription: 'Crunchy gram-flour sev, fried spiced lentils, and crisp roasted peanuts tempered with curry leaves, black pepper, and clove oil.',
    image: namkeenImage,
    weightOptions: ['250g', '500g', '1kg'],
  },
];
