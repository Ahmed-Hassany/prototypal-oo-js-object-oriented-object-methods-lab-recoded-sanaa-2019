function BoardMember(name, homeState,training){
  this.name=name
  this.homeState =homeState
  this.training =training
}

BoardMember.prototype.BoardMember=function(){
  return `No, I must disagree`
}

BoardMember.prototype.approve=function(){
  return `No, I must disagree`
}
