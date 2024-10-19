interface Props {
  children: React.ReactNode;
}

export default function ResultRight({ children }: Props): JSX.Element {
  return <section className="container-results flex-3">{children}</section>;
}
