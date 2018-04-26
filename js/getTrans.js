/*
parmas:["queryArray":""]
return:translate array
*/

function getTrans(queryArray,successFun){

    var appid = '20180425000150418';
    var key = 'egFj6Vwsu8JRYEMqFApg';
    var salt = (new Date).getTime();
    var query = queryArray;
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var from = 'en';
    var to = 'zh';
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
       
       //chrome 安全策略静止HTTP 和 https 混用，因为是托管在github上，说以将api改为https        
    $.ajax({
        url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        },
        success:  function (data) {
            console.log(data);
            console.log(data.trans_result[0].dst)

            //data is json data of translate result,such as: 
            //{"from":"en","to":"zh","trans_result":[{src: "A!powerful!movie!that!demands!attention", dst: "A！强大！电影！那！要求！注意"}]}
            var trans_result = data.trans_result[0];

            //将源词汇和翻译结果整合成字典（key-value 对象）
            var srcArray = trans_result["src"].split("!")
            var dstArray = trans_result["dst"].split("！")//中文 "！"；
            console.log(srcArray)
            console.log(dstArray)
            var trans_result_map = {}
            for(let i = 0;i< srcArray.length;i++){
                trans_result_map[srcArray[i]] = dstArray[i]
            }
            console.log(trans_result_map)

             successFun(trans_result_map)
        } 
    });
}