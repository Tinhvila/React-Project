import Product from '../model';
import Tooltip from './Tooltip';

interface Props {
  item: Product;
}

export default function ProductItem({ item }: Props): JSX.Element {
  return (
    <li className="list-none m-0 p-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border hover:border-gray-150 hover:rounded-sm">
      <article className="text-[#21243d] text-[14px] leading-[18px] flex items-center sm:block">
        <header className="h-[174px] w-[174px] justify-center items-center mx-auto flex flex-none">
          <img
            className="h-auto max-h-full max-w-full z-0"
            src={item.image}
            alt='HP - 15.6" Laptop - AMD A6-Series - 4GB Memory - 500GB Hard Drive - Black'
          />
        </header>
        <div className="w-full ml-8 sm:ml-0 flex-2">
          <p className="text-[#21243d] opacity-70 uppercase mb-2 text-[12px] font-semibold leading-none">
            {item.categories[0]}
          </p>
          <h1 className="text-[14px] m-0 p-0 font-bold">
            <span className="ais-Highlight">
              <span className="ais-Highlight-nonHighlighted">{item.name}</span>
            </span>
          </h1>
          <Tooltip content={item.description}>
            <p className="mt-[2px] line-clamp-3">
              <span className="ais-Snippet">
                <span className="ais-Snippet-nonHighlighted ">
                  {item.description}
                </span>
              </span>
            </p>
          </Tooltip>
          <footer>
            <p className="flex gap-1 my-[14px]">
              <span className="text-[#e2a400] text-[11px] font-semibold">
                $
              </span>
              <strong>{item.price}</strong>
              <span className="flex gap-[3px] text-[#e2a400] text-[11px] font-semibold border border-[#e2a400] border-opacity-50 rounded-[4px] ml-1 px-1">
                <img
                  className="inline-block"
                  src={`${process.env.PUBLIC_URL}/image/star.svg`}
                  alt="star"
                />
                <span>{item.rating}</span>
              </span>
            </p>
          </footer>
        </div>
      </article>
    </li>
  );
}
