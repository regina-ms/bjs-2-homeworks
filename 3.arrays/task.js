

function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length) {
      return arr1.every ((item, index) => item === arr2[index]);
    } else {
      return false
    }
  }

  function getUsersNamesInAgeRange(users, gender) {
    if(users.length === 0) {
        return 0
    } else { 
        let filteredUsers = users.filter(user => user.gender === gender);
        if (filteredUsers.length === 0) {
          return 0
        } else {
          let filteredUsersAge = filteredUsers.map(user => user.age);
          let averageAge = filteredUsersAge.reduce((prev, item) => {
            return prev + item;
          }) / filteredUsersAge.length;
        
          return averageAge;
      }
    }
  }