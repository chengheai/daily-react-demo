// export const getAuthKeys = () => {
//   const authKeys = store.getState()?.user?.authKeys;
//   if (authKeys && Array.isArray(authKeys)) {
//     return authKeys?.map(item => item?.trim());
//   }
//   return [];
// };

// export const checkAuth = (authKey, authKeys = getAuthKeys(), children = []) => {
//   // return true
//   authKeys = authKeys.map(item => item.trim());

//   const childKeys = children.map(item => {
//     if (Object.prototype.toString.call(item.authKey) === '[object String]')
//       return item.authKey.trim();
//     return item.authKey;
//   });

//   const isAuthChildrenType = childKeys.filter(key => authKeys.includes(key)).length > 0;

//   if (Object.prototype.toString.call(authKey) === '[object Array]') {
//     authKey = authKey.map(item => {
//       if (Object.prototype.toString.call(item) === '[object String]') return item.trim();
//       return item;
//     });
//     return authKey.some(key => authKeys.includes(key)) || isAuthChildrenType;
//   } else {
//     if (Object.prototype.toString.call(authKey) === '[object String]') authKey = authKey.trim();
//     return authKeys.includes(authKey) || isAuthChildrenType;
//   }
// };
