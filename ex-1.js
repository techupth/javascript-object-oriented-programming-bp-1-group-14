class EmailNotification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver
    }
    sent(){
        console.log("Notification has been sent to " + this.receiver)
    }
 }

class SMSNotification { 
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send (){
        console.log("Notification has been sent to " + this.phonenumber)
    }
}

const email = new EmailNotification("001","19.24","test sent email","parot.ket@gmail.com")
console.log(email)
const SMS = new SMSNotification("002","19.25","test send to SMS","0830781234")
console.log(SMS)