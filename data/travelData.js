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
        "description": "东京、银山温泉、函馆、洞爷湖、札幌、小樽、美瑛；流冰与热海早樱为机动选项。",
        "order": 2,
        "startDate": "2027-01-13",
        "endDate": "2027-01-26",
        "timezone": "Asia/Tokyo",
        "note": "日本行程使用当地时间，比北京时间快1小时。1月23—25日为机动窗口；流冰和热海早樱只在临近日期确认条件合适后启用。城市间优先JR／新干线，景区接驳优先Taxi／包车；2027年班次和冬季路况临行复核。",
        "connectionNote": "",
        "overviewRoute": {
          "main": [
            { "days": "出发", "place": "北京", "detail": "1月13日" },
            { "days": "D1—D2", "place": "东京", "detail": "1月13—14日 · 住2晚" },
            { "days": "D3", "place": "银山温泉", "detail": "1月15日 · 住1晚" },
            { "days": "D4—D5", "place": "函馆", "detail": "1月16—17日 · 住2晚" },
            { "days": "D6", "place": "洞爷湖温泉", "detail": "1月18日 · 住1晚" },
            { "days": "D7—D11", "place": "札幌", "detail": "1月19—23日 · 默认住5晚" },
            { "days": "D12—D13", "place": "东京", "detail": "1月24—25日 · 住2晚" },
            { "days": "D14", "place": "北京", "detail": "1月26日返回" }
          ],
          "excursions": [
            { "days": "D9", "title": "小樽", "detail": "从札幌乘JR往返，当晚仍住札幌。" },
            { "days": "D10", "title": "旭山动物园 → 美瑛", "detail": "从札幌包车往返，当晚回札幌。" }
          ],
          "options": [
            { "days": "D11—D12", "title": "网走流冰", "detail": "仅在流冰与天气条件理想时启用；从札幌前往网走，D12飞东京。" },
            { "days": "D13", "title": "热海早樱", "detail": "仅在花情理想时从东京往返热海，当晚住东京。" }
          ]
        }
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
          "transport": "山形新干线／JR至大石田，旅馆接送或Taxi",
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
          "description": "早餐后从银山温泉直接包车到仙台站，再乘东北／北海道新干线到新函馆北斗，换乘JR到函馆；发车与接驳按实际班次确认。",
          "accommodation": {
            "area": "函馆",
            "bookingId": "hotel-day-4"
          },
          "transport": "银山温泉→仙台包车；东北／北海道新干线、JR",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "银山温泉",
              "time": "早餐后",
              "detail": "退房，包车直达仙台站",
              "leg": "冬季车程按路况预留余量"
            },
            {
              "place": "仙台站",
              "time": "待定",
              "detail": "换乘东北／北海道新干线",
              "leg": ""
            },
            {
              "place": "新函馆北斗",
              "time": "待定",
              "detail": "换乘JR到函馆",
              "leg": ""
            },
            {
              "place": "函馆",
              "time": "晚间",
              "detail": "入住休息",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [
            "提前确认银山温泉至仙台包车及新干线衔接",
            "新干线指定席和新函馆北斗至函馆的JR"
          ],
          "notes": [
            "冰雪路况和仙台站转车时间应留足余量"
          ],
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
          "description": "函馆完整一天：上午五稜郭与函馆奉行所，下午元町、教堂群、八幡坂、旧函馆区公会堂，傍晚视天气登函馆山。",
          "accommodation": {
            "area": "函馆",
            "bookingId": "hotel-day-4"
          },
          "transport": "市内交通、步行；函馆山交通视运营",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "五稜郭 / 函馆奉行所",
              "time": "上午",
              "detail": "游览城郭与奉行所，开放时间临行复核",
              "leg": ""
            },
            {
              "place": "元町 / 教堂群",
              "time": "下午",
              "detail": "历史街区步行",
              "leg": ""
            },
            {
              "place": "八幡坂",
              "time": "下午",
              "detail": "沿坡道拍照",
              "leg": ""
            },
            {
              "place": "旧函馆区公会堂",
              "time": "下午",
              "detail": "留意闭馆时间",
              "leg": ""
            },
            {
              "place": "函馆山",
              "time": "傍晚",
              "detail": "按天气与缆车运营决定上山",
              "leg": ""
            }
          ],
          "sights": [
            "五稜郭",
            "函馆奉行所",
            "元町",
            "教堂群",
            "八幡坂",
            "旧函馆区公会堂",
            "函馆山"
          ],
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
          "description": "函馆直接包车到洞爷湖，下午按天气游览昭和新山、有珠山；日落前停止赶景点，留在湖畔欣赏洞爷湖与羊蹄山蓝调，住洞爷湖一晚。",
          "accommodation": {
            "area": "洞爷湖温泉",
            "bookingId": "hotel-day-6"
          },
          "transport": "函馆至洞爷湖包车，景区接驳包车／Taxi",
          "distance": null,
          "duration": "车程与山地开放情况按冬季路况复核",
          "timeline": [
            {
              "place": "函馆",
              "time": "上午",
              "detail": "退房后包车出发",
              "leg": ""
            },
            {
              "place": "昭和新山",
              "time": "下午",
              "detail": "按道路与现场运营安排停留",
              "leg": ""
            },
            {
              "place": "有珠山",
              "time": "下午",
              "detail": "缆车与观景视天气及运营情况",
              "leg": ""
            },
            {
              "place": "洞爷湖 / 羊蹄山",
              "time": "日落前至蓝调",
              "detail": "停止赶景点，湖畔观景；羊蹄山可见度取决于天气",
              "leg": ""
            },
            {
              "place": "洞爷湖温泉",
              "time": "晚上",
              "detail": "入住湖畔温泉酒店",
              "leg": ""
            }
          ],
          "sights": [
            "昭和新山",
            "有珠山",
            "洞爷湖",
            "羊蹄山远眺"
          ],
          "food": [
            "提前确认洞爷湖酒店晚餐时间"
          ],
          "reservations": [
            "函馆至洞爷湖全天包车及景区接驳",
            "洞爷湖温泉酒店；确认晚餐时间"
          ],
          "notes": [
            "日落前结束跨景点移动，蓝调时段留给湖畔",
            "有珠山缆车与羊蹄山能见度受冬季天气影响"
          ],
          "weatherClothing": [
            "湖畔风大，准备防风外层和防滑鞋"
          ],
          "bookingIds": [
            "hotel-day-6"
          ]
        },
        {
          "id": "day-7",
          "day": 7,
          "date": "2027-01-19",
          "title": "洞爷湖 — 札幌",
          "description": "上午在洞爷湖慢游，约10:30—11:00从酒店包车前往札幌；下午开始札幌市内行程。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-7"
          },
          "transport": "洞爷湖→札幌包车；札幌市内地铁／Taxi／步行",
          "distance": null,
          "duration": "包车时间按天气与道路情况确认",
          "timeline": [
            {
              "place": "洞爷湖湖畔",
              "time": "上午",
              "detail": "慢游、看湖景、早餐",
              "leg": ""
            },
            {
              "place": "洞爷湖温泉",
              "time": "约10:30—11:00",
              "detail": "从酒店包车出发",
              "leg": ""
            },
            {
              "place": "札幌",
              "time": "下午",
              "detail": "入住后开始市内游览",
              "leg": ""
            }
          ],
          "sights": [
            "洞爷湖湖畔",
            "札幌市中心"
          ],
          "food": [],
          "reservations": [
            "预订洞爷湖酒店至札幌的包车"
          ],
          "notes": [
            "冬季公路通行情况临行复核，下午行程保持弹性"
          ],
          "weatherClothing": [
            "湖边停留时注意防风保暖"
          ],
          "bookingIds": [
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
          "transport": "市内轨道交通、Taxi、步行",
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
          "title": "小樽一日往返（住札幌）",
          "description": "从札幌乘JR到小樽，游览旧手宫线、色内旧建筑、运河与港口；傍晚视天气前往天狗山，晚上乘JR返回札幌。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-7"
          },
          "transport": "札幌⇄小樽JR；市内步行／Taxi；天狗山缆车视运营",
          "distance": null,
          "duration": "札幌至小樽单程约40分钟，班次临行复核",
          "timeline": [
            {
              "place": "札幌",
              "time": "上午",
              "detail": "乘JR出发，不更换酒店",
              "leg": ""
            },
            {
              "place": "小樽 · 旧手宫线 / 色内",
              "time": "中午前后",
              "detail": "历史街区步行",
              "leg": ""
            },
            {
              "place": "小樽运河 / 港口",
              "time": "下午",
              "detail": "运河与港口",
              "leg": ""
            },
            {
              "place": "天狗山",
              "time": "傍晚",
              "detail": "天气或缆车不合适时留在运河",
              "leg": ""
            },
            {
              "place": "札幌",
              "time": "晚上",
              "detail": "乘JR返回札幌住宿",
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
            "小樽为一日往返，行李留在札幌酒店"
          ],
          "weatherClothing": [
            "坡道和结冰路面需要防滑鞋"
          ],
          "bookingIds": [
            "hotel-day-7"
          ]
        },
        {
          "id": "day-10",
          "day": 10,
          "date": "2027-01-22",
          "title": "札幌出发 · 旭山动物园与美瑛",
          "description": "从札幌酒店包车出发，约10:30—13:00游旭山动物园；下午到美瑛看雪原、Christmas Tree、白须瀑布与白金青池点灯，夜间包车直返札幌。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-7"
          },
          "transport": "札幌酒店往返全天包车；景点之间同车接驳",
          "distance": null,
          "duration": "全天长距离包车；返回札幌较晚，须留足冰雪路况余量",
          "timeline": [
            {
              "place": "札幌酒店",
              "time": "清晨",
              "detail": "包车出发，按冬季路况倒推发车时间",
              "leg": ""
            },
            {
              "place": "旭山动物园",
              "time": "约10:30—13:00",
              "detail": "游览与午餐；开放和活动时间临行核对",
              "leg": ""
            },
            {
              "place": "美瑛雪原 / Christmas Tree",
              "time": "下午",
              "detail": "仅在允许停车位置观景，不进入私人农田",
              "leg": ""
            },
            {
              "place": "白须瀑布",
              "time": "下午",
              "detail": "视道路与剩余日照停留",
              "leg": ""
            },
            {
              "place": "白金青池",
              "time": "点灯时段",
              "detail": "确认当季点灯时间后观赏",
              "leg": ""
            },
            {
              "place": "札幌酒店",
              "time": "夜间",
              "detail": "同车直返，不在旭川住宿",
              "leg": ""
            }
          ],
          "sights": [
            "旭山动物园",
            "美瑛雪原",
            "Christmas Tree",
            "白须瀑布",
            "白金青池点灯"
          ],
          "food": [
            "动物园或车上准备简餐"
          ],
          "reservations": [
            "预订札幌酒店往返旭川、美瑛与白金的冬季全天包车",
            "临行确认动物园开放及青池点灯时间"
          ],
          "notes": [
            "这一天车程很长，若风雪、交通或点灯安排受影响，应缩减停留点而非压缩安全余量",
            "Christmas Tree周围是私人农田，禁止进入雪地和路边停车"
          ],
          "weatherClothing": [
            "长时间在户外，准备保暖层、手套和防滑鞋"
          ],
          "bookingIds": [
            "hotel-day-7"
          ]
        },
        {
          "id": "day-11",
          "day": 11,
          "date": "2027-01-23",
          "title": "机动窗口 · 札幌或网走",
          "description": "默认留在札幌自由调整；只有临近日期确认网走流冰状况非常好时，才启用女满别／网走流冰分支，1月23日飞女满别并前往网走。",
          "accommodation": {
            "area": "札幌（启用流冰分支时为网走）",
            "bookingId": null
          },
          "transport": "默认札幌市内轨道交通／Taxi；启用分支时札幌→女满别航班＋Taxi／包车",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "札幌",
              "time": "白天",
              "detail": "默认机动、休息或补看市内景点",
              "leg": ""
            },
            {
              "place": "女满别 / 网走",
              "time": "仅流冰条件极好时",
              "detail": "1月23日从札幌飞女满别，接驳至网走；订票前核对流冰与天气",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [
            "根据临近日期的流冰、天气与航班情况决定是否启用网走分支"
          ],
          "notes": [
            "流冰不是固定行程；若不启用则继续住札幌"
          ],
          "weatherClothing": [],
          "bookingIds": []
        },
        {
          "id": "day-12",
          "day": 12,
          "date": "2027-01-24",
          "title": "机动窗口 · 札幌／网走 → 东京",
          "description": "默认从札幌飞东京；若前一天启用网走流冰分支，1月24日看流冰后从女满别直接飞东京，不返回札幌。夜宿东京。",
          "accommodation": {
            "area": "东京",
            "bookingId": "hotel-day-13"
          },
          "transport": "默认札幌→东京航班；流冰分支网走→女满别Taxi／包车、女满别→东京航班",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "札幌 / 网走",
              "time": "上午",
              "detail": "默认札幌机动；网走分支按当天流冰和船只运营情况观测",
              "leg": ""
            },
            {
              "place": "新千岁 / 女满别机场",
              "time": "下午或傍晚",
              "detail": "分别从札幌或网走出发，飞往东京",
              "leg": ""
            },
            {
              "place": "东京",
              "time": "晚上",
              "detail": "入住东京酒店",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [
            "临近日期决定札幌或女满别飞东京的衔接；确认航班与流冰船运营"
          ],
          "notes": [
            "网走流冰行程仅在临近日期条件非常好时启用；该分支不返回札幌"
          ],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-13"
          ]
        },
        {
          "id": "day-13",
          "day": 13,
          "date": "2027-01-25",
          "title": "机动窗口 · 东京／热海早樱",
          "description": "东京机动日；只有临近日期确认热海早樱花情很好，才安排东京—热海JR一日往返。无论是否启用热海，1月25日晚必须住东京。",
          "accommodation": {
            "area": "东京",
            "bookingId": "hotel-day-13"
          },
          "transport": "东京市内轨道交通／Taxi；启用热海分支时东京⇄热海JR",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "东京",
              "time": "上午",
              "detail": "市内机动；若热海早樱花情很好，乘JR前往热海",
              "leg": ""
            },
            {
              "place": "热海",
              "time": "仅花情很好时",
              "detail": "早樱观赏，临行核对花情与开放情况",
              "leg": ""
            },
            {
              "place": "东京",
              "time": "晚上",
              "detail": "热海往返后回东京；必须住东京",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [
            "确认东京酒店覆盖1月24日和25日晚"
          ],
          "notes": [
            "热海早樱不是固定行程，只在临近日期花情很好时启用",
            "1月25日晚无论如何住东京"
          ],
          "weatherClothing": [],
          "bookingIds": [
            "hotel-day-13"
          ]
        },
        {
          "id": "day-14",
          "day": 14,
          "date": "2027-01-26",
          "title": "东京 — 北京",
          "description": "从东京机场飞北京，预留办理国际航班手续与东京市内去机场的时间；机场和班次待出票确认。",
          "accommodation": {
            "area": "",
            "bookingId": null
          },
          "transport": "东京市内交通／Taxi、飞机",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "东京机场",
              "time": "待定",
              "detail": "按实际航班提前办理出境手续",
              "leg": ""
            },
            {
              "place": "北京",
              "time": "待定",
              "detail": "返程抵达",
              "leg": ""
            }
          ],
          "sights": [],
          "food": [],
          "reservations": [],
          "notes": [],
          "weatherClothing": [],
          "bookingIds": [
            "flight-tokyo-beijing"
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
            "id": "flight-tokyo-beijing",
            "number": null,
            "date": "2027-01-26",
            "airline": null,
            "departure": {
              "place": "东京机场",
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
            "notes": "东京机场、班次及时间按实际出票确认；1月25日晚住东京。",
            "dayIds": [
              "day-14"
            ]
          }
        ],
        "trains": [],
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
            "checkOutDate": "2027-01-24",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "札幌为1月19—23日晚的默认住宿；1月23日仅在流冰条件极好时改住网走。",
            "dayIds": [
              "day-7",
              "day-8",
              "day-9",
              "day-10",
              "day-11"
            ]
          },
          {
            "id": "hotel-day-13",
            "name": null,
            "city": "东京",
            "checkInDate": "2027-01-24",
            "checkOutDate": "2027-01-26",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "东京住1月24日、25日两晚；1月25日晚必须在东京。",
            "dayIds": [
              "day-12",
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
          "description": "北京至东京、东京至北京；1月24日根据流冰分支衔接札幌或女满别飞东京。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "ginzan-transfer",
          "title": "确认银山旅馆接送",
          "description": "1月15日确认旅馆接送；1月16日安排银山温泉直接包车到仙台站。",
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
          "description": "确认东京至大石田、仙台至新函馆北斗／函馆的新干线与JR换乘。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": []
        },
        {
          "id": "biei-transport",
          "title": "预订札幌往返旭川与美瑛包车",
          "description": "1月22日札幌酒店往返：旭山动物园、雪原、Christmas Tree、白须瀑布、白金青池点灯；确认夜间返程。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-10"
          ]
        },
        {
          "id": "toya-stay",
          "title": "预订洞爷湖温泉住宿",
          "description": "确认1月18日湖景、晚餐时间及函馆至洞爷湖的包车。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-6"
          ]
        },
        {
          "id": "flexible-days",
          "title": "确认机动窗口",
          "description": "临近日期根据网走流冰和热海早樱花情决定分支；1月24日抵东京，25日晚必须住东京。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "high",
          "completed": false,
          "dayIds": [
            "day-11",
            "day-12",
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
          "title": "美瑛冬季包车",
          "content": "1月22日从札幌酒店包车往返旭山动物园、美瑛雪原、Christmas Tree、白须瀑布与白金青池点灯；车程长，保留天气与夜间回程余量。Christmas Tree周边为私人农田，禁止进入雪地和路边停车。"
        }
      ],
      "practicalNotes": [
        {
          "title": "交通与住宿",
          "items": [
            "1月15日银山温泉住一晚，16日从旅馆直接包车到仙台，再乘东北／北海道新干线至新函馆北斗并换乘JR到函馆。",
            "1月18日函馆包车直达洞爷湖，19日上午慢游后约10:30—11:00包车去札幌。",
            "1月21日小樽当天往返札幌；22日札幌酒店包车往返旭山动物园与美瑛；1月23日默认住札幌，24日和25日晚住东京。",
            "城市间优先JR／新干线；短距离景区接驳优先Taxi／包车，交通班次与冰雪路况临行复核。"
          ]
        },
        {
          "title": "机动窗口与天气",
          "items": [
            "1月23—25日机动：仅临近日期确认流冰状况非常好时，23日飞女满别／网走，24日看流冰后女满别直飞东京。",
            "只有临近日期热海早樱花情很好时，才从东京于1月25日往返热海；当晚必须住东京。",
            "1月18日昭和新山、有珠山视运营和天气游览，日落前停止赶景点，留给洞爷湖与羊蹄山蓝调。",
            "函馆山与天狗山缆车受风雪影响；白金青池点灯时间与冬季道路通行临行核对。"
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
          "旭山动物园：2027冬季开放时间",
          "https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/event/event202612.html",
          "2027年1月2日至4月7日10:30—15:30，15:00停止入园。"
        ],
        [
          "美瑛观光协会：圣诞树",
          "https://www.biei-hokkaido.jp/en/facility/christmas-tree",
          "冬季应使用出租车或观光巴士，禁止进入私人农田与路边停车。"
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
