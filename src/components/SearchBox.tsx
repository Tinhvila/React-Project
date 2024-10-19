import { useTranslation } from 'react-i18next';

interface Props {
  searchContent: string | undefined;
  onSetSearchContent: (value: string) => void;
  onClearSearchContent: () => void;
}

function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

export default function SearchBox({
  searchContent,
  onSetSearchContent,
  onClearSearchContent,
}: Props): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="ais-SearchBox w-[100vw] absolute bottom-0 left-0 transform translate-y-1/2 h-[64px] lgc:relative lgc:w-[740px]">
      <form
        className="ais-SearchBox-form relative max-w-[90%] m-auto"
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <input
          className="h-16 bg-white rounded-lg p-1 pl-16 pr-12 font-hind shadow-[0_4px_48px_rgba(0,0,0,0.2)] text-[rgba(33,36,61,0.8)] min-h-[54px] w-full border-none outline-none font-inherit"
          type="text"
          maxLength={512}
          value={searchContent}
          onChange={(e) => onSetSearchContent(e.target.value)}
          placeholder={t('headerSearchPlaceholder')}
        />

        <button
          type="submit"
          className="w-16 px-4 pl-8 text-[#e2a400] left-0 appearance-none h-full flex justify-center items-center absolute top-1/2 transform -translate-y-1/2"
        >
          <img
            src={`${process.env.PUBLIC_URL}/image/search.svg`}
            alt="search-button"
            className="w-4 h-4 text-[#e2a400]"
          />
        </button>

        <button
          onClick={onClearSearchContent}
          className={`right-0 appearance-none h-full w-12 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 text-[0.9rem] ${
            searchContent === '' ? 'hidden' : ''
          }`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/image/reset.svg`}
            alt="reset-button"
            className="w-4 h-4 text-[#e2a400]"
          />
        </button>
      </form>
    </div>
  );
}
