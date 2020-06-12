/// <reference types="react-scripts" />

interface RestaurantCard {
  uuid: string;
  categories: string[];
  [key: string]: string | null | boolean;
  [key: string]: {
    [key: string]: string | number;
  };
  promoTrackings: [];
  heroImageUrl: string;
  title: string;
  etaRange: {
    text: string;
  };
}

interface Match {
  isExact: boolean;
  params: {
    id: string;
  };
  path: string;
  url: string;
}

interface HeroImage {
  url: string;
  width: number;
}

interface RestaurantInfo {
  title: string;
  uuid: string;
  etaRange: {
    text: strin;
  } | null;
  categories: string[];
  cuisineList: string[];
  priceBucket: string;
  ratingBadge: {
    text: string;
  } | null;
  disclaimerBadge: {
    text: string;
  } | null;
  heroImageUrls: HeroImage[];
  slug: string;
  sitySlug: string;
  phoneNumber: string;
  [key: string]:
    | string
    | null
    | boolean
    | number
    | {
        [key: string]: string | number | null | boolean;
      };
  sections: string[];
  sectionsMap: {
    [key: string]: {
      itemUuids: string[];
      title: string;
      uuid: string;
    };
  };
}

interface MenuItem {
  itemDescription: string;
  price: number;
  sectionUuid: string;
  subsectionUuid: string;
  title: string;
  uuid: string;
  customizationsList: [];
  imageUrl: string | null;
  suspendUntil: number;
  itemPromotion: null;
  rules: null;
  classifications: [];
}

interface Section {
  itemUuids: string[]
  title: string;
  uuid: string;
}
