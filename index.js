function BoardMember(name, homeState,training){
  this.name=name
  this.homeState =homeState
  this.training =training
}

BoardMember.prototype.BoardMember=function(){
  return `No, I must disagree`
}

BoardMember.prototype.approve=function(){
  return `You can do that!`
}

BoardMember.prototype.doCharity=function(){
  return `I like to help people.`
}

BoardMember.prototype.releasePressStatement=function(){
  return `I like to help people.`
}
