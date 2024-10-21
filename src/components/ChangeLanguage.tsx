import i18n from '../helper/i18n';

interface Props {
  onChangeLanguage: (lang: string) => void;
}

export default function ChangeLanguage({ onChangeLanguage }: Props) {
  return (
    <div className="flex">
      <img
        src={`${process.env.PUBLIC_URL}/image/vn.png`}
        className={`w-8 mr-4  hover:cursor-pointer transition-all ${
          i18n.language === 'vi' ? 'scale-150' : ''
        }`}
        onClick={() => onChangeLanguage('vi')}
        alt="Vi"
      />

      <img
        src={`${process.env.PUBLIC_URL}/image/uk.png`}
        className={`w-8  hover:cursor-pointer transition-all  ${
          i18n.language === 'en' ? 'scale-150' : ''
        } `}
        onClick={() => onChangeLanguage('en')}
        alt="En"
      />
    </div>
  );
}
