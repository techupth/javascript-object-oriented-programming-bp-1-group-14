class user {
    constructor (id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class postList {
    constructor (posts){
    this.posts = [];
    }
    addPost(post){
        this.posts.push(post)
    }
    sharepost(){
        console.log("You've shared post " + Post.title + " to your friend." )
    }
}
class Post {
    constructor(id,title,content,comment){
this.id = id;
this.title = title;
this.content = content;
this.comment = [];
    }
    addComment(comments){
        this.comment.push(comments)
    }
}
class Comment {
    constructor(id,content,createdBy,like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = like;
    }
    addLike (){
        like += 1;
    }
}
class Facebook {
    constructor(groupList,pageList,){
        this.groupList = groupList;
        this.pageList = pageList;
    }
    addGroup(){
        this.groupList+=1
    }
    addPage(){
        this.pageList+=1
    }
}

class FacebookPage {
    constructor(name){
        this.name = name;
    }
}
class FacebookGroup {
    constructor(name){
        this.name=name;
    }
}
class Notification {
    constructor(id){
        this.id = id;
    }
    send(){
        console.log("Notification: " + comment.createdBy + " has just commented on this post - " + post.title) 
    }
}