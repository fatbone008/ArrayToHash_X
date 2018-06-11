### This is a convert method that tranlate array like:
```
[ { area: '华北', city: '北京市', district: '丰台区', province: '北京市' },
  { area: '华北', city: '北京市', district: '西城区', province: '北京市' },
  { area: '华南', city: '深圳市', district: '福田区', province: '广东省' },
  { area: '', city: '惠付通公司', district: '演示区', province: '易生活自治区' },
  { area: '华北', city: '保定市', district: '徐水区', province: '河北省' },
  { area: '华北', city: '保定市', district: '涞水县', province: '河北省' } ]
```
### to
```
[  
   {  
      "value":"华北",
      "label":"华北",
      "children":[  
         {  
            "value":"北京市",
            "label":"北京市",
            "children":[  
               {  
                  "value":"北京市",
                  "label":"北京市",
                  "children":[  
                     {  
                        "value":"丰台区",
                        "label":"丰台区"
                     },
                     {  
                        "value":"西城区",
                        "label":"西城区"
                     }
                  ]
               }
            ]
         },
         {  
            "value":"河北省",
            "label":"河北省",
            "children":[  
               {  
                  "value":"保定市",
                  "label":"保定市",
                  "children":[  
                     {  
                        "value":"徐水区",
                        "label":"徐水区"
                     },
                     {  
                        "value":"涞水县",
                        "label":"涞水县"
                     }
                  ]
               }
            ]
         }
      ]
   },
   {  
      "value":"华南",
      "label":"华南",
      "children":[  
         {  
            "value":"广东省",
            "label":"广东省",
            "children":[  
               {  
                  "value":"深圳市",
                  "label":"深圳市",
                  "children":[  
                     {  
                        "value":"福田区",
                        "label":"福田区"
                     }
                  ]
               }
            ]
         }
      ]
   },
   {  
      "value":"",
      "label":"",
      "children":[  
         {  
            "value":"易生活自治区",
            "label":"易生活自治区",
            "children":[  
               {  
                  "value":"惠付通公司",
                  "label":"惠付通公司",
                  "children":[  
                     {  
                        "value":"演示区",
                        "label":"演示区"
                     }
                  ]
               }
            ]
         }
      ]
   }
]
```

ES 6 is at least support.