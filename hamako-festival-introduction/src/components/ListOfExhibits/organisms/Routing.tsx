import { FC } from 'react';
import { Route, Switch } from 'react-router';
import { data } from '../../../data/data';
import { NotFound } from '../../shareComponents/pages/NotFound';
import { SingleExhibit } from '../../singleExhibit/pages/SingleExhibit';
import { Exhibits } from '../templates/Exhibits';

const Routing: FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Exhibits />
        </Route>
        {data.map((personalData, i) => {
          const { id, name, text, images } = personalData;
          return (
            <Route exact path={`/no${id}`} key={i}>
              <SingleExhibit name={name} text={text} images={images} />
            </Route>
          );
        })}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export { Routing };
