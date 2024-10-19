import { useTranslation } from 'react-i18next';

export default function FilterLeft(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="container-wrapper box-border text-[0.9rem] hidden lgc:block flex-1">
      <section className="container-filters w-[260px] flex-1 mr-[60px]">
        <div className="container-header min-h-[80px] justify-between items-center flex">
          <h2 className="text-[#21243d] font-hind text-2xl font-bold">
            {t('filter')}
          </h2>
          <div className="clear-filters flex items-center text-gray-500">
            <div className="ais-ClearRefinements">
              <button className="ais-ClearRefinements-button">
                <div className="clear-filters flex items-center">
                  <img
                    className="mr-2"
                    src={`${process.env.PUBLIC_URL}/image/clear-filter.svg`}
                    alt={t('clearFilter')}
                  />
                  <span>{t('clearFilter')}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="container-body"></div>
      </section>
    </div>
  );
}
