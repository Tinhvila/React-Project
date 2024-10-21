export default function Logo(): JSX.Element {
  return (
    <p className="header-logo m-0">
      <a href="https://algolia.com" aria-label="Go to the Algolia website">
        <img
          src={`${process.env.PUBLIC_URL}/image/Logo.svg`}
          className="h-[24px] w-[92px]"
          alt="Logo"
        />
      </a>
    </p>
  );
}
