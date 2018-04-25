function isVocabularyInLocalStorage(vocabulary){
	return localStorage[vocabulary] === undefined
}

function getVocabulariesFromText(text){

	var vocabulariesArray = text.trim().split(" ") //不好，不能适应多种变化

    //next realse 用正则提取字符串
	//var vocabulariesArray = text.

	return vocabulariesArray.filter(isVocabularyInLocalStorage)
}