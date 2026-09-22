// 唯一旅行数据源。保留已有 id，可在网页更新后继续使用原来的勾选状态。
const travelData = {
  "schemaVersion": 1,
  "trips": [
    {
      "trip": {
        "id": "xinjiang",
        "title": "新疆 · 伊犁自驾",
        "dateLabel": "1月5日—11日 · 7天6晚",
        "monthLabel": "01.05",
        "description": "赛里木湖、夏塔、库尔德宁；伊宁取还车。",
        "order": 1,
        "startDate": "2027-01-05",
        "endDate": "2027-01-11",
        "timezone": "Asia/Shanghai",
        "note": "全程使用北京时间。伊宁取还车，赛里木湖、夏塔、库尔德宁均按景区自驾安排。",
        "connectionNote": "1月12日：北京。1月13日：出发去日本。",
        "overviewRefs": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            1,
            3
          ],
          [
            2,
            1
          ],
          [
            3,
            3
          ],
          [
            5,
            1
          ],
          [
            7,
            1
          ],
          [
            7,
            3
          ]
        ]
      },
      "itinerary": [
        {
          "id": "day-1",
          "day": 1,
          "date": "2027-01-05",
          "title": "营口东 — 北京 — 伊宁",
          "description": "",
          "accommodation": {
            "area": "伊宁",
            "bookingId": "hotel-day-1"
          },
          "transport": "高铁 / 飞机 / 提车",
          "distance": null,
          "duration": "高铁2小时47分；飞行5小时15分",
          "timeline": [
            {
              "bookingId": "train-yingkou-beijing",
              "endpoint": "departure",
              "detail": "高铁出发",
              "showDuration": true
            },
            {
              "bookingId": "train-yingkou-beijing",
              "endpoint": "arrival",
              "detail": "抵达后前往首都机场",
              "leg": "前往机场"
            },
            {
              "bookingId": "flight-ca1255",
              "endpoint": "departure",
              "detail": "起飞",
              "showDuration": true
            },
            {
              "bookingId": "flight-ca1255",
              "endpoint": "arrival",
              "detail": "落地后提车、入住"
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "flight-ca1255",
            "train-yingkou-beijing",
            "hotel-day-1",
            "car-yining"
          ]
        },
        {
          "id": "day-2",
          "day": 2,
          "date": "2027-01-06",
          "title": "伊宁 — 赛里木湖",
          "description": "",
          "accommodation": {
            "area": "景区星空营地（暂定）",
            "bookingId": "hotel-day-2"
          },
          "transport": "自驾",
          "distance": null,
          "duration": "驾车约2.5小时",
          "timeline": [
            {
              "place": "伊宁",
              "time": "10:00",
              "detail": "出发",
              "leg": "自驾约2.5小时"
            },
            {
              "place": "赛里木湖东门",
              "time": "约12:30",
              "detail": "进入景区，开始环湖",
              "leg": "环湖自驾"
            },
            {
              "place": "松树头",
              "time": "日落",
              "detail": "看日落",
              "leg": ""
            },
            {
              "place": "景区星空营地",
              "time": "晚上",
              "detail": "暂定入住",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-2",
            "car-yining"
          ]
        },
        {
          "id": "day-3",
          "day": 3,
          "date": "2027-01-07",
          "title": "赛里木湖 — 夏塔",
          "description": "",
          "accommodation": {
            "area": "夏塔附近",
            "bookingId": "hotel-day-3"
          },
          "transport": "自驾",
          "distance": null,
          "duration": "驾车约5.5小时",
          "timeline": [
            {
              "place": "住宿地",
              "time": "起床",
              "detail": "住景区内08:00起床；住景区外06:00起床",
              "leg": ""
            },
            {
              "place": "S弯",
              "time": "日出",
              "detail": "看日出",
              "leg": ""
            },
            {
              "place": "赛里木湖",
              "time": "10点多",
              "detail": "出发前往夏塔",
              "leg": "自驾约5.5小时"
            },
            {
              "place": "夏塔",
              "time": "下午",
              "detail": "抵达、入住",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-3",
            "car-yining"
          ]
        },
        {
          "id": "day-4",
          "day": 4,
          "date": "2027-01-08",
          "title": "夏塔景区自驾",
          "description": "",
          "accommodation": {
            "area": "夏塔附近",
            "bookingId": "hotel-day-3"
          },
          "transport": "自驾",
          "distance": null,
          "duration": "景区游览一整天",
          "timeline": [
            {
              "place": "夏塔景区",
              "time": "全天",
              "detail": "景区自驾游览",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-3",
            "car-yining"
          ]
        },
        {
          "id": "day-5",
          "day": 5,
          "date": "2027-01-09",
          "title": "夏塔 — 库尔德宁",
          "description": "",
          "accommodation": {
            "area": "库尔德宁景区内",
            "bookingId": "hotel-day-5"
          },
          "transport": "自驾",
          "distance": null,
          "duration": "驾车约4.5小时",
          "timeline": [
            {
              "place": "夏塔",
              "time": "出发",
              "detail": "前往库尔德宁",
              "leg": "自驾约4.5小时"
            },
            {
              "place": "库尔德宁",
              "time": "抵达后",
              "detail": "进入景区，住景区内",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-5",
            "car-yining"
          ]
        },
        {
          "id": "day-6",
          "day": 6,
          "date": "2027-01-10",
          "title": "库尔德宁全天游览",
          "description": "",
          "accommodation": {
            "area": "景区内或小镇，按游玩情况选择",
            "bookingId": "hotel-day-6"
          },
          "transport": "自驾",
          "distance": null,
          "duration": "景区游览一整天",
          "timeline": [
            {
              "place": "库尔德宁",
              "time": "全天",
              "detail": "景区游玩一整天",
              "leg": ""
            },
            {
              "place": "景区或小镇",
              "time": "晚上",
              "detail": "根据游玩情况选择住宿",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-6",
            "car-yining"
          ]
        },
        {
          "id": "day-7",
          "day": 7,
          "date": "2027-01-11",
          "title": "库尔德宁 — 伊宁 — 北京",
          "description": "",
          "accommodation": {
            "area": "北京",
            "bookingId": null
          },
          "transport": "自驾 / 飞机",
          "distance": null,
          "duration": "驾车约3.5小时；晚间航班",
          "timeline": [
            {
              "place": "库尔德宁",
              "time": "出发",
              "detail": "返回伊宁",
              "leg": "自驾约3.5小时"
            },
            {
              "place": "伊宁",
              "time": "抵达后",
              "detail": "还车，前往机场",
              "leg": ""
            },
            {
              "bookingId": "flight-return-beijing",
              "endpoint": "departure",
              "detail": "国航或南航航班回北京",
              "leg": "飞机"
            },
            {
              "bookingId": "flight-return-beijing",
              "endpoint": "arrival",
              "detail": "抵达"
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "flight-return-beijing",
            "car-yining"
          ]
        }
      ],
      "bookings": {
        "flights": [
          {
            "id": "flight-ca1255",
            "number": "CA1255",
            "date": "2027-01-05",
            "airline": "国航",
            "departure": {
              "place": "北京首都机场",
              "time": "15:10",
              "terminal": null
            },
            "arrival": {
              "place": "伊宁",
              "time": "20:25",
              "terminal": null
            },
            "duration": "5小时15分",
            "baggage": null,
            "checkInReminder": null,
            "price": null,
            "status": "planned",
            "notes": "计划中，尚未出票。",
            "dayIds": [
              "day-1"
            ]
          },
          {
            "id": "flight-return-beijing",
            "number": null,
            "date": "2027-01-11",
            "airline": "国航或南航",
            "departure": {
              "place": "伊宁机场",
              "time": "晚间",
              "terminal": null
            },
            "arrival": {
              "place": "北京",
              "time": null,
              "terminal": null
            },
            "duration": null,
            "baggage": null,
            "checkInReminder": null,
            "price": null,
            "status": "planned",
            "notes": "具体班次与到达机场待确认。",
            "dayIds": [
              "day-7"
            ]
          }
        ],
        "trains": [
          {
            "id": "train-yingkou-beijing",
            "number": null,
            "date": "2027-01-05",
            "departure": {
              "place": "营口东",
              "time": "09:26"
            },
            "arrival": {
              "place": "北京朝阳",
              "time": "12:13"
            },
            "duration": "2小时47分",
            "seat": null,
            "price": null,
            "status": "planned",
            "notes": "计划中，尚未出票，车次待确认。",
            "dayIds": [
              "day-1"
            ]
          }
        ],
        "hotels": [
          {
            "id": "hotel-day-1",
            "name": null,
            "city": "伊宁",
            "checkInDate": "2027-01-05",
            "checkOutDate": "2027-01-06",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-1"
            ]
          },
          {
            "id": "hotel-day-2",
            "name": null,
            "city": "景区星空营地（暂定）",
            "checkInDate": "2027-01-06",
            "checkOutDate": "2027-01-07",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-2"
            ]
          },
          {
            "id": "hotel-day-3",
            "name": null,
            "city": "夏塔附近",
            "checkInDate": "2027-01-07",
            "checkOutDate": "2027-01-09",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-3",
              "day-4"
            ]
          },
          {
            "id": "hotel-day-5",
            "name": null,
            "city": "库尔德宁景区内",
            "checkInDate": "2027-01-09",
            "checkOutDate": "2027-01-10",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-5"
            ]
          },
          {
            "id": "hotel-day-6",
            "name": null,
            "city": "景区内或小镇，按游玩情况选择",
            "checkInDate": "2027-01-10",
            "checkOutDate": "2027-01-11",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-6"
            ]
          }
        ],
        "cars": [
          {
            "id": "car-yining",
            "model": null,
            "pickupDate": "2027-01-05",
            "returnDate": "2027-01-11",
            "pickupTime": "航班落地后",
            "returnTime": null,
            "pickupLocation": "伊宁，具体门店待确认",
            "returnLocation": "伊宁，具体门店待确认",
            "duration": null,
            "price": null,
            "status": "planned",
            "notes": "租期与费用按实际取还车时间确认。",
            "dayIds": [
              "day-1",
              "day-2",
              "day-3",
              "day-4",
              "day-5",
              "day-6",
              "day-7"
            ]
          }
        ],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "book-outbound",
          "title": "落实去程火车与机票",
          "description": "营口东至北京朝阳、CA1255目前均未出票。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-1"
          ]
        },
        {
          "id": "book-return",
          "title": "落实伊宁回北京航班",
          "description": "计划1月11日晚返京。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-7"
          ]
        },
        {
          "id": "reserve-car",
          "title": "预订伊宁租车",
          "description": "确认车型、取还车时间地点及租赁条款。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-scenic-tickets",
          "title": "安排景区门票",
          "description": "赛里木湖、夏塔、库尔德宁。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "confirm-starry-camp",
          "title": "确认星空营地住宿",
          "description": "暂定1月6日晚住景区内。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": [
            "day-2"
          ]
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "down-jacket",
              "name": "羽绒服",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "shell",
              "name": "防风外套",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "fleece",
              "name": "抓绒外套",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "thermal",
              "name": "保暖内衣",
              "quantity": "2套",
              "note": "",
              "packed": false
            },
            {
              "id": "hat",
              "name": "保暖帽",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "gloves",
              "name": "手套",
              "quantity": "1副",
              "note": "",
              "packed": false
            },
            {
              "id": "warm-socks",
              "name": "羊毛袜",
              "quantity": "3双",
              "note": "",
              "packed": false
            },
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            },
            {
              "id": "driving-license",
              "name": "驾驶证",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "outdoor",
          "icon": "🧗",
          "title": "户外装备",
          "items": [
            {
              "id": "winter-shoes",
              "name": "防滑保暖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "warm-flask",
              "name": "保温杯",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "driving",
          "icon": "🚗",
          "title": "自驾装备",
          "items": [
            {
              "id": "car-charger",
              "name": "车载充电器",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "phone-mount",
              "name": "手机支架",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "snow-equipment",
              "name": "车辆冬季装备",
              "quantity": "1套",
              "note": "与租车方确认随车配置。",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "穿衣",
          "content": "按冬季行程准备分层衣物、防风外套、手套和防滑保暖鞋；每天按实际天气增减。"
        },
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        },
        {
          "id": "driving",
          "icon": "🚗",
          "title": "自驾",
          "content": "伊宁取还车。赛里木湖、夏塔和库尔德宁按景区自驾安排；取车时核对车辆状况和随车配置。"
        },
        {
          "id": "fuel",
          "icon": "⛽",
          "title": "加油",
          "content": "按所租车辆要求选择油品，长途转场前检查余量；还车油量按租赁合同约定。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "japan",
        "title": "日本 · 东京—银山—北海道",
        "dateLabel": "1月13日—26日 · 14天13晚",
        "monthLabel": "01.13",
        "description": "东京、银山温泉、函馆、洞爷湖、札幌、小樽、旭川、美瑛、富良野。",
        "order": 2,
        "startDate": "2027-01-13",
        "endDate": "2027-01-26",
        "timezone": "Asia/Tokyo",
        "note": "日本行程使用当地时间，比北京时间快1小时。洞爷湖安排在函馆与札幌之间留宿；列车、巴士和包车时间按2027年冬季班次复核。",
        "connectionNote": "",
        "overviewRefs": [
          [
            1,
            0
          ],
          [
            1,
            1
          ],
          [
            3,
            2
          ],
          [
            4,
            4
          ],
          [
            6,
            2
          ],
          [
            7,
            2
          ],
          [
            9,
            1
          ],
          [
            10,
            2
          ],
          [
            11,
            1
          ],
          [
            12,
            1
          ],
          [
            12,
            4
          ],
          [
            13,
            2
          ],
          [
            14,
            1
          ]
        ]
      },
      "itinerary": [
        {
          "id": "day-1",
          "day": 1,
          "date": "2027-01-13",
          "title": "北京 — 东京",
          "description": "北京飞东京，抵达后进城入住。时间充足时游览浅草寺、浅草老街和隅田川。",
          "accommodation": {
            "area": "东京",
            "bookingId": "hotel-day-1"
          },
          "transport": "飞机、市内交通、步行；机场和班次待定",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "北京",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "东京",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "浅草 / 隅田川",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "flight-beijing-tokyo",
            "hotel-day-1"
          ]
        },
        {
          "id": "day-2",
          "day": 2,
          "date": "2027-01-14",
          "title": "东京市内游览",
          "description": "07:30—08:30 明治神宫；约10:00—12:30 东京国立博物馆；下午谷中、根津。",
          "accommodation": {
            "area": "东京",
            "bookingId": "hotel-day-1"
          },
          "transport": "市内交通、步行",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "明治神宫",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "东京国立博物馆",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "谷中 / 根津",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-1"
          ]
        },
        {
          "id": "day-3",
          "day": 3,
          "date": "2027-01-15",
          "title": "东京 — 银山温泉",
          "description": "东京经大石田前往银山温泉。下午入住，日落前后拍摄温泉街，晚上泡温泉。",
          "accommodation": {
            "area": "银山温泉旅馆",
            "bookingId": "hotel-day-3"
          },
          "transport": "铁路及接驳；旅馆接送待确认",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "东京",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "大石田",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "银山温泉",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-3"
          ]
        },
        {
          "id": "day-4",
          "day": 4,
          "date": "2027-01-16",
          "title": "银山温泉 — 函馆",
          "description": "早餐后退房，全天转场至函馆。经仙台或福岛连接东北新干线，到新函馆北斗后换乘至函馆。",
          "accommodation": {
            "area": "函馆",
            "bookingId": "hotel-day-4"
          },
          "transport": "接驳、铁路、新干线、市区连接；班次待定",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "银山温泉",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "大石田",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "仙台或福岛转乘",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "新函馆北斗",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "函馆",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-4"
          ]
        },
        {
          "id": "day-5",
          "day": 5,
          "date": "2027-01-17",
          "title": "函馆市内游览",
          "description": "上午元町、教堂群、八幡坂；下午港口旧建筑；傍晚上函馆山。天气不适合时留在港区。",
          "accommodation": {
            "area": "函馆",
            "bookingId": "hotel-day-4"
          },
          "transport": "市内交通、步行；函馆山交通视运营",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "元町 / 教堂群",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "八幡坂",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "港口",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "函馆山",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-4"
          ]
        },
        {
          "id": "day-6",
          "day": 6,
          "date": "2027-01-18",
          "title": "函馆 — 洞爷湖",
          "description": "上午游览五稜郭与函馆奉行所，午后乘特急北斗在洞爷站下车，再乘巴士或出租车前往洞爷湖温泉。傍晚沿湖散步，入住湖畔温泉酒店。",
          "accommodation": {
            "area": "洞爷湖温泉",
            "bookingId": "hotel-day-6"
          },
          "transport": "市内交通、JR特急北斗、道南巴士或出租车",
          "distance": null,
          "duration": "函馆至洞爷站约2小时；车站至温泉区约20分钟，按2027班次复核",
          "timeline": [
            {
              "place": "五稜郭 / 函馆奉行所",
              "time": "上午",
              "detail": "退房后游览，行李寄存在函馆站",
              "leg": ""
            },
            {
              "bookingId": "train-hokuto",
              "endpoint": "departure",
              "detail": "乘特急北斗前往洞爷",
              "showDuration": true
            },
            {
              "bookingId": "train-hokuto",
              "endpoint": "arrival",
              "detail": "换乘巴士或出租车",
              "leg": "约20分钟"
            },
            {
              "place": "洞爷湖温泉",
              "time": "傍晚",
              "detail": "湖畔散步、入住温泉酒店",
              "leg": ""
            }
          ],
          "sights": [
            "五稜郭",
            "洞爷湖湖畔"
          ],
          "food": [
            "前往车站前准备午餐或便当"
          ],
          "reservations": [
            "特急北斗指定席",
            "洞爷湖温泉酒店",
            "确认洞爷站至温泉区接驳"
          ],
          "notes": [
            "大件行李建议提前寄往札幌或酒店",
            "冬季风雪可能影响铁路和巴士"
          ],
          "weatherClothing": [
            "湖畔风大，准备防风外层和防滑鞋"
          ],
          "bookingIds": [
            "train-hokuto",
            "hotel-day-6"
          ]
        },
        {
          "id": "day-7",
          "day": 7,
          "date": "2027-01-19",
          "title": "洞爷湖 — 札幌",
          "description": "上午留给洞爷湖。天气好时搭乘冬季观光巴士或游船，天气一般则沿湖散步、泡温泉。午后前往札幌，傍晚入住。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-7"
          },
          "transport": "冬季观光巴士或步行；巴士接驳、JR特急北斗",
          "distance": null,
          "duration": "洞爷湖温泉至札幌约2.5—3小时，含接驳",
          "timeline": [
            {
              "place": "洞爷湖湖畔",
              "time": "上午",
              "detail": "冬季观光巴士、游船或湖边慢游，按天气选择",
              "leg": ""
            },
            {
              "place": "洞爷湖温泉",
              "time": "午后",
              "detail": "退房后前往洞爷站",
              "leg": "巴士或出租车约20分钟"
            },
            {
              "bookingId": "train-toya-sapporo",
              "endpoint": "arrival",
              "detail": "抵达后入住",
              "leg": ""
            }
          ],
          "sights": [
            "洞爷湖湖畔"
          ],
          "food": [],
          "reservations": [
            "确认冬季观光巴士或游船运营",
            "预订洞爷至札幌的特急指定席"
          ],
          "notes": [
            "冬季巴士活动以当季公告为准，恶劣天气时只保留湖畔散步和温泉"
          ],
          "weatherClothing": [
            "湖边停留时注意防风保暖"
          ],
          "bookingIds": [
            "train-toya-sapporo",
            "hotel-day-7"
          ]
        },
        {
          "id": "day-8",
          "day": 8,
          "date": "2027-01-20",
          "title": "札幌市内游览",
          "description": "早晨北海道神宫，随后前往开拓村与北海道博物馆。时间不足时两馆选一，晚上回到市中心。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-7"
          },
          "transport": "市内轨道交通、巴士、步行",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "北海道神宫",
              "time": "上午",
              "detail": "",
              "leg": ""
            },
            {
              "place": "开拓村",
              "time": "中午后",
              "detail": "",
              "leg": ""
            },
            {
              "place": "北海道博物馆",
              "time": "下午",
              "detail": "时间不足时与开拓村二选一",
              "leg": ""
            },
            {
              "place": "札幌市中心",
              "time": "晚上",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [
            "北海道神宫",
            "开拓村",
            "北海道博物馆"
          ],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [
            "室外步行较多，穿防滑保暖鞋"
          ],
          "bookingIds": [
            "hotel-day-7"
          ]
        },
        {
          "id": "day-9",
          "day": 9,
          "date": "2027-01-21",
          "title": "札幌 — 小樽",
          "description": "上午乘JR前往小樽，寄存行李后游览旧手宫线、色内旧建筑、运河与港口。傍晚视天气前往天狗山，住小樽一晚。",
          "accommodation": {
            "area": "小樽",
            "bookingId": "hotel-day-9"
          },
          "transport": "JR、市内交通、步行；天狗山缆车视运营",
          "distance": null,
          "duration": "札幌至小樽约40分钟",
          "timeline": [
            {
              "place": "札幌",
              "time": "上午",
              "detail": "乘JR出发",
              "leg": "约40分钟"
            },
            {
              "place": "小樽 · 旧手宫线 / 色内",
              "time": "中午前后",
              "detail": "",
              "leg": ""
            },
            {
              "place": "小樽运河 / 港口",
              "time": "下午",
              "detail": "",
              "leg": ""
            },
            {
              "place": "天狗山",
              "time": "傍晚",
              "detail": "缆车停运时留在运河",
              "leg": ""
            }
          ],
          "sights": [
            "旧手宫线",
            "色内旧建筑",
            "小樽运河",
            "天狗山"
          ],
          "food": [
            "寿司或海鲜，按当天排队情况选择"
          ],
          "reservations": [],
          "notes": [
            "小樽压缩为一晚，重点保留运河、旧建筑和雪夜"
          ],
          "weatherClothing": [
            "坡道和结冰路面需要防滑鞋"
          ],
          "bookingIds": [
            "hotel-day-9"
          ]
        },
        {
          "id": "day-10",
          "day": 10,
          "date": "2027-01-22",
          "title": "小樽 — 旭川",
          "description": "上午补看小樽坡道或车站周边，午后经札幌前往旭川。入住后休息，为次日动物园和后一天包车行程做准备。",
          "accommodation": {
            "area": "旭川",
            "bookingId": "hotel-day-10"
          },
          "transport": "JR，经札幌换乘特急列车",
          "distance": null,
          "duration": "约2.5—3小时，按换乘确定",
          "timeline": [
            {
              "place": "小樽坡道 / 车站周边",
              "time": "上午",
              "detail": "补拍后取行李",
              "leg": ""
            },
            {
              "bookingId": "train-otaru-asahikawa",
              "endpoint": "departure",
              "detail": "经札幌换乘前往旭川",
              "showDuration": true
            },
            {
              "bookingId": "train-otaru-asahikawa",
              "endpoint": "arrival",
              "detail": "入住、补给",
              "leg": ""
            }
          ],
          "sights": [
            "小樽坡道"
          ],
          "food": [],
          "reservations": [
            "预订札幌至旭川特急指定席"
          ],
          "notes": [
            "避免把旭山动物园塞进转场日下午，冬季闭园早"
          ],
          "weatherClothing": [],
          "bookingIds": [
            "train-otaru-asahikawa",
            "hotel-day-10"
          ]
        },
        {
          "id": "day-11",
          "day": 11,
          "date": "2027-01-23",
          "title": "旭山动物园",
          "description": "安排完整的动物园日。2027年冬季已公布开放时间为10:30—15:30，建议开园前抵达；企鹅散步等活动以当天公告为准。",
          "accommodation": {
            "area": "旭川",
            "bookingId": "hotel-day-10"
          },
          "transport": "旭川站往返动物园巴士",
          "distance": null,
          "duration": "园内约5小时，另计往返巴士",
          "timeline": [
            {
              "place": "旭川站",
              "time": "上午",
              "detail": "提前乘巴士前往动物园",
              "leg": ""
            },
            {
              "place": "旭山动物园",
              "time": "10:30—15:30",
              "detail": "冬季动物展示；企鹅散步按当天公告",
              "leg": ""
            },
            {
              "place": "旭川市区",
              "time": "傍晚",
              "detail": "返回、休息",
              "leg": ""
            }
          ],
          "sights": [
            "旭山动物园"
          ],
          "food": [
            "园内用餐或自备简餐"
          ],
          "reservations": [
            "临行核对动物园活动日程和往返巴士"
          ],
          "notes": [
            "最后入园时间为15:00；不要安排在转场日下午"
          ],
          "weatherClothing": [
            "长时间在户外，准备保暖层、手套和防滑鞋"
          ],
          "bookingIds": [
            "hotel-day-10"
          ]
        },
        {
          "id": "day-12",
          "day": 12,
          "date": "2027-01-24",
          "title": "美瑛雪原 — 白金青池 — 森林精灵露台",
          "description": "包车完成旭川、美瑛、白金和富良野的单向串联：白天拍摄孤独的圣诞树，傍晚看白金青池冬季点灯，最后前往森林精灵露台，住富良野。",
          "accommodation": {
            "area": "富良野",
            "bookingId": "hotel-day-12"
          },
          "transport": "冬季包车或带司机车辆；不建议自行驾车",
          "distance": null,
          "duration": "建议包车约10小时",
          "timeline": [
            {
              "place": "旭川",
              "time": "约09:30",
              "detail": "退房后包车出发",
              "leg": ""
            },
            {
              "place": "美瑛 · 孤独的圣诞树",
              "time": "上午",
              "detail": "仅在道路安全位置拍摄",
              "leg": ""
            },
            {
              "place": "美瑛 / 白金区域",
              "time": "下午",
              "detail": "根据天气调整停留时间",
              "leg": ""
            },
            {
              "place": "白金青池",
              "time": "约17:00",
              "detail": "观看冬季点灯；1月通常17:00开始",
              "leg": ""
            },
            {
              "place": "富良野 · 森林精灵露台",
              "time": "约18:30—20:00",
              "detail": "夜间亮灯，结束后入住富良野",
              "leg": ""
            }
          ],
          "sights": [
            "孤独的圣诞树",
            "白金青池冬季点灯",
            "森林精灵露台"
          ],
          "food": [
            "准备车上简餐，晚餐确认酒店或富良野市区"
          ],
          "reservations": [
            "预订可覆盖旭川出发、富良野结束的冬季包车",
            "确认森林精灵露台店铺营业情况"
          ],
          "notes": [
            "圣诞树周边是私人农田，禁止进入雪地、禁止路边停车",
            "冬季青池通常结冰覆雪，重点是夜间灯光而非蓝色水面",
            "森林精灵露台当前冬季营业至20:45，2027年需再次确认"
          ],
          "weatherClothing": [
            "全天低温并有夜间户外停留，准备暖宝宝和备用手套"
          ],
          "bookingIds": [
            "hotel-day-12"
          ]
        },
        {
          "id": "day-13",
          "day": 13,
          "date": "2027-01-25",
          "title": "富良野 — 札幌 / 新千岁",
          "description": "上午留出休息和整理行李时间，中午前后从富良野出发，经泷川转乘JR前往札幌或新千岁机场附近。最后一晚以返程稳定为优先。",
          "accommodation": {
            "area": "札幌或新千岁机场附近",
            "bookingId": "hotel-day-13"
          },
          "transport": "JR，经泷川换乘；若当季有合适直达巴士可替换",
          "distance": null,
          "duration": "约3—4小时，按2027冬季班次确定",
          "timeline": [
            {
              "place": "富良野",
              "time": "上午",
              "detail": "休息、整理行李",
              "leg": ""
            },
            {
              "bookingId": "train-furano-return",
              "endpoint": "departure",
              "detail": "经泷川换乘",
              "showDuration": true
            },
            {
              "bookingId": "train-furano-return",
              "endpoint": "arrival",
              "detail": "入住返程前一晚酒店",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [
            "确认富良野至札幌 / 新千岁的冬季铁路或巴士班次"
          ],
          "notes": [
            "预留雪天延误余量；若返程航班较早，优先住新千岁机场附近"
          ],
          "weatherClothing": [],
          "bookingIds": [
            "train-furano-return",
            "hotel-day-13"
          ]
        },
        {
          "id": "day-14",
          "day": 14,
          "date": "2027-01-26",
          "title": "新千岁 — 北京",
          "description": "前往新千岁机场，飞北京。预留约3小时办理国际出发手续，另计雪天交通时间。",
          "accommodation": {
            "area": "",
            "bookingId": null
          },
          "transport": "飞机",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "新千岁机场",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "北京",
              "time": "",
              "detail": "",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "flight-chitose-beijing"
          ]
        }
      ],
      "bookings": {
        "flights": [
          {
            "id": "flight-beijing-tokyo",
            "number": null,
            "date": "2027-01-13",
            "airline": null,
            "departure": {
              "place": "北京",
              "time": null,
              "terminal": null
            },
            "arrival": {
              "place": "东京",
              "time": null,
              "terminal": null
            },
            "duration": null,
            "baggage": null,
            "checkInReminder": null,
            "price": null,
            "status": "planned",
            "notes": "机场、班次及时间按实际出票确认。",
            "dayIds": [
              "day-1"
            ]
          },
          {
            "id": "flight-chitose-beijing",
            "number": null,
            "date": "2027-01-26",
            "airline": null,
            "departure": {
              "place": "新千岁机场",
              "time": null,
              "terminal": null
            },
            "arrival": {
              "place": "北京",
              "time": null,
              "terminal": null
            },
            "duration": null,
            "baggage": null,
            "checkInReminder": null,
            "price": null,
            "status": "planned",
            "notes": "机场、班次及时间按实际出票确认。",
            "dayIds": [
              "day-14"
            ]
          }
        ],
        "trains": [
          {
            "id": "train-hokuto",
            "number": "特急北斗（班次待确认）",
            "date": "2027-01-18",
            "departure": {
              "place": "函馆",
              "time": null
            },
            "arrival": {
              "place": "洞爷",
              "time": null
            },
            "duration": "约2小时",
            "seat": "指定席待预订",
            "price": null,
            "status": "planned",
            "notes": "全车指定席；2027年冬季班次公布后确认。",
            "dayIds": [
              "day-6"
            ]
          },
          {
            "id": "train-toya-sapporo",
            "number": "特急北斗（班次待确认）",
            "date": "2027-01-19",
            "departure": {
              "place": "洞爷",
              "time": null
            },
            "arrival": {
              "place": "札幌",
              "time": null
            },
            "duration": "约2小时",
            "seat": "指定席待预订",
            "price": null,
            "status": "planned",
            "notes": "另计洞爷湖温泉至洞爷站约20分钟接驳。",
            "dayIds": [
              "day-7"
            ]
          },
          {
            "id": "train-otaru-asahikawa",
            "number": "JR普通列车 + 特急（班次待确认）",
            "date": "2027-01-22",
            "departure": {
              "place": "小樽",
              "time": null
            },
            "arrival": {
              "place": "旭川",
              "time": null
            },
            "duration": "约2.5—3小时",
            "seat": "札幌至旭川段指定席待预订",
            "price": null,
            "status": "planned",
            "notes": "在札幌换乘。",
            "dayIds": [
              "day-10"
            ]
          },
          {
            "id": "train-furano-return",
            "number": "JR富良野线 / 根室本线（班次待确认）",
            "date": "2027-01-25",
            "departure": {
              "place": "富良野",
              "time": null
            },
            "arrival": {
              "place": "札幌或新千岁",
              "time": null
            },
            "duration": "约3—4小时",
            "seat": "特急段指定席待预订",
            "price": null,
            "status": "planned",
            "notes": "通常经泷川换乘；以2027年冬季运行计划为准。",
            "dayIds": [
              "day-13"
            ]
          }
        ],
        "hotels": [
          {
            "id": "hotel-day-1",
            "name": null,
            "city": "东京",
            "checkInDate": "2027-01-13",
            "checkOutDate": "2027-01-15",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-1",
              "day-2"
            ]
          },
          {
            "id": "hotel-day-3",
            "name": null,
            "city": "银山温泉旅馆",
            "checkInDate": "2027-01-15",
            "checkOutDate": "2027-01-16",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-3"
            ]
          },
          {
            "id": "hotel-day-4",
            "name": null,
            "city": "函馆",
            "checkInDate": "2027-01-16",
            "checkOutDate": "2027-01-18",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-4",
              "day-5"
            ]
          },
          {
            "id": "hotel-day-6",
            "name": null,
            "city": "洞爷湖温泉",
            "checkInDate": "2027-01-18",
            "checkOutDate": "2027-01-19",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "建议选择湖景温泉酒店，并确认洞爷站接送。",
            "dayIds": [
              "day-6"
            ]
          },
          {
            "id": "hotel-day-7",
            "name": null,
            "city": "札幌",
            "checkInDate": "2027-01-19",
            "checkOutDate": "2027-01-21",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "札幌住2晚。",
            "dayIds": [
              "day-7",
              "day-8"
            ]
          },
          {
            "id": "hotel-day-9",
            "name": null,
            "city": "小樽",
            "checkInDate": "2027-01-21",
            "checkOutDate": "2027-01-22",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "小樽住1晚，便于看雪夜。",
            "dayIds": [
              "day-9"
            ]
          },
          {
            "id": "hotel-day-10",
            "name": null,
            "city": "旭川",
            "checkInDate": "2027-01-22",
            "checkOutDate": "2027-01-24",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "旭川住2晚，方便动物园和包车出发。",
            "dayIds": [
              "day-10",
              "day-11"
            ]
          },
          {
            "id": "hotel-day-12",
            "name": null,
            "city": "富良野",
            "checkInDate": "2027-01-24",
            "checkOutDate": "2027-01-25",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "建议选择森林精灵露台附近或提供接送的酒店。",
            "dayIds": [
              "day-12"
            ]
          },
          {
            "id": "hotel-day-13",
            "name": null,
            "city": "札幌或新千岁机场附近",
            "checkInDate": "2027-01-25",
            "checkOutDate": "2027-01-26",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "按返程航班时间选择；早班机优先住机场附近。",
            "dayIds": [
              "day-13"
            ]
          }
        ],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "entry-documents",
          "title": "核对护照与入境材料",
          "description": "按本人情况确认适用手续。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "international-flights",
          "title": "落实往返国际航班",
          "description": "北京至东京、新千岁至北京。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "ginzan-transfer",
          "title": "确认银山旅馆接送",
          "description": "与大石田列车时间衔接。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-3",
            "day-4"
          ]
        },
        {
          "id": "long-train-journeys",
          "title": "安排长途铁路",
          "description": "银山至函馆、函馆至札幌等连接。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "biei-transport",
          "title": "预订美瑛—富良野冬季包车",
          "description": "覆盖旭川出发、圣诞树、白金青池点灯、森林精灵露台、富良野结束。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-11"
          ]
        },
        {
          "id": "toya-stay",
          "title": "预订洞爷湖温泉住宿",
          "description": "确认洞爷站接送、湖景房与晚餐时间。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-6"
          ]
        },
        {
          "id": "furano-return",
          "title": "确认富良野返程交通",
          "description": "核对2027冬季JR或巴士班次，并预留雪天延误时间。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-13"
          ]
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "down-jacket",
              "name": "羽绒服",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "shell",
              "name": "防风外套",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "fleece",
              "name": "抓绒外套",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "thermal",
              "name": "保暖内衣",
              "quantity": "2套",
              "note": "",
              "packed": false
            },
            {
              "id": "hat",
              "name": "保暖帽",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "gloves",
              "name": "手套",
              "quantity": "1副",
              "note": "",
              "packed": false
            },
            {
              "id": "warm-socks",
              "name": "羊毛袜",
              "quantity": "3双",
              "note": "",
              "packed": false
            },
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            },
            {
              "id": "adapter",
              "name": "适用的电源转换插头",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            },
            {
              "id": "passport",
              "name": "护照",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "entry-materials",
              "name": "入境所需材料",
              "quantity": "1份",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "outdoor",
          "icon": "🧗",
          "title": "户外装备",
          "items": [
            {
              "id": "winter-shoes",
              "name": "防滑保暖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "warm-flask",
              "name": "保温杯",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "穿衣",
          "content": "按冬季行程准备分层衣物、防风外套、手套和防滑保暖鞋；每天按实际天气增减。"
        },
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        },
        {
          "id": "local-time",
          "icon": "🕒",
          "title": "当地时间",
          "content": "日本时间比北京时间快1小时，页面内日本行程按当地时间显示。"
        },
        {
          "id": "network",
          "icon": "📱",
          "title": "网络",
          "content": "出发前安排适用的漫游或上网方式，并保存住宿、交通资料的离线副本。"
        },
        {
          "id": "winter-route",
          "icon": "🚐",
          "title": "美瑛与富良野交通",
          "content": "圣诞树、白金青池和森林精灵露台分散，且1月道路积雪。优先预订冬季包车或带司机车辆，不建议自行驾车；圣诞树周边为私人农田，禁止进入雪地和路边停车。"
        }
      ],
      "practicalNotes": [
        {
          "title": "交通与住宿",
          "items": [
            "优先锁定银山温泉和洞爷湖温泉住宿；银山接送时间需与大石田列车衔接，洞爷湖酒店优先选择提供洞爷站接送的方案。",
            "函馆至洞爷、洞爷至札幌均可乘特急北斗；2027年班次公布后预订指定席。",
            "旭川住两晚，先完整游览旭山动物园，再从旭川包车经美瑛、白金前往富良野，避免冬季夜间折返。"
          ]
        },
        {
          "title": "开放时间与天气",
          "items": [
            "明治神宫、开拓村和北海道博物馆冬季闭馆较早，2027年开放时间以官方通知为准。",
            "函馆山与天狗山缆车可能受风雪影响，分别以港区和运河散步作为备选。",
            "白金青池1月通常结冰覆雪，主要观看冬季点灯；孤独的圣诞树位于私人农地，禁止进入雪地或路边停车。",
            "洞爷湖冬季观光巴士和游船以当季公告为准；恶劣天气时保留湖畔散步与温泉。"
          ]
        }
      ],
      "sources": [
        [
          "明治神宫：开闭门时间",
          "https://www.meijijingu.or.jp/sanpai/2.php",
          "当前1月6:40—16:20，临行复核。"
        ],
        [
          "东京国立博物馆",
          "https://www.tnm.jp/",
          "按2027年日期核对展览及开馆日。"
        ],
        [
          "银山温泉：2026冬季交通通知",
          "https://www.ginzanonsen.jp/blog/archives/620",
          "上一雪季参考，2026—2027雪季接驳与管制另核。"
        ],
        [
          "JR东日本：仙台站班表入口",
          "https://timetables.jreast.co.jp/timetable/list0913.html",
          "验证转车方向，实际班次另核。"
        ],
        [
          "JR北海道：特急北斗",
          "https://www.jrhokkaido.co.jp/train/tr003_01.html",
          "函馆—札幌及指定席说明。"
        ],
        [
          "北海道开拓村",
          "https://www.kaitaku.or.jp/",
          "当前冬季开放与入场时间。"
        ],
        [
          "北海道博物馆",
          "https://www.hm.pref.hokkaido.lg.jp/guide/",
          "当前冬季开放与入场时间。"
        ],
        [
          "美瑛观光协会：白金青池",
          "https://www.biei-hokkaido.jp/en/shirogane-blue-pond",
          "积雪影响水面；旧年度点灯时刻不直接用于2027年。"
        ],
        [
          "美瑛町：观光与农田保护",
          "https://www.town.biei.hokkaido.jp/tourism/",
          "摄影、停车与农田保护。"
        ],
        [
          "洞爷湖温泉观光协会：交通",
          "https://www.laketoya.com/en/access/",
          "函馆、札幌与洞爷湖温泉之间的铁路和巴士接驳。"
        ],
        [
          "洞爷湖温泉观光协会：冬季巴士",
          "https://www.laketoya.com/en/event/winterbus/",
          "往年1月4日至2月25日运营，2027年班次另核。"
        ],
        [
          "旭山动物园：2027冬季开放时间",
          "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/event/event202612.html",
          "2027年1月2日至4月7日10:30—15:30，15:00停止入园。"
        ],
        [
          "美瑛观光协会：圣诞树",
          "https://www.biei-hokkaido.jp/en/facility/christmas-tree",
          "冬季应使用出租车或观光巴士，禁止进入私人农田与路边停车。"
        ],
        [
          "新富良野王子酒店：森林精灵露台",
          "https://www.princehotels.co.jp/shinfurano/facility/ningle_terrace/",
          "当前冬季营业12:00—20:45，2027年临行复核。"
        ]
      ]
    },
    {
      "trip": {
        "id": "trip-03",
        "title": "川西 · 双桥沟攀冰",
        "dateLabel": "2月下旬 · 天数待定",
        "monthLabel": "02",
        "description": "跟教练学习冰爪、冰镐、绳结及基础攀爬。",
        "order": 3,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-04",
        "title": "林芝 · 南迦巴瓦桃花",
        "dateLabel": "3月底—4月初 · 按花期调整",
        "monthLabel": "03—04",
        "description": "索松村、雅鲁藏布大峡谷、波密。",
        "order": 4,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-05",
        "title": "云南 · 梅里东坡徒步",
        "dateLabel": "4月 · 日期与天数待定",
        "monthLabel": "04",
        "description": "路线按积雪与队伍条件安排。",
        "order": 5,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-06",
        "title": "西藏 · 库拉岗日徒步",
        "dateLabel": "5月上中旬 · 天数待定",
        "monthLabel": "05",
        "description": "白玛林措、折公措、介久措。",
        "order": 6,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-07",
        "title": "云南 · 哈巴黑海杜鹃",
        "dateLabel": "5月底 · 按花期调整",
        "monthLabel": "05",
        "description": "黑海徒步、杜鹃花。",
        "order": 7,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-08",
        "title": "内蒙古 · 学骑马",
        "dateLabel": "6月15日前后 · 约一周",
        "monthLabel": "06.15",
        "description": "控马、快步、慢跑及草原骑行。",
        "order": 8,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-09",
        "title": "西藏 · 大环线",
        "dateLabel": "7月 · 日期与天数待定",
        "monthLabel": "07",
        "description": "起终点、停靠点和交通方式待定。",
        "order": 9,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    },
    {
      "trip": {
        "id": "trip-10",
        "title": "欧洲 · 南法、南意、北意",
        "dateLabel": "8月 · 日期与天数待定",
        "monthLabel": "08",
        "description": "法国南部、意大利南部与北部。",
        "order": 10,
        "startDate": null,
        "endDate": null,
        "timezone": "Asia/Shanghai",
        "note": "",
        "connectionNote": "",
        "overviewRefs": []
      },
      "itinerary": [],
      "bookings": {
        "flights": [],
        "trains": [],
        "hotels": [],
        "cars": [],
        "tickets": [],
        "activities": []
      },
      "todos": [
        {
          "id": "confirm-dates",
          "title": "确认出行日期与交通",
          "description": "按实际出票时间核对转场。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "reserve-stays",
          "title": "安排住宿",
          "description": "确认地址、入住方式与退改条件。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-documents",
          "title": "检查出行证件",
          "description": "核对有效期并备份所需资料。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-insurance",
          "title": "核对保险",
          "description": "确认保障日期与计划活动相符。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "offline-maps",
          "title": "下载离线地图",
          "description": "保存住宿、车站及机场位置。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "save-bookings",
          "title": "保存预订信息",
          "description": "保存已确认的交通和住宿凭证。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "check-weather",
          "title": "查看临行天气",
          "description": "根据临行预报调整衣物与安排。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "pack-bags",
          "title": "整理行李",
          "description": "逐项核对行李清单。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": []
        }
      ],
      "packingList": [
        {
          "id": "clothing",
          "icon": "👕",
          "title": "衣物",
          "items": [
            {
              "id": "change-clothes",
              "name": "换洗衣物",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "socks",
              "name": "袜子",
              "quantity": "按需",
              "note": "",
              "packed": false
            },
            {
              "id": "sleepwear",
              "name": "睡衣",
              "quantity": "1套",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "toiletries",
          "icon": "🧴",
          "title": "洗护",
          "items": [
            {
              "id": "toothbrush",
              "name": "牙刷 / 牙膏",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "skincare",
              "name": "个人洗护用品",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "lip-balm",
              "name": "润唇膏",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "tissues",
              "name": "纸巾",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "medicine",
          "icon": "💊",
          "title": "药品",
          "items": [
            {
              "id": "personal-medicine",
              "name": "个人常用药",
              "quantity": "按需",
              "note": "按个人需要准备。",
              "packed": false
            },
            {
              "id": "plasters",
              "name": "创可贴",
              "quantity": "1包",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "digital",
          "icon": "📱",
          "title": "数码",
          "items": [
            {
              "id": "phone",
              "name": "手机",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "charger",
              "name": "充电器 / 充电线",
              "quantity": "1套",
              "note": "",
              "packed": false
            },
            {
              "id": "power-bank",
              "name": "充电宝",
              "quantity": "1",
              "note": "出发前核对承运方携带要求。",
              "packed": false
            }
          ]
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "items": [
            {
              "id": "id-card",
              "name": "身份证",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "booking-copies",
              "name": "预订凭证",
              "quantity": "1份",
              "note": "已确认订单的离线备份。",
              "packed": false
            }
          ]
        },
        {
          "id": "flight",
          "icon": "✈️",
          "title": "飞行用品",
          "items": [
            {
              "id": "day-bag",
              "name": "随身小包",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "earphones",
              "name": "耳机",
              "quantity": "1",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "stay",
          "icon": "🏨",
          "title": "住宿用品",
          "items": [
            {
              "id": "slippers",
              "name": "拖鞋",
              "quantity": "1双",
              "note": "",
              "packed": false
            },
            {
              "id": "earplugs",
              "name": "耳塞",
              "quantity": "1副",
              "note": "",
              "packed": false
            }
          ]
        },
        {
          "id": "other",
          "icon": "🧳",
          "title": "其他",
          "items": [
            {
              "id": "bottle",
              "name": "水杯",
              "quantity": "1",
              "note": "",
              "packed": false
            },
            {
              "id": "payment",
              "name": "现金 / 支付工具",
              "quantity": "按需",
              "note": "",
              "packed": false
            }
          ]
        }
      ],
      "tips": [
        {
          "id": "navigation",
          "icon": "🗺",
          "title": "导航",
          "content": "出发前保存离线地图、住宿地址与车站位置。"
        },
        {
          "id": "documents",
          "icon": "📄",
          "title": "证件",
          "content": "随身携带本次出行所需证件，并保存重要资料的离线副本。"
        },
        {
          "id": "weather",
          "icon": "🌤",
          "title": "天气",
          "content": "临行和每日出门前查看天气，按当天情况调整安排。"
        }
      ],
      "practicalNotes": [],
      "sources": []
    }
  ]
};
if (typeof module !== "undefined" && module.exports) module.exports = travelData;
else window.TravelData = travelData;
