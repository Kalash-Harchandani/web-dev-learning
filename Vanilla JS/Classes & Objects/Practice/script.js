let DATA = "Access Denied";

class User{
    constructor(fullName,email){
        this.name = fullName;
        this.mail = email;
    }
    viewData(){
       console.log("Data = ", DATA);
    }
}

let stud1 = new User();
stud1.name = "Kalash Harchandani";
stud1.mail = "kalashharchandani@gmail.com";


class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "Some new value"
        
    }
}

let admin = new Admin();