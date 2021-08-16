const bankClients = [
    {
        fullName : "Jeff Bezos",
        email : "Jeff@amazon.com",
        phoneNum : `9110299119`,
        balance : 7000000000000,
        id : 1
    },
    {
        fullName : "Elon Musk",
        email : "urektm8@tesla.com",
        phoneNum : `9115552121`,
        balance : 176000000000,
        id : 2
    },
    {
        fullName : "Jacob Shiber",
        email : "loluwish@gmail.com",
        phoneNum : `972747747482`,
        balance : 3500,
        id : 3
    },
    {
        fullName : "Biutah Leumi",
        email : "bitahunsheli@gov.il",
        phoneNum : `732652914`,
        balance : -62351,
        id : 4
    },
    {
        fullName : "Rami Nahum",
        email : "stopit@gmail.com",
        phoneNum : `02485819375`,
        balance : -200000,
        id : 5
    },
    {
        fullName : "Dani Dov",
        email : "danidov@walla.com",
        phoneNum : `0293579283`,
        balance : 255,
        id : 6
    }
];

//task a
function addClient(clientInfo){
    bankClients.push(clientInfo);
    return bankClients;
}

let addedClient = addClient({
    name : "Johnny Depp", 
    email : "Johnjohn@walla.com", 
    phoneNum : `0525486213`, 
    balance : 1500000, 
    id : 7
});

//task b 

function findById (id){
    for (let i = 0; i < bankClients.length; i++){
        if (bankClients[i].id == id){
            return bankClients[i];
        }
    }
    return "do not exist";
}

let clientIs = findById(3);

//task c 

function deleteUserById(id1){
    for (let i = 0; i < bankClients.length; i++){
        if (bankClients[i].id == id1){
            bankClients.splice([i], 1);    
            break 
        }
    }
   return (bankClients); 
}

let deletedUser = deleteUserById(2);

//task d 

function withdrawMoney (id2, amount){
    for (let i = 0; i < bankClients.length; i++){
        if (bankClients[i].id == id2){
            bankClients[i].balance -= amount;
            return bankClients[i];
        }
    }
}

let newBalance = withdrawMoney(3, 400);

//task e 

function depositMoney (id3, amount1){
    for (let i = 0; i < bankClients.length; i++){
        if (bankClients[i].id == id3){
            bankClients[i].balance += amount1;
            return bankClients[i];
        }
    }
}


let newBalance1 = depositMoney (6, 400);
console.log(newBalance1);




