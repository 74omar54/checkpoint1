const users = require("../data/index");

const listUsers = (req, res) => {
        res.json(users);
};
const showUser = (req, res) => {
    let userId = (parseInt(req.params.id));
    let user = users.find(user => user.id === userId);
    if (!user) {
        res.status(404).send("User Not Found");
        return;
    } else {
        res.send(user);
    }
};
const createUser = (req, res) => {
    let payload = req.body;
    if (payload.id == undefined || payload.id == false){
        res.status(400).send("bad request");
        return;
    }
    
    payload.id = users.length + 1;
    users.push(payload);
    res.json(users);
};
const updateUser = (req, res) => {
    let userId = (parseInt(req.params.id) -1);
    let user = users.find(user => user.id === userId);
    let payload = req.body;
    if (user.length < userId){
        res.status(404).send("bad request here");
        return;
    } else {
        Object.keys(payload).map((key) => {
            user[key] = payload[key];
            
        });
        payload.id = user[id].id -1;
        res.send(user);


    }
    
};
const deleteUser = (req, res) => {
   let userId = (parseInt(req.params.id)-1);
   let user = users.find(user => user.id === userId);
   
   if (!user){
       res.status(404).send('bad request here');
       return;
   } else {
       users.splice(user.id, 1);
       users.forEach((element) => {
           if(element.id > user.id){
               element.id -= 1;
           }
       });
       res.send(users);
   }
};



module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};