export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type TranslationKey = string;

export type TranslationDictionary = {
  [key in TranslationKey]: {
    [lang in Language]: string;
  };
};

export const translations: TranslationDictionary = {
  profile: {
    ko: '프로필',
    en: 'Profile',
    ja: 'プロフィール',
    zh: '个人资料',
  },
  values: {
    ko: '가치관',
    en: 'Values',
    ja: '価値観',
    zh: '价值观',
  },
  valuesDescription: {
    ko: 'AI와 청년,\n그리고 스포츠\n미래를 움직이는 힘',
    en: 'AI and Youth,\nand Sports\nPower to Move the Future',
    ja: 'AIと青年、\nそしてスポーツ\n未来を動かす力',
    zh: 'AI与青年，\n以及体育\n推动未来的力量',
  },
  history: {
    ko: '인증 및 자격',
    en: 'Certifications',
    ja: '資格',
    zh: '资格',
  },
  sectionTitle: {
    ko: '인증 및 자격',
    en: 'Certifications',
    ja: '認定及び資格',
    zh: '认证及资格',
  },
  activities: {
    ko: '프로젝트',
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
  },
  name: {
    ko: '최석재',
    en: 'Seokjae Choi',
    ja: '崔碩宰',
    zh: '崔碩宰',
  },
  title: {
    ko: '체육회 이사|사단법인 사무국장|AI Agent',
    en: 'Director of the Sports Council|Secretary-General of the Association|AI Agent',
    ja: '体育会ディレクター|社団法人事務局長|AIエージェント',
    zh: '体育会理事|社团法人事务局长|AI代理',
  },
  birth: {
    ko: '출생',
    en: 'Birth',
    ja: '生年月日',
    zh: '出生',
  },
  birthDate: {
    ko: '1999년 9월 27일',
    en: 'Sep 27, 1999',
    ja: '1999年9月27日',
    zh: '1999年9月27日',
  },
  affiliation: {
    ko: '소속',
    en: 'Affiliations',
    ja: '所属',
    zh: '隶属',
  },
  affiliationDescription: {
    ko: '대전광역시 서구체육회 이사\n(사)대한청년을세계로 사무국장\n이노커브 AI Agent',
    en: 'Director of the Sports Council\nSecretary-General of the Association\nInnoCurve AI Agent',
    ja: '体育会ディレクター\n社団法人事務局長\nイノカーブ AIエージェント',
    zh: '体育会理事\n社团法人事务局长\nInnoCurve AI代理',
  },
  education: {
    ko: '전공',
    en: 'Major',
    ja: '専攻',
    zh: '专业',
  },
  educationDescription: {
    ko: '레저스포츠학, 스포츠마케팅학',
    en: 'Leisure Sports, Sports Marketing',
    ja: 'レクリエーションスポーツ, スポーツマーケティング',
    zh: '休闲体育, 体育营销',
  },
  field: {
    ko: '분야',
    en: 'Fields',
    ja: '分野',
    zh: '领域',
  },
  fieldDescription: {
    ko: 'AI, 청년, 스포츠',
    en: 'AI, Youth, Sports',
    ja: 'AI、青年、スポーツ',
    zh: 'AI，青年，体育',
  },
  mbti: {
    ko: 'MBTI',
    en: 'MBTI',
    ja: 'MBTI',
    zh: 'MBTI',
  },
  mbtiType: {
    ko: 'ENTJ',
    en: 'ENTJ',
    ja: 'ENTJ',
    zh: 'ENTJ',
  },
  contact: {
    ko: '문의',
    en: 'Contact',
    ja: 'お問い合わせ',
    zh: '联系',
  },
  smartOptions: {
    ko: '스마트 옵션',
    en: 'Smart Options',
    ja: 'スマートオプション',
    zh: '智能选项',
  },
  socialMedia: {
    ko: 'SNS',
    en: 'Social Media',
    ja: 'SNS',
    zh: '社交媒体',
  },
  viewMore: {
    ko: '자세히 보기',
    en: 'View More',
    ja: '詳細を見る',
    zh: '查看更多',
  },
  allRightsReserved: {
    ko: '모든 권리 보유.',
    en: 'All rights reserved.',
    ja: 'All rights reserved.',
    zh: '版权所有。',
  },
  date: {
    ko: '게시일',
    en: 'Date',
    ja: '投稿日',
    zh: '日期',
  },
  summary: {
    ko: '요약',
    en: 'Summary',
    ja: '要約',
    zh: '摘要',
  },
  details: {
    ko: '상세 내용',
    en: 'Details',
    ja: '詳細内容',
    zh: '详情',
  },
  gallery: {
    ko: '갤러리',
    en: 'Gallery',
    ja: 'ギャラリー',
    zh: '画廊',
  },
  backToList: {
    ko: '목록으로 돌아가기',
    en: 'Back to List',
    ja: 'リストに戻る',
    zh: '返回列表',
  },
  expandToggle: {
    ko: '펼쳐보기',
    en: 'Expand',
    ja: '展開する',
    zh: '展开',
  },
  collapseToggle: {
    ko: '숨기기',
    en: 'Collapse',
    ja: '折りたたむ',
    zh: '折叠',
  },
  aiClone: {
    ko: 'AI 클론',
    en: 'AI Clone',
    ja: 'AIクローン',
    zh: 'AI克隆',
  },
  phone: {
    ko: '전화',
    en: 'Phone',
    ja: '電話',
    zh: '电话',
  },
  greetingVideo: {
    ko: '인사 영상',
    en: 'Greeting Video',
    ja: '挨拶動画',
    zh: '问候视频',
  },
  innoCardInquiry: {
    ko: '문의',
    en: 'Inquiry',
    ja: 'お問い合わせ',
    zh: '咨询',
  },
  contactOptions: {
    ko: '연락하기',
    en: 'Get in Touch',
    ja: 'お問い合わせ',
    zh: '联系方式',
  },
  greetingTitle: {
    ko: '희미해지는 것이 아닌,\n더 깊이 새겨지는\n당신의 존재',
    en: 'Not fading away,\nYour presence\nDeepens over time',
    ja: '消えゆくのではなく、\nより深く刻まれゆく\nあなたの存在',
    zh: '不是渐渐褪色，\n而是愈发深刻地\n铭记你的存在',
  },
  greetingDescription: {
    ko: '인간의 존엄이 위협받는 AI 시대에도,\n당신의 이야기는 결코 흐려지지 않습니다.\n\nInnoCard는 당신의 가치를 더 선명하고,\n더 오래도록 기억하게 만듭니다.',
    en: 'Even in the AI era where human dignity is threatened,\nyour story will never fade.\n\nInnoCard makes your value clearer\nand more memorable for longer.',
    ja: '人間の尊厳が脅かされるAI時代でも、\nあなたの物語は決して薄れることはありません。\n\nInnoCardで、あなたの価値を\nより鮮明に、より永く心に刻みます。',
    zh: '即使在人类尊严受到威胁的AI时代，\n你的故事也永远不会褪色。\n\nInnoCard让你的价值\n更清晰，更持久地铭记于心。',
  },
  chatInputPlaceholder: {
    ko: '메시지를 입력하세요...',
    en: 'Type your message...',
    ja: 'メッセージを入力してください...',
    zh: '请输入消息...',
  },
  cloneTitle: {
    ko: "'s Clone",
    en: "'s Clone",
    ja: "'s Clone",
    zh: "'s Clone"
  },
  formName: {
    ko: '이름',
    en: 'Name',
    ja: '名前',
    zh: '姓名',
  },
  formNamePlaceholder: {
    ko: '이름을 입력하세요',
    en: 'Enter your name',
    ja: '名前を入力してください',
    zh: '请输入姓名',
  },
  formBirthdate: {
    ko: '생년월일',
    en: 'Date of Birth',
    ja: '生年月日',
    zh: '出生日期',
  },
  formBirthdatePlaceholder: {
    ko: 'YYYY-MM-DD',
    en: 'YYYY-MM-DD',
    ja: 'YYYY-MM-DD',
    zh: 'YYYY-MM-DD',
  },
  formPhone: {
    ko: '전화번호',
    en: 'Phone Number',
    ja: '電話番号',
    zh: '电话号码',
  },
  formPhonePlaceholder: {
    ko: '전화번호를 입력하세요',
    en: 'Enter your phone number',
    ja: '電話番号を入力してください',
    zh: '请输入电话号码',
  },
  formInquiry: {
    ko: '문의 내용',
    en: 'Inquiry Details',
    ja: 'お問い合わせ内容',
    zh: '咨询内容',
  },
  formInquiryPlaceholder: {
    ko: '예) 제작 문의',
    en: 'e.g., Production inquiry',
    ja: '例）制作に関するお問い合わせ',
    zh: '例如：制作咨询',
  },
  formSubmit: {
    ko: '제출',
    en: 'Submit',
    ja: '送信',
    zh: '提交',
  },
  back: {
    ko: '뒤로',
    en: 'Back',
    ja: '戻る',
    zh: '返回',
  },
  initialGreeting: {
    ko: '안녕하세요! 저는 최석재입니다. 무엇을 도와드릴까요?',
    en: 'Hello! I am Seokjae Choi. How can I help you?',
    ja: 'こんにちは！崔碩宰と申します。何かお手伝いできることはありますか？',
    zh: '你好！我是崔硕宰。我能为您做些什么？'
  },
  cloneGreeting: {
    ko: "안녕하세요! 저는 최석재's Clone입니다. 무엇을 도와드릴까요?",
    en: "Hello! I'm Seokjae Choi's Clone. How can I help you?",
    ja: "こんにちは！崔碩宰のクローンです。どのようにお手伝いできますか？",
    zh: "你好！我是崔硕宰的克隆。我能为您做些什么？"
  },
  formEmail: {
    ko: '이메일',
    en: 'Email',
    ja: 'メール',
    zh: '电子邮件',
  },
  formEmailPlaceholder: {
    ko: '이메일을 입력하세요',
    en: 'Enter your email',
    ja: 'メールアドレスを入力してください',
    zh: '请输入电子邮件',
  },
  greetingScript: {
    ko: '안녕하십니까, 최석재입니다.\n\n저는 현재 대전광역시서구체육회 이사, 사단법인 대한청년을세계로 사무국장, 그리고 INNOCURVE AI 에이전트로 활동하고 있습니다.\n\nAI와 청년, 그리고 스포츠의 미래를 움직이는 힘을 가치로 삼아, 기존의 한계를 넘어 변화와 혁신을 주도하는 것이 저의 목표입니다.\nAI 기술을 활용해 더 스마트한 세상을 만들고, 청년들과 함께 열정적으로 도전하며, 스포츠를 통해 강인한 정신과 문화를 형성하는 데 앞장서고 있습니다.\n\n변화는 곧 기회입니다.\n저는 AI를 통해 더 혁신적이고, 청년들과 함께 더 뜨겁게, 스포츠로 더 강인하게 나아가겠습니다.\n감사합니다.',
    en: 'Nice to meet you, I am Seokjae Choi.\n\nI currently serve as a director of the Daejeon Seogu Sports Council, Secretary General of the Korean Youth to the World Association, and as an AI agent at INNOCURVE.\n\nMy goal is to drive change and innovation beyond existing limitations, valuing the power that moves the future of AI, youth, and sports.\nI am taking the lead in creating a smarter world through AI technology, passionately challenging with young people, and forming a strong spirit and culture through sports.\n\nChange is opportunity.\nI will move forward more innovatively through AI, more passionately with young people, and more strongly through sports.\nThank you.',
    ja: 'はじめまして、チェ・ソクジェと申します。\n\n私は現在、大田広域市西区体育会理事、社団法人大韓青年を世界へ事務局長、そしてINNOCURVE AIエージェントとして活動しております。\n\nAIと青年、そしてスポーツの未来を動かす力を価値として、既存の限界を超えて変化とイノベーションを主導することが私の目標です。\nAI技術を活用してよりスマートな世界を作り、青年たちと共に情熱的に挑戦し、スポーツを通じて強靭な精神と文化を形成することに先頭に立っています。\n\n変化はすなわちチャンスです。\n私はAIを通じてよりイノベーティブに、青年たちと共により熱く、スポーツでより力強く前進して参ります。\nありがとうございます。',
    zh: '您好，我是崔锡宰。\n\n我目前担任大田广域市西区体育会理事、社团法人韩国青年走向世界秘书长，以及INNOCURVE AI代理人。\n\n以推动AI、青年和体育未来的力量为价值，突破现有限制引领变革与创新是我的目标。\n我正在通过AI技术打造更智能的世界，与年轻人一起充满激情地挑战，并通过体育运动塑造坚韧的精神和文化。\n\n变化就是机遇。\n我将通过AI变得更具创新性，与年轻人一起更加热情，通过体育运动变得更加强大。\n谢谢。'
  },
  affiliations_1: {
    ko: '대전광역시 서구체육회',
    en: 'Seo-gu Sports Council of Daejeon',
    ja: '大田廣域市 西區體育會',
    zh: '大田廣域市 西區體育會'
  },
  affiliations_2: {
    ko: '(사)대한청년을세계로',
    en: 'Korea Youth to the World',
    ja: '(社)大韓青年為世界',
    zh: '(社)大韓青年為世界'
  },
  affiliations_3: {
    ko: '이노커브',
    en: 'InnoCurve',
    ja: 'イノカーブ',
    zh: 'InnoCurve'
  }
};

export function translate(key: TranslationKey, lang: Language): string {
  try {
    const translation = translations[key]?.[lang] ?? translations[key]?.['ko'] ?? key;
    return translation || key;
  } catch (error) {
    console.error(`Translation error for key: ${key}, language: ${lang}`, error);
    return key;
  }
}

