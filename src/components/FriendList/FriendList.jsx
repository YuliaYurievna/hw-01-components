import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.imgfriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
       <li className={css.item} key={id}>
          <span className= {`${css.status} ${css[isOnline]}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
      </li> 
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
  ),
};




