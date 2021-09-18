import { FC } from 'react';
import { Route, Switch } from 'react-router';
import { data } from '../../../data/data';
import { NotFound } from '../../shareComponents/pages/NotFound';
import { SingleExhibit } from '../../singleExhibit/pages/SingleExhibit';
import { ListOfExhibits } from '../pages/ListOfExhibits';
import './routing.css';

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ListOfExhibits />
      </Route>
      {data.map((personalData, i) => {
        const { id, name, text, images, title, videos } = personalData;
        return (
          <Route exact path={`/no${id}`} key={i}>
            <main>
              <SingleExhibit
                name={name}
                text={text}
                title={title}
                images={images}
                videos={videos}
              />
            </main>
          </Route>
        );
      })}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routing };
