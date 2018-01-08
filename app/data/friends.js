
var user = {
    name: "name",
    phone: "phone",
    email: "email",
    scores: [],
    total: ""
};
CreateUser = () => {
    $(".submit").on("click", function() {
        user.push($(".survey"));
    });
    
    $(".submit").on("click", function() {
        user.scores.push($(".scores"));
    });

    console.log(JSON.stringify(user));
    console.log(scores);
};

console.log(CreateUser());


const total = (scores) => {
    var scores;
    sum = (scores, total) => {
        return total + scores;
    };

    console.log(sum());

    getSum = () => {
        document.getElementById("scores").innerHTML= scores.reduce(sum);
    };
    console.log(getSum());
};

const friends = (user, total) => {
    var user;
    var total;
    for(var i=0; i<total.length; i++){
        if(total === user.total) {
            console.log('you have a friend!');
        }

        else {
            console.log("Let's keep looking.");
        }
    }
    
};
