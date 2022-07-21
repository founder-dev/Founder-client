function ChangeEnglish({ text }) {
  
  var dicText = {
    Salad: '샐러드',
    Yogurt: '그릭요거트',
    Milk: '우유',
    FriedRice: '볶음밥',
  };

  return dicText[text];
}

export default ChangeEnglish;
