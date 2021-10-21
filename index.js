function saturdayFun(activity = "roller-skate"){
  return`This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog!");

function mondayWork(thing ="go to the office"){
    return `This Monday, I will ${thing}.`;

}

function wrapAdjective(star="*"){
   return function(msg="a hard worker"){
       return `You are ${star}${msg}${star}!`;
   }
}
