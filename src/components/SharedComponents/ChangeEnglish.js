
function ChangeEnglish({text}){
   
  if(text == "Salad")
      {return "샐러드"}
    else if(text == 'Yogurt') 
      {return "그릭요거트"}
    else if(text == 'Milk') 
      {return "우유"}
    else if(text == 'FriedRice')
      {return "볶음밥"}
    else
    {return "한글번역안됨"};
}

export default ChangeEnglish;