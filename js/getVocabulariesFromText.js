function isVocabularyInLocalStorage(vocabulary){
	return localStorage[vocabulary] === undefined
}

function getVocabulariesFromText(text){

	//var vocabulariesArray = text.trim().split(" ") //不好，不能适应多种变化

	var vocabulariesArray = text.match(/[a-zA-Z]+/g)

	vocabulariesArray = new Set(vocabulariesArray)//去重
	vocabulariesArray = [...vocabulariesArray]

	console.log(vocabulariesArray)

    //next realse 用正则提取字符串
	//var vocabulariesArray = text.

	return vocabulariesArray.filter(isVocabularyInLocalStorage)
}