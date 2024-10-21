import { useTranslation } from 'react-i18next';

export default function HeaderTitle(): JSX.Element {
  const { t } = useTranslation();
  return (
    <p className="header-title text-[38px] font-light my-[38px]">
      {t('title')}
    </p>
  );
}
