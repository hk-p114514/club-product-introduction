import { FC } from 'react';
import { Routing } from './components/ListOfExhibits/organisms/Routing';
import { Background } from './components/shareComponents/templates/Background';
import { Header } from './components/shareComponents/templates/Header';

const App: FC = () => (
  <>
    <div className="contents">
      <Header year={2021} />
      <Routing />
    </div>
    <Background />
  </>
);

export default App;
