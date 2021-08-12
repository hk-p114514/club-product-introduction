import { FC } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';
import './Exhibits.css';

// 展示数分の紹介リンク
const Exhibits: FC = () => {
  return (
    <>
      <ul>
        {data.map((personalData, i) => {
          const { id, title } = personalData;
          return (
            <li key={i}>
              <Link to={`no${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { Exhibits };
