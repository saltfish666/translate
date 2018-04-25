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
               
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
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
            //document.getElementById("showTransResult").value = data.trans_result[0].dst
             successFun(data.trans_result)
        } 
    });
}