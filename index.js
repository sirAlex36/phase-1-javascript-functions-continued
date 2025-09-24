const mondayWork = function(task = "go to the office") {
  return(`This Monday, I will ${task}.`);
}
function saturdayFun(activity="roller-skate"){
  return(`This Saturday, I want to ${activity}`+ '!');

}
function wrapAdjective(flair="*"){
  return function(adjective){
    return `You are ${flair}${adjective}${flair}!`;
  }
} 