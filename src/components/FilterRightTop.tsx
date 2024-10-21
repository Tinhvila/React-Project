import { useTranslation } from 'react-i18next';

export default function FilterRightTop(): JSX.Element {
  const { t } = useTranslation();
  return (
    <header className="container-header container-options min-h-[80px] items-center border-b border-[#ebecf3] justify-end mb-[30px] py-[30px] flex">
      <div className="ais-SortBy container-option text-[#21243d] text-[.75rem] relative">
        <select className="ais-SortBy-select " aria-label="Sort results by">
          <option className="ais-SortBy-option" value="instant_search">
            {t('sortFeature')}
          </option>
          <option className="ais-SortBy-option" value="asc">
            {t('priceUp')}
          </option>
          <option className="ais-SortBy-option" value="desc">
            {t('priceDown')}
          </option>
        </select>
      </div>
      <div className="ais-HitsPerPage container-option ml-12 text-[#21243d] text-[.75rem] relative">
        <select className="ais-HitsPerPage-select">
          <option className="ais-HitsPerPage-option" value="8">
            {t('page8')}
          </option>
          <option className="ais-HitsPerPage-option" value="16">
            {t('page16')}
          </option>
          <option className="ais-HitsPerPage-option" value="32">
            {t('page32')}
          </option>
        </select>
      </div>
    </header>
  );
}
