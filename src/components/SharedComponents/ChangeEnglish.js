function ChangeEnglish({ text }) {
  
  var dicText = {
    'salad': '샐러드',
    'yogurt': '그릭요거트',
    'milk': '우유',
    'fried-rice': '볶음밥',
    'shake': '쉐이크',
    'cereal': '시리얼',
    'bread': '빵',
    'chicken': '치킨',
    'coffee-cold': '커피',
    'coffee-beans': '원두',
    'coffee-capsule': '캡슐커피',
    'tea': '차',
    'pad': '생리대',
    'teeth': '칫솔',
    'pack': '팩',  
    'cotton': '화장솜',
    'lens': '렌즈',
    'shaver': '면도기',
    'lacto': '유산균',
    'supplement': '생필품',
    'skin-care-pack': '스킨케어팩',
    'care-pack': '케어팩',
    'collagen': '콜라겐',
    'protein': '프로틴',
    'food': '식품',
    'beverage': '음료',
    'goods': '생필품',
    'health': '건강'
  };

  return dicText[text];
}

export default ChangeEnglish;
