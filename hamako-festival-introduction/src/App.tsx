import { FC } from 'react';
import { Routing } from './components/ListOfExhibits/organisms/Routing';
import { Header } from './components/shareComponents/templates/Header';

const App: FC = () => (
  <>
    <div className="contents">
      <Header year={2021} />
      <Routing />
    </div>
  </>
);

export default App;
