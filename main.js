const bankClients = [
    {
        fullName: "Jeff",
        email: "Jeff@amazon.com",
        phoneNum: `9110299119`,
        balance: 7000000000000,
        id: 1
    },
    {
        fullName: "Elon",
        email: "urektm8@tesla.com",
        phoneNum: `9115552121`,
        balance: 176000000000,
        id: 2
    },
    {
        fullName: "Jacob",
        email: "loluwish@gmail.com",
        phoneNum: `972747747482`,
        balance: 3500,
        id: 3
    },
    {
        fullName: "Biutah",
        email: "bitahunsheli@gov.il",
        phoneNum: `732652914`,
        balance: -62351,
        id: 4
    },
    {
        fullName: "Rami",
        email: "stopit@gmail.com",
        phoneNum: `02485819375`,
        balance: -200000,
        id: 5
    },
    {
        fullName: "Dani",
        email: "danidov@walla.com",
        phoneNum: `0293579283`,
        balance: 255,
        id: 6
    }
];

//task a
function addClient(clientInfo) {
    bankClients.push(clientInfo);
    return bankClients;
}

let addedClient = addClient({
    fullName: "Johnny",
    email: "Johnjohn@walla.com",
    phoneNum: `0525486213`,
    balance: 1500000,
    id: 7
});

//task b 

function findById(id) {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].id == id) {
            return bankClients[i];
        }
    }
    return "do not exist";
}

let clientIs = findById(3);

//task c 

function deleteUserById(id1) {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].id == id1) {
            bankClients.splice([i], 1);
            break
        }
    }
    return (bankClients);
}

let deletedUser = deleteUserById(2);

//task d 

function withdrawMoney(id2, amount) {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].id == id2) {
            bankClients[i].balance -= amount;
            return bankClients[i];
        }
    }
}

let newBalance = withdrawMoney(3, 400);

//task e 

function depositMoney(id3, amount1) {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].id == id3) {
            bankClients[i].balance += amount1;
            return bankClients[i];
        }
    }
}


let newBalance1 = depositMoney(6, 400);



// 3 

//task 1 

let newClient = addClient({
    fullName: "Marco",
    email: "marcorules@walla.com",
    phoneNum: `0227368283`,
    balance: 1000,
    id: 8
});

//task 2

function withdrawMoneyWithoutM(id4, amount2) {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].id == id4 && bankClients[i].balance - amount2 >= 0) {
            bankClients[i].balance -= amount2;
            return bankClients[i];
        }
    }
}

// console.log(withdrawMoneyWithoutM(8, 500));

//task 3

// console.log(depositMoney(8, 500));

//task 4 

function ifYoureRich() {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].balance > 400) {
            console.log(bankClients[i]);
        };
    };
};

// ifYoureRich();

//task 5 

function ifYoureBroke() {
    for (let i = 0; i < bankClients.length; i++) {
        if (bankClients[i].balance < 200) {
            console.log(bankClients[i]);
        };
    };
};

// ifYoureBroke();


//app 

const clientName = document.getElementById("clientName");
const amount1 = document.getElementById("amount");
const submit = document.getElementById("submitButton");
const balanceButton = document.getElementById("balanceBtn");



submit.addEventListener("click", function() {
    for (let i = 0; i < bankClients.length; i++) {
        if (clientName.value == bankClients[i].fullName) {
            if(bankClients[i].balance - amount1.value > 0){
                alert("ok");
                bankClients[i].balance -= amount1.value;
            }
            else {
                alert("you are blocked");
            };   
        };
    };
});

balanceButton.addEventListener("click", function() {
    for(let i = 0; i < bankClients.length; i++){
        if (clientName.value == bankClients[i].fullName){
            alert(bankClients[i].balance);
        };
    };
});

