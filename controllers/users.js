//this will be the controllers folder, where all the magic will happen! 
const users = require("../data/index");

//this function will show a list of all the users when a request is made! 
const listUsers = (req, res) => {
        res.json(users);
};
//this function will get me a specific user by ID! 
const showUser = (req, res) => {
    let userId = (parseInt(req.params.id));
    let user = users.find(user => user.id === userId);
    //I had to make sure to include a status code in case there was an error with a bad request
    //an example of an error would be searching for a user that does not exist!
    if (!user) {
        res.status(404).send("User Not Found");//404 usually means something was not found
        return;
    } else {
        //if there is no error go ahead and respond with the user that is being searched for! 
        res.send(user);
    }
};
//this function will allow me to create a user!
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
//this function will allow me to update an existing user!
const updateUser = (req, res) => {
    let userId = (parseInt(req.params.id) -1);
    let user = users.find(user => user.id === userId);
    let payload = req.body;
    //have to make sure to send an error code for a user that does not exist! 
    if (user.length < userId){
        res.status(404).send("bad request here");
        return;
    } else {
        //go through with the updating if there are no errors!
        Object.keys(payload).map((key) => {
            user[key] = payload[key];
            
        });
        payload.id = user[id].id -1;
        res.send(user);


    }
    
};
//this function will allow me to delete a user!
const deleteUser = (req, res) => {
   let userId = (parseInt(req.params.id)-1);
   let user = users.find(user => user.id === userId);
   //once again have to make sure the user exist 
   if (!user){
       res.status(404).send('bad request here');
       return;
       //once there are no errors we are allowed to continue 
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


//got  to remember to export all the functions so that they can be accesed from the index file!
module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};