class Notification { 
    constructor(NotificationId,createdTime,content,receiver){
        this.NotificationId= NotificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send (){
       return  "Notifacation has been to "
    }
}

class EmailNotification extends Notification {
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver);
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    getsent(){
       return  this.receiver;
    }
 }

 class SMSNotification extends Notification{ 
    constructor(notificationId,createdTime,content,phoneNumber){
        super(notificationId,createdTime,content);
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    getsend (){
       return this.phoneNumber;
    }
}
const email = new EmailNotification("001","19.24","test sent email","parot.ket@gmail.com")
console.log(email.send() );
console.log(email.getsent());
const SMS = new SMSNotification("002","19.25","test send to SMS","0830781234")
console.log(SMS.send() )
console.log(SMS.getsend())