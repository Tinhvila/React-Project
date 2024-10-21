import Product from '../model';

export default async function fetchProductData(
  param?: string
): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API}products?${param}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

export { fetchProductData };
