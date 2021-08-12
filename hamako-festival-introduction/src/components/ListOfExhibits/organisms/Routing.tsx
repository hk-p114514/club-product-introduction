import { FC } from 'react';
import { Route, Switch } from 'react-router';
import { imageInfo } from '../../../data/data';
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
        {imageInfo.map((info) => {
          const { id, name, text } = info;
          return (
            <Route exact path={`/no${id}`}>
              <SingleExhibit studentNumber={id} name={name} text={text} />
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
