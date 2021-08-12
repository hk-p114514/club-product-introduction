import { FC } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';

// 展示数分の紹介リンク
const Exhibits: FC = () => {
  return (
    <>
      <ul>
        {data.map((personalData) => {
          const { id, title } = personalData;
          return (
            <li>
              <Link to={`no${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { Exhibits };
