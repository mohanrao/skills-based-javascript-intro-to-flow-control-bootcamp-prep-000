
function basicTeenager(age) {
   if(age >=13 && age <=19){
     return "You are a teenager!";
   }
}

function teenager(age) {
   if(age >=13 && age <=19){
     return "You are a teenager!";
  }else {
     return "You are not a teenager";
 }
}

function ageChecker(age) {
   if(age >=13 && age <=19){
     return "You are a teenager!";
  }else if(age> 19){
     return "You are a grownup";
   }else if(age <=12){
     return "You are a kid";
   }
}

function ternaryTeenager(age) {
   return age >=13 && age<=19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {

  var result;
  switch (age >=13 && age<=19) {
    case true:
      result = "You are a teenager";
      break;
    default:
      result = "You have an age";
  }
  return result;
}
