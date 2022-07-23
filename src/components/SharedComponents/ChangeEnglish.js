function ChangeEnglish({ text }) {
  
  var dicText = {
    salad: '샐러드',
    yogurt: '그릭요거트',
    milk: '우유',
    friedRice: '볶음밥',
  };

  return dicText[text];
}

export default ChangeEnglish;
