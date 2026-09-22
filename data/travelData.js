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
        "description": "东京、银山温泉、函馆、札幌、小樽、美瑛、旭岳。",
        "order": 2,
        "startDate": "2027-01-13",
        "endDate": "2027-01-26",
        "timezone": "Asia/Tokyo",
        "note": "日本行程使用当地时间，比北京时间快1小时。列车及航班时间尚未确定，住宿按地区列出。",
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
            8,
            1
          ],
          [
            10,
            2
          ],
          [
            12,
            1
          ],
          [
            14,
            0
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
          "title": "函馆 — 札幌",
          "description": "上午五稜郭、函馆奉行所；下午乘特急北斗前往札幌。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-6"
          },
          "transport": "JR特急北斗；指定席待预订",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "五稜郭 / 奉行所",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "函馆站",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "札幌",
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
            "train-hokuto",
            "hotel-day-6"
          ]
        },
        {
          "id": "day-7",
          "day": 7,
          "date": "2027-01-19",
          "title": "札幌市内游览",
          "description": "早晨北海道神宫，随后前往开拓村与北海道博物馆。时间不足时两馆选一。",
          "accommodation": {
            "area": "札幌",
            "bookingId": "hotel-day-6"
          },
          "transport": "市内轨道交通、巴士、步行",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "北海道神宫",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "开拓村",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "北海道博物馆",
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
            "hotel-day-6"
          ]
        },
        {
          "id": "day-8",
          "day": 8,
          "date": "2027-01-20",
          "title": "札幌 — 小樽",
          "description": "上午前往小樽、寄存行李，游览旧手宫线、运河、色内。傍晚天狗山，缆车停运则留在运河。",
          "accommodation": {
            "area": "小樽",
            "bookingId": "hotel-day-8"
          },
          "transport": "JR、市内交通、步行；缆车视运营",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "札幌",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "小樽 · 旧手宫线",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "运河 / 色内",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "天狗山",
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
            "hotel-day-8"
          ]
        },
        {
          "id": "day-9",
          "day": 9,
          "date": "2027-01-21",
          "title": "小樽市内游览",
          "description": "游览车站周边坡道、雪街、色内旧建筑和旧日本邮船小樽支店一带；下午运河、港口。",
          "accommodation": {
            "area": "小樽",
            "bookingId": "hotel-day-8"
          },
          "transport": "步行及市内交通",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "小樽坡道 / 雪街",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "色内旧建筑",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "运河",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "港口",
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
            "hotel-day-8"
          ]
        },
        {
          "id": "day-10",
          "day": 10,
          "date": "2027-01-22",
          "title": "小樽 — 旭川 / 美瑛",
          "description": "上午经札幌前往旭川或美瑛。下午入住、补给，落实次日交通。",
          "accommodation": {
            "area": "旭川或美瑛",
            "bookingId": "hotel-day-10"
          },
          "transport": "JR；接续和落脚地待定",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "小樽",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "札幌",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "旭川 / 美瑛",
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
            "hotel-day-10"
          ]
        },
        {
          "id": "day-11",
          "day": 11,
          "date": "2027-01-23",
          "title": "美瑛一日游",
          "description": "上午美瑛丘陵、Christmas Tree；下午白须瀑布。青池点灯作为可选项目，需安排夜间返程。",
          "accommodation": {
            "area": "旭川或美瑛",
            "bookingId": "hotel-day-10"
          },
          "transport": "当地包车或其他交通待定；须覆盖夜间回程",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "美瑛丘陵 / Christmas Tree",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "白须瀑布",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "青池点灯（可选）",
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
            "hotel-day-10"
          ]
        },
        {
          "id": "day-12",
          "day": 12,
          "date": "2027-01-24",
          "title": "旭川 / 美瑛 — 旭岳",
          "description": "前往旭岳温泉，缆车运行且天气合适时上山观景。雪鞋活动另约向导；停运时留在温泉区。",
          "accommodation": {
            "area": "旭岳温泉",
            "bookingId": "hotel-day-12"
          },
          "transport": "当地交通、缆车；接驳待定",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "旭川 / 美瑛",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "旭岳温泉",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "旭岳缆车",
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
            "hotel-day-12"
          ]
        },
        {
          "id": "day-13",
          "day": 13,
          "date": "2027-01-25",
          "title": "旭岳 / 美瑛 — 札幌 / 新千岁",
          "description": "上午可选旭岳或美瑛补拍，当天返回札幌或新千岁附近。天气不佳时直接返程。",
          "accommodation": {
            "area": "札幌或新千岁附近",
            "bookingId": "hotel-day-13"
          },
          "transport": "当地交通及JR；衔接待定",
          "distance": null,
          "duration": null,
          "timeline": [
            {
              "place": "旭岳 / 美瑛（可选）",
              "time": "",
              "detail": "",
              "leg": ""
            },
            {
              "place": "札幌 / 新千岁附近",
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
              "place": "札幌",
              "time": null
            },
            "duration": null,
            "seat": "指定席待预订",
            "price": null,
            "status": "planned",
            "notes": "",
            "dayIds": [
              "day-6"
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
            "city": "札幌",
            "checkInDate": "2027-01-18",
            "checkOutDate": "2027-01-20",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-6",
              "day-7"
            ]
          },
          {
            "id": "hotel-day-8",
            "name": null,
            "city": "小樽",
            "checkInDate": "2027-01-20",
            "checkOutDate": "2027-01-22",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-8",
              "day-9"
            ]
          },
          {
            "id": "hotel-day-10",
            "name": null,
            "city": "旭川或美瑛",
            "checkInDate": "2027-01-22",
            "checkOutDate": "2027-01-24",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-10",
              "day-11"
            ]
          },
          {
            "id": "hotel-day-12",
            "name": null,
            "city": "旭岳温泉",
            "checkInDate": "2027-01-24",
            "checkOutDate": "2027-01-25",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
            "dayIds": [
              "day-12"
            ]
          },
          {
            "id": "hotel-day-13",
            "name": null,
            "city": "札幌或新千岁附近",
            "checkInDate": "2027-01-25",
            "checkOutDate": "2027-01-26",
            "address": null,
            "checkInTime": null,
            "checkOutTime": null,
            "price": null,
            "status": "planned",
            "notes": "住宿区域已列入计划，具体酒店尚未预订。",
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
          "title": "安排美瑛一日交通",
          "description": "包括可选青池点灯后的回程。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": [
            "day-11"
          ]
        },
        {
          "id": "asahidake-transfer",
          "title": "确认旭岳往返交通",
          "description": "1月25日返回札幌或新千岁附近。",
          "deadline": null,
          "deadlineLabel": "出发前",
          "priority": "normal",
          "completed": false,
          "dayIds": [
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
        }
      ],
      "practicalNotes": [
        {
          "title": "交通与住宿",
          "items": [
            "优先安排银山温泉、旭岳温泉及小樽住宿；银山接送时间需与大石田列车衔接。",
            "银山至函馆经仙台或福岛的换乘方案，按实际班次选择。特急北斗需预订指定席。",
            "旭川或美瑛连住两晚，住宿地点与包车接送点一并安排。美瑛交通需覆盖青池夜间返程。"
          ]
        },
        {
          "title": "开放时间与天气",
          "items": [
            "明治神宫1月当前16:20闭门；开拓村、北海道博物馆冬季当前16:30闭馆。2027年开放时间以官方通知为准。",
            "函馆山、天狗山、旭岳缆车受风雪影响；分别以港区、运河、温泉区作为备选。",
            "美瑛青池冬季可能封冻积雪；摄影只在允许停留处，不进入农田。",
            "旭岳冬季观光不包含夏季姿见池环线和登顶；雪地活动需按向导、装备及天气安排。"
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
          "旭岳缆车：实时运营与天气",
          "https://asahidake.hokkaido.jp/ja/",
          "以当日状态为准，2027年时段另核。"
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
