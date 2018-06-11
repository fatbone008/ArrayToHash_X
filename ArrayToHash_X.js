let a = [  
   {  
      "area":"\u534e\u5317",
      "city":"\u5317\u4eac\u5e02",
      "district":"\u4e30\u53f0\u533a",
      "province":"\u5317\u4eac\u5e02"
   },
   {  
      "area":"\u534e\u5317",
      "city":"\u5317\u4eac\u5e02",
      "district":"\u897f\u57ce\u533a",
      "province":"\u5317\u4eac\u5e02"
   },
   {  
      "area":"\u534e\u5357",
      "city":"\u6df1\u5733\u5e02",
      "district":"\u798f\u7530\u533a",
      "province":"\u5e7f\u4e1c\u7701"
   },
   {  
      "area":"",
      "city":"\u60e0\u4ed8\u901a\u516c\u53f8",
      "district":"\u6f14\u793a\u533a",
      "province":"\u6613\u751f\u6d3b\u81ea\u6cbb\u533a"
   },
   {  
      "area":"\u534e\u5317",
      "city":"\u4fdd\u5b9a\u5e02",
      "district":"\u5f90\u6c34\u533a",
      "province":"\u6cb3\u5317\u7701"
   },
   {  
      "area":"\u534e\u5317",
      "city":"\u4fdd\u5b9a\u5e02",
      "district":"\u6d9e\u6c34\u53bf",
      "province":"\u6cb3\u5317\u7701"
   }
]

//转区域格式
let serialOptions = (options) => {
   //一： 将原数组根据地区名称hash化
   console.log("原数据转hash解析前:", a);

   let o ={}

   options.map(option => {
      o[option.area] = {}
   })

   options.map(option => {
      o[option.area][option.province] = {}
   })

   options.map(option => {
      o[option.area][option.province][option.city] = {}
   })

   options.map(option => {
      o[option.area][option.province][option.city][option.district] = option.district
   })

   console.log('\n原数据转hash解析后：',JSON.stringify(o));
   // let result = resolveOptions(o['华北']);

   //将hash结果解析成options
   let result = []
   for(let k in o){
      let n = resolveOptions(o[k]);
      result.push({value:k, label:k, children:n});
   }
   console.log('\n最终结果:', JSON.stringify(result));
   return result;
}

//递归转换key值，返回key下数组
var resolveOptions = (value) => {
   let arr = []
   let but = []
   console.log("\n进入函数",value)
   for(let a in value){
      if(typeof value[a] === 'string') {
         let x = {value: value[a], label: value[a]}
         but.push(x);
      } else {
         let chld = resolveOptions(value[a])
         arr.push({value: a, label:a, children:chld})
      }
   }
   if(but.length > 0){
      console.log("\n最底层返回：",but)
      return but;
   } 
   console.log("\n中间层返回：", arr)
   // return {value:value, label:value, children:arr}
   return arr
}

serialOptions(a);