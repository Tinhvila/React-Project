import Product from '../model';
import ProductItem from './ProductItem';

interface Props {
  data: Product[];
}

export default function ProductList({ data }: Props): JSX.Element {
  console.log(data);
  return (
    <div className="text-[#21243d] text-xs">
      <ol className="grid gap-[40px] grid-cols-1 sm:grid-cols-2 lgc:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <ProductItem key={item.objectID} item={item} />
        ))}
      </ol>
    </div>
  );
}
