function whoIsOnline(friends) {
  const result = {
    online: [],
    offline: [],
    away: []
  };

  for (const friend of friends) {
    if (friend.status === 'online' && friend.lastActivity <= 10) {
      result.online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      result.away.push(friend.username);
    } else {
      result.offline.push(friend.username);
    }
  }

  return result;
}

// Przykład użycia funkcji:
const friends = [
  {
    username: 'Alice',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
];

console.log(whoIsOnline(friends));
