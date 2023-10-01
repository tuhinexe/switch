const fetchUser = () => {
  if (typeof window === 'undefined') {
    return null;
  } else {
    const user = localStorage.getItem('switchUser') || '{}';
    return JSON.parse(user);
  }
};

export default fetchUser;
