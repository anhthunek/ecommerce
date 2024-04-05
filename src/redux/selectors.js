 import {createSelector} from 'reselect';
 const dataUsers = state => state.users;
 const loginInfo = state => state.login;

 export const takeLogin = createSelector(dataUsers,loginInfo, (dataUsers, loginInfo) => {
   
        return dataUsers.filter(todo => todo.email.includes(loginInfo.email))

 }  );
