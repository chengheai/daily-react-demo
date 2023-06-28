import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const checkAuth = (key, authKeys) => {
  authKeys = authKeys || ['add', 'show', 'edit', 'delete'];
  if (Object.prototype.toString.call(key) === '[object Array]') {
    key = key.map(item => {
      if (Object.prototype.toString.call(item) === '[object String]') return item.trim();
      return item;
    });
    return key.some(item => authKeys.includes(item));
  } else {
    if (Object.prototype.toString.call(key) === '[object String]') key = key.trim();
    return authKeys.includes(key);
  }
};
const AuthGuard = props => {
  const { user, authority, noMatch, authKey } = props;
  const { authKeys = [] } = user || {};
  const authorized = checkAuth(authority || authKey, authKeys);

  return function components(Comp) {
    return <div> {authorized ? <Comp /> : <div>{noMatch}</div>}</div>;
  };
};

AuthGuard.defaultProps = {
  noMatch: null,
};
AuthGuard.propTypes = {
  children: PropTypes.element,
  noMatch: PropTypes.element,
  authority: PropTypes.string,
  authKey: PropTypes.string,
};

export default AuthGuard;
