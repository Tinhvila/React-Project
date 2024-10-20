import React, { useState } from 'react';
import './css/custom.css';
import Logo from './components/Logo';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import ChangeLanguage from './components/ChangeLanguage';
import Header from './components/Header';
import vi from './locales/vi.json';
import en from './locales/en.json';

function App() {
  const [searchContent, setSearchContent] = useState<string>('');
  const [isEnglish, setEnglish] = useState<boolean>(true);

  function handleSetSearchContent(value: string): void {
    setSearchContent(value);
  }

  function handleClearSearchContent(): void {
    setSearchContent('');
  }

  function handleSetEnglish(): void {
    setEnglish((isEnglish) => !isEnglish);
  }

  return (
    <div>
      <Header>
        <ChangeLanguage isEnglish={isEnglish} onSetEnglish={handleSetEnglish} />
        <Logo />
        <Title isEnglish={isEnglish} />
        <SearchBox
          placeholder={
            isEnglish ? en.headerSearchPlaceholder : vi.headerSearchPlaceholder
          }
          searchContent={searchContent}
          onSetSearchContent={handleSetSearchContent}
          onClearSearchContent={handleClearSearchContent}
        />
      </Header>
    </div>
  );
}

export default App;
