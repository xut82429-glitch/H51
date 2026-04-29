// ===== 游戏配置 =====
const CONFIG = {
    maxLives: 5,
    baseHP: 100,
    timePerQuestion: 20,
    levels: [
        {
            id: 1,
            name: "病毒入侵",
            icon: "🦠",
            description: "初级病毒正在入侵系统！",
            enemies: [
                { name: "蠕虫病毒", icon: "🐛", hp: 40, attack: 10 },
                { name: "木马程序", icon: "🐴", hp: 50, attack: 12 },
                { name: "广告弹窗", icon: "📢", hp: 30, attack: 8 }
            ],
            boss: { name: "病毒首领", icon: "👾", hp: 80, attack: 15 },
            reward: { coins: 50, exp: 100, items: ["hint"] }
        },
        {
            id: 2,
            name: "钓鱼陷阱",
            icon: "🎣",
            description: "钓鱼网站设下陷阱！",
            enemies: [
                { name: "钓鱼邮件", icon: "📧", hp: 50, attack: 12 },
                { name: "假网站", icon: "🌐", hp: 60, attack: 14 },
                { name: "诈骗短信", icon: "💬", hp: 45, attack: 11 }
            ],
            boss: { name: "钓鱼大师", icon: "🎣", hp: 100, attack: 18 },
            reward: { coins: 80, exp: 150, items: ["shield"] }
        },
        {
            id: 3,
            name: "数据危机",
            icon: "💾",
            description: "数据泄露危机爆发！",
            enemies: [
                { name: "数据窃贼", icon: "🥷", hp: 60, attack: 15 },
                { name: "间谍软件", icon: "👁️", hp: 70, attack: 16 },
                { name: "黑客工具", icon: "🔧", hp: 55, attack: 14 }
            ],
            boss: { name: "数据大盗", icon: "💀", hp: 120, attack: 20 },
            reward: { coins: 100, exp: 200, items: ["time", "attack"] }
        },
        {
            id: 4,
            name: "暗网迷踪",
            icon: "🕸️",
            description: "深入暗网追踪真相！",
            enemies: [
                { name: "暗网商贩", icon: "🏪", hp: 75, attack: 18 },
                { name: "信息贩子", icon: "📊", hp: 80, attack: 19 },
                { name: "洗钱团伙", icon: "💰", hp: 70, attack: 17 }
            ],
            boss: { name: "暗网领主", icon: "🕸️", hp: 150, attack: 22 },
            reward: { coins: 120, exp: 250, items: ["shield", "hint"] }
        },
        {
            id: 5,
            name: "终极对决",
            icon: "🏰",
            description: "与终极BOSS决战！",
            enemies: [
                { name: "APT攻击", icon: "🎯", hp: 90, attack: 20 },
                { name: "勒索病毒", icon: "🔒", hp: 100, attack: 22 },
                { name: "零日漏洞", icon: "⚡", hp: 85, attack: 19 }
            ],
            boss: { name: "黑客之王", icon: "👑", hp: 200, attack: 25 },
            reward: { coins: 200, exp: 500, items: ["attack", "shield", "hint"] }
        },
        {
            id: 6,
            name: "社交工程",
            icon: "🎭",
            description: "识破社工攻击骗局！",
            enemies: [
                { name: "伪装客服", icon: "👔", hp: 70, attack: 16 },
                { name: "假冒领导", icon: "🧑‍💼", hp: 85, attack: 18 },
                { name: "情感骗子", icon: "💔", hp: 65, attack: 15 }
            ],
            boss: { name: "社工大师", icon: "🎭", hp: 160, attack: 23 },
            reward: { coins: 130, exp: 280, items: ["hint", "shield"] }
        },
        {
            id: 7,
            name: "移动威胁",
            icon: "📱",
            description: "手机安全危机来袭！",
            enemies: [
                { name: "恶意APP", icon: "📲", hp: 80, attack: 17 },
                { name: "WiFi窃听", icon: "📡", hp: 75, attack: 16 },
                { name: "短信木马", icon: "✉️", hp: 70, attack: 15 }
            ],
            boss: { name: "移动黑客", icon: "📱", hp: 170, attack: 24 },
            reward: { coins: 140, exp: 300, items: ["time", "attack"] }
        },
        {
            id: 8,
            name: "AI骗局",
            icon: "🤖",
            description: "AI时代的新型威胁！",
            enemies: [
                { name: "深度伪造", icon: "🎭", hp: 90, attack: 19 },
                { name: "AI钓鱼", icon: "🧠", hp: 95, attack: 20 },
                { name: "语音克隆", icon: "🎤", hp: 85, attack: 18 }
            ],
            boss: { name: "AI魔王", icon: "🤖", hp: 220, attack: 28 },
            reward: { coins: 250, exp: 600, items: ["attack", "shield", "hint", "time"] }
        }
    ]
};

// ===== 题库 =====
const QUESTIONS = {
    "网络安全法": [
        {
            question: "《网络安全法》自何时起施行？",
            options: ["2017年6月1日", "2017年1月1日", "2016年11月7日", "2017年7月1日"],
            answer: 0,
            explanation: "《网络安全法》于2016年11月7日通过，自2017年6月1日起施行。"
        },
        {
            question: "网络运营者应当对其收集的用户信息严格保密，并建立健全用户信息什么制度？",
            options: ["保护", "保密", "使用", "保存"],
            answer: 0,
            explanation: "网络运营者应当建立健全用户信息保护制度。"
        },
        {
            question: "关键信息基础设施的运营者应当对重要系统和数据库进行什么？",
            options: ["备份", "加密", "容灾备份", "隔离"],
            answer: 2,
            explanation: "关键信息基础设施运营者应当对重要系统和数据库进行容灾备份。"
        },
        {
            question: "网络产品、服务应当符合相关国家标准的什么要求？",
            options: ["强制性要求", "推荐性要求", "一般性要求", "特殊性要求"],
            answer: 0,
            explanation: "网络产品、服务应当符合相关国家标准的强制性要求。"
        },
        {
            question: "窃取或非法获取个人信息的，处违法所得几倍以上几倍以下罚款？",
            options: ["一倍、十倍", "一倍、五倍", "二倍、十倍", "五倍、十倍"],
            answer: 0,
            explanation: "窃取或非法获取个人信息的，处违法所得一倍以上十倍以下罚款。"
        }
    ],
    "个人信息保护": [
        {
            question: "《个人信息保护法》自何时起施行？",
            options: ["2021年11月1日", "2021年1月1日", "2022年1月1日", "2021年6月1日"],
            answer: 0,
            explanation: "《个人信息保护法》于2021年8月20日通过，自2021年11月1日起施行。"
        },
        {
            question: "处理个人信息应当具有明确、合理的目的，这体现了什么原则？",
            options: ["最小必要", "公开透明", "目的明确", "合法正当"],
            answer: 0,
            explanation: "最小必要原则要求收集个人信息应当限于实现处理目的的最小范围。"
        },
        {
            question: "以下哪项不属于敏感个人信息？",
            options: ["姓名", "生物识别", "宗教信仰", "医疗健康"],
            answer: 0,
            explanation: "姓名属于一般个人信息，敏感信息包括生物识别、宗教信仰等。"
        },
        {
            question: "个人信息处理者应以什么方式向个人告知相关事项？",
            options: ["口头通知", "显著方式、清晰易懂的语言", "短信通知", "邮件通知"],
            answer: 1,
            explanation: "个人信息处理者应以显著方式、清晰易懂的语言向个人告知。"
        },
        {
            question: "处理个人信息应遵循什么原则？",
            options: ["效率优先", "合法、正当、必要和诚信", "利益最大化", "用户自愿"],
            answer: 1,
            explanation: "处理个人信息应遵循合法、正当、必要和诚信原则。"
        }
    ],
    "数据安全": [
        {
            question: "《数据安全法》自何时起施行？",
            options: ["2021年9月1日", "2021年6月10日", "2022年1月1日", "2021年11月1日"],
            answer: 0,
            explanation: "《数据安全法》于2021年6月10日通过，自2021年9月1日起施行。"
        },
        {
            question: "国家建立什么制度来保护数据？",
            options: ["统一保护制度", "数据分类分级保护制度", "重点保护制度", "全面保护制度"],
            answer: 1,
            explanation: "国家建立数据分类分级保护制度。"
        },
        {
            question: "数据出境安全管理主要由哪个法律规范？",
            options: ["《刑法》", "《民法典》", "《网络安全法》", "《劳动法》"],
            answer: 2,
            explanation: "《网络安全法》第三十七条规定了数据出境的安全管理要求。"
        },
        {
            question: "个人信息出境需要通过什么评估？",
            options: ["财务评估", "数据出境安全评估", "技术评估", "法律评估"],
            answer: 1,
            explanation: "个人信息出境需要通过国家网信部门组织的数据出境安全评估。"
        },
        {
            question: "哪类运营者的数据出境适用《网络安全法》规定？",
            options: ["所有企业", "外资企业", "关键信息基础设施运营者", "上市公司"],
            answer: 2,
            explanation: "关键信息基础设施运营者的数据出境适用《网络安全法》规定。"
        }
    ],
    "防范诈骗": [
        {
            question: "接到自称银行客服索要验证码的电话，应该怎么做？",
            options: ["立即提供", "挂断电话，拨打官方客服核实", "按指示操作", "告诉密码"],
            answer: 1,
            explanation: "正规银行不会通过电话索要验证码，应挂断后拨打官方客服核实。"
        },
        {
            question: "卖家要求私下转账交易，应该怎么做？",
            options: ["同意私下转账", "拒绝，坚持通过平台交易", "先转一半", "让卖家先发货"],
            answer: 1,
            explanation: "私下交易无法获得平台保障，应坚持通过正规平台交易。"
        },
        {
            question: "收到中奖短信要求先缴手续费，这属于什么？",
            options: ["正常流程", "网络诈骗", "营销活动", "抽奖活动"],
            answer: 1,
            explanation: "要求先缴费再领奖是典型的网络诈骗手段。"
        },
        {
            question: "接到'公检法'电话要求转账到'安全账户'，应该怎么做？",
            options: ["立即转账", "挂断电话并报警", "按要求操作", "先转一部分"],
            answer: 1,
            explanation: "公检法机关不会通过电话要求转账到所谓'安全账户'。"
        },
        {
            question: "陌生人发送的高收益投资链接可能是？",
            options: ["正规投资", "网络诈骗", "理财推荐", "银行产品"],
            answer: 1,
            explanation: "陌生人发送的高收益投资链接很可能是诈骗。"
        }
    ],
    "密码安全": [
        {
            question: "以下哪种密码最安全？",
            options: ["123456", "password", "生日日期", "大小写字母+数字+特殊符号"],
            answer: 3,
            explanation: "强密码应包含大小写字母、数字和特殊符号的组合。"
        },
        {
            question: "关于密码使用，以下做法正确的是？",
            options: ["所有账号同密码", "定期更换密码", "密码写在便签上", "使用生日作密码"],
            answer: 1,
            explanation: "定期更换密码是良好的安全习惯。"
        },
        {
            question: "收到短信称网银密码过期需要点击链接修改，正确做法是？",
            options: ["点击链接", "拨打官方客服核实", "转发提醒朋友", "忽略短信"],
            answer: 1,
            explanation: "不要点击不明链接，应通过官方渠道核实。"
        },
        {
            question: "以下哪个是安全的密码习惯？",
            options: ["长期不更换密码", "密码包含个人信息", "使用密码管理器", "所有平台同一密码"],
            answer: 2,
            explanation: "使用密码管理器是安全的密码习惯。"
        },
        {
            question: "两步验证的作用是什么？",
            options: ["加快登录速度", "增加账户安全性", "记住密码", "自动登录"],
            answer: 1,
            explanation: "两步验证可以增加账户安全性。"
        }
    ],
    "网络安全意识": [
        {
            question: "使用公共WiFi时，以下哪种做法最安全？",
            options: ["随意连接", "使用VPN加密", "进行网银交易", "登录重要账号"],
            answer: 1,
            explanation: "使用VPN可以加密网络连接，保护数据安全。"
        },
        {
            question: "收到好友借钱信息，正确做法是？",
            options: ["立即转账", "电话核实身份", "让对方发语音", "先转一部分"],
            answer: 1,
            explanation: "应通过电话核实对方身份，防止账号被盗用诈骗。"
        },
        {
            question: "在网上发布个人信息时，哪种做法最安全？",
            options: ["公开所有信息", "只分享必要信息", "用真实姓名作网名", "分享家庭住址"],
            answer: 1,
            explanation: "在网上应尽量减少个人信息的公开。"
        },
        {
            question: "发现电脑感染病毒应该怎么做？",
            options: ["继续使用", "断网并杀毒扫描", "重装系统", "拔掉电源"],
            answer: 1,
            explanation: "发现病毒感染应立即断网，然后使用杀毒软件扫描。"
        },
        {
            question: "随意扫描不明二维码可能导致什么？",
            options: ["获得优惠", "个人信息泄露", "中奖", "无影响"],
            answer: 1,
            explanation: "随意扫描不明二维码可能导致恶意软件安装或钓鱼访问。"
        }
    ],
    "青少年保护": [
        {
            question: "网友约未成年人见面，正确做法是？",
            options: ["独自前往", "告诉家长，在大人陪同下见面", "带朋友去", "不去见面"],
            answer: 1,
            explanation: "未成年人应在家长陪同下与网友见面，确保安全。"
        },
        {
            question: "在网上遇到不良信息应该怎么做？",
            options: ["回复对方", "举报并拉黑", "转发给朋友", "忽略"],
            answer: 1,
            explanation: "遇到不良信息应及时举报并拉黑。"
        },
        {
            question: "沉迷网络游戏可能带来哪些危害？",
            options: ["影响学习", "损害健康", "社交障碍", "以上都是"],
            answer: 3,
            explanation: "沉迷游戏会影响学习、损害健康、导致社交障碍等。"
        },
        {
            question: "在网上看到不实信息，正确做法是？",
            options: ["转发传播", "不传播，向平台举报", "评论反驳", "保存下来"],
            answer: 1,
            explanation: "不应传播不实信息，应向平台举报。"
        },
        {
            question: "为保护隐私，在网上应该怎么做？",
            options: ["随意加好友", "不透露真实姓名住址", "用真实照片作头像", "分享日常行踪"],
            answer: 1,
            explanation: "在网上应保护个人隐私，不轻易透露敏感信息。"
        }
    ],
    "社交工程": [
        {
            question: "接到自称领导要求紧急转账的电话，正确做法是？",
            options: ["立即转账", "通过其他渠道核实身份", "先转一部分", "让领导发短信确认"],
            answer: 1,
            explanation: "遇到紧急转账要求，应通过其他渠道（如直接联系本人）核实身份。"
        },
        {
            question: "陌生人自称是技术人员要求远程控制你的电脑，应该？",
            options: ["配合操作", "拒绝并挂断", "先看看对方要做什么", "让对方提供工号"],
            answer: 1,
            explanation: "正规技术人员不会主动要求远程控制，这是典型的社工攻击手段。"
        },
        {
            question: "收到'中奖'通知要求先缴税，这是什么骗局？",
            options: ["正常领奖流程", "预付费诈骗", "税务规定", "抽奖活动"],
            answer: 1,
            explanation: "要求先缴费再领奖是典型的预付费诈骗。"
        },
        {
            question: "有人在网上高价收购你的银行卡，应该？",
            options: ["出售赚钱", "拒绝并报警", "先问问价格", "只卖不用的卡"],
            answer: 1,
            explanation: "出售银行卡可能被用于洗钱等违法犯罪活动，应拒绝并报警。"
        },
        {
            question: "如何识别假冒客服的诈骗电话？",
            options: ["看来电显示", "核实官方渠道", "听对方口音", "看对方态度"],
            answer: 1,
            explanation: "应通过官方渠道（如官网、官方APP）核实客服身份。"
        }
    ],
    "移动安全": [
        {
            question: "手机APP要求获取通讯录权限，应该？",
            options: ["一律允许", "根据APP功能判断是否必要", "全部拒绝", "只给常用APP"],
            answer: 1,
            explanation: "应根据APP实际功能判断是否需要该权限，不必要的权限应拒绝。"
        },
        {
            question: "在公共充电桩充电时，应该？",
            options: ["直接充电", "使用数据线只充电不传输数据", "边充边玩", "使用无线充电"],
            answer: 1,
            explanation: "公共充电桩可能被植入恶意程序，应使用只充电不传输数据的线缆。"
        },
        {
            question: "手机收到不明链接短信，正确做法是？",
            options: ["点击查看", "不点击直接删除", "转发给朋友", "回复询问"],
            answer: 1,
            explanation: "不明链接可能含有恶意程序或钓鱼网站，不应点击。"
        },
        {
            question: "如何保护手机不被偷窥？",
            options: ["设置锁屏密码", "不设置密码方便使用", "用简单密码", "关闭屏幕"],
            answer: 0,
            explanation: "设置锁屏密码是保护手机隐私的基本措施。"
        },
        {
            question: "手机丢失后应该首先做什么？",
            options: ["买新手机", "远程锁定和擦除数据", "报警", "通知亲友"],
            answer: 1,
            explanation: "应立即远程锁定手机并擦除数据，防止个人信息泄露。"
        }
    ],
    "AI安全": [
        {
            question: "深度伪造(Deepfake)技术可能被用于？",
            options: ["制作电影特效", "伪造身份进行诈骗", "游戏开发", "图像美化"],
            answer: 1,
            explanation: "深度伪造技术可能被滥用于身份伪造、诈骗等非法活动。"
        },
        {
            question: "收到AI生成的语音借钱信息，应该？",
            options: ["立即转账", "通过其他方式核实身份", "让对方发文字", "先转一部分"],
            answer: 1,
            explanation: "AI可以克隆声音，应通过其他方式（如视频通话）核实对方身份。"
        },
        {
            question: "使用AI工具时，应该注意什么？",
            options: ["随意输入个人信息", "不输入敏感信息", "完全信任AI输出", "忽略隐私政策"],
            answer: 1,
            explanation: "使用AI工具时不应输入敏感个人信息，以防数据泄露。"
        },
        {
            question: "如何识别AI生成的虚假图片？",
            options: ["看图片清晰度", "检查细节异常（如手指、文字）", "看图片来源", "凭直觉判断"],
            answer: 1,
            explanation: "AI生成的图片常在手指、文字等细节处出现异常。"
        },
        {
            question: "AI换脸视频可能带来的风险是？",
            options: ["娱乐效果", "身份盗用和诈骗", "技术进步", "无风险"],
            answer: 1,
            explanation: "AI换脸可能被用于身份盗用、诈骗等违法活动。"
        }
    ],
    "云安全": [
        {
            question: "使用云存储时，最重要的是？",
            options: ["存储空间大小", "数据加密和访问控制", "上传速度", "界面美观"],
            answer: 1,
            explanation: "云存储最重要的是数据加密和访问控制，确保数据安全。"
        },
        {
            question: "云账号密码泄露后应该？",
            options: ["继续使用", "立即修改密码并启用两步验证", "只修改密码", "忽略不管"],
            answer: 1,
            explanation: "密码泄露后应立即修改并启用两步验证，防止账号被盗。"
        },
        {
            question: "分享云文档时应该注意？",
            options: ["分享给所有人", "设置访问权限和有效期", "不设置密码", "永久分享"],
            answer: 1,
            explanation: "分享云文档应设置访问权限和有效期，控制访问范围。"
        },
        {
            question: "云服务提供商被攻击，用户应该？",
            options: ["不用管", "立即修改密码并检查数据", "停止使用所有云服务", "等待通知"],
            answer: 1,
            explanation: "应立即修改密码并检查数据是否泄露，必要时启用额外安全措施。"
        },
        {
            question: "以下哪个是安全的云使用习惯？",
            options: ["所有文件都公开", "敏感文件本地存储", "定期备份重要数据", "使用弱密码"],
            answer: 2,
            explanation: "定期备份重要数据是良好的云使用习惯，可防止数据丢失。"
        }
    ],
    "IoT安全": [
        {
            question: "智能摄像头默认密码不修改会导致？",
            options: ["无影响", "被黑客入侵监控", "耗电量增加", "画面模糊"],
            answer: 1,
            explanation: "不修改默认密码，黑客可能轻易入侵你的智能摄像头。"
        },
        {
            question: "智能音箱可能存在的安全风险是？",
            options: ["音质不好", "被窃听隐私", "耗电太多", "操作复杂"],
            answer: 1,
            explanation: "智能音箱可能被黑客入侵窃听隐私对话。"
        },
        {
            question: "如何保护智能家居设备安全？",
            options: ["不连接网络", "修改默认密码并定期更新", "只买便宜的", "不使用智能功能"],
            answer: 1,
            explanation: "修改默认密码并定期更新固件是保护智能家居的基本措施。"
        },
        {
            question: "智能门锁被破解的可能原因是？",
            options: ["锁质量差", "使用弱密码或未更新固件", "门太薄", "天气影响"],
            answer: 1,
            explanation: "使用弱密码或未更新固件可能导致智能门锁被破解。"
        },
        {
            question: "购买IoT设备时应该注意？",
            options: ["只看价格", "选择有安全认证的品牌", "功能越多越好", "外观好看就行"],
            answer: 1,
            explanation: "应选择有安全认证的品牌，确保设备安全性。"
        }
    ]
};

// ===== 游戏状态 =====
let game = {
    player: {
        name: "",
        hp: CONFIG.baseHP,
        maxHp: CONFIG.baseHP,
        energy: 0,
        lives: CONFIG.maxLives,
        coins: 0,
        stars: {},
        inventory: {
            hint: 3,
            shield: 2,
            time: 2,
            attack: 1
        },
        achievements: [],
        totalCorrect: 0,
        totalQuestions: 0,
        dailyChallengeDate: null,
        dailyChallengeScore: 0
    },
    currentLevel: 0,
    currentEnemy: null,
    currentEnemyHp: 0,
    currentEnemyMaxHp: 0,
    round: 0,
    correctInLevel: 0,
    totalInLevel: 0,
    isAnswered: false,
    timer: null,
    timeLeft: CONFIG.timePerQuestion,
    activeShield: false,
    activeCrit: false,
    battleLog: [],
    combo: 0,
    maxCombo: 0,
    isDailyChallenge: false,
    dailyChallengeQuestions: [],
    dailyChallengeIndex: 0
};

// ===== 商店配置 =====
const SHOP = {
    items: [
        { key: 'hint', icon: '💡', name: '提示', desc: '排除一个错误选项', price: 30 },
        { key: 'shield', icon: '🛡️', name: '护盾', desc: '答错不扣血', price: 50 },
        { key: 'time', icon: '⏰', name: '延时', desc: '增加15秒答题时间', price: 40 },
        { key: 'attack', icon: '⚡', name: '暴击', desc: '下次答对造成双倍伤害', price: 60 },
        { key: 'heal', icon: '❤️', name: '回复', desc: '回复30点HP', price: 45 }
    ]
};

// ===== 连击配置 =====
const COMBO = {
    thresholds: [
        { count: 3, multiplier: 1.5, name: '三连击' },
        { count: 5, multiplier: 2.0, name: '五连击' },
        { count: 10, multiplier: 3.0, name: '十连击' },
        { count: 15, multiplier: 4.0, name: '超级连击' },
        { count: 20, multiplier: 5.0, name: '无敌连击' }
    ]
};

// ===== DOM引用 =====
const screens = {
    start: document.getElementById('screen-start'),
    levels: document.getElementById('screen-levels'),
    battle: document.getElementById('screen-battle'),
    result: document.getElementById('screen-level-result'),
    gameover: document.getElementById('screen-gameover'),
    victory: document.getElementById('screen-victory'),
    shop: document.getElementById('screen-shop')
};

// ===== 背景动画 =====
function initBackground() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let connections = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1
        };
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push(createParticle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function(p) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, ' + p.opacity + ')';
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(0, 212, 255, ' + (0.08 * (1 - dist / 120)) + ')';
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
}

// ===== 屏幕切换 =====
function showScreen(name) {
    Object.keys(screens).forEach(function(key) {
        screens[key].classList.remove('active');
    });
    screens[name].classList.add('active');
}

// ===== 开始新游戏 =====
function startNewGame() {
    var nameInput = document.getElementById('player-name');
    var name = nameInput.value.trim();

    if (!name) {
        nameInput.style.borderColor = 'var(--accent)';
        nameInput.placeholder = '请输入代号！';
        setTimeout(function() {
            nameInput.style.borderColor = '';
            nameInput.placeholder = '输入你的守护者代号';
        }, 2000);
        return;
    }

    game.player.name = name;
    showLevelsScreen();
}

// ===== 关卡选择界面 =====
function showLevelsScreen() {
    document.getElementById('lives-display').textContent = game.player.lives;
    document.getElementById('stars-display').textContent = getTotalStars();
    document.getElementById('coins-display').textContent = game.player.coins;

    var grid = document.getElementById('levels-grid');
    grid.innerHTML = '';

    CONFIG.levels.forEach(function(level, index) {
        var card = document.createElement('div');
        card.className = 'level-card';

        var isLocked = index > 0 && !game.player.stars[index - 1];
        if (isLocked) {
            card.className += ' locked';
        }

        var stars = game.player.stars[index] || 0;
        var starsHtml = '';
        for (var i = 0; i < 3; i++) {
            starsHtml += '<span class="' + (i < stars ? 'star' : 'star-empty') + '">⭐</span>';
        }

        var iconDiv = document.createElement('div');
        iconDiv.className = 'level-icon';
        iconDiv.textContent = level.icon;

        var numDiv = document.createElement('div');
        numDiv.className = 'level-num';
        numDiv.textContent = '第' + level.id + '关';

        var nameDiv = document.createElement('div');
        nameDiv.className = 'level-name';
        nameDiv.textContent = level.name;

        var starsDiv = document.createElement('div');
        starsDiv.className = 'level-stars';
        starsDiv.innerHTML = starsHtml;

        card.appendChild(iconDiv);
        card.appendChild(numDiv);
        card.appendChild(nameDiv);
        card.appendChild(starsDiv);

        if (!isLocked) {
            card.onclick = function() { startLevel(index); };
        }

        grid.appendChild(card);
    });

    updateInventoryDisplay();
    showScreen('levels');
}

function updateInventoryDisplay() {
    var container = document.getElementById('inventory-items');
    container.innerHTML = '';

    var items = [
        { key: 'hint', icon: '💡', name: '提示' },
        { key: 'shield', icon: '🛡️', name: '护盾' },
        { key: 'time', icon: '⏰', name: '延时' },
        { key: 'attack', icon: '⚡', name: '暴击' }
    ];

    var hasItems = false;
    items.forEach(function(item) {
        if (game.player.inventory[item.key] > 0) {
            hasItems = true;
            var div = document.createElement('div');
            div.className = 'inventory-item';
            div.textContent = item.icon + ' ' + item.name + ' x' + game.player.inventory[item.key];
            container.appendChild(div);
        }
    });

    if (!hasItems) {
        var emptyDiv = document.createElement('div');
        emptyDiv.className = 'inventory-empty';
        emptyDiv.textContent = '暂无道具';
        container.appendChild(emptyDiv);
    }
}

function getTotalStars() {
    var total = 0;
    Object.keys(game.player.stars).forEach(function(key) {
        total += game.player.stars[key];
    });
    return total;
}

// ===== 开始关卡 =====
function startLevel(levelIndex) {
    game.currentLevel = levelIndex;
    game.correctInLevel = 0;
    game.totalInLevel = 0;
    game.round = 0;
    game.battleLog = [];
    game.player.hp = game.player.maxHp;
    game.player.energy = 0;
    game.combo = 0;
    game.maxCombo = 0;
    game.isDailyChallenge = false;

    var level = CONFIG.levels[levelIndex];

    // 设置第一个敌人
    spawnNextEnemy();

    // 更新UI
    document.getElementById('battle-player-name').textContent = game.player.name;
    document.getElementById('battle-level').textContent = '第' + (levelIndex + 1) + '关';

    // 重置技能
    document.getElementById('skill-hint-count').textContent = game.player.inventory.hint;
    document.getElementById('skill-shield-count').textContent = game.player.inventory.shield;
    document.getElementById('skill-time-count').textContent = game.player.inventory.time;
    document.getElementById('skill-attack-count').textContent = game.player.inventory.attack;

    updateBattleUI();
    showScreen('battle');

    addBattleLog('⚔️ 进入第' + (levelIndex + 1) + '关: ' + level.name);
    addBattleLog(level.description);

    setTimeout(function() {
        loadQuestion();
    }, 1000);
}

function spawnNextEnemy() {
    var level = CONFIG.levels[game.currentLevel];
    var enemies = level.enemies;

    if (game.round < enemies.length) {
        game.currentEnemy = enemies[game.round];
    } else {
        game.currentEnemy = level.boss;
    }

    game.currentEnemyHp = game.currentEnemy.hp;
    game.currentEnemyMaxHp = game.currentEnemy.hp;

    document.getElementById('enemy-name').textContent = game.currentEnemy.name;
    document.getElementById('enemy-avatar').querySelector('span').textContent = game.currentEnemy.icon;
}

// ===== 战斗UI更新 =====
function updateBattleUI() {
    // 玩家HP
    var playerHpPercent = (game.player.hp / game.player.maxHp) * 100;
    var playerHpBar = document.getElementById('player-hp-bar');
    playerHpBar.style.width = playerHpPercent + '%';
    playerHpBar.className = 'hp-fill player-hp';
    if (playerHpPercent <= 30) playerHpBar.classList.add('low');
    else if (playerHpPercent <= 60) playerHpBar.classList.add('medium');
    document.getElementById('player-hp-text').textContent = game.player.hp + '/' + game.player.maxHp;

    // 能量
    var energyPercent = (game.player.energy / 100) * 100;
    document.getElementById('player-energy-bar').style.width = energyPercent + '%';
    document.getElementById('player-energy').textContent = game.player.energy;

    // 敌人HP
    var enemyHpPercent = (game.currentEnemyHp / game.currentEnemyMaxHp) * 100;
    var enemyHpBar = document.getElementById('enemy-hp-bar');
    enemyHpBar.style.width = enemyHpPercent + '%';
    document.getElementById('enemy-hp-text').textContent = game.currentEnemyHp + '/' + game.currentEnemyMaxHp;

    // 回合
    document.getElementById('round-num').textContent = game.round + 1;

    // 技能按钮
    document.getElementById('skill-hint').disabled = game.player.inventory.hint <= 0;
    document.getElementById('skill-shield').disabled = game.player.inventory.shield <= 0;
    document.getElementById('skill-time').disabled = game.player.inventory.time <= 0;
    document.getElementById('skill-attack').disabled = game.player.inventory.attack <= 0;

    // 连击显示
    updateComboDisplay();
}

// ===== 战斗日志 =====
function addBattleLog(text, type) {
    var log = document.getElementById('battle-log');
    var p = document.createElement('p');
    p.textContent = text;
    if (type) p.className = type;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

// ===== 加载题目 =====
function loadQuestion() {
    game.isAnswered = false;
    game.timeLeft = CONFIG.timePerQuestion;
    game.activeShield = false;
    game.activeCrit = false;

    // 随机选择分类和题目
    var categories = Object.keys(QUESTIONS);
    var category = categories[Math.floor(Math.random() * categories.length)];
    var questions = QUESTIONS[category];
    var question = questions[Math.floor(Math.random() * questions.length)];

    // 显示题目
    document.getElementById('q-category').textContent = category;
    document.getElementById('q-content').textContent = question.question;
    document.getElementById('q-timer').textContent = '⏱️ ' + game.timeLeft;
    document.getElementById('q-timer').className = 'question-timer';

    // 生成选项
    var optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    var letters = ['A', 'B', 'C', 'D'];

    question.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = 'opt-' + index;

        var letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letters[index];

        var textSpan = document.createElement('span');
        textSpan.textContent = option;

        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);

        btn.onclick = function() { selectAnswer(index, question); };
        optionsGrid.appendChild(btn);
    });

    // 存储当前题目
    game.currentQuestion = question;

    // 启动计时器
    startQuestionTimer();
}

// ===== 计时器 =====
function startQuestionTimer() {
    clearInterval(game.timer);
    var timerEl = document.getElementById('q-timer');

    game.timer = setInterval(function() {
        game.timeLeft--;
        timerEl.textContent = '⏱️ ' + game.timeLeft;

        if (game.timeLeft <= 10) {
            timerEl.className = 'question-timer warning';
        }

        if (game.timeLeft <= 0) {
            clearInterval(game.timer);
            handleTimeout();
        }
    }, 1000);
}

// ===== 超时处理 =====
function handleTimeout() {
    game.isAnswered = true;
    game.totalInLevel++;
    game.combo = 0;

    // 禁用选项
    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    // 显示正确答案
    document.getElementById('opt-' + game.currentQuestion.answer).classList.add('show-correct');

    // 敌人攻击
    var damage = game.currentEnemy.attack;
    if (!game.activeShield) {
        game.player.hp = Math.max(0, game.player.hp - damage);
        showDamageEffect('player', damage, 'damage');
        addBattleLog('⏰ 时间到！' + game.currentEnemy.name + '对你造成 ' + damage + ' 点伤害！', 'damage');
    } else {
        addBattleLog('🛡️ 护盾抵消了攻击！');
    }

    updateBattleUI();
    updateComboDisplay();

    // 检查玩家是否死亡
    if (game.player.hp <= 0) {
        setTimeout(function() {
            gameOver();
        }, 1500);
        return;
    }

    // 等待后加载下一题
    if (game.isDailyChallenge) {
        game.dailyChallengeIndex++;
        setTimeout(function() {
            loadDailyQuestion();
        }, 2000);
    } else {
        setTimeout(function() {
            loadQuestion();
        }, 2000);
    }
}

// ===== 选择答案 =====
function selectAnswer(index, question) {
    if (game.isAnswered) return;

    game.isAnswered = true;
    clearInterval(game.timer);
    game.totalInLevel++;

    var isCorrect = index === question.answer;

    // 禁用选项
    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    // 标记答案
    document.getElementById('opt-' + index).classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        document.getElementById('opt-' + question.answer).classList.add('show-correct');
    }

    if (isCorrect) {
        // 答对 - 攻击敌人
        game.correctInLevel++;
        game.combo++;
        if (game.combo > game.maxCombo) game.maxCombo = game.combo;
        game.player.energy = Math.min(100, game.player.energy + 20);

        var baseDamage = 20 + Math.floor(game.player.energy / 10);
        var comboMultiplier = getComboMultiplier();
        var damage = Math.floor(baseDamage * comboMultiplier);
        if (game.activeCrit) damage *= 2;
        var logType = game.activeCrit ? 'critical' : '';

        game.currentEnemyHp = Math.max(0, game.currentEnemyHp - damage);
        showDamageEffect('enemy', damage, game.activeCrit ? 'critical' : 'damage');

        var comboText = comboMultiplier > 1 ? ' (×' + comboMultiplier + '连击)' : '';
        if (game.activeCrit) {
            addBattleLog('⚡ 暴击！对 ' + game.currentEnemy.name + ' 造成 ' + damage + ' 点伤害！' + comboText, 'critical');
        } else {
            addBattleLog('✅ 回答正确！对 ' + game.currentEnemy.name + ' 造成 ' + damage + ' 点伤害！' + comboText, 'heal');
        }
        showComboEffect();

        // 检查敌人是否死亡
        if (game.currentEnemyHp <= 0) {
            setTimeout(function() {
                enemyDefeated();
            }, 1500);
            updateBattleUI();
            return;
        }
    } else {
        // 答错 - 敌人攻击
        game.combo = 0;
        var damage = game.currentEnemy.attack;

        if (!game.activeShield) {
            game.player.hp = Math.max(0, game.player.hp - damage);
            showDamageEffect('player', damage, 'damage');
            addBattleLog('❌ 回答错误！' + game.currentEnemy.name + '对你造成 ' + damage + ' 点伤害！', 'damage');
        } else {
            addBattleLog('🛡️ 护盾抵消了攻击！正确答案是：' + question.options[question.answer]);
        }
        updateComboDisplay();

        // 检查玩家是否死亡
        if (game.player.hp <= 0) {
            setTimeout(function() {
                gameOver();
            }, 1500);
            updateBattleUI();
            return;
        }
    }

    updateBattleUI();

    // 等待后加载下一题
    if (game.isDailyChallenge) {
        game.dailyChallengeIndex++;
        setTimeout(function() {
            loadDailyQuestion();
        }, 2000);
    } else {
        setTimeout(function() {
            loadQuestion();
        }, 2000);
    }
}

// ===== 敌人被击败 =====
function enemyDefeated() {
    addBattleLog('🎉 ' + game.currentEnemy.name + ' 被击败！');

    game.round++;

    var level = CONFIG.levels[game.currentLevel];

    // 检查是否击败Boss
    if (game.round > level.enemies.length) {
        // Boss被击败 - 关卡通过
        setTimeout(function() {
            levelComplete();
        }, 1000);
        return;
    }

    // 生成下一个敌人
    spawnNextEnemy();
    addBattleLog('⚔️ ' + game.currentEnemy.name + ' 出现了！');

    updateBattleUI();

    setTimeout(function() {
        loadQuestion();
    }, 1500);
}

// ===== 关卡完成 =====
function levelComplete() {
    var level = CONFIG.levels[game.currentLevel];
    var accuracy = game.totalInLevel > 0 ? (game.correctInLevel / game.totalInLevel) : 0;

    // 计算星星
    var stars = 0;
    if (accuracy >= 0.5) stars = 1;
    if (accuracy >= 0.7) stars = 2;
    if (accuracy >= 0.9) stars = 3;

    // 更新最高星星
    if (!game.player.stars[game.currentLevel] || game.player.stars[game.currentLevel] < stars) {
        game.player.stars[game.currentLevel] = stars;
    }

    // 奖励
    game.player.coins += level.reward.coins;

    // 奖励道具
    level.reward.items.forEach(function(item) {
        game.player.inventory[item] = (game.player.inventory[item] || 0) + 1;
    });

    // 检查成就
    checkAchievements(stars);

    // 显示结算界面
    document.getElementById('stat-correct').textContent = game.correctInLevel + '/' + game.totalInLevel;
    document.getElementById('stat-exp').textContent = '+' + level.reward.exp;
    document.getElementById('stat-coins').textContent = '+' + level.reward.coins;

    // 显示星星
    var starsDisplay = document.getElementById('stars-result');
    var starElements = starsDisplay.querySelectorAll('.star');
    starElements.forEach(function(el, i) {
        el.className = i < stars ? 'star earned' : 'star';
        el.style.animationDelay = (i * 0.3) + 's';
    });

    // 显示奖励道具
    var rewardsContainer = document.getElementById('reward-items');
    rewardsContainer.innerHTML = '';

    var itemNames = {
        hint: '💡 提示',
        shield: '🛡️ 护盾',
        time: '⏰ 延时',
        attack: '⚡ 暴击'
    };

    level.reward.items.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'reward-item';
        div.textContent = itemNames[item] || item;
        rewardsContainer.appendChild(div);
    });

    // 下一关按钮
    var nextBtn = document.getElementById('btn-next-level');
    if (game.currentLevel < CONFIG.levels.length - 1) {
        nextBtn.style.display = '';
        nextBtn.textContent = '下一关';
    } else {
        nextBtn.style.display = '';
        nextBtn.textContent = '查看结局';
    }

    showScreen('result');
}

// ===== 下一关 =====
function nextLevel() {
    if (game.currentLevel < CONFIG.levels.length - 1) {
        startLevel(game.currentLevel + 1);
    } else {
        showVictory();
    }
}

// ===== 游戏结束 =====
function gameOver() {
    game.player.lives--;

    if (game.player.lives <= 0) {
        // 真正的Game Over
        showScreen('gameover');
    } else {
        // 还有生命
        showScreen('gameover');
    }
}

// ===== 重试关卡 =====
function retryLevel() {
    if (game.player.lives > 0) {
        startLevel(game.currentLevel);
    } else {
        game.player.lives = CONFIG.maxLives;
        showLevelsScreen();
    }
}

// ===== 返回关卡选择 =====
function goToLevels() {
    showLevelsScreen();
}

// ===== 最终胜利 =====
function showVictory() {
    document.getElementById('final-stars').textContent = getTotalStars();
    document.getElementById('final-coins').textContent = game.player.coins;

    var achievementsContainer = document.getElementById('achievements');
    achievementsContainer.innerHTML = '';

    game.player.achievements.forEach(function(achievement) {
        var div = document.createElement('div');
        div.className = 'achievement';
        div.textContent = achievement;
        achievementsContainer.appendChild(div);
    });

    showScreen('victory');
}

// ===== 连击系统 =====
function getComboMultiplier() {
    var multiplier = 1;
    for (var i = COMBO.thresholds.length - 1; i >= 0; i--) {
        if (game.combo >= COMBO.thresholds[i].count) {
            multiplier = COMBO.thresholds[i].multiplier;
            break;
        }
    }
    return multiplier;
}

function getComboName() {
    for (var i = COMBO.thresholds.length - 1; i >= 0; i--) {
        if (game.combo >= COMBO.thresholds[i].count) {
            return COMBO.thresholds[i].name;
        }
    }
    return '';
}

function showComboEffect() {
    if (game.combo >= 3) {
        var comboName = getComboName();
        var container = document.getElementById('battle-effects');
        var effect = document.createElement('div');
        effect.className = 'combo-effect';

        var countSpan = document.createElement('span');
        countSpan.className = 'combo-count';
        countSpan.textContent = game.combo + '连击!';

        var nameSpan = document.createElement('span');
        nameSpan.className = 'combo-name';
        nameSpan.textContent = comboName;

        effect.appendChild(countSpan);
        effect.appendChild(nameSpan);
        container.appendChild(effect);

        setTimeout(function() {
            if (container.contains(effect)) {
                container.removeChild(effect);
            }
        }, 1500);
    }
}

function updateComboDisplay() {
    var comboEl = document.getElementById('combo-display');
    if (comboEl) {
        if (game.combo >= 2) {
            comboEl.style.display = 'block';
            comboEl.textContent = game.combo + ' 连击';
            comboEl.className = 'combo-display';
            if (game.combo >= 10) comboEl.classList.add('combo-mega');
            else if (game.combo >= 5) comboEl.classList.add('combo-super');
            else if (game.combo >= 3) comboEl.classList.add('combo-hot');
        } else {
            comboEl.style.display = 'none';
        }
    }
}

// ===== 每日挑战 =====
function getDailySeed() {
    var now = new Date();
    return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function seededRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function generateDailyChallenge() {
    var seed = getDailySeed();
    var allQuestions = [];
    var categories = Object.keys(QUESTIONS);
    categories.forEach(function(cat) {
        QUESTIONS[cat].forEach(function(q) {
            allQuestions.push({ category: cat, question: q });
        });
    });

    var shuffled = allQuestions.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        seed++;
        var j = Math.floor(seededRandom(seed) * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    return shuffled.slice(0, 15);
}

function startDailyChallenge() {
    // 检查玩家是否已输入代号
    if (!game.player.name) {
        var nameInput = document.getElementById('player-name');
        var name = nameInput.value.trim();
        if (!name) {
            nameInput.style.borderColor = 'var(--accent)';
            nameInput.placeholder = '请先输入代号！';
            setTimeout(function() {
                nameInput.style.borderColor = '';
                nameInput.placeholder = '输入你的守护者代号';
            }, 2000);
            return;
        }
        game.player.name = name;
    }

    var today = new Date().toDateString();
    if (game.player.dailyChallengeDate === today && game.player.dailyChallengeScore > 0) {
        alert('今日挑战已完成！明天再来吧！');
        return;
    }

    game.isDailyChallenge = true;
    game.dailyChallengeQuestions = generateDailyChallenge();
    game.dailyChallengeIndex = 0;
    game.correctInLevel = 0;
    game.totalInLevel = 0;
    game.combo = 0;
    game.maxCombo = 0;
    game.player.hp = game.player.maxHp;
    game.player.energy = 0;
    game.battleLog = [];

    document.getElementById('battle-player-name').textContent = game.player.name;
    document.getElementById('battle-level').textContent = '每日挑战';

    updateBattleUI();
    showScreen('battle');
    addBattleLog('每日挑战开始！共15题，答对越多奖励越丰厚！');
    loadDailyQuestion();
}

function loadDailyQuestion() {
    if (game.dailyChallengeIndex >= game.dailyChallengeQuestions.length) {
        dailyChallengeComplete();
        return;
    }

    game.isAnswered = false;
    game.timeLeft = CONFIG.timePerQuestion;
    game.activeShield = false;
    game.activeCrit = false;

    var item = game.dailyChallengeQuestions[game.dailyChallengeIndex];
    var category = item.category;
    var question = item.question;

    document.getElementById('q-category').textContent = category;
    document.getElementById('q-content').textContent = question.question;
    document.getElementById('q-timer').textContent = '⏱️ ' + game.timeLeft;
    document.getElementById('q-timer').className = 'question-timer';

    var optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    var letters = ['A', 'B', 'C', 'D'];

    question.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = 'opt-' + index;

        var letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letters[index];

        var textSpan = document.createElement('span');
        textSpan.textContent = option;

        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);

        btn.onclick = function() { selectDailyAnswer(index, question); };
        optionsGrid.appendChild(btn);
    });

    game.currentQuestion = question;
    startQuestionTimer();
}

function selectDailyAnswer(index, question) {
    if (game.isAnswered) return;

    game.isAnswered = true;
    clearInterval(game.timer);
    game.totalInLevel++;

    var isCorrect = index === question.answer;

    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById('opt-' + index).classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        document.getElementById('opt-' + question.answer).classList.add('show-correct');
    }

    if (isCorrect) {
        game.correctInLevel++;
        game.combo++;
        if (game.combo > game.maxCombo) game.maxCombo = game.combo;
        game.player.energy = Math.min(100, game.player.energy + 20);

        var baseDamage = 20 + Math.floor(game.player.energy / 10);
        var multiplier = getComboMultiplier();
        var damage = Math.floor(baseDamage * multiplier);
        if (game.activeCrit) damage *= 2;

        addBattleLog('✅ 回答正确！造成 ' + damage + ' 点伤害' + (multiplier > 1 ? ' (×' + multiplier + ')' : ''), 'heal');
        showComboEffect();
    } else {
        game.combo = 0;
        addBattleLog('❌ 回答错误！正确答案是：' + question.options[question.answer], 'damage');
    }

    updateComboDisplay();
    game.dailyChallengeIndex++;

    setTimeout(function() {
        loadDailyQuestion();
    }, 1500);
}

function dailyChallengeComplete() {
    var accuracy = game.totalInLevel > 0 ? (game.correctInLevel / game.totalInLevel) : 0;
    var baseReward = game.correctInLevel * 10;
    var comboBonus = game.maxCombo * 5;
    var totalReward = baseReward + comboBonus;

    game.player.coins += totalReward;
    game.player.dailyChallengeDate = new Date().toDateString();
    game.player.dailyChallengeScore = game.correctInLevel;
    game.player.totalCorrect += game.correctInLevel;
    game.player.totalQuestions += game.totalInLevel;

    document.getElementById('stat-correct').textContent = game.correctInLevel + '/' + game.totalInLevel;
    document.getElementById('stat-exp').textContent = '最大连击: ' + game.maxCombo;
    document.getElementById('stat-coins').textContent = '+' + totalReward;

    var starsDisplay = document.getElementById('stars-result');
    var starElements = starsDisplay.querySelectorAll('.star');
    var stars = 0;
    if (accuracy >= 0.5) stars = 1;
    if (accuracy >= 0.7) stars = 2;
    if (accuracy >= 0.9) stars = 3;
    starElements.forEach(function(el, i) {
        el.className = i < stars ? 'star earned' : 'star';
        el.style.animationDelay = (i * 0.3) + 's';
    });

    var rewardsContainer = document.getElementById('reward-items');
    rewardsContainer.innerHTML = '';
    var div = document.createElement('div');
    div.className = 'reward-item';
    div.textContent = '💰 ' + totalReward + ' 金币';
    rewardsContainer.appendChild(div);

    document.getElementById('btn-next-level').style.display = 'none';
    document.getElementById('level-result-banner').querySelector('h2').textContent = '每日挑战完成！';

    game.isDailyChallenge = false;
    showScreen('result');
}

// ===== 商店系统 =====
function showShopScreen() {
    document.getElementById('shop-coins').textContent = game.player.coins;

    var shopGrid = document.getElementById('shop-grid');
    shopGrid.innerHTML = '';

    SHOP.items.forEach(function(item) {
        var card = document.createElement('div');
        card.className = 'shop-item';

        var count = 0;
        if (item.key === 'heal') {
            count = 'HP: ' + game.player.hp;
        } else {
            count = game.player.inventory[item.key] || 0;
        }

        var iconDiv = document.createElement('div');
        iconDiv.className = 'shop-item-icon';
        iconDiv.textContent = item.icon;

        var nameDiv = document.createElement('div');
        nameDiv.className = 'shop-item-name';
        nameDiv.textContent = item.name;

        var descDiv = document.createElement('div');
        descDiv.className = 'shop-item-desc';
        descDiv.textContent = item.desc;

        var countDiv = document.createElement('div');
        countDiv.className = 'shop-item-count';
        countDiv.textContent = '拥有: ' + count;

        var priceDiv = document.createElement('div');
        priceDiv.className = 'shop-item-price';
        priceDiv.textContent = '💰 ' + item.price;

        var buyBtn = document.createElement('button');
        buyBtn.className = 'btn-buy';
        buyBtn.textContent = '购买';
        buyBtn.onclick = function() { buyItem(item.key, item.price); };

        card.appendChild(iconDiv);
        card.appendChild(nameDiv);
        card.appendChild(descDiv);
        card.appendChild(countDiv);
        card.appendChild(priceDiv);
        card.appendChild(buyBtn);

        shopGrid.appendChild(card);
    });

    showScreen('shop');
}

function buyItem(key, price) {
    if (game.player.coins < price) {
        alert('金币不足！');
        return;
    }

    game.player.coins -= price;

    if (key === 'heal') {
        game.player.hp = Math.min(game.player.maxHp, game.player.hp + 30);
        alert('回复了30点HP！');
    } else {
        game.player.inventory[key] = (game.player.inventory[key] || 0) + 1;
        alert('购买成功！');
    }

    showShopScreen();
}

// ===== 技能系统 =====
function useSkill(type) {
    if (game.isAnswered) return;

    if (type === 'hint' && game.player.inventory.hint > 0) {
        // 提示：排除一个错误答案
        game.player.inventory.hint--;
        document.getElementById('skill-hint-count').textContent = game.player.inventory.hint;

        var wrongOptions = [];
        for (var i = 0; i < 4; i++) {
            if (i !== game.currentQuestion.answer) {
                wrongOptions.push(i);
            }
        }

        var toEliminate = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        document.getElementById('opt-' + toEliminate).classList.add('eliminated');

        addBattleLog('💡 使用提示，排除了一个错误答案');

    } else if (type === 'shield' && game.player.inventory.shield > 0) {
        // 护盾：答错不扣血
        game.player.inventory.shield--;
        document.getElementById('skill-shield-count').textContent = game.player.inventory.shield;
        game.activeShield = true;

        addBattleLog('🛡️ 激活护盾，答错不扣血');

    } else if (type === 'time' && game.player.inventory.time > 0) {
        // 延时：增加15秒
        game.player.inventory.time--;
        document.getElementById('skill-time-count').textContent = game.player.inventory.time;
        game.timeLeft += 15;

        addBattleLog('⏰ 使用延时，增加15秒');

    } else if (type === 'attack' && game.player.inventory.attack > 0) {
        // 暴击：造成双倍伤害
        game.player.inventory.attack--;
        document.getElementById('skill-attack-count').textContent = game.player.inventory.attack;
        game.activeCrit = true;

        addBattleLog('⚡ 激活暴击，下次答对造成双倍伤害');
    }

    document.getElementById('skill-' + type).disabled = game.player.inventory[type] <= 0;
}

// ===== 伤害效果 =====
function showDamageEffect(target, damage, type) {
    var container = document.getElementById('battle-effects');
    var effect = document.createElement('div');
    effect.className = 'damage-effect ' + type;
    effect.textContent = '-' + damage;

    if (target === 'player') {
        effect.style.left = '10%';
        effect.style.top = '30%';
    } else {
        effect.style.right = '10%';
        effect.style.top = '30%';
    }

    container.appendChild(effect);

    // 屏幕震动
    if (type === 'damage') {
        document.querySelector('.container').classList.add('screen-shake');
        setTimeout(function() {
            document.querySelector('.container').classList.remove('screen-shake');
        }, 300);
    }

    setTimeout(function() {
        container.removeChild(effect);
    }, 1000);
}

// ===== 成就检查 =====
function checkAchievements(stars) {
    var achievements = [];

    if (stars === 3) {
        achievements.push('🏆 完美通关');
    }

    if (game.correctInLevel === game.totalInLevel) {
        achievements.push('💯 全部正确');
    }

    if (game.player.hp >= 80) {
        achievements.push('❤️ 高血量通关');
    }

    achievements.forEach(function(a) {
        if (game.player.achievements.indexOf(a) === -1) {
            game.player.achievements.push(a);
        }
    });
}

// ===== 音效控制 =====
let soundEnabled = true;

function toggleSound() {
    soundEnabled = !soundEnabled;
    document.getElementById('sound-toggle').textContent = soundEnabled ? '🔊' : '🔇';
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    initBackground();

    document.getElementById('player-name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startNewGame();
        }
    });
});
