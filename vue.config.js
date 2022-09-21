module.exports={
    lintOnSave: false ,
    devServer:{
        host: 'localhost',        //设置本地服务器   选填
        port: 8081,  
    proxy:{
        "/api":{target:"https://data.stats.gov.cn/easyquery.htm?m=QueryData&dbcode=hgnd&rowcode=zb&colcode=sj&wds=%5B%5D&dfwds=%5B%7B%22wdcode%22%3A%22zb%22%2C%22valuecode%22%3A%22A0301%22%7D%5D&k1=1653225671180&h=1",
        changeOrigin:true,
        pathRewrite:{
            "/api":"/"
        },
        // "/api1":{target:"https://data.stats.gov.cn/easyquery.htm?m=QueryData&dbcode=hgnd&rowcode=zb&colcode=sj&wds=%5B%5D&dfwds=%5B%5D&k1=1653368698483&h=1",
        // changeOrigin:true,
        // pathRewrite:{
        //     "^/api1":""
        // },

    }
    }
        }
    
}