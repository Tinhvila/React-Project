interface Props {
  isEnglish: boolean;
  onSetEnglish: () => void;
}

export default function ChangeLanguage({ isEnglish, onSetEnglish }: Props) {
  return (
    <div className="flex">
      <img
        src={`${process.env.PUBLIC_URL}/image/vn.png`}
        className={`w-8 mr-4  hover:cursor-pointer transition-all ${
          !isEnglish ? 'scale-150' : ''
        }`}
        onClick={onSetEnglish}
        alt="Vi"
      />
      
      <img
        src={`${process.env.PUBLIC_URL}/image/uk.png`}
        className={`w-8  hover:cursor-pointer transition-all  ${
          isEnglish ? 'scale-150' : ''
        } `}
        onClick={onSetEnglish}
        alt="En"
      />
    </div>
  );
}
