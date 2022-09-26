import Profile from './Profile/Profile';
import Statistics from './Stats/Statistics';
import FriendList from './Friends/FriendsList';
import TransactionHistory from './Transactions/Transactions';

import user from './Profile/user.json';
import data from './Stats/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
