

class workers{
    constructor(id, firstName, lastName, address, tel, mail){
        this.id=id;
         this.firstName=firstName;
         this.lastName=lastName;
         this.address=address;
         this.tel=tel;
         this.mail=mail;
         this.isActive=true;
    }

    get Id(){
        return this.id;
    }
    set Id(Id){
        this.id=Id;
    }

    get FirstName(){
        return this.firstName;
    }
    set FirstName(FirstName){
        this.firstName=FirstName;
    }

    get LastName(){
        return this.lastName;
    }
    set LastName(LastName){
        this.lastName=LastName;
    }

    get Address(){
        return this.address;
    }
    set Address(Address){
        this.address=Address;
    }

    get Tel(){
        return this.tel;
    }
    set Tel(Tel){
        this.tel=Tel;
    }

    get Mail(){
        return this.mail;
    }
    set Mail(Mail){
        this.mail=Mail;
    }

    get IsActive(){
        return this.isActive;
    }
    set IsActive(IsActive){//check it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        this.isActive=IsActive;
    }

    //קבלת רשימת שמות וטלפונים של כל העובדים, 


    //קבלת הפרטים המלאים עבור עובד בודד,


    // מחיקת עובד,


    // הוספת עובד


     //ועדכון עובד

     
} 
