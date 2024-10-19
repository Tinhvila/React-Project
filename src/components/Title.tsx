import vi from '../locales/vi.json';
import en from '../locales/en.json';

interface Props {
  isEnglish: boolean;
}

export default function HeaderTitle({ isEnglish }: Props): JSX.Element {
  return (
    <p className="header-title text-[38px] font-light my-[38px]">
      {isEnglish ? en.title : vi.title}
    </p>
  );
}
