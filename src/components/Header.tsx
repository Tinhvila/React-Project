interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props): JSX.Element {
  return (
    <header className="relative flex flex-col justify-center items-center min-h-[300px] text-white text-center bg-transparent border-box bg-cover bg-repeat lgc:min-h-[368px] background-img lgc:from-[#fbc300] lgc:to-[#c98a00] bg-bottom lgc:bg-center bg-clip-border bg-origin-padding p-2">
      {children}
    </header>
  );
}
