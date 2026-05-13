import { useState } from 'react';
import AmalgamateHub from './components/AmalgamateHub';
import AdventureLanding from './components/AdventureLanding';
import GearLanding from './components/GearLanding';

export default function App() {
  const [page, setPage] = useState('hub');

  if (page === 'adventure') {
    return <AdventureLanding onBack={() => setPage('hub')} />;
  }

  if (page === 'gear') {
    return <GearLanding onBack={() => setPage('hub')} />;
  }

  return (
    <AmalgamateHub
      onAdventureEnter={() => setPage('adventure')}
      onGearEnter={() => setPage('gear')}
    />
  );
}
