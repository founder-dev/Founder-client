function useCategory (text){
    
    var dicText = {
        'salad': 'food',
        'yogurt': 'food',
        'milk': 'food',
        'fried-rice': 'food',
        'shake': 'food',
        'cereal': 'food',
        'bread': 'food',
        'chicken': 'food',
        'coffee-cold': 'food',
        'coffee-beans': 'food',
        'coffee-capsule': 'food',
        'tea': '차',
        'pad': '생리대',
        'teeth': '칫솔',
        'pack': '팩',  
        'cotton': '화장솜',
        'lens': '렌즈',
        'shaver': '면도기',
        'lacto': '유산균',
        'supplement-pack': '생필품',
        'skin-care-pack': '스킨케어팩',
        'care-pack': '케어팩',
        'collagen': '콜라겐',
        'lens_cotton_collagen' : '렌즈 / 화장솜 / 콜라겐',
        'protein': '프로틴',
        'food': '식품',
        'beverage': '음료',
        'goods': '생필품',
        'health': '건강'
      };
    
      return dicText[text];
}

export default useCategory