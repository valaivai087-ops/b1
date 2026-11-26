(() => {
  'use strict';
  const lessons = {
  "L1": [
    {
      "title": "過去式：說已經發生的事",
      "source": "A few years ago, I took an online class for the first time.",
      "meaning": "事情發生在以前，動作的字也要換成「以前版」。take 的過去式是 took。",
      "formula": "誰＋過去式動詞＋做了什麼",
      "parts": [
        [
          "誰／主詞",
          "I",
          "s"
        ],
        [
          "動作／過去式",
          "played",
          "v"
        ],
        [
          "做什麼／受詞",
          "a game",
          "o"
        ],
        [
          "時間",
          "yesterday",
          "m"
        ]
      ],
      "zh": "我昨天玩了一個遊戲。",
      "steps": [
        "先找時間 yesterday，意思是昨天。",
        "誰做？I。做什麼？play a game。",
        "把 play 換成 played，表示已經發生；原課文 take 要換成 took。"
      ],
      "trap": "規則動詞常加 -ed；take → took、go → went 需要另外記。",
      "question": "Yesterday, I ____ a book.",
      "options": [
        "read",
        "reads"
      ],
      "answer": 0,
      "why": "read 的過去式仍拼成 read，讀音是 /red/。主詞 I 不接 reads。"
    },
    {
      "title": "enjoy 後面的活動加 -ing",
      "source": "I also enjoyed using online tools such as Kahoot! and Quizlet.",
      "meaning": "enjoy 是「喜歡、享受」。後面說喜歡做的活動，動作要用 -ing 形式。",
      "formula": "誰＋enjoy/enjoyed＋活動的 -ing 形式",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "喜歡",
          "enjoy",
          "v"
        ],
        [
          "活動／受詞",
          "reading books",
          "o"
        ]
      ],
      "zh": "我喜歡看書。",
      "steps": [
        "I 是做這件事的人。",
        "enjoy 說明喜歡。",
        "read 改成 reading，整塊 reading books 說明喜歡的活動。"
      ],
      "trap": "說享受某活動，用 enjoy reading，不用 enjoy to read。",
      "question": "Amy enjoys ____ pictures.",
      "options": [
        "to draw",
        "drawing"
      ],
      "answer": 1,
      "why": "enjoy 後的活動用 drawing。Amy 是一個人，所以 enjoy 加 s。"
    },
    {
      "title": "that 後面裝一件事",
      "source": "I never thought that I could take classes in my pajamas!",
      "meaning": "「我知道」後面可以接一整件事。that 把後面的句子接進來，告訴我們知道什麼。",
      "formula": "誰＋know/think＋that＋一個完整句子",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "動作",
          "know",
          "v"
        ],
        [
          "接句子的字",
          "that",
          "j"
        ],
        [
          "知道的事／受詞",
          "Mia likes cats",
          "o"
        ]
      ],
      "zh": "我知道 Mia 喜歡貓。",
      "steps": [
        "先讀 I know：我知道。",
        "再問「知道什麼？」答案是 Mia likes cats。",
        "that 接起這兩部分；後面仍有自己的主詞 Mia 和動詞 likes。"
      ],
      "trap": "這裡 that 後面說一件完整的事；不需要再放問句順序。",
      "question": "I think that Ben ____ kind.",
      "options": [
        "is",
        "are"
      ],
      "answer": 0,
      "why": "that 後面的主詞 Ben 是單數，用 is。"
    },
    {
      "title": "最基本的骨架：誰＋怎麼樣",
      "source": "She looked like an alien on the screen, so my classmates and I had another good laugh.",
      "meaning": "有些動詞後面是在說主角的樣子、感覺或身分。後面這一塊叫補語。",
      "formula": "誰＋be/look/feel＋樣子或狀態",
      "parts": [
        [
          "誰／主詞",
          "Amy",
          "s"
        ],
        [
          "連接狀態",
          "looks",
          "v"
        ],
        [
          "看起來怎樣／補語",
          "happy",
          "c"
        ]
      ],
      "zh": "Amy 看起來很開心。",
      "steps": [
        "先找主角 Amy。",
        "looks 表示看起來。",
        "happy 描述 Amy 的狀態。這裡不是 Amy 對另一個東西做動作。"
      ],
      "trap": "look happy 說看起來開心；look at Amy 說看 Amy，兩種用法不同。",
      "question": "The children feel ____.",
      "options": [
        "happy",
        "happily"
      ],
      "answer": 0,
      "why": "feel 後的 happy 描述孩子的感覺，用形容詞。"
    }
  ],
  "L2": [
    {
      "title": "It is…to…：做這件事很……",
      "source": "It is not easy to tell you this, but I still need to say it.",
      "meaning": "先說「很簡單／很難」，再補上「做什麼」。開頭的 It 先占住主詞位置。",
      "formula": "It＋is＋形容詞＋to＋原形動詞",
      "parts": [
        [
          "占位主詞",
          "It",
          "s"
        ],
        [
          "是",
          "is",
          "v"
        ],
        [
          "怎麼樣／補語",
          "easy",
          "c"
        ],
        [
          "真正談的活動",
          "to read this book",
          "m"
        ]
      ],
      "zh": "讀這本書很容易。",
      "steps": [
        "easy 說容易。",
        "容易的是哪件事？to read this book。",
        "也可說 To read this book is easy，但 It 開頭更方便。"
      ],
      "trap": "to 後用原形 read，不是 reads。",
      "question": "It is fun ____ English.",
      "options": [
        "learns",
        "to learn"
      ],
      "answer": 1,
      "why": "to learn English 說明「好玩的是學英文」。"
    },
    {
      "title": "動作也能當主詞",
      "source": "Leaving you really breaks my heart because we’ve had some great times together.",
      "meaning": "把活動的 -ing 形式放在開頭，就能把「做某件事」當作句子主角。",
      "formula": "活動的 -ing 形式＋單數動詞＋其他內容",
      "parts": [
        [
          "活動／主詞",
          "Reading books",
          "s"
        ],
        [
          "動作",
          "helps",
          "v"
        ],
        [
          "幫誰",
          "me",
          "o"
        ]
      ],
      "zh": "看書幫助了我。",
      "steps": [
        "先找整塊 Reading books：看書這件事。",
        "幫助誰？me。",
        "這裡把整個活動當成一件事，所以用 helps。"
      ],
      "trap": "Reading books 在這裡是主詞；不是每個 -ing 都表示「正在」。",
      "question": "Swimming ____ fun.",
      "options": [
        "is",
        "are"
      ],
      "answer": 0,
      "why": "Swimming 指游泳這件事，視為單數，用 is。"
    },
    {
      "title": "現在完成式：以前到現在的連結",
      "source": "In fact, things have been totally different since you came into my life.",
      "meaning": "有些事情從以前開始，到現在還有關係。用 have/has 加過去分詞來說。",
      "formula": "誰＋have/has＋過去分詞＋since＋起點",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "連到現在的動詞組",
          "have lived",
          "v"
        ],
        [
          "在哪裡",
          "here",
          "m"
        ],
        [
          "從何時起",
          "since 2020",
          "m"
        ]
      ],
      "zh": "我從 2020 年就住在這裡。",
      "steps": [
        "since 2020 給出開始的時間。",
        "I 用 have；she、he 用 has。",
        "live 的過去分詞是 lived，這句表示從那時住到現在。"
      ],
      "trap": "現在完成式用 have/has＋過去分詞；since 接起點，for 接一段時間。",
      "question": "She ____ lived here for two years.",
      "options": [
        "have",
        "has"
      ],
      "answer": 1,
      "why": "She 用 has；for two years 表示兩年的時間長度。"
    }
  ],
  "L3": [
    {
      "title": "句子裡的問句改回平常順序",
      "source": "You may know that brown bears hibernate and that goldfish sleep without closing their eyes, but have you ever wondered how other animals sleep?",
      "meaning": "「牠們怎麼睡？」放進「我知道……」裡面時，後面改用「誰＋動作」的順序。",
      "formula": "誰＋know/wonder＋疑問詞＋誰＋動作",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "知道",
          "know",
          "v"
        ],
        [
          "怎樣",
          "how",
          "j"
        ],
        [
          "知道的內容",
          "birds sleep",
          "o"
        ]
      ],
      "zh": "我知道鳥怎麼睡覺。",
      "steps": [
        "直接問可以說 How do birds sleep?",
        "放進 I know 後，不再保留問句用的 do。",
        "用 how＋birds＋sleep，整塊都是知道的內容。"
      ],
      "trap": "用 I know how birds sleep，不是 I know how do birds sleep。",
      "question": "I know where ____.",
      "options": [
        "she lives",
        "does she live"
      ],
      "answer": 0,
      "why": "間接問句用 she lives 的平常順序。"
    },
    {
      "title": "比較級：更……",
      "source": "They can rest on the land, but they are much safer in the water.",
      "meaning": "比較兩種情況，可以說「更安全」。safe 變 safer，前面可加 much 表示安全得多。",
      "formula": "誰＋be 動詞＋比較級＋其他內容",
      "parts": [
        [
          "誰",
          "The cat",
          "s"
        ],
        [
          "是",
          "is",
          "v"
        ],
        [
          "更怎麼樣",
          "safer",
          "c"
        ],
        [
          "在哪裡",
          "inside",
          "m"
        ]
      ],
      "zh": "這隻貓在屋內更安全。",
      "steps": [
        "safe 是安全，safer 是更安全。",
        "is 連接主角和狀態。",
        "inside 交代在哪裡；比較對象可由上下文知道。"
      ],
      "trap": "短字常加 -er，長字常用 more；不說 more safer。",
      "question": "This bag is ____ than that one.",
      "options": [
        "more small",
        "smaller"
      ],
      "answer": 1,
      "why": "small 的比較級是 smaller，than 引出比較對象。"
    },
    {
      "title": "to＋動作：說明目的",
      "source": "To avoid floating away, they lock their little paws together and hold on to each other.",
      "meaning": "「為了做什麼？」可以用 to 加動詞回答。avoid 後面若接活動，要再用 -ing。",
      "formula": "To＋動作（目的），誰＋動作",
      "parts": [
        [
          "為了什麼",
          "To stay warm",
          "m"
        ],
        [
          "誰",
          "I",
          "s"
        ],
        [
          "動作",
          "wear",
          "v"
        ],
        [
          "穿什麼",
          "a coat",
          "o"
        ]
      ],
      "zh": "為了保暖，我穿一件外套。",
      "steps": [
        "先讀主句 I wear a coat。",
        "再問為什麼穿？To stay warm。",
        "to 後的 stay 是原形。課文 avoid floating away 是「避免漂走」。"
      ],
      "trap": "目的用 to stay；avoid 後用 floating，不說 avoid to float。",
      "question": "To avoid ____ late, we leave early.",
      "options": [
        "being",
        "be"
      ],
      "answer": 0,
      "why": "avoid 後接 being；to avoid 整塊說明提早出發的目的。"
    },
    {
      "title": "It is reported that：據報導",
      "source": "In fact, it is reported that some giraffes sleep only thirty minutes a day on average.",
      "meaning": "想說「有人報導某件事」時，可以用這個固定開頭，再接完整內容。",
      "formula": "It＋is＋reported＋that＋報導內容",
      "parts": [
        [
          "占位開頭",
          "It",
          "s"
        ],
        [
          "被報導",
          "is reported",
          "v"
        ],
        [
          "連接",
          "that",
          "j"
        ],
        [
          "報導的事",
          "the shop is closed today",
          "o"
        ]
      ],
      "zh": "據報導，這間店今天休息。",
      "steps": [
        "報導內容是 the shop is closed today。",
        "is reported 是被動動詞組。",
        "that 把內容接進來；也可先理解成 People report that…"
      ],
      "trap": "It 在這裡先占位置；reported 要用過去分詞。",
      "question": "It is ____ that the bus is late.",
      "options": [
        "report",
        "reported"
      ],
      "answer": 1,
      "why": "is reported 是被動組合，後接報導內容。"
    }
  ],
  "L4": [
    {
      "title": "關係子句：說清楚是哪一個",
      "source": "In Pingtung, officials in one park use trained dogs to find trees that have “brown root rot” disease.",
      "meaning": "先說一個人或東西，再加一句小介紹，讓別人知道你說的是哪一個。",
      "formula": "名詞＋who/which/that＋介紹它的小句子",
      "parts": [
        [
          "誰／主詞",
          "The dog",
          "s"
        ],
        [
          "介紹這隻狗",
          "that found my bag",
          "m"
        ],
        [
          "主要動作",
          "is",
          "v"
        ],
        [
          "狀態",
          "friendly",
          "c"
        ]
      ],
      "zh": "找到我袋子的那隻狗很友善。",
      "steps": [
        "先暫時遮住 that found my bag，主句是 The dog is friendly。",
        "小句子說清楚是哪隻狗。",
        "that 在小句子中代替 the dog，作 found 的主詞。"
      ],
      "trap": "介紹物可用 which 或 that，介紹人可用 who 或 that；作主詞的關係代名詞要保留。",
      "question": "The girl ____ helped me is Amy.",
      "options": [
        "who",
        "where"
      ],
      "answer": 0,
      "why": "who 代替 the girl，作 helped 的主詞。"
    },
    {
      "title": "逗號補充：順便多說一點",
      "source": "Maria Tello, who was a 58-year-old woman with diabetes, was asleep one night.",
      "meaning": "名字已經清楚時，可以用逗號包住一段補充介紹。遮住它，主句仍讀得懂。",
      "formula": "人名／明確名詞，who/which＋補充，主句剩下部分",
      "parts": [
        [
          "誰",
          "Amy",
          "s"
        ],
        [
          "順便補充",
          "who likes dogs",
          "m"
        ],
        [
          "主要動作",
          "is",
          "v"
        ],
        [
          "身分",
          "my friend",
          "c"
        ]
      ],
      "zh": "Amy 是我的朋友，她喜歡狗。",
      "steps": [
        "主句先讀 Amy is my friend。",
        "補充句說 Amy 喜歡狗。",
        "寫作 Amy, who likes dogs, is my friend.，補充放中間要有前後逗號。"
      ],
      "trap": "逗號補充人用 who、物用 which；這種句型不能換成 that。",
      "question": "Mia, ____ sits next to me, likes cats.",
      "options": [
        "that",
        "who"
      ],
      "answer": 1,
      "why": "逗號引出的補充介紹人，用 who。"
    },
    {
      "title": "until：一直到……才結束",
      "source": "Once they locate such a tree, they sit down beside it until their trainer hands them a treat as a reward.",
      "meaning": "until 說明一個動作或狀態持續到什麼時候。",
      "formula": "誰＋動作＋until＋誰＋動作",
      "parts": [
        [
          "誰",
          "The dog",
          "s"
        ],
        [
          "持續的動作",
          "waits",
          "v"
        ],
        [
          "直到",
          "until",
          "j"
        ],
        [
          "結束的時點",
          "its trainer arrives",
          "m"
        ]
      ],
      "zh": "狗一直等到訓練員抵達。",
      "steps": [
        "主句是 The dog waits。",
        "until 後是另一小句：its trainer arrives。",
        "這個到達的時點，標出等待持續到哪裡。"
      ],
      "trap": "until 後接句子；不能把名詞片語 because of 當作連接兩句的字。",
      "question": "I wait here ____ Mom comes back.",
      "options": [
        "until",
        "during"
      ],
      "answer": 0,
      "why": "until 可接 Mom comes back 這個句子。during 後須接名詞。"
    }
  ],
  "L5": [
    {
      "title": "let / make：讓誰做什麼",
      "source": "When it was getting dark, they packed everything up and let me stay there alone!",
      "meaning": "let 是允許，make 是使某人做某事。這裡後面的動作直接用原形。",
      "formula": "誰＋let/make＋誰＋原形動詞",
      "parts": [
        [
          "誰",
          "Mom",
          "s"
        ],
        [
          "讓",
          "lets",
          "v"
        ],
        [
          "讓誰",
          "me",
          "o"
        ],
        [
          "做什麼",
          "play outside",
          "c"
        ]
      ],
      "zh": "媽媽讓我去外面玩。",
      "steps": [
        "Mom 是允許的人。",
        "me 是被允許的人。",
        "play 是原形，不加 to；若說以前，用 Mom let me play outside。"
      ],
      "trap": "主動句用 let me play、make me clean，不用 let me to play。",
      "question": "The joke made us ____.",
      "options": [
        "to laugh",
        "laugh"
      ],
      "answer": 1,
      "why": "made＋受詞 us＋原形 laugh。"
    },
    {
      "title": "被動式：東西被怎麼做",
      "source": "When I was very young, I was sent from the factory to a convenience store.",
      "meaning": "原本可以說「他們清理袋子」。想先講袋子，就說「袋子被清理」。",
      "formula": "被做事的人／物＋be 動詞＋過去分詞",
      "parts": [
        [
          "被做的東西",
          "The bag",
          "s"
        ],
        [
          "被清理",
          "was cleaned",
          "v"
        ],
        [
          "何時",
          "yesterday",
          "m"
        ]
      ],
      "zh": "這個袋子昨天被清理了。",
      "steps": [
        "先找被處理的東西：The bag。",
        "昨天用 was。",
        "clean 的過去分詞是 cleaned。整個動詞組是 was cleaned。"
      ],
      "trap": "被動式要有 be＋過去分詞；不說 The bag was clean by Tom（此處要 cleaned）。",
      "question": "The bags ____ collected yesterday.",
      "options": [
        "were",
        "was"
      ],
      "answer": 0,
      "why": "bags 是複數，過去式 be 用 were。"
    },
    {
      "title": "because / because of：說原因",
      "source": "A teacher told the schoolchildren, “Because of all the littering, a lot of plastic products end up in the ocean.",
      "meaning": "because 後說完整的一件事；because of 後放原因的名稱。",
      "formula": "because＋誰＋動作 ／ because of＋名詞",
      "parts": [
        [
          "誰",
          "We",
          "s"
        ],
        [
          "動作",
          "stayed",
          "v"
        ],
        [
          "在哪裡",
          "home",
          "m"
        ],
        [
          "原因名稱",
          "because of the rain",
          "m"
        ]
      ],
      "zh": "因為下雨，我們待在家。",
      "steps": [
        "the rain 是雨這個名詞，不是完整句子。",
        "所以選 because of the rain。",
        "若改用句子 it rained，就說 because it rained。"
      ],
      "trap": "because it rained；because of the rain。要看後面有沒有完整主詞和動詞。",
      "question": "We stayed home ____ it rained.",
      "options": [
        "because of",
        "because"
      ],
      "answer": 1,
      "why": "it rained 有主詞和動詞，所以用 because。"
    },
    {
      "title": "make＋誰＋形容詞：使誰變怎樣",
      "source": "You might think that’s okay, but when we eat seafood, the poisonous substances from the plastic end up inside us and make us feel sick.”",
      "meaning": "make 後面除了動作，也能接形容詞說結果。若接 feel，feel 要用原形。",
      "formula": "誰／什麼＋make＋受詞＋形容詞或原形動詞組",
      "parts": [
        [
          "什麼",
          "The news",
          "s"
        ],
        [
          "使",
          "makes",
          "v"
        ],
        [
          "使誰",
          "me",
          "o"
        ],
        [
          "變怎樣",
          "happy",
          "c"
        ]
      ],
      "zh": "這消息讓我開心。",
      "steps": [
        "The news 是造成改變的事。",
        "me 是被影響的人。",
        "happy 描述 me。課文用 make us feel sick，feel 為原形，sick 說感覺。"
      ],
      "trap": "make me happy 用形容詞；make me feel happy 則多了一個原形 feel。",
      "question": "The story makes me ____.",
      "options": [
        "sad",
        "sadly"
      ],
      "answer": 0,
      "why": "sad 描述我的狀態，所以用形容詞。"
    }
  ],
  "L6": [
    {
      "title": "so…that：太……，結果……",
      "source": "Over time, this outer layer has been exposed to the air and oxidized so much that it has turned green.",
      "meaning": "先說程度很高，再接因此發生的結果。so 後通常直接接形容詞或副詞。",
      "formula": "誰＋be 動詞＋so＋形容詞＋that＋結果句",
      "parts": [
        [
          "誰",
          "The bag",
          "s"
        ],
        [
          "是",
          "is",
          "v"
        ],
        [
          "多麼重",
          "so heavy",
          "c"
        ],
        [
          "結果",
          "that I cannot lift it",
          "m"
        ]
      ],
      "zh": "這袋子重到我提不起來。",
      "steps": [
        "heavy 說重，so heavy 說很重。",
        "that 後面說結果：I cannot lift it。",
        "課文 so much 是程度說法，後面的綠色變化是結果。"
      ],
      "trap": "so heavy that…；不能把 such 直接放到 heavy 前而沒有名詞。",
      "question": "The soup is ____ hot that I cannot drink it.",
      "options": [
        "so",
        "such"
      ],
      "answer": 0,
      "why": "hot 是形容詞，這裡用 so hot that。"
    },
    {
      "title": "such…that：這麼……的一個東西",
      "source": "It is such a popular landmark that every visitor to New York City has heard of it and wants to pay a visit to Liberty Island.",
      "meaning": "such 後面帶一個名詞群，再說它造成的結果。",
      "formula": "such＋a/an＋形容詞＋單數名詞＋that＋結果",
      "parts": [
        [
          "誰",
          "It",
          "s"
        ],
        [
          "是",
          "is",
          "v"
        ],
        [
          "什麼樣的東西",
          "such a big bag",
          "c"
        ],
        [
          "結果",
          "that it holds ten books",
          "m"
        ]
      ],
      "zh": "這個袋子這麼大，能裝十本書。",
      "steps": [
        "先找名詞 bag。",
        "big 說明 bag；a big bag 是一整組。",
        "such 放在這組前面，後面 that 接結果。"
      ],
      "trap": "單數可數名詞用 such a big bag；複數／不可數名詞不用 a，例如 such kind people。",
      "question": "It is ____ small box that nothing fits inside.",
      "options": [
        "so a",
        "such a"
      ],
      "answer": 1,
      "why": "有名詞 box，用 such a small box。"
    },
    {
      "title": "It is/was…that：特別強調",
      "source": "It was on this day that the United States became independent, and the tablet symbolizes a new and free America.",
      "meaning": "要特別指出「就是這個人／時間／地方」，把重要部分放在 It is/was 和 that 中間。",
      "formula": "It＋is/was＋要強調的部分＋that＋句子其餘部分",
      "parts": [
        [
          "句型開頭",
          "It was",
          "j"
        ],
        [
          "強調誰",
          "Amy",
          "s"
        ],
        [
          "接回句子",
          "that",
          "j"
        ],
        [
          "剩下內容",
          "found my bag",
          "v"
        ]
      ],
      "zh": "就是 Amy 找到我的袋子。",
      "steps": [
        "普通句是 Amy found my bag。",
        "想強調 Amy，就說 It was Amy that found my bag。",
        "拿掉 It was 和 that 後，會回到完整的普通句。"
      ],
      "trap": "這裡 It 是句型用字，沒有一個要翻成「它」的物品。",
      "question": "It was yesterday ____ I met Amy.",
      "options": [
        "that",
        "which"
      ],
      "answer": 0,
      "why": "強調句用 It was…that…。"
    }
  ],
  "L7": [
    {
      "title": "疑問詞＋to：不知道要做什麼",
      "source": "These children felt dizzy and didn’t know what to do.",
      "meaning": "what to do 表示「要做什麼」，可以整塊接在 know 後面。",
      "formula": "誰＋know / learn＋what/how＋to＋原形動詞",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "不知道",
          "do not know",
          "v"
        ],
        [
          "不知道的內容",
          "what to do",
          "o"
        ]
      ],
      "zh": "我不知道要做什麼。",
      "steps": [
        "I do not know 是主句。",
        "問不知道什麼？what to do。",
        "to 後是原形 do；how to play 則是「要怎麼玩」。"
      ],
      "trap": "疑問詞後接 to＋原形，不說 what to doing。",
      "question": "She learned how ____ the violin.",
      "options": [
        "playing",
        "to play"
      ],
      "answer": 1,
      "why": "how to play 表示如何拉小提琴。"
    },
    {
      "title": "have＋東西＋過去分詞：請人完成",
      "source": "With the money they earned, Ada and her friends had larger, safer houses built for their families.",
      "meaning": "你安排別人做事時，可以先說「把哪個東西請人做好」。",
      "formula": "誰＋have/had＋被處理的東西＋過去分詞",
      "parts": [
        [
          "誰",
          "We",
          "s"
        ],
        [
          "安排",
          "had",
          "v"
        ],
        [
          "被處理的東西",
          "our house",
          "o"
        ],
        [
          "完成的動作",
          "painted",
          "c"
        ]
      ],
      "zh": "我們請人把房子漆好了。",
      "steps": [
        "We 是安排的人。",
        "our house 是被漆的東西。",
        "painted 表示房子被上漆，不代表我們親自漆。"
      ],
      "trap": "和 have someone paint 不同：受詞是房子，這裡用 painted。",
      "question": "I had my bike ____.",
      "options": [
        "repaired",
        "repair"
      ],
      "answer": 0,
      "why": "my bike 是被修理的東西，用過去分詞 repaired。"
    },
    {
      "title": "by＋-ing：用什麼方法",
      "source": "By putting together metal cans, forks, and other items from the landfill, the garbage picker somehow managed to make various instruments.",
      "meaning": "by 後的活動用 -ing，說明做成一件事的方法。",
      "formula": "誰＋動作＋by＋活動的 -ing 形式",
      "parts": [
        [
          "誰",
          "We",
          "s"
        ],
        [
          "主要動作",
          "learn",
          "v"
        ],
        [
          "學什麼",
          "English",
          "o"
        ],
        [
          "用什麼方法",
          "by reading stories",
          "m"
        ]
      ],
      "zh": "我們藉由讀故事學英文。",
      "steps": [
        "主句是 We learn English。",
        "方法是讀故事。",
        "by 後把 read 改成 reading。"
      ],
      "trap": "by 在這裡後接名詞或 -ing 活動，不用 by to read。",
      "question": "She saves money by ____ lunch at home.",
      "options": [
        "to cook",
        "cooking"
      ],
      "answer": 1,
      "why": "by cooking 說明她省錢的方法。"
    },
    {
      "title": "感官動詞：看到誰做什麼",
      "source": "They saw glaring lights and heard screams of excitement.",
      "meaning": "see、hear 可以先接看到或聽到的東西。接「人＋動作」時，可用原形表示看到動作發生。",
      "formula": "誰＋see/hear＋人／東西（＋原形動詞）",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "看到",
          "saw",
          "v"
        ],
        [
          "看到誰",
          "Amy",
          "o"
        ],
        [
          "做什麼",
          "open the door",
          "c"
        ]
      ],
      "zh": "我看到 Amy 把門打開。",
      "steps": [
        "saw 是 see 的過去式。",
        "Amy 是我看到的人。",
        "open 說看到的動作，保持原形；opening 則常強調看到時動作正在進行。"
      ],
      "trap": "I saw Amy open the door，這個感官句型不加 to。課文 saw lights、heard screams 先練只有受詞的形式。",
      "question": "I heard Ben ____ a song from beginning to end.",
      "options": [
        "sing",
        "to sing"
      ],
      "answer": 0,
      "why": "hear＋人＋原形動詞，可以描述聽到完整過程。"
    }
  ],
  "L8": [
    {
      "title": "the more…the more：越……越……",
      "source": "Studies have shown that the longer people stay inside, the more products they buy.",
      "meaning": "兩個變化一起發生時，可以說「越……，就越……」。兩邊都用比較級。",
      "formula": "The＋比較級＋句子，the＋比較級＋句子",
      "parts": [
        [
          "第一個變化",
          "The longer I read",
          "m"
        ],
        [
          "第二個變化",
          "the more I learn",
          "m"
        ]
      ],
      "zh": "我讀得越久，學到的就越多。",
      "steps": [
        "longer 表示時間更久。",
        "more 表示學得更多。",
        "兩個 the 都屬於比較句型，不能隨便刪掉。"
      ],
      "trap": "不是普通的 the book 用法；兩邊要有比較的變化。",
      "question": "The more you practice, the ____ you become.",
      "options": [
        "better",
        "best"
      ],
      "answer": 0,
      "why": "better 是比較級，best 是最高級。"
    },
    {
      "title": "so that：為了讓……",
      "source": "Similarly, products that are aimed at children, such as toys, are placed on lower shelves so that younger shoppers will surely see them.",
      "meaning": "先說做了什麼，再說想讓什麼結果發生。so that 後面接完整句子。",
      "formula": "誰＋動作＋so that＋誰＋can/will＋動作",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "做什麼",
          "speak slowly",
          "v"
        ],
        [
          "為了讓",
          "so that",
          "j"
        ],
        [
          "想達到的事",
          "you can understand me",
          "m"
        ]
      ],
      "zh": "我說慢一點，好讓你聽懂。",
      "steps": [
        "主句說 speak slowly。",
        "想達到的是 you can understand me。",
        "兩邊用 so that 接起來，這裡表示目的。"
      ],
      "trap": "so that 表目的；so＋形容詞＋that 則常表程度造成的結果。",
      "question": "I write it down ____ I can remember it.",
      "options": [
        "so hot that",
        "so that"
      ],
      "answer": 1,
      "why": "後面是想記住的目的，用 so that。"
    },
    {
      "title": "can＋被動：可以被怎樣",
      "source": "Since customers are lining up at cash registers to pay for their things anyway, these items can easily be grabbed and added to their shopping baskets on impulse.",
      "meaning": "說「可以被看到／拿起」時，can 後先放原形 be，再放過去分詞。",
      "formula": "東西＋can＋be＋過去分詞",
      "parts": [
        [
          "什麼東西",
          "The sign",
          "s"
        ],
        [
          "可以被看到",
          "can be seen",
          "v"
        ],
        [
          "從哪裡",
          "from here",
          "m"
        ]
      ],
      "zh": "從這裡可以看到這個標示。",
      "steps": [
        "The sign 是被看的東西。",
        "can 後的 be 保持原形。",
        "see 的過去分詞是 seen。"
      ],
      "trap": "用 can be seen，不用 can is seen，也不用 can be see。",
      "question": "The door can be ____.",
      "options": [
        "opened",
        "open"
      ],
      "answer": 0,
      "why": "被打開用 opened，和 be 組成被動。"
    }
  ],
  "L9": [
    {
      "title": "rather than：選這個而非另一個",
      "source": "The only difference is that they paint on walls rather than on paper.",
      "meaning": "比較兩個選擇時，rather than 可表示「而非」。前後盡量用相同形式。",
      "formula": "選擇 A＋rather than＋選擇 B",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "做什麼",
          "write",
          "v"
        ],
        [
          "選擇 A",
          "on paper",
          "m"
        ],
        [
          "另一個選擇",
          "rather than on the wall",
          "m"
        ]
      ],
      "zh": "我寫在紙上，而非牆上。",
      "steps": [
        "先讀 I write on paper。",
        "再補上沒有選的 on the wall。",
        "兩邊都是 on＋名詞，結構相同。"
      ],
      "trap": "課文是 on walls rather than on paper，兩邊都在說「在哪裡」。",
      "question": "I walk rather than ____ to school.",
      "options": [
        "driving",
        "drive"
      ],
      "answer": 1,
      "why": "這句前面 walk 是原形，後面用平行的 drive。"
    },
    {
      "title": "-ing 補充句：同一主角多做一件事",
      "source": "The city of Los Angeles, for example, has a huge problem with graffiti, spending millions of dollars every year cleaning it up.",
      "meaning": "一個句子已說完整，再用 -ing 補上同一主角的另一個動作。先確認兩個動作是誰做。",
      "formula": "完整主句，-ing＋補充內容",
      "parts": [
        [
          "誰",
          "Amy",
          "s"
        ],
        [
          "主要動作",
          "walks home",
          "v"
        ],
        [
          "同時補充",
          "carrying a bag",
          "m"
        ]
      ],
      "zh": "Amy 提著袋子走回家。",
      "steps": [
        "完整主句是 Amy walks home。",
        "carrying a bag 補充 Amy 同時提著袋子。",
        "可先理解成 Amy walks home and carries a bag。"
      ],
      "trap": "補充動作要找得到主角；這裡提袋子的是 Amy。",
      "question": "Ben sits by the window, ____ a book.",
      "options": [
        "reading",
        "reads"
      ],
      "answer": 0,
      "why": "主句已經有 sits，補充 Ben 的動作用 reading。"
    },
    {
      "title": "It is＋形容詞＋to：先評價一件事",
      "source": "Many people believe that graffiti is associated with criminal activity, feeling that it is unsafe to walk around or live in areas with graffiti.",
      "meaning": "評價「做某事安不安全」時，用 It 開頭，把要談的活動放後面。",
      "formula": "It＋is＋形容詞＋to＋原形動詞",
      "parts": [
        [
          "占位主詞",
          "It",
          "s"
        ],
        [
          "是",
          "is",
          "v"
        ],
        [
          "評價",
          "safe",
          "c"
        ],
        [
          "談的活動",
          "to cross here",
          "m"
        ]
      ],
      "zh": "從這裡穿越很安全。",
      "steps": [
        "safe 是安全。",
        "安全的是哪件事？to cross here。",
        "It 先占位，to cross here 才是被評價的活動。"
      ],
      "trap": "unsafe 是不安全；先看形容詞，再找 to 後的活動。",
      "question": "It is important ____ the signs.",
      "options": [
        "following",
        "to follow"
      ],
      "answer": 1,
      "why": "to follow the signs 說明重要的是遵守標示。"
    },
    {
      "title": "spend＋時間／錢＋-ing",
      "source": "The city of Los Angeles, for example, has a huge problem with graffiti, spending millions of dollars every year cleaning it up.",
      "meaning": "用 spend 說「花時間或錢做某事」，後面的活動用 -ing。",
      "formula": "誰＋spend＋時間／金錢＋活動的 -ing 形式",
      "parts": [
        [
          "誰",
          "I",
          "s"
        ],
        [
          "花費",
          "spend",
          "v"
        ],
        [
          "花多少",
          "ten minutes",
          "o"
        ],
        [
          "做什麼",
          "reading every day",
          "m"
        ]
      ],
      "zh": "我每天花十分鐘閱讀。",
      "steps": [
        "ten minutes 說花了多少時間。",
        "reading 說時間花在哪個活動。",
        "I 是主詞，spend 是主要動詞。"
      ],
      "trap": "用 spend time reading；不用 spend time to read。",
      "question": "She spends an hour ____ every day.",
      "options": [
        "to practice",
        "practicing"
      ],
      "answer": 1,
      "why": "spend＋時間＋practicing，表示花時間練習。"
    }
  ]
};
  const escape = value => String(value).replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
  const style = document.createElement('style');
  style.textContent = `
    .gf-school{margin:1.5rem 0 2rem;padding:clamp(1rem,3vw,1.6rem);border:2px solid #325c93;border-radius:16px;background:#f6f9ff;color:#17263e;line-height:1.75;font-size:1rem;scroll-margin-top:130px}
    .gf-school *{box-sizing:border-box}
    .gf-school h3{font-size:1.5rem;color:#173c6a;margin:0 0 .5rem}
    .gf-school p{margin:.45rem 0 .9rem}
    .gf-intro{max-width:65ch}
    .gf-school .gf-links{position:static;top:auto;z-index:auto;padding:0;background:transparent;border:0;display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}
    .gf-links a{color:#1e4679;background:#fff;border:1px solid #9bb0ce;border-radius:8px;padding:.3rem .65rem;text-decoration:underline;text-underline-offset:3px}
    .gf-school details{border:1px solid #b6c6de;border-radius:10px;background:#fff;margin:.8rem 0;overflow:visible}
    .gf-school summary{cursor:pointer;padding:.85rem 1rem;font-weight:700;font-size:1.08rem;color:#173c6a}
    .gf-card{scroll-margin-top:140px}
    .gf-content{padding:0 1rem 1rem}
    .gf-school h4{font-size:1.08rem;color:#173c6a;margin:1rem 0 .35rem}
    .gf-formula{padding:.7rem .9rem;background:#edf1f8;border-radius:7px;font-weight:600;overflow-wrap:anywhere}
    .gf-diagram{display:flex;align-items:stretch;gap:.6rem;flex-wrap:wrap;margin:1rem 0}
    .gf-part{border:1px solid #76849b;border-top:5px solid #76849b;border-radius:8px;background:#fff;flex:1 1 135px;padding:.65rem .8rem;min-width:0;overflow-wrap:anywhere}
    .gf-part[data-role=s]{border-color:#32629b;background:#edf5ff}
    .gf-part[data-role=v]{border-color:#9e453d;background:#fff2ee}
    .gf-part[data-role=o]{border-color:#48704a;background:#f0f7ef}
    .gf-part[data-role=c]{border-color:#865aa4;background:#f8f1ff}
    .gf-part[data-role=m]{border-color:#8c7132;background:#fff9e9}
    .gf-part small{display:block;font-size:.9rem;color:#344054}
    .gf-part strong{font-size:1.12rem;display:block;line-height:1.5;margin-top:.4rem}
    .gf-school .gf-steps{padding-left:1.5rem;margin:.5rem 0}
    .gf-school .gf-steps li{margin:.5rem 0;line-height:1.8}
    .gf-trap{padding:.7rem .9rem;border-left:4px solid #ae5426;background:#fff5e9}
    .gf-source{border-left:3px solid #96a6c3;padding-left:.9rem;overflow-wrap:anywhere;font-size:1rem}
    .gf-actions{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;margin:.8rem 0}
    .gf-school button{font:inherit;font-size:1rem;padding:.5rem .8rem;border:1px solid #45668e;border-radius:7px;background:white;color:#173c6a;cursor:pointer;min-height:44px}
    .gf-school button:hover{background:#edf4ff}
    .gf-school button:focus-visible,.gf-school a:focus-visible,.gf-school summary:focus-visible{outline:3px solid #e08013;outline-offset:3px}
    .gf-quiz{padding:.8rem;background:#f5f7fc;border-radius:8px;margin-top:1rem}
    .gf-school .gf-feedback{margin:.6rem 0;font-weight:600}
    .gf-option[aria-pressed=true]{border-width:3px;background:#eaf1ff}
    .gf-school mark{background:#fff0a8;color:#17263e}
    .gf-glossary{padding:0 1rem 1rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.6rem}
    .gf-glossary p{margin:0}
    @media(max-width:520px){.gf-school{padding:.85rem}.gf-content{padding:0 .8rem .8rem}.gf-part{flex-basis:calc(50% - .6rem)}}
    @media(prefers-reduced-motion:reduce){.gf-school{scroll-behavior:auto}}
    @media print{.gf-links,.gf-actions,.gf-quiz{display:none}.gf-school details{break-inside:avoid}}
  `;
  document.head.append(style);
  const glossary = `
    <details><summary>先認識句子的零件</summary><div class="gf-glossary">
      <p><b>主詞 S</b><br>這句在說誰或什麼。</p>
      <p><b>動詞 V</b><br>說動作，或用 is、seem 連接狀態。動詞也會說時間。</p>
      <p><b>受詞 O</b><br>動作碰到誰、什麼，或心裡想的事。</p>
      <p><b>補語 C</b><br>補充主詞或受詞的身分、狀態。</p>
      <p><b>修飾語</b><br>補充何時、哪裡、為什麼，或介紹某個名詞。</p>
      <p><b>原形／過去分詞</b><br>原形像 go、eat；過去分詞像 gone、eaten。要依句型選形式。</p>
    </div></details>`;
  function card(topic, lessonId, index) {
    const id = `gf-${lessonId}-${index}`;
    return `<details class="gf-card" id="${id}" ${index === 0 ? 'open' : ''}>
      <summary>${escape(topic.title)}</summary>
      <div class="gf-content">
        <p>${escape(topic.meaning)}</p>
        <div class="gf-formula">${escape(topic.formula)}</div>
        <h4>先看一個簡單句</h4>
        <div class="gf-diagram" role="group" aria-label="句子結構，由左至右閱讀">
          ${topic.parts.map(([label, words, role]) => `<div class="gf-part" data-role="${role}"><small>${escape(label)}</small><strong lang="en">${escape(words)}</strong></div>`).join('')}
        </div>
        <p>${escape(topic.zh)}</p>
        <details open><summary>一步一步拆解</summary><div class="gf-content">
          <ol class="gf-steps">${topic.steps.map(text => `<li>${escape(text)}</li>`).join('')}</ol>
        </div></details>
        <p class="gf-trap"><b>容易混淆的地方</b><br>${escape(topic.trap)}</p>
        <h4>回到這一課</h4>
        <p class="gf-source" lang="en">${escape(topic.source)}</p>
        <div class="gf-actions">
          <button type="button" data-gf-source="${index}">在課文表格找這句</button>
          ${typeof window.b1Speak === 'function' ? `<button type="button" data-gf-speak="${index}">朗讀課文例句</button>` : ''}
        </div>
        <div class="gf-quiz" data-gf-quiz="${index}">
          <h4>換一句試試看</h4><p lang="en">${escape(topic.question)}</p>
          <div class="gf-actions">${topic.options.map((option, i) => `<button type="button" class="gf-option" aria-pressed="false" data-gf-answer="${i}">${escape(option)}</button>`).join('')}</div>
          <p class="gf-feedback" role="status" aria-live="polite"></p>
        </div>
      </div>
    </details>`;
  }
  for (const [lessonId, topics] of Object.entries(lessons)) {
    const section = document.getElementById(lessonId);
    if (!section || section.querySelector('.gf-school')) continue;
    const panel = document.createElement('div');
    panel.className = 'gf-school';
    panel.id = `gf-school-${lessonId}`;
    panel.innerHTML = `<h3>文法小學堂</h3>
      <p class="gf-intro">從「誰、做什麼」開始，用簡單句看懂本課文法。色塊上的文字說明每一塊的工作。先理解句意，再看它放在句子裡的位置。</p>
      <p>本課有 ${topics.length} 個課文對應重點。簡單例句與練習為教學新編。</p>
      ${glossary}
      <nav class="gf-links" aria-label="${escape(lessonId)} 文法重點">${topics.map((topic,i) => `<a href="#gf-${lessonId}-${i}" data-gf-jump="${i}">${escape(topic.title.split('：')[0])}</a>`).join('')}</nav>
      ${topics.map((topic,i) => card(topic,lessonId,i)).join('')}`;
    const lessonHeading = section.querySelector('h2');
    if (lessonHeading) lessonHeading.after(panel);
    else section.prepend(panel);
    panel.addEventListener('click', event => {
      const jump = event.target.closest('[data-gf-jump]');
      if (jump) {
        const target = panel.querySelector(`#gf-${lessonId}-${jump.dataset.gfJump}`);
        if (target) target.open = true;
      }
      const sourceButton = event.target.closest('[data-gf-source]');
      if (sourceButton) {
        const topic = topics[Number(sourceButton.dataset.gfSource)];
        const normalize = text => text.replace(/\s+/g,' ').trim();
        const target = [...section.querySelectorAll('.sentence-en')].find(node => normalize(node.textContent) === normalize(topic.source));
        if (target) {
          let ancestor = target.parentElement;
          while (ancestor && ancestor !== section) {
            if (ancestor.tagName === 'DETAILS') ancestor.open = true;
            ancestor = ancestor.parentElement;
          }
          target.scrollIntoView({block:'center',behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'});
          target.tabIndex = -1;
          target.focus({preventScroll:true});
          const old = target.style.backgroundColor;
          target.style.backgroundColor = '#fff0a8';
          window.setTimeout(() => { target.style.backgroundColor = old; },2500);
        }
      }
      const speakButton = event.target.closest('[data-gf-speak]');
      if (speakButton && typeof window.b1Speak === 'function') {
        window.b1Speak(topics[Number(speakButton.dataset.gfSpeak)].source,speakButton);
      }
      const answerButton = event.target.closest('[data-gf-answer]');
      if (answerButton) {
        const quiz = answerButton.closest('[data-gf-quiz]');
        const topic = topics[Number(quiz.dataset.gfQuiz)];
        const correct = Number(answerButton.dataset.gfAnswer) === topic.answer;
        quiz.querySelectorAll('[data-gf-answer]').forEach(button => button.setAttribute('aria-pressed',String(button === answerButton)));
        quiz.querySelector('.gf-feedback').textContent = (correct ? '答對了。' : '再看一下。正確答案是 ' + topic.options[topic.answer] + '。') + topic.why;
      }
    });
  }
})();
