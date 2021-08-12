import { FC } from 'react';
import { Routing } from './components/ListOfExhibits/organisms/Routing';
import { PageController } from './components/shareComponents/templates/PageController';

const App: FC = () => (
  <>
    <PageController />
    <Routing />
  </>
);

export default App;
