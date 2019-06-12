var user = '{"name": "Вася", "age": 35, "isAdmin": false, "friends": [0, 1, 2, 3]}';
user = JSON.parse(user);
console.log(user.friends);

for (var key in user) {
    if (key === "friends") {
        var friends = user[key];
         friends.forEach(function(elem) {
             console.log(elem);
         });

        var totalSum = friends.reduce(function(sum, current) {
            return sum + current;
        });
        console.log('Sum is', totalSum);
    }
}