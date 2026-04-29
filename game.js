// ===== 网络安全知识竞赛题库 =====
const questionBank = [
    {
        category: "网络安全法",
        question: "根据《网络安全法》，网络运营者应当对其收集的用户信息严格保密，并建立健全用户信息（ ）制度。",
        options: ["保护", "保密", "使用", "保存"],
        answer: 0,
        explanation: "《网络安全法》第四十二条规定，网络运营者应当采取措施确保其收集的个人信息安全，建立健全用户信息保护制度。"
    },
    {
        category: "网络安全法",
        question: "违反《网络安全法》第四十四条规定，窃取或者以其他非法方式获取、非法出售或者非法向他人提供个人信息，尚不构成犯罪的，由公安机关没收违法所得，并处违法所得（ ）以上（ ）以下罚款。",
        options: ["一倍、十倍", "一倍、五倍", "二倍、十倍", "五倍、十倍"],
        answer: 0,
        explanation: "根据《网络安全法》第六十四条规定，窃取或非法获取个人信息的，处违法所得一倍以上十倍以下罚款。"
    },
    {
        category: "网络安全法",
        question: "《网络安全法》自（ ）起施行。",
        options: ["2017年6月1日", "2017年1月1日", "2016年11月7日", "2017年7月1日"],
        answer: 0,
        explanation: "《中华人民共和国网络安全法》于2016年11月7日通过，自2017年6月1日起施行。"
    },
    {
        category: "网络安全法",
        question: "关键信息基础设施的运营者应当设置专门安全管理机构，并对重要系统和数据库进行（ ）。",
        options: ["备份", "加密", "容灾备份", "隔离"],
        answer: 2,
        explanation: "《网络安全法》第三十四条规定，关键信息基础设施运营者应当对重要系统和数据库进行容灾备份。"
    },
    {
        category: "网络安全法",
        question: "网络产品、服务应当符合相关国家标准的（ ）。",
        options: ["强制性要求", "推荐性要求", "一般性要求", "特殊性要求"],
        answer: 0,
        explanation: "《网络安全法》第二十二条规定，网络产品、服务应当符合相关国家标准的强制性要求。"
    },
    {
        category: "个人信息保护",
        question: "《个人信息保护法》规定，处理个人信息应当具有明确、合理的目的，并应当与处理目的直接相关，采取对个人权益影响最小的方式。这体现了（ ）原则。",
        options: ["最小必要", "公开透明", "目的明确", "合法正当"],
        answer: 0,
        explanation: "最小必要原则要求收集个人信息应当限于实现处理目的的最小范围，不得过度收集。"
    },
    {
        category: "个人信息保护",
        question: "个人信息处理者在处理个人信息前，应当以显著方式、清晰易懂的语言真实、准确、完整地向个人告知相关事项，这体现了（ ）原则。",
        options: ["公开透明", "合法正当", "最小必要", "目的明确"],
        answer: 0,
        explanation: "公开透明原则要求个人信息处理者应当以显著方式、清晰易懂的语言向个人告知相关信息。"
    },
    {
        category: "个人信息保护",
        question: "以下哪项不属于敏感个人信息？",
        options: ["姓名", "生物识别", "宗教信仰", "医疗健康"],
        answer: 0,
        explanation: "敏感个人信息包括生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等，姓名属于一般个人信息。"
    },
    {
        category: "个人信息保护",
        question: "个人信息保护法自（ ）起施行。",
        options: ["2021年11月1日", "2021年1月1日", "2022年1月1日", "2021年6月1日"],
        answer: 0,
        explanation: "《中华人民共和国个人信息保护法》于2021年8月20日通过，自2021年11月1日起施行。"
    },
    {
        category: "个人信息保护",
        question: "处理个人信息应当遵循合法、正当、必要和诚信原则，不得通过误导、欺诈、胁迫等方式处理个人信息，这体现了（ ）原则。",
        options: ["合法正当", "最小必要", "公开透明", "目的明确"],
        answer: 0,
        explanation: "合法正当原则要求处理个人信息应当遵循合法、正当、必要和诚信原则。"
    },
    {
        category: "数据安全",
        question: "《数据安全法》自（ ）起施行。",
        options: ["2021年9月1日", "2021年6月10日", "2022年1月1日", "2021年11月1日"],
        answer: 0,
        explanation: "《中华人民共和国数据安全法》于2021年6月10日通过，自2021年9月1日起施行。"
    },
    {
        category: "数据安全",
        question: "国家建立数据分类分级保护制度，根据数据在经济社会发展中的重要程度，对数据实行（ ）。",
        options: ["分类分级保护", "统一保护", "重点保护", "全面保护"],
        answer: 0,
        explanation: "《数据安全法》第二十一条规定，国家建立数据分类分级保护制度。"
    },
    {
        category: "防范网络诈骗",
        question: "收到自称是银行客服的电话，说你的银行卡存在风险，需要提供验证码进行验证，你应该怎么做？",
        options: ["立即提供验证码", "挂断电话，拨打银行官方客服核实", "按照对方指示操作", "告诉对方银行卡密码"],
        answer: 1,
        explanation: "正规银行不会通过电话索要验证码，接到此类电话应挂断后拨打银行官方客服核实。"
    },
    {
        category: "防范网络诈骗",
        question: "在网上购物时，卖家说平台手续费太高，要求私下转账交易，你应该怎么做？",
        options: ["同意私下转账，可以省钱", "拒绝，坚持通过平台交易", "先转一半试试", "让卖家先发货再转账"],
        answer: 1,
        explanation: "私下交易无法获得平台保障，一旦出现问题难以维权，应坚持通过正规平台交易。"
    },
    {
        category: "防范网络诈骗",
        question: "收到中奖短信，要求先缴纳手续费才能领奖，这属于什么行为？",
        options: ["正常领奖流程", "网络诈骗", "营销活动", "抽奖活动"],
        answer: 1,
        explanation: "要求先缴费再领奖是典型的网络诈骗手段，正规中奖不会要求中奖者预先缴纳任何费用。"
    },
    {
        category: "防范网络诈骗",
        question: "以下哪种行为可能是网络诈骗？",
        options: ["官方平台的促销活动", "陌生人发送的高收益投资链接", "正规电商的打折活动", "银行官方的理财推荐"],
        answer: 1,
        explanation: "陌生人发送的高收益投资链接很可能是诈骗，应警惕'高收益、零风险'的投资承诺。"
    },
    {
        category: "防范网络诈骗",
        question: "接到自称是公检法的电话，说你涉嫌犯罪需要将资金转入'安全账户'，你应该怎么做？",
        options: ["立即转账到安全账户", "挂断电话并报警", "按照对方要求操作", "先转一部分试试"],
        answer: 1,
        explanation: "公检法机关不会通过电话要求转账到所谓'安全账户'，这是典型的冒充公检法诈骗。"
    },
    {
        category: "密码安全",
        question: "以下哪种密码最安全？",
        options: ["123456", "password", "生日日期", "包含大小写字母、数字和特殊符号的组合"],
        answer: 3,
        explanation: "强密码应包含大小写字母、数字和特殊符号的组合，长度至少8位以上。"
    },
    {
        category: "密码安全",
        question: "关于密码使用，以下做法正确的是？",
        options: ["所有账号使用同一个密码", "定期更换密码", "将密码写在便签贴在显示器上", "使用生日作为密码"],
        answer: 1,
        explanation: "定期更换密码是良好的安全习惯，可以降低密码泄露带来的风险。"
    },
    {
        category: "密码安全",
        question: "收到短信称你的网银密码即将过期，需要点击链接修改密码，正确的做法是？",
        options: ["点击链接修改密码", "拨打银行官方客服核实", "转发给朋友提醒", "忽略短信"],
        answer: 1,
        explanation: "不要点击不明链接，应通过官方渠道核实信息真伪。"
    },
    {
        category: "网络安全意识",
        question: "在公共场所使用免费WiFi时，以下哪种做法最安全？",
        options: ["随意连接免费WiFi", "使用VPN加密连接", "进行网上银行交易", "登录重要账号"],
        answer: 1,
        explanation: "公共WiFi存在安全风险，使用VPN可以加密网络连接，保护数据安全。"
    },
    {
        category: "网络安全意识",
        question: "收到好友发来的借钱信息，正确的做法是？",
        options: ["立即转账", "电话核实身份后再决定", "让对方发语音确认", "先转一部分试试"],
        answer: 1,
        explanation: "应通过电话或其他方式核实对方身份，防止账号被盗用实施诈骗。"
    },
    {
        category: "网络安全意识",
        question: "在网上发布个人信息时，以下哪种做法最安全？",
        options: ["公开分享所有个人信息", "只分享必要的信息", "使用真实姓名作为网名", "分享家庭住址"],
        answer: 1,
        explanation: "在网上应尽量减少个人信息的公开，只分享必要的信息。"
    },
    {
        category: "网络安全意识",
        question: "发现电脑可能感染了病毒，应该怎么做？",
        options: ["继续使用", "立即断网并使用杀毒软件扫描", "重装系统", "拔掉电源"],
        answer: 1,
        explanation: "发现病毒感染应立即断网防止扩散，然后使用杀毒软件进行全面扫描。"
    },
    {
        category: "网络安全意识",
        question: "以下哪种行为可能导致个人信息泄露？",
        options: ["使用正规软件", "随意扫描不明二维码", "定期更新系统", "使用官方应用商店"],
        answer: 1,
        explanation: "随意扫描不明二维码可能导致恶意软件安装或钓鱼网站访问，造成信息泄露。"
    },
    {
        category: "青少年保护",
        question: "小丽在网上认识了一个网友，对方约她见面，她应该怎么做？",
        options: ["独自前往见面", "告诉家长或老师，在大人陪同下见面", "带上朋友一起去", "不去见面"],
        answer: 1,
        explanation: "未成年人应在家长或老师的陪同下与网友见面，确保人身安全。"
    },
    {
        category: "青少年保护",
        question: "在网上遇到陌生人发送不良信息，应该怎么做？",
        options: ["回复对方", "举报并拉黑", "转发给朋友", "忽略"],
        answer: 1,
        explanation: "遇到不良信息应及时举报并拉黑，保护自己免受侵害。"
    },
    {
        category: "青少年保护",
        question: "沉迷网络游戏可能带来哪些危害？",
        options: ["影响学习成绩", "损害身体健康", "导致社交障碍", "以上都是"],
        answer: 3,
        explanation: "沉迷网络游戏会影响学习、损害身体健康、导致社交障碍等多方面危害。"
    },
    {
        category: "青少年保护",
        question: "在网上看到不实信息，正确的做法是？",
        options: ["转发让更多人知道", "不传播，向平台举报", "评论区反驳", "保存下来"],
        answer: 1,
        explanation: "不应传播不实信息，应向平台举报，维护网络环境。"
    },
    {
        category: "青少年保护",
        question: "为了保护个人隐私，在网上应该怎么做？",
        options: ["随意添加陌生人为好友", "不轻易透露真实姓名、住址等信息", "使用真实照片作为头像", "分享日常行踪"],
        answer: 1,
        explanation: "在网上应保护个人隐私，不轻易透露真实姓名、住址、学校等敏感信息。"
    },
    {
        category: "数据出境",
        question: "以下哪项说法是错误的？",
        options: ["个人信息和重要数据的出境安全评估是维护数据跨境流动安全的重要手段", "国家机关不可以在中华人民共和国境外存储中华人民共和国公民个人信息", "任何组织、个人不得非法收集、使用、加工、传输他人个人信息", "网信部门负责统筹协调网络数据安全和相关监管工作"],
        answer: 1,
        explanation: "根据《个人信息保护法》，国家机关处理个人信息也需要遵守相关规定，但并未完全禁止境外存储。"
    },
    {
        category: "数据出境",
        question: "因业务等需要，确需向中华人民共和国境外提供个人信息的，应当具备下列哪些条件之一？",
        options: ["经过专业认证", "通过国家网信部门组织的数据出境安全评估", "按照国家网信部门的规定经专业机构进行个人信息保护认证", "以上都是"],
        answer: 3,
        explanation: "《个人信息保护法》第三十八条规定了个人信息出境的条件，包括安全评估、认证等方式。"
    },
    {
        category: "数据出境",
        question: "个人信息处理者向中华人民共和国境外提供个人信息的，不需要向个人告知以下哪项事项？",
        options: ["境外接收方的姓名或者名称", "个人向境外接收方行使权利的方式和程序", "境外接收方的联系方式", "境外接收方处理个人信息的目的"],
        answer: 2,
        explanation: "法律要求告知境外接收方名称、处理目的、方式、信息种类等，但联系方式不是必须告知的内容。"
    },
    {
        category: "数据出境",
        question: "数据安全法对数据出境主要规定了以下哪些内容？",
        options: ["数据分类分级管理", "对等采取措施", "数据安全审查", "以上都是"],
        answer: 3,
        explanation: "《数据安全法》对数据出境规定了分类分级管理、对等措施、安全审查等多方面内容。"
    },
    {
        category: "数据出境",
        question: "《网络安全法》规定，关键信息基础设施的运营者在中华人民共和国境内运营中收集和产生的重要数据的出境安全管理，适用（ ）的规定。",
        options: ["《数据安全法》", "《个人信息保护法》", "《网络安全法》", "《国家安全法》"],
        answer: 2,
        explanation: "《网络安全法》第三十七条规定了关键信息基础设施运营者数据出境的安全管理要求。"
    }
];

// ===== 游戏状态 =====
let gameState = {
    playerName: '',
    currentQuestion: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    answers: [],
    questions: [],
    timer: null,
    timeLeft: 30,
    isAnswered: false
};

// ===== DOM Elements =====
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    review: document.getElementById('review-screen')
};

// ===== 粒子背景 =====
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.1
        };
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function(p, index) {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, ' + p.opacity + ')';
            ctx.fill();

            particles.forEach(function(p2, index2) {
                if (index !== index2) {
                    var dx = p.x - p2.x;
                    var dy = p.y - p2.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(0, 212, 255, ' + (0.1 * (1 - dist / 150)) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
}

// ===== 屏幕切换 =====
function showScreen(screenName) {
    Object.keys(screens).forEach(function(key) {
        screens[key].classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// ===== 开始游戏 =====
function startGame() {
    var nameInput = document.getElementById('player-name');
    var name = nameInput.value.trim();

    if (!name) {
        nameInput.style.borderColor = 'var(--accent)';
        nameInput.placeholder = '请输入昵称后再开始';
        setTimeout(function() {
            nameInput.style.borderColor = 'var(--glass-border)';
            nameInput.placeholder = '请输入您的昵称';
        }, 2000);
        return;
    }

    gameState.playerName = name;
    document.getElementById('display-name').textContent = name;

    gameState.questions = shuffleArray(questionBank.slice()).slice(0, 20);
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    gameState.answers = [];

    showScreen('game');
    loadQuestion();
}

// ===== 加载题目 =====
function loadQuestion() {
    var question = gameState.questions[gameState.currentQuestion];
    gameState.isAnswered = false;
    gameState.timeLeft = 30;

    document.getElementById('current-q').textContent = gameState.currentQuestion + 1;
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('progress').style.width = ((gameState.currentQuestion) / 20 * 100) + '%';

    document.getElementById('category').textContent = question.category;
    document.getElementById('question-text').textContent = question.question;

    var optionsArea = document.getElementById('options-area');
    var letters = ['A', 'B', 'C', 'D'];
    optionsArea.innerHTML = '';

    question.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = 'option-' + index;
        btn.onclick = function() { selectAnswer(index); };

        var letterSpan = document.createElement('span');
        letterSpan.className = 'option-letter';
        letterSpan.textContent = letters[index];

        var textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = option;

        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);
        optionsArea.appendChild(btn);
    });

    var feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    document.getElementById('btn-next').style.display = 'none';

    startTimer();
}

// ===== 计时器 =====
function startTimer() {
    clearInterval(gameState.timer);
    var timerElement = document.getElementById('timer');

    gameState.timer = setInterval(function() {
        gameState.timeLeft--;
        timerElement.textContent = '⏱️ ' + gameState.timeLeft;

        if (gameState.timeLeft <= 10) {
            timerElement.classList.add('warning');
        } else {
            timerElement.classList.remove('warning');
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            handleTimeout();
        }
    }, 1000);
}

// ===== 超时处理 =====
function handleTimeout() {
    gameState.isAnswered = true;
    var question = gameState.questions[gameState.currentQuestion];

    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById('option-' + question.answer).classList.add('show-correct');

    var feedback = document.getElementById('feedback');
    feedback.className = 'feedback show timeout';
    feedback.querySelector('.feedback-icon').textContent = '⏰';
    feedback.querySelector('.feedback-text').textContent = '时间到！正确答案是：' + question.options[question.answer];

    gameState.answers.push({
        question: question,
        userAnswer: -1,
        isCorrect: false,
        isTimeout: true
    });

    gameState.wrongCount++;

    document.getElementById('btn-next').style.display = 'block';

    if (gameState.currentQuestion >= 19) {
        document.getElementById('btn-next').textContent = '查看结果 →';
    }
}

// ===== 选择答案 =====
function selectAnswer(index) {
    if (gameState.isAnswered) return;

    gameState.isAnswered = true;
    clearInterval(gameState.timer);

    var question = gameState.questions[gameState.currentQuestion];
    var isCorrect = index === question.answer;

    var buttons = document.querySelectorAll('.option-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById('option-' + index).classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        document.getElementById('option-' + question.answer).classList.add('show-correct');
    }

    if (isCorrect) {
        gameState.score += 5;
        gameState.correctCount++;
    } else {
        gameState.wrongCount++;
    }

    var feedback = document.getElementById('feedback');
    feedback.className = 'feedback show ' + (isCorrect ? 'correct' : 'wrong');
    feedback.querySelector('.feedback-icon').textContent = isCorrect ? '✅' : '❌';
    feedback.querySelector('.feedback-text').textContent = isCorrect
        ? '回答正确！+5分'
        : '回答错误！正确答案是：' + question.options[question.answer];

    gameState.answers.push({
        question: question,
        userAnswer: index,
        isCorrect: isCorrect,
        isTimeout: false
    });

    document.getElementById('score').textContent = gameState.score;

    document.getElementById('btn-next').style.display = 'block';

    if (gameState.currentQuestion >= 19) {
        document.getElementById('btn-next').textContent = '查看结果 →';
    }
}

// ===== 下一题 =====
function nextQuestion() {
    gameState.currentQuestion++;

    if (gameState.currentQuestion >= 20) {
        showResult();
        return;
    }

    loadQuestion();
}

// ===== 显示结果 =====
function showResult() {
    clearInterval(gameState.timer);

    var totalScore = gameState.score;
    var accuracy = Math.round((gameState.correctCount / 20) * 100);

    document.getElementById('final-score').textContent = totalScore;
    document.getElementById('correct-count').textContent = gameState.correctCount;
    document.getElementById('wrong-count').textContent = gameState.wrongCount;
    document.getElementById('accuracy').textContent = accuracy + '%';

    var circle = document.getElementById('score-circle');
    var circumference = 2 * Math.PI * 85;
    var offset = circumference - (totalScore / 100) * circumference;
    setTimeout(function() {
        circle.style.strokeDashoffset = offset;
    }, 300);

    var rankElement = document.getElementById('result-rank');
    var resultIcon = document.getElementById('result-icon');
    var resultTitle = document.getElementById('result-title');
    var resultMessage = document.getElementById('result-message');

    var rank, rankClass, message;

    if (totalScore >= 90) {
        rank = '🏆 网络安全大师';
        rankClass = 'gold';
        resultIcon.textContent = '🏆';
        resultTitle.textContent = '太棒了！';
        message = '您对网络安全知识掌握得非常全面！您具备很强的网络安全意识，是网络安全的守护者。继续保持，传播网络安全知识，让更多人受益！';
    } else if (totalScore >= 70) {
        rank = '🥈 网络安全达人';
        rankClass = 'silver';
        resultIcon.textContent = '🥈';
        resultTitle.textContent = '很不错！';
        message = '您对网络安全有较好的了解！建议继续深入学习个人信息保护和防范网络诈骗的知识，提升自己的安全防护能力。';
    } else if (totalScore >= 50) {
        rank = '🥉 网络安全学徒';
        rankClass = 'bronze';
        resultIcon.textContent = '🥉';
        resultTitle.textContent = '继续加油！';
        message = '您对网络安全有基本了解，但还需要加强学习。建议多关注网络安全法、个人信息保护法等法律法规，提高安全意识。';
    } else {
        rank = '📚 网络安全新手';
        rankClass = 'normal';
        resultIcon.textContent = '📚';
        resultTitle.textContent = '还需努力！';
        message = '网络安全知识还需要加强哦！建议认真学习《网络安全法》《个人信息保护法》等法律法规，提高网络安全意识，保护好自己的信息安全。';
    }

    var rankBadge = document.createElement('span');
    rankBadge.className = 'rank-badge ' + rankClass;
    rankBadge.textContent = rank;
    rankElement.innerHTML = '';
    rankElement.appendChild(rankBadge);

    var messageP = document.createElement('p');
    messageP.textContent = message;
    resultMessage.innerHTML = '';
    resultMessage.appendChild(messageP);

    var svgNS = "http://www.w3.org/2000/svg";
    var defs = document.createElementNS(svgNS, "defs");
    var gradient = document.createElementNS(svgNS, "linearGradient");
    gradient.setAttribute("id", "scoreGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "0%");

    var stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("style", "stop-color:#00d4ff");

    var stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("style", "stop-color:#7b2ff7");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);

    var svg = document.querySelector('.score-circle svg');
    var existingDefs = svg.querySelector('defs');
    if (existingDefs) {
        svg.removeChild(existingDefs);
    }
    svg.insertBefore(defs, svg.firstChild);

    showScreen('result');
}

// ===== 重新开始 =====
function restartGame() {
    gameState = {
        playerName: '',
        currentQuestion: 0,
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        answers: [],
        questions: [],
        timer: null,
        timeLeft: 30,
        isAnswered: false
    };

    document.getElementById('player-name').value = '';
    showScreen('start');
}

// ===== 查看解析 =====
function reviewAnswers() {
    var reviewList = document.getElementById('review-list');
    var letters = ['A', 'B', 'C', 'D'];
    reviewList.innerHTML = '';

    gameState.answers.forEach(function(answer, index) {
        var statusClass = answer.isTimeout ? 'timeout' : (answer.isCorrect ? 'correct' : 'wrong');
        var statusText = answer.isTimeout ? '⏰ 超时' : (answer.isCorrect ? '✅ 正确' : '❌ 错误');

        var item = document.createElement('div');
        item.className = 'review-item ' + statusClass;

        var questionDiv = document.createElement('div');
        questionDiv.className = 'review-question';
        questionDiv.textContent = (index + 1) + '. ' + answer.question.question;

        var statusSpan = document.createElement('span');
        statusSpan.style.float = 'right';
        statusSpan.style.fontSize = '14px';
        statusSpan.textContent = statusText;
        questionDiv.appendChild(statusSpan);

        var answerDiv = document.createElement('div');
        answerDiv.className = 'review-answer';

        answer.question.options.forEach(function(opt, i) {
            var optDiv = document.createElement('div');
            optDiv.className = 'review-answer-item';
            if (i === answer.userAnswer) optDiv.className += ' user-answer';
            if (i === answer.question.answer) optDiv.className += ' correct-answer';
            optDiv.textContent = letters[i] + '. ' + opt;
            answerDiv.appendChild(optDiv);
        });

        var explanationDiv = document.createElement('div');
        explanationDiv.className = 'review-explanation';

        var strongEl = document.createElement('strong');
        strongEl.textContent = '解析：';
        explanationDiv.appendChild(strongEl);
        explanationDiv.appendChild(document.createTextNode(answer.question.explanation));

        item.appendChild(questionDiv);
        item.appendChild(answerDiv);
        item.appendChild(explanationDiv);
        reviewList.appendChild(item);
    });

    showScreen('review');
}

// ===== 返回结果 =====
function goToResult() {
    showScreen('result');
}

// ===== 工具函数 =====
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    initParticles();

    document.getElementById('player-name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startGame();
        }
    });
});
