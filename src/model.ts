export default interface Product {
  name: string;
  description: string;
  brand: string;
  categories: string[];
  hierarchicalCategories: { lvl0: string; lvl1: string };
  type: string;
  price: number;
  price_range: string;
  image: string;
  url: string;
  free_shipping: boolean;
  rating: number;
  popularity: number;
  objectID: string;
  _snippetResult: { description: { value: string; matchLevel: string } };
  _highlightResult: {
    name: { value: string; matchLevel: string; matchedWords: string[] };
    description: { value: string; matchLevel: string; matchedWords: string[] };
    brand: { value: string; matchLevel: string; matchedWords: string[] };
    categories: [
      { value: string; matchLevel: string; matchedWords: string[] },
      { value: string; matchLevel: string; matchedWords: string[] }
    ];
  };
}
