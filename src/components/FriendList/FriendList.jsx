import PropTypes from 'prop-types';
import FriendItem from 'components/FriendItem/FriendItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.imgfriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name} 
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
