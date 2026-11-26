(() => {
  'use strict';
  const content = {
  "L1": {
    "title": "Firsts in Life",
    "patterns": [
      {
        "name": "that 子句",
        "formula": "誰＋know/think＋that＋完整句子",
        "explain": "先問知道或想的是什麼，再把那一整件事放在 that 後。",
        "trap": "that 後有自己的主詞和動詞。",
        "diagram": [
          "I know",
          "that Amy likes cats"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L01",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01",
            "example": "Joe could not believe (that) this girl could speak four languages.",
            "explanation": "把 it 的內容改為 that 引導的受詞子句；that 可省略。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L01",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01",
            "example": "We all know that the Earth is round.",
            "explanation": "我們都知道地球是圓的。that引導名詞子句，作know的受詞。"
          }
        ]
      },
      {
        "name": "連綴動詞",
        "formula": "誰＋look/sound/taste/feel＋形容詞；like＋名詞",
        "explain": "先看後面描述樣子，還是在比喻像哪個東西。",
        "trap": "happy 是形容詞，a cat 是名詞；look happy 與 look like a cat 不同。",
        "diagram": [
          "The soup tastes",
          "good"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L01",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01",
            "example": "sounds like a perfect plan",
            "explanation": "sound like 後接名詞片語 a perfect plan。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L01",
            "location": "三、句型練習，入口例句 5",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01",
            "example": "You should buy the dress because it looks good on you.",
            "explanation": "你應該買這件洋裝，因為穿在你身上很好看。look後接形容詞good。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L1-w-g1",
        "prompt": "The food at that restaurant over there tastes ____ .",
        "options": [
          "well",
          "very deliciously",
          "terribly",
          "like garbage"
        ],
        "answer": 3,
        "why": "taste 為感官連綴動詞；like 加名詞 garbage 表示嚐起來像垃圾，其他選項皆為副詞。",
        "zh": "那邊那家餐廳的食物嚐起來像垃圾。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L1-w-g2",
        "prompt": "All of us think ____ Miss Chen is really good at telling stories.",
        "options": [
          "that",
          "which",
          "what",
          "when"
        ],
        "answer": 0,
        "why": "think 後接完整陳述句，以 that 引導名詞子句。",
        "zh": "我們所有人都認為陳老師真的很會說故事。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L1-w-g3",
        "prompt": "____ to bed early, or you will be late for school tomorrow.",
        "options": [
          "To go",
          "Going",
          "Go",
          "Gone"
        ],
        "answer": 2,
        "why": "祈使句以原形動詞 Go 起首；or 表示否則。",
        "zh": "早點去睡，否則你明天上學會遲到。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L1-w-g4",
        "prompt": "Cindy is ____ to start her new job because she will meet new people and learn different skills.",
        "options": [
          "excite",
          "exciting",
          "to excite",
          "excited"
        ],
        "answer": 3,
        "why": "Cindy 是感到興奮的人，用 excited；exciting 表示令人興奮的。",
        "zh": "Cindy 對開始新工作感到興奮，因為她將認識新朋友並學習不同技能。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L1-w-g5",
        "prompt": "____ I was walking down the street, I met an old friend of mine.",
        "options": [
          "Since",
          "While",
          "Unless",
          "Although"
        ],
        "answer": 1,
        "why": "While 引導過去進行中的背景動作，搭配另一件發生的事 met。",
        "zh": "當我走在街上時，我遇見了一位老朋友。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L1-p0",
        "prompt": "Please ____ that every window is closed.",
        "options": [
          "make sure",
          "dress up",
          "look like",
          "give up"
        ],
        "answer": 0,
        "why": "make sure＋子句，意思是確定；後面 that 接窗戶關好的完整敘述。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L01",
          "location": "綜合測驗 第 20 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L1-p1",
        "prompt": "I want to meet the writer ____, not just watch her videos.",
        "options": [
          "on time",
          "in person",
          "at once",
          "by chance"
        ],
        "answer": 1,
        "why": "in person 表示親自、當面，和只看影片形成對照。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L01",
          "location": "綜合測驗 第 21 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L1-p2",
        "prompt": "Leo is riding a horse ____. He has never done it before.",
        "options": [
          "over time",
          "at that time",
          "for the first time",
          "in no time"
        ],
        "answer": 2,
        "why": "for the first time 表示第一次；後句說以前從沒做過。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "III.綜合測驗：15% 第 2 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L1-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "I’ll never forget my trip to Seoul, South Korea.",
          "I was super excited because I was traveling abroad 【1】 the first time, and I have always loved Korean things.",
          "When I arrived, at first I could hardly believe 【2】 I was in the land of my favorite K-pop and Korean dramas.",
          "I had so much fun, and the Korean people I met were so friendly.",
          "I enjoyed 【3】 my favorite Korean barbecue and kimchi, and I was so full every day!",
          "The streets were full of colorful Korean fashion and scenes that reminded me of Korean TV shows.",
          "I even 【4】 in some cute traditional Korean clothing.",
          "The trip was so great that I felt a little 【5】 on my way to the airport to go home.",
          "Still, I knew I would go back someday."
        ],
        "questions": [
          {
            "id": "L1-w-c1",
            "number": 1,
            "options": [
              "at",
              "in",
              "on",
              "for"
            ],
            "answer": 3,
            "why": "第1題：for the first time 是固定片語，表示第一次。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L01",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
            }
          },
          {
            "id": "L1-w-c2",
            "number": 2,
            "options": [
              "it",
              "that",
              "what",
              "which"
            ],
            "answer": 1,
            "why": "第2題：believe 後接完整名詞子句，連接詞用 that。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L01",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
            }
          },
          {
            "id": "L1-w-c3",
            "number": 3,
            "options": [
              "eat",
              "eaten",
              "eating",
              "to eat"
            ],
            "answer": 2,
            "why": "第3題：enjoy 後接動名詞，故用 eating。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L01",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
            }
          },
          {
            "id": "L1-w-c4",
            "number": 4,
            "options": [
              "dressed up",
              "cooled down",
              "got off",
              "melted away"
            ],
            "answer": 0,
            "why": "第4題：dress up in clothing 表示穿上特別服裝；過去敘事用 dressed up。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L01",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
            }
          },
          {
            "id": "L1-w-c5",
            "number": 5,
            "options": [
              "traditional",
              "depressed",
              "accidental",
              "embarrassed"
            ],
            "answer": 1,
            "why": "第5題：旅程結束使人感到沮喪，用 depressed 描述人的感受。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L01",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
            }
          }
        ],
        "translation": "我永遠不會忘記我的南韓首爾之旅。\n由於我是第一次出國旅遊，而且我一直很喜歡韓國的事物，所以感到非常興奮。\n當我抵達時，一開始幾乎不敢相信自己真的來到最愛的韓國流行音樂和韓劇的國度。\n我玩得非常開心，遇到的韓國人都非常友善。\n我享受著我最愛的韓國烤肉和泡菜，每天都吃得很飽！\n街道上充滿了色彩繽紛的韓國時尚，還有讓我想起韓國電視節目的場景。\n我甚至還穿上了可愛的韓國傳統服裝。\n這次旅行太棒了，以致於我在回程前往機場的路上有點沮喪。\n但我知道，總有一天我還會再去。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L01",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L01"
        }
      },
      {
        "id": "L1-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "Let’s talk about this whole online learning thing. It’s happening more and more often, and you need to make the most out of it. Here are 【1】 tips to help you have the best online learning experience.",
          "Create a Study Space. First off, find a spot to study where you feel 【2】 . If there are other people around, then 【3】 you will want headphones. Keep your study things in order, too. It saves you from wasting time looking for things.",
          "Follow a Schedule*. Speaking of time, it can be very helpful to have a routine*. You will have a lot to do for your class, and you need to finish them one by one. 【4】 , you need to set some limits. Breaks are necessary to help your brain relax. You can let your body relax too with some quick exercises 【5】 you’re taking your break.",
          "Stay Connected. Online learners sometimes say 【6】 they miss talking to people, so keep communicating*. Don’t be 【7】 about asking your teachers questions. Your classmates can help, too. You can use online tools to chat and work together. Just 【8】",
          "you are clear and polite when talking online. Misunderstandings can happen more easily",
          "online than 【9】 .",
          "To sum up: find the 【10】 study spot, stick to a routine, and reach out when you need support. Good luck!"
        ],
        "questions": [
          {
            "id": "L1-a-c1",
            "number": 1,
            "options": [
              "few",
              "little",
              "a few",
              "a little"
            ],
            "answer": 2,
            "why": "tips 是可數複數；這裡要給一些實用建議，用 a few。few 強調少得不夠，與提供建議的正面語氣不合。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c2",
            "number": 2,
            "options": [
              "comfortable",
              "comfortably",
              "comforting",
              "comfort"
            ],
            "answer": 0,
            "why": "feel 在此是連綴動詞，後接形容詞 comfortable。comfortably 是副詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c3",
            "number": 3,
            "options": [
              "after all",
              "of course",
              "at most",
              "for example"
            ],
            "answer": 1,
            "why": "前面提到周圍有人，後面說當然會想用耳機；of course 表示當然。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c4",
            "number": 4,
            "options": [
              "Firstly",
              "Otherwise",
              "Indeed",
              "However"
            ],
            "answer": 3,
            "why": "前面說按步完成，後面提醒要設限並休息；However 表轉折。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c5",
            "number": 5,
            "options": [
              "until",
              "although",
              "while",
              "before"
            ],
            "answer": 2,
            "why": "休息時做運動，兩件事同時發生，用 while＋子句。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c6",
            "number": 6,
            "options": [
              "which",
              "when",
              "what",
              "that"
            ],
            "answer": 3,
            "why": "say 後接完整敘述內容，用 that 引導名詞子句。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c7",
            "number": 7,
            "options": [
              "embarrass",
              "embarrassed",
              "embarrassing",
              "embarrassment"
            ],
            "answer": 1,
            "why": "描述人的感受用 embarrassed；embarrassing 通常描述使人尷尬的人事物。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c8",
            "number": 8,
            "options": [
              "make sure",
              "dress up",
              "look like",
              "point out"
            ],
            "answer": 0,
            "why": "make sure＋子句表示確定、確保；後面接 you are clear and polite。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c9",
            "number": 9,
            "options": [
              "by oneself",
              "in the end",
              "in person",
              "on one’s own"
            ],
            "answer": 2,
            "why": "online 與 in person（親自、當面）形成對照。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          },
          {
            "id": "L1-a-c10",
            "number": 10,
            "options": [
              "accidental",
              "perfect",
              "depressing",
              "fortunate"
            ],
            "answer": 1,
            "why": "總結前面的建議：尋找理想的學習地點，用 perfect。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L01",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
            }
          }
        ],
        "translation": "我們來談線上學習這件事吧。它愈來愈常發生，而你需要善加利用它。有一些小訣竅能幫助你擁有最好的線上學習經驗。\n創造一個學習空間。首先，找一個你覺得舒適的地方學習。如果周遭有其他人，那麼你當然需要耳機。也把你的學習用品擺整齊。這可以省去你浪費時間找東西的麻煩。\n遵循進度表。提到時間，建立常規可能很有幫助。你上課會有很多事要做，而且你需要按部就班完成。可是，你必須設定一些限制。短暫的休息對於幫助你的大腦放鬆有其必要。當你休息時，你也可以透過一些快速的運動來讓身體放鬆。\n保持交流。線上學習者有時候會說他們想念和別人交談，所以保持交流吧。不要因為問老師問題而感到尷尬。你的同學們也能幫你。你可以用網路工具同時聊天和工作。只要確認你在線上交談時表達清楚和有禮。在網路可能比當面更容易發生誤解。\n總之，找到理想的學習場所、堅守常規和需要支持時尋求援助。祝好運！",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L01",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L01"
        }
      }
    ]
  },
  "L2": {
    "title": "Goodbye, John",
    "patterns": [
      {
        "name": "It 占位主詞",
        "formula": "It is＋形容詞＋(for 人)＋to＋原形動詞",
        "explain": "先說難或容易，再補上做什麼；for 人指出做這件事的是誰。",
        "trap": "It 在這裡先占主詞位置，真正談的事在 to 後。",
        "diagram": [
          "It is easy",
          "to read this book"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L02",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02",
            "example": "It is quite common to give red envelopes to children during Chinese New Year.",
            "explanation": "以 It 作虛主詞，把 giving 改成 to give 放在形容詞後。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L02",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02",
            "example": "It is useful to learn a second language.",
            "explanation": "學習第二外語很有用。以It作形式主詞，真正主詞是to learn。"
          }
        ]
      },
      {
        "name": "現在完成式",
        "formula": "誰＋have/has＋過去分詞",
        "explain": "從以前到現在的經驗、持續或結果，搭配 have/has＋過去分詞。",
        "trap": "have been to 是去過，have gone to 常指去了尚未回來；for 接一段時間。",
        "diagram": [
          "I have lived here",
          "for two years"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L02",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02",
            "example": "Perry and I have been good friends since last year.",
            "explanation": "since 加起始時間 last year；複數主詞用 have been。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L02",
            "location": "三、句型練習，入口例句 5",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02",
            "example": "I haven’t seen Judy recently.",
            "explanation": "我最近沒有見到Judy。recently搭配現在完成式。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L2-w-g1",
        "prompt": "____ is never easy to break an old habit.",
        "options": [
          "It",
          "That",
          "This",
          "What"
        ],
        "answer": 0,
        "why": "It 是虛主詞，真正主詞為後面的 to break an old habit。",
        "zh": "要戒掉一個舊習慣從來都不容易。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L2-w-g2",
        "prompt": "So far this year, the basketball team ____ more than 10 games.",
        "options": [
          "doesn’t win",
          "didn’t win",
          "won’t win",
          "hasn’t won"
        ],
        "answer": 3,
        "why": "So far 表示截至目前，搭配現在完成式 hasn’t won。",
        "zh": "今年到目前為止，這支籃球隊贏的比賽還沒有超過十場。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L2-w-g3",
        "prompt": "Mrs. Brown felt relieved when she heard that her son was ____ better.",
        "options": [
          "moving",
          "getting",
          "sounding",
          "taking"
        ],
        "answer": 1,
        "why": "get better 表示好轉，was getting 表示當時正在改善。",
        "zh": "Brown 太太聽到兒子的情況逐漸好轉時，感到如釋重負。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L2-w-g4",
        "prompt": "Susan ____ eats out in restaurants. She likes to prepare her own meals.",
        "options": [
          "always",
          "really",
          "seldom",
          "totally"
        ],
        "answer": 2,
        "why": "後句說她喜歡自己煮，故用 seldom 表示很少外食。",
        "zh": "Susan 很少在餐廳外食；她喜歡自己準備餐點。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L2-w-g5",
        "prompt": "We were afraid ____ it was going to rain, so we cancelled the picnic.",
        "options": [
          "×",
          "what",
          "when",
          "how"
        ],
        "answer": 0,
        "why": "afraid 後可接 that 子句，that 可省略；× 表示不填字。",
        "zh": "我們擔心會下雨，所以取消了野餐。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L2-p0",
        "prompt": "I want to ____ this bad habit.",
        "options": [
          "look forward to",
          "get rid of",
          "take part in",
          "come across"
        ],
        "answer": 1,
        "why": "get rid of＋名詞表示擺脫。this bad habit 是想去除的習慣。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "III.綜合測驗：15% 第 2 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L2-p1",
        "prompt": "Please ____ your homework while I make dinner.",
        "options": [
          "get rid of",
          "turn into",
          "focus on",
          "dress up"
        ],
        "answer": 2,
        "why": "focus on＋名詞／V-ing 表示專注於。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L02",
          "location": "文意字彙 第 6 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L2-p2",
        "prompt": "The children are busy ____ the classroom.",
        "options": [
          "clean",
          "to clean",
          "cleaned",
          "cleaning"
        ],
        "answer": 3,
        "why": "be busy＋V-ing 是忙著做某事。這題的新句依教材 busy 的搭配編寫。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "III.綜合測驗：15% 第 10 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L2-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Sally decided she needed to make a big change in her life.",
          "It 【1】 her heart, but she knew she had to get rid of her smartphone.",
          "Of course, there were lots of good things about having it around.",
          "It 【2】 answers to all kinds of questions.",
          "From the moment she woke up, she could always text her friends.",
          "She discovered new games, new friends, new music, and so much more.",
          "However, there were also many bad things about always having her smartphone 【3】 her side.",
          "She was often distracted as she checked it again and again for updates.",
          "Her grades were getting worse.",
          "She was often so busy 【4】 her phone that she ignored the people around her.",
          "Now, she wanted to 【5】 more time 【5】 the people she loved and stay focused on her schoolwork.",
          "It was time to say goodbye to her smartphone."
        ],
        "questions": [
          {
            "id": "L2-w-c1",
            "number": 1,
            "options": [
              "took",
              "followed",
              "broke",
              "lost"
            ],
            "answer": 2,
            "why": "第1題：break one’s heart 表示使某人心碎；過去式 broke。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L02",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
            }
          },
          {
            "id": "L2-w-c2",
            "number": 2,
            "options": [
              "helped her find",
              "helped her finding",
              "made her to find",
              "made her finding"
            ],
            "answer": 0,
            "why": "第2題：help 人 find：help 後的原形動詞可省略 to。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L02",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
            }
          },
          {
            "id": "L2-w-c3",
            "number": 3,
            "options": [
              "in",
              "by",
              "with",
              "to"
            ],
            "answer": 1,
            "why": "第3題：by one’s side 表示在某人身邊。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L02",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
            }
          },
          {
            "id": "L2-w-c4",
            "number": 4,
            "options": [
              "to check",
              "to check with",
              "checking",
              "check"
            ],
            "answer": 2,
            "why": "第4題：be busy V-ing 表示忙著做某事，故用 checking。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L02",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
            }
          },
          {
            "id": "L2-w-c5",
            "number": 5,
            "options": [
              "take; on",
              "take; from",
              "spend; for",
              "spend; with"
            ],
            "answer": 3,
            "why": "第5題：spend time with 人表示花時間陪伴某人；此題兩空為 spend、with。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L02",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
            }
          }
        ],
        "translation": "Sally決定她需要在生活中做出重大改變。\n這讓她很心痛，但她知道她必須擺脫她的智慧型手機。\n當然，手機有許多好處。\n它幫助她找到各式各樣問題的答案。\n從她一起床，就能隨時用簡訊聯絡朋友。\n她發現了新遊戲、新朋友、新音樂，還有更多。\n然而，總是把智慧型手機放在身邊也有許多壞處。\n她常常因為一次又一次地檢查手機而分心。\n她的成績變差了。\n她常常忙著看手機，以致於忽略了身邊的人。\n現在，她想要花更多時間和她愛的人在一起，並且專注於她的學業。\n是時候跟她的智慧型手機說再見了。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L02",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L02"
        }
      },
      {
        "id": "L2-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "Many people enjoy playing video games. For most, 【1】 games is a relaxing and harmless pastime. However, some people may develop a dangerous addiction to gaming. If you think 【2】 you or someone you care about has a video game addiction, here are some signs to check for.",
          "When players keep needing a longer time to get the same feeling of satisfaction, it often means they are becoming addicted. This may cause them to stay up late 【3】 the night playing games. Thus, addicted gamers may start having problems keeping up with work or school because they’re so busy 【4】 games. In addition, they might also have difficulty concentrating, and their grades are likely to 【5】 worse.",
          "Another way 【6】 addiction is to look for problems with the player’s moods and health. They may start to become anxious or feel angry or depressed. Also, they might lose their appetite, sleep poorly at night, or spend less time 【7】 with friends and family.",
          "If someone is addicted, it can be very hard for him or her to stop 【8】 video games. If someone is 【9】 addicted to video games, the best thing for him or her to do is to see a mental health counselor. Such a professional* can help people 【10】 their behavior and restore a balance in their life. If you or someone you love is facing this kind of problem, be sure to get help!"
        ],
        "questions": [
          {
            "id": "L2-a-c1",
            "number": 1,
            "options": [
              "play",
              "plays",
              "playing",
              "played"
            ],
            "answer": 2,
            "why": "playing games 是主詞，表示玩遊戲這件活動；動作要改用動名詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c2",
            "number": 2,
            "options": [
              "what",
              "which",
              "who",
              "that"
            ],
            "answer": 3,
            "why": "think 後接完整句子，用 that 表示想的內容。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c3",
            "number": 3,
            "options": [
              "for",
              "into",
              "to",
              "until"
            ],
            "answer": 1,
            "why": "late into the night 表示一直到深夜，into 顯示延伸到某時間。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c4",
            "number": 4,
            "options": [
              "playing",
              "play",
              "played",
              "to play"
            ],
            "answer": 0,
            "why": "be busy＋V-ing 表示忙著做某事。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c5",
            "number": 5,
            "options": [
              "make",
              "get",
              "have",
              "let"
            ],
            "answer": 1,
            "why": "be likely to 後接原形 get；get worse 表示變差。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c6",
            "number": 6,
            "options": [
              "for identifying",
              "in identifying",
              "at identifying",
              "to identify"
            ],
            "answer": 3,
            "why": "a way to identify 表示辨認的方法，to 後用原形。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c7",
            "number": 7,
            "options": [
              "interact",
              "interacted",
              "interacting",
              "to interact"
            ],
            "answer": 2,
            "why": "spend time＋V-ing 表示花時間做某事。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c8",
            "number": 8,
            "options": [
              "playing",
              "to play",
              "play",
              "having played"
            ],
            "answer": 0,
            "why": "stop playing 是停止玩；stop to play 是停下別的事去玩，意思不同。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c9",
            "number": 9,
            "options": [
              "personally",
              "truly",
              "mostly",
              "naturally"
            ],
            "answer": 1,
            "why": "truly 是副詞，修飾 addicted。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          },
          {
            "id": "L2-a-c10",
            "number": 10,
            "options": [
              "changing",
              "changed",
              "change",
              "having changed"
            ],
            "answer": 2,
            "why": "help＋人＋原形動詞是此題的句型，change 表示改變。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L02",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
            }
          }
        ],
        "translation": "許多人喜歡打電玩。對大多數人來說，打電玩是一種放鬆和無害的消遣。然而，有些人可能會發展出危險的電玩上癮。如果你認為你或你關心的人有電玩上癮的問題，這裡有一些徵兆可供檢查。\n當玩家需要更長的時間才能獲得相同的滿足感時，這通常意味著他們正在上癮。這可能導致他們熬夜打電玩。因此，上癮的玩家可能開始在工作或學業上落後，因為他們忙於打電玩。此外，他們也可能難以集中注意力，而且成績可能會變差。\n另一種識別上癮的方法是尋找玩家情緒和健康上的問題。他們可能開始變得焦慮或感到生氣或沮喪。此外，他們可能會失去食慾、在夜裡睡不好，或與朋友和家人互動的時間減少。\n如果有人上癮，對他或她來說停止打電玩可能非常困難。如果某人真的對電玩上癮，他或她最好的做法是去看心理健康顧問。這樣的專業人士可以幫助人們改變行為，恢復生活的平衡。如果你或你愛的人面臨這樣的問題，務必尋求幫助！",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L02",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L02"
        }
      }
    ]
  },
  "L3": {
    "title": "Do Animals Sleep Like You and Me",
    "patterns": [
      {
        "name": "間接問句",
        "formula": "誰＋know/wonder＋疑問詞＋主詞＋動詞",
        "explain": "問句放進句子裡，換成平常「誰＋動作」的順序。",
        "trap": "where does she live? 放進 I know 後變成 where she lives。",
        "diagram": [
          "I know",
          "where she lives"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L03",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03",
            "example": "when Michael Jackson died",
            "explanation": "間接問句改成 when + 主詞 + died，去掉助動詞 did。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L03",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03",
            "example": "The expert wants to know how the young man could solve the problem so easily.",
            "explanation": "專家想知道年輕人如何能如此輕易解決問題。間接問句用主詞加動詞的直述句語序。"
          }
        ]
      },
      {
        "name": "被動式",
        "formula": "被做的東西＋be＋過去分詞",
        "explain": "先找誰是被處理的東西，再選 be 的時態與過去分詞。",
        "trap": "不能只放過去分詞而漏掉 be；情態動詞後 be 保持原形。",
        "diagram": [
          "The bag",
          "was cleaned yesterday"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L03",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03",
            "example": "The stray dog was taken to the vet by Stella.",
            "explanation": "受詞 dog 改為主詞；took 的被動式是 was taken。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L03",
            "location": "三、句型練習，入口例句 6",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03",
            "example": "English is spoken (by people) in many places.",
            "explanation": "許多地方都使用英文。被動語態為is spoken。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L3-w-g1",
        "prompt": "Johnny ____ by his teacher for being late to class.",
        "options": [
          "has punished",
          "will punish",
          "was punished",
          "was punishing"
        ],
        "answer": 2,
        "why": "Johnny 是被處罰的人；過去被動式為 was punished。",
        "zh": "Johnny 因為上課遲到而被老師處罰。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L3-w-g2",
        "prompt": "I still don’t know ____ .",
        "options": [
          "why did he do so",
          "when will we start",
          "how can he make it",
          "what you are talking about"
        ],
        "answer": 3,
        "why": "間接問句用主詞在動詞前的直述語序，只有 D 符合。",
        "zh": "我仍然不知道你在說什麼。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L3-w-g3",
        "prompt": "Mr. Lee noticed that his daughter seemed ____ and asked her what was wrong.",
        "options": [
          "upset",
          "be upset",
          "to upset",
          "upsetting"
        ],
        "answer": 0,
        "why": "seem 為連綴動詞，後接形容詞 upset。",
        "zh": "Lee 先生注意到女兒似乎很沮喪，便問她發生了什麼事。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L3-w-g4",
        "prompt": "Ostrich eggs are the largest of all eggs; one can weigh ____ 1500 grams.",
        "options": [
          "at",
          "up to",
          "in",
          "for"
        ],
        "answer": 1,
        "why": "up to 表示最高可達。",
        "zh": "鴕鳥蛋是所有蛋中最大的，一顆重量可達一千五百公克。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L3-w-g5",
        "prompt": "Johnson always has to ____ a nap after working for the whole morning.",
        "options": [
          "do",
          "take",
          "make",
          "run"
        ],
        "answer": 1,
        "why": "take a nap 表示小睡，是固定搭配。",
        "zh": "Johnson 工作了一整個上午後，總是得小睡一下。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L3-p0",
        "prompt": "The club receives ten visitors a day ____. Some days have more, some fewer.",
        "options": [
          "on average",
          "by mistake",
          "at last",
          "in person"
        ],
        "answer": 0,
        "why": "on average 表示平均，後面指出每天數量有高有低。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "I.文意字彙與詞類變化：36% 第 7 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L3-p1",
        "prompt": "When you cross the road, ____ cars.",
        "options": [
          "be tired of",
          "look out for",
          "get rid of",
          "come up with"
        ],
        "answer": 1,
        "why": "look out for 表示留意、提防，後面 cars 是要注意的事物。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L03",
          "location": "翻譯 第 5 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L3-p2",
        "prompt": "She left the room without ____ a word.",
        "options": [
          "say",
          "to say",
          "saying",
          "said"
        ],
        "answer": 2,
        "why": "without 是介系詞，後接動名詞 saying。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L03",
          "location": "句型練習 第 2 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L3-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Dr. Jill Mason is an expert on the sleeping behavior of animals.",
          "In her book, While They’re Sleeping!, she discusses all the weird but wonderful ways in which animals get their rest.",
          "The early chapters deal with how animals stay safe while they are asleep.",
          "Giraffes, who sleep only 【1】 to avoid predator attacks, are mentioned first.",
          "The unique sleeping position of sea otters is also discussed.",
          "This is followed by the 【2】 sleeping secrets of Alpine swifts and dolphins.",
          "【3】 half of the book is mainly about how and why bears and other animals hibernate.",
          "It deals with how they are able to live without food for months, and where they sleep.",
          "Finally, Dr. Mason also explains how these creatures prepare to sleep for so long 【4】 .",
          "All in all, the book is 【5】 the finest of its kind available.",
          "Pick up your copy today!"
        ],
        "questions": [
          {
            "id": "L3-w-c1",
            "number": 1,
            "options": [
              "thirty minutes the day",
              "thirty minutes a day"
            ],
            "answer": 1,
            "why": "第1題：thirty minutes a day 表示每天三十分鐘；a day 作頻率。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L03",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
            }
          },
          {
            "id": "L3-w-c2",
            "number": 2,
            "options": [
              "amazing",
              "amazed",
              "amazingly",
              "amazement"
            ],
            "answer": 0,
            "why": "第2題：secrets 令人驚訝，用 amazing；amazed 用來描述人的感受。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L03",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
            }
          },
          {
            "id": "L3-w-c3",
            "number": 3,
            "options": [
              "Other",
              "Others",
              "The other",
              "The others"
            ],
            "answer": 2,
            "why": "第3題：書分成兩半，另一半用 The other half。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L03",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
            }
          },
          {
            "id": "L3-w-c4",
            "number": 4,
            "options": [
              "at times",
              "at all times",
              "at once",
              "at a time"
            ],
            "answer": 3,
            "why": "第4題：at a time 表示一次、每次。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L03",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
            }
          },
          {
            "id": "L3-w-c5",
            "number": 5,
            "options": [
              "one",
              "one of",
              "one with",
              "one that"
            ],
            "answer": 1,
            "why": "第5題：one of the finest 後接種類範圍，表示同類中最佳之一。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L03",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
            }
          }
        ],
        "translation": "Jill Mason博士是動物睡眠行為的專家。\n在她的書《當牠們睡著時！》中，她討論了動物休息時所有奇怪但又奇妙的方式。\n前幾章講述了動物如何在睡眠時保持安全。\n首先提到的是長頸鹿，牠們一天只睡三十分鐘以避免掠食者攻擊。\n書中還討論了海獺獨特的睡姿。\n接著是關於高山雨燕和海豚驚人的睡眠秘密。\n書的另一半主要關於熊和其他動物冬眠的方式和原因。\n它講述牠們如何能夠在幾個月沒有食物的情況下生存，以及牠們在哪裡睡覺。\n最後，Mason博士還解釋了這些生物是如何為一次睡這麼久做準備。\n總之，這本書是現有同類書籍中最好的其中之一。\n今天就去買一本吧！",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L03",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L03"
        }
      },
      {
        "id": "L3-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "When it comes to sleeping, we probably picture a nice comfortable bed. We imagine laying our heads on big fluffy pillows and lying under nice warm blankets. Most animals,",
          "【1】 , sleep in very different places. Sea otters, for instance, sleep on their backs in the water and 【2】 don’t drown. When giraffes get their forty winks, they are able 【3】",
          "their hips as a pillow. And some creatures, like the Alpine swift, can even doze off 【4】",
          "they are flying up in the sky!",
          "These 【5】 migratory birds travel thousands of kilometers between continents every year. On these extremely long flights, they stay in the sky 【6】 weeks or even months at a time. In fact, one Swiss study in 2013 showed that Alpine swifts remain in the air for even longer than we imagine. In this study, special sensors were attached to six birds so that their location and speed could 【7】 at all times. The research team found that the swifts could cover up to 10,000 km and go as long as 200 days 【8】 landing!",
          "Recently, some 【9】 that Alpine swifts don’t actually sleep at all during these flights. 【10】 , they are capable of getting some shut-eye up in the sky. This makes them some of the coolest sleepers on earth. It also makes you wonder which are fluffier, pillows or clouds?"
        ],
        "questions": [
          {
            "id": "L3-a-c1",
            "number": 1,
            "options": [
              "therefore",
              "however",
              "fortunately",
              "miraculously"
            ],
            "answer": 1,
            "why": "人類在床上睡，後面說動物睡在不同場所，用 however 表轉折。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c2",
            "number": 2,
            "options": [
              "otherwise",
              "also",
              "next",
              "yet"
            ],
            "answer": 3,
            "why": "水獺在水中睡卻不會溺水，yet 表示然而、卻。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c3",
            "number": 3,
            "options": [
              "to use",
              "use",
              "used",
              "using"
            ],
            "answer": 0,
            "why": "be able to＋原形動詞，表示能夠。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c4",
            "number": 4,
            "options": [
              "until",
              "since",
              "before",
              "while"
            ],
            "answer": 3,
            "why": "while＋子句表示當牠們飛行時。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c5",
            "number": 5,
            "options": [
              "amaze",
              "amazes",
              "amazing",
              "amazed"
            ],
            "answer": 2,
            "why": "amazing 描述令人驚奇的鳥；amazed 描述感到驚奇的感受。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c6",
            "number": 6,
            "options": [
              "within",
              "during",
              "for",
              "on"
            ],
            "answer": 2,
            "why": "for＋時間長度，weeks or months 是持續多久。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c7",
            "number": 7,
            "options": [
              "measure",
              "be measured",
              "have measured",
              "be measuring"
            ],
            "answer": 1,
            "why": "位置和速度是被測量，用 could be measured；could 後 be 用原形。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c8",
            "number": 8,
            "options": [
              "without",
              "through",
              "besides",
              "toward"
            ],
            "answer": 0,
            "why": "without＋V-ing 表示沒有做某事，這裡是沒有降落。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c9",
            "number": 9,
            "options": [
              "were argued",
              "arguing",
              "were arguing",
              "have argued"
            ],
            "answer": 3,
            "why": "Recently 連結最近到現在的主張，用 have argued。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          },
          {
            "id": "L3-a-c10",
            "number": 10,
            "options": [
              "In addition",
              "In fact",
              "For example",
              "After all"
            ],
            "answer": 1,
            "why": "前文提到不睡的說法，In fact 引出實際上能在空中睡的補充。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L03",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
            }
          }
        ],
        "translation": "說到睡覺，我們可能會想像一張舒適的床。我們想像著把頭放在軟軟的大枕頭上，躺在溫暖的毯子下。然而，大多數動物睡覺的地方卻大不相同。比如說，海獺在水中仰臥著睡覺，卻不會淹死。當長頸鹿閉上眼睛睡覺時，牠們可以利用自己的臀部當作枕頭。還有一些生物，像高山雨燕，甚至能夠在飛行時打瞌睡！\n這些驚人的候鳥每年都會在大陸之間飛行數千公里。在這些極長的飛行中，牠們可能連續數週或甚至數月都待在空中。事實上，2013年的一項瑞士研究顯示，高山雨燕的飛行時間比我們想像的還要久。在這項研究中，特殊的感應器被安裝在六隻鳥身上，以便隨時測量牠們的位置和速度。研究小組發現，這些雨燕可以飛行長達10,000公里，且可以長達200天不著陸！\n最近，有人主張高山雨燕在這些飛行中根本就不睡覺。事實上，牠們在空中也能夠打瞌睡。這使牠們成為地球上最酷的睡眠者之一。這也讓人思考，到底是枕頭還是雲更蓬鬆？",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L03",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L03"
        }
      }
    ]
  },
  "L4": {
    "title": "Sniffing Out More Than Just Bones",
    "patterns": [
      {
        "name": "限定關係子句",
        "formula": "名詞＋who/which/that＋介紹它的小句",
        "explain": "用一段小句說清楚你指的是哪一個人或東西。",
        "trap": "人用 who/that、物用 which/that；作主詞時不能省略。",
        "diagram": [
          "The girl",
          "who helped me is Amy"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L04",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04",
            "example": "This is the website (which/that) I told you about.",
            "explanation": "website 為物；關係代名詞作 about 的受詞，可用 which/that 或省略。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L04",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04",
            "example": "We should be thankful to anyone who/that helps us out in times of trouble.",
            "explanation": "我們應感謝在困難時幫助我們的人。先行詞為人，可用who或that。"
          }
        ]
      },
      {
        "name": "非限定關係子句",
        "formula": "明確名詞，who/which＋補充，主句其餘部分",
        "explain": "名字已清楚，用逗號補上一點介紹。",
        "trap": "逗號補充不用 that；介系詞提前時，指人用 whom、指物用 which。",
        "diagram": [
          "Amy, who likes cats,",
          "is my friend"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L04",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04",
            "example": "Ed Sheeran, who is a pop singer from the U.K., just put out his latest album.",
            "explanation": "專有姓名後補充身分，用逗號和 who，不能用 that。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L04",
            "location": "三、句型練習，入口例句 6",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04",
            "example": "Leo’s mother, who lives in Thailand, has five grandchildren.",
            "explanation": "Leo的母親住在泰國，有五個孫兒女。逗號間的who子句補充母親的資訊。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L4-w-g1",
        "prompt": "The bakery ____ Linda loves is next to the convenience store.",
        "options": [
          "which",
          "what",
          "whom",
          "it"
        ],
        "answer": 0,
        "why": "先行詞 bakery 為物，which 作 loves 的受詞。",
        "zh": "Linda 喜歡的那家麵包店就在便利商店旁邊。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L4-w-g2",
        "prompt": "Jackson ____ I trust a lot, is a good friend of mine.",
        "options": [
          "that",
          "which",
          ", whom",
          "who"
        ],
        "answer": 2,
        "why": "非限定關係子句需逗號；人作 trust 的受詞用 whom，不能用 that。",
        "zh": "Jackson 是我非常信任的人，也是我的一位好朋友。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L4-w-g3",
        "prompt": "The plane will be taking off in ____ minutes.",
        "options": [
          "a little",
          "a few",
          "as few as",
          "a little bit"
        ],
        "answer": 1,
        "why": "minutes 為可數複數，用 a few。",
        "zh": "飛機再過幾分鐘就要起飛了。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L4-w-g4",
        "prompt": "Please wait here ____ the clerk calls your name.",
        "options": [
          "and",
          "although",
          "unless",
          "until"
        ],
        "answer": 3,
        "why": "until 表示直到被叫到名字為止。",
        "zh": "請在這裡等到店員叫你的名字。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L4-w-g5",
        "prompt": "Half a million people in Brazil were infected ____ the Zika virus in 2015.",
        "options": [
          "of",
          "with",
          "at",
          "on"
        ],
        "answer": 1,
        "why": "be infected with a virus 表示感染某病毒。",
        "zh": "2015 年巴西有五十萬人感染茲卡病毒。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L4-p0",
        "prompt": "While cleaning my room, I ____ an old diary by chance.",
        "options": [
          "came across",
          "turned into",
          "got rid of",
          "made sure"
        ],
        "answer": 0,
        "why": "come across 表示偶然發現，過去時間情境用 came across。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L04",
          "location": "翻譯 第 1 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L4-p1",
        "prompt": "Read aloud and record your voice. ____, you can check your pronunciation.",
        "options": [
          "On the contrary",
          "In this way",
          "At the same time last year",
          "By the way"
        ],
        "answer": 1,
        "why": "In this way 指以前述朗讀錄音的方法檢查發音。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L04",
          "location": "綜合測驗 第 9 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L4-p2",
        "prompt": "With more practice, she will be able ____ this task alone.",
        "options": [
          "finish",
          "finishing",
          "to finish",
          "finished"
        ],
        "answer": 2,
        "why": "be able to＋原形動詞表示能夠；will 後 be 保持原形。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "III.綜合測驗：15% 第 8 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L4-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Dogs have very powerful noses.",
          "They have an amazing ability to pick up food and animal smells.",
          "They can even sense diseases 【1】 plants or people.",
          "Dogs are therefore often taught to perform tasks that are very useful to us.",
          "One of these is helping to identify trees that have a certain kind of root rot disease.",
          "Another is sniffing out drugs in airport luggage, something that specially 【2】 dogs can also do.",
          "In some cases, a dog’s sense 【3】 smell can even save a person’s life.",
          "Rescue dogs, for example, are often 【4】 find earthquake survivors.",
          "Dogs have also been known to detect when owners’ blood sugar levels fall too low.",
          "This ability to sense chemical changes in people’s bodies shows just how 【5】 .",
          "It’s thus no wonder that they help us out in so many different ways.",
          "Dogs truly are our best friends."
        ],
        "questions": [
          {
            "id": "L4-w-c1",
            "number": 1,
            "options": [
              "by",
              "in",
              "at",
              "around"
            ],
            "answer": 1,
            "why": "第1題：diseases in plants or people 表示植物或人體內的疾病，用 in。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L04",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
            }
          },
          {
            "id": "L4-w-c2",
            "number": 2,
            "options": [
              "train",
              "training",
              "trained",
              "to train"
            ],
            "answer": 2,
            "why": "第2題：狗接受訓練，用 trained 過去分詞修飾 dogs。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L04",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
            }
          },
          {
            "id": "L4-w-c3",
            "number": 3,
            "options": [
              "of",
              "with",
              "for",
              "into"
            ],
            "answer": 0,
            "why": "第3題：a sense of smell 指嗅覺，為固定名詞搭配。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L04",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
            }
          },
          {
            "id": "L4-w-c4",
            "number": 4,
            "options": [
              "used for",
              "able to",
              "about to",
              "based on"
            ],
            "answer": 1,
            "why": "第4題：be able to + 原形動詞，表示能夠找到倖存者。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L04",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
            }
          },
          {
            "id": "L4-w-c5",
            "number": 5,
            "options": [
              "can dogs’ noses be powerful",
              "powerful are dogs’ noses",
              "powerful dogs’ noses can be",
              "dogs’ noses are powerful"
            ],
            "answer": 2,
            "why": "第5題：間接感嘆／名詞子句用 how powerful + 主詞 + can be 的語序。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L04",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
            }
          }
        ],
        "translation": "狗擁有非常強大的鼻子。\n牠們有著驚人的能力去嗅出食物和動物的氣味。\n牠們甚至能夠感知植物或人類的疾病。\n因此，狗經常被訓練去執行對我們非常有用的任務。\n其中之一是幫助識別有某種根腐病的樹木。\n另外一項是在機場行李中嗅出毒品，這是特別訓練過的狗也能做到的。\n在某些情況下，狗的嗅覺甚至能救人一命。\n例如，搜救犬常常能夠找到地震倖存者。\n眾所皆知，狗還能夠偵測主人血糖何時過低。\n這種感知人體化學變化的能力顯示了狗鼻子的強大之處。\n因此，難怪牠們能以這麼多不同的方式幫助我們。\n狗真的是我們最好的朋友。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L04",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L04"
        }
      },
      {
        "id": "L4-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "Tessa was walking down the street one day. Along her way, she saw a beautiful Labrador 【1】 was sitting outside the bakery. She stopped, smiled at the friendly-looking dog, and took a close look at it. Its big ears looked so much softer than a human’s, and its kind eyes seemed to be 【2】 her to come closer. 【3】 , she approached the dog. However, when she was just about to pat the dog’s golden head, the owner of the bakery opened the door and stopped her 【4】 making a friendly gesture.",
          "“That’s a specially 【5】 service dog, young lady. Please don’t touch it.”",
          "Tessa was quite surprised to be stopped 【6】 . She withdrew her hand and looked a little embarrassed and confused.",
          "The owner saw 【7】 she didn’t quite understand. Therefore, he added, “This is an",
          "【8】 guide dog for a blind customer of mine. It’s trained to do certain kinds of tasks.",
          "【9】 the dog might get distracted* if a stranger pets it, we should not interrupt* it. If the dog pays attention to other humans and doesn’t perform its job properly, it could mean trouble, or even danger, for the blind person. Therefore, you should never hand a working dog a snack or treat, either.”",
          "Tessa nodded and smiled, no longer having a 【10】 of embarrassment. Better yet, she had learned a lesson."
        ],
        "questions": [
          {
            "id": "L4-a-c1",
            "number": 1,
            "options": [
              "who",
              "which",
              "what",
              "when"
            ],
            "answer": 1,
            "why": "先行詞 Labrador 是狗，which 在關係子句中作主詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c2",
            "number": 2,
            "options": [
              "inviting",
              "yelling",
              "introducing",
              "waking"
            ],
            "answer": 0,
            "why": "seem to be＋V-ing；inviting her to come closer 是邀請靠近。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c3",
            "number": 3,
            "options": [
              "In addition",
              "For example",
              "For this reason",
              "After all"
            ],
            "answer": 2,
            "why": "前文描述狗眼神像在招呼，For this reason 引出她靠近的原因。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c4",
            "number": 4,
            "options": [
              "at",
              "by",
              "with",
              "of"
            ],
            "answer": 1,
            "why": "by＋V-ing 表示藉由做某事，by making a gesture。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c5",
            "number": 5,
            "options": [
              "train",
              "training",
              "trains",
              "trained"
            ],
            "answer": 3,
            "why": "service dog 是被訓練的狗，用過去分詞 trained 修飾。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c6",
            "number": 6,
            "options": [
              "by the way",
              "all the way",
              "in no way",
              "in this way"
            ],
            "answer": 3,
            "why": "in this way 表示以這種方式，指前面被店主攔下。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c7",
            "number": 7,
            "options": [
              "how",
              "that",
              "which",
              "what"
            ],
            "answer": 1,
            "why": "saw 後接一個完整的理解內容，用 that 引導。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c8",
            "number": 8,
            "options": [
              "amaze",
              "amazed",
              "amazingly",
              "amazing"
            ],
            "answer": 3,
            "why": "amazing 修飾令人驚奇的導盲犬；amazingly 是副詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c9",
            "number": 9,
            "options": [
              "Although",
              "If",
              "Since",
              "While"
            ],
            "answer": 2,
            "why": "Since 在此表因為，後面的分心是前提原因。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          },
          {
            "id": "L4-a-c10",
            "number": 10,
            "options": [
              "sense",
              "surface",
              "reply",
              "wonder"
            ],
            "answer": 0,
            "why": "a sense of embarrassment 表示一種尷尬感。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L04",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
            }
          }
        ],
        "translation": "有一天，Tessa走在街上。走著走著，她看到一隻漂亮的拉布拉多犬坐在麵包店外面。她停下腳步，對這隻友善的狗狗微笑著，並仔細地觀察著牠。牠的大耳朵看起來比人類的要柔軟很多，牠那善良的眼睛似乎在邀請她靠近。因此，她走向了這隻狗狗。然而，當她正要拍拍這隻狗狗的金色頭部時，麵包店的老闆打開了門，並以友好的手勢阻止了她。\n「小姐，那是一隻特別訓練過的服務犬。請不要觸摸牠。」\nTessa被這樣阻止感到相當驚訝。她收回了手，看起來有些尷尬和困惑。\n老闆看出她並不完全明白。因此，他補充道：「這是隻為我的一個盲人顧客服務的導盲犬。牠經過特殊訓練，可以執行特定的任務。因為如果陌生人撫摸牠，這隻狗可能會分心，我們不應該干擾牠。如果狗狗關注其他人而不能正確完成任務，這可能對盲人造成麻煩，甚至危險。因此，您也絕不能拿點心或零食餵一隻正在工作的狗。」\nTessa點點頭，微笑著，不再感到尷尬了。更棒的是，她學到了一課。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L04",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L04"
        }
      }
    ]
  },
  "L5": {
    "title": "The Life of a Plastic Bag",
    "patterns": [
      {
        "name": "使役動詞",
        "formula": "誰＋make/have/let＋人＋原形動詞",
        "explain": "make 是使、要求；have 是安排；let 是允許。",
        "trap": "這個主動句型的後一個動作不加 to；make 人＋形容詞也可說造成的狀態。",
        "diagram": [
          "Mom lets me",
          "play outside"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L05",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05",
            "example": "Terry’s mother didn’t let him play computer games.",
            "explanation": "let 人 + 原形動詞；didn’t 後用 let。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L05",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05",
            "example": "Our teacher made us read a whole lesson in half an hour.",
            "explanation": "老師要求我們在半小時內讀完一整課。make加受詞後接原形動詞read。"
          }
        ]
      },
      {
        "name": "原因的兩種接法",
        "formula": "because＋完整句；because of＋名詞",
        "explain": "看看原因後面是主詞加動詞，還是只有一個名詞名稱。",
        "trap": "because it rains；because of the rain。",
        "diagram": [
          "We stayed home",
          "because of the rain"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L05",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05",
            "example": "The scientist has won many people’s respect because he has invented so many new things.",
            "explanation": "because 後保留完整主詞 he 和動詞 has invented。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L05",
            "location": "三、句型練習，入口例句 5",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05",
            "example": "Robert didn’t go to school yesterday because he was seriously injured.",
            "explanation": "Robert昨天沒上學，因為他傷得很重。because後接完整子句。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L5-w-g1",
        "prompt": "I am tired ____ doing nothing and waiting for someone to take care of me.",
        "options": [
          "of",
          "with",
          "out",
          "from"
        ],
        "answer": 0,
        "why": "be tired of V-ing 表示厭倦做某事。",
        "zh": "我厭倦了無所事事，等著別人照顧我。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L5-w-g2",
        "prompt": "When Peter’s parents were away, he ____ his brother clean his room.",
        "options": [
          "did",
          "got",
          "had",
          "asked"
        ],
        "answer": 2,
        "why": "have 人 + 原形動詞 clean；get/ask 需接 to clean。",
        "zh": "Peter 的父母不在時，他叫自己的兄弟打掃房間。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L5-w-g3",
        "prompt": "All of today’s trains have been canceled ____ the terrible earthquake.",
        "options": [
          "because",
          "because of",
          "except",
          "except for"
        ],
        "answer": 1,
        "why": "because of 後接名詞片語；because 後須接完整子句。",
        "zh": "由於嚴重地震，今天所有火車都已取消。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L5-w-g4",
        "prompt": "____ the latest study, a large percentage of senior high students in Taiwan are nearsighted.",
        "options": [
          "According to",
          "As for",
          "Along with",
          "Because of"
        ],
        "answer": 0,
        "why": "According to 表示根據這份研究。",
        "zh": "根據最新研究，臺灣有很高比例的高中生近視。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L5-w-g5",
        "prompt": "There are seven different ways to walk from my home ____ the office, one for each day of the week.",
        "options": [
          "till",
          "between",
          "and",
          "to"
        ],
        "answer": 3,
        "why": "from A to B 表示從 A 到 B。",
        "zh": "從我家走到辦公室共有七條不同路線，正好一週每天走一條。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L5-p0",
        "prompt": "The game was canceled ____ the heavy rain.",
        "options": [
          "because",
          "because of",
          "although",
          "so that"
        ],
        "answer": 1,
        "why": "the heavy rain 是名詞片語，原因用 because of。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L05",
          "location": "句型練習 第 6 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L5-p1",
        "prompt": "I am tired ____ hearing the same excuse.",
        "options": [
          "to",
          "with",
          "of",
          "at"
        ],
        "answer": 2,
        "why": "be tired of＋名詞／V-ing，表示厭倦。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L05",
          "location": "翻譯 第 4 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L5-p2",
        "prompt": "If you keep buying extra snacks, you may end up ____ too much.",
        "options": [
          "spending",
          "spend",
          "to spend",
          "spent"
        ],
        "answer": 0,
        "why": "end up 後接 V-ing，表示最後變成某種結果。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L05",
          "location": "翻譯 第 1 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L5-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "I am a disposable bag.",
          "One day, some children bought me and filled me up with snacks.",
          "Riding their bicycles, they took me along 【1】 the beach.",
          "They had a picnic and really enjoyed themselves.",
          "Unfortunately, they weren’t 【2】 careful because they forgot all about me when they left!",
          "Suddenly, the wind picked me up and blew me into the ocean.",
          "I floated for 【3】 days until I was eaten by a huge fish.",
          "I wasn’t alone; I saw a disposable fork next to me.",
          "Over the next few days, the fish swallowed 【4】 bits of plastic.",
          "We were all trapped in there until the fish died and decomposed.",
          "【5】 , I was washed back up onto the shore.",
          "Some nice school children picked me up with a pair of tongs and brought me to be recycled.",
          "I hope that in my next life, I will be used more carefully!"
        ],
        "questions": [
          {
            "id": "L5-w-c1",
            "number": 1,
            "options": [
              "over",
              "in",
              "to",
              "under"
            ],
            "answer": 2,
            "why": "第1題：take 人 to 地點表示帶某人前往，用 to the beach。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L05",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
            }
          },
          {
            "id": "L5-w-c2",
            "number": 2,
            "options": [
              "such",
              "enough",
              "that",
              "a bit"
            ],
            "answer": 2,
            "why": "第2題：that 可作副詞表示那麼，修飾 careful。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L05",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
            }
          },
          {
            "id": "L5-w-c3",
            "number": 3,
            "options": [
              "few",
              "a few",
              "the other",
              "another"
            ],
            "answer": 1,
            "why": "第3題：days 是可數複數，用 a few 表示幾天。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L05",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
            }
          },
          {
            "id": "L5-w-c4",
            "number": 4,
            "options": [
              "little and little",
              "less and less",
              "many and many",
              "more and more"
            ],
            "answer": 3,
            "why": "第4題：more and more 表示越來越多。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L05",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
            }
          },
          {
            "id": "L5-w-c5",
            "number": 5,
            "options": [
              "Finally",
              "Besides",
              "In fact",
              "For example"
            ],
            "answer": 0,
            "why": "第5題：Finally 表示最後，接故事的最終結果。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L05",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
            }
          }
        ],
        "translation": "我是個一次性的塑膠袋。\n有一天，一些孩子買了我，把我裝滿了零食。\n他們騎著自行車，帶著我去了海灘。\n他們進行野餐，玩得非常開心。\n不幸的是，他們不夠小心，因為當他們離開時完全忘記了我！\n突然間，風把我捲起來，吹進了大海。\n我在海上漂浮了幾天，直到被一條巨大的魚吃掉。\n我不是獨自一個；我看到旁邊有一支一次性的叉子。\n在接下來的幾天裡，那條魚吞下了愈來愈多的塑膠碎片。\n我們都被困在那裡，直到那條魚死去並分解。\n最後，我被沖回到岸上。\n一些好心的學生用鉗子把我撿起來，帶我去回收。\n我希望在我的下輩子能被更小心地使用！",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L05",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L05"
        }
      },
      {
        "id": "L5-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "Do you throw your food waste in the garbage? You’d better not 【1】 its great environmental cost. Instead, you should think about composting*. Composting is much easier than you may think. If you have space outside your home, just create a pile of dirt and throw your food waste onto it. However, if your property is smaller and your compost would have to be right 【2】 your home, use a closed bin instead. Even if you live in an apartment, you don’t have to worry! You can buy special warm compost bins that can stay inside your home. Most people believe that such bins must smell awful, but the best part is that they’re not 【3】 smelly!",
          "【4】 experts, there are some tricks to composting. The first tip is to compost as much brown material (e.g., dead leaves, grains, wood) as green material (e.g., vegetable scraps, fruit peels, grass). If you follow this rule, you 【5】 get high-quality soil. Also, if your pile is very big, you’ll need to mix it from time to time 【6】 the oxygen flowing through it. 【7】 , remember that meat and dairy products can’t be composted. They’ll",
          "【8】 your pile smelly and will attract animals.",
          "If you follow these tips, you will have dark, rich soil that’ll be great for growing plants 【9】 than you think. You can spread this soil in your garden or add it to your potted plants. If you don’t choose either of these options, you can share it with someone",
          "【10】 does.",
          "Composting is a practice that can really improve our environment. You should definitely consider giving it a try."
        ],
        "questions": [
          {
            "id": "L5-a-c1",
            "number": 1,
            "options": [
              "because of",
              "as",
              "since",
              "because"
            ],
            "answer": 0,
            "why": "its great environmental cost 是名詞片語，原因用 because of。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c2",
            "number": 2,
            "options": [
              "from",
              "between",
              "above",
              "next to"
            ],
            "answer": 3,
            "why": "next to 表示在旁邊，對應緊鄰家裡的堆肥。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c3",
            "number": 3,
            "options": [
              "such",
              "much",
              "that",
              "a lot"
            ],
            "answer": 2,
            "why": "not that smelly 的 that 是程度副詞，表示沒那麼臭。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c4",
            "number": 4,
            "options": [
              "Except for",
              "Rather than",
              "As to",
              "According to"
            ],
            "answer": 3,
            "why": "According to＋人或資料表示根據、按照。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c5",
            "number": 5,
            "options": [
              "did",
              "had to",
              "don’t",
              "are going to"
            ],
            "answer": 3,
            "why": "if 條件成立後的預期結果，用 are going to get。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c6",
            "number": 6,
            "options": [
              "keep",
              "keeping",
              "to keep",
              "kept"
            ],
            "answer": 2,
            "why": "mix 的目的是讓氧氣流通；to keep 說明目的。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c7",
            "number": 7,
            "options": [
              "Finally",
              "Suddenly",
              "Fortunately",
              "Miraculously"
            ],
            "answer": 0,
            "why": "前面已說幾項技巧，Finally 引出最後提醒。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c8",
            "number": 8,
            "options": [
              "make",
              "cause",
              "have",
              "allow"
            ],
            "answer": 0,
            "why": "make＋受詞＋形容詞，make your pile smelly 是使堆肥變臭。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c9",
            "number": 9,
            "options": [
              "harder",
              "sooner",
              "less",
              "worse"
            ],
            "answer": 1,
            "why": "than 引出比較，soon 的比較級是 sooner。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          },
          {
            "id": "L5-a-c10",
            "number": 10,
            "options": [
              "which",
              "who",
              "whom",
              "whose"
            ],
            "answer": 1,
            "why": "先行詞 someone 是人，who 作後面 does 的主詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L05",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
            }
          }
        ],
        "translation": "你是否將廚餘丟棄在垃圾桶裡？你最好不要，因為它對環境的影響很大。相反地，你應該考慮堆肥。堆肥比你想的要簡單得多。如果你家外面有空間，只需設置一堆土壤並將廚餘丟在上面。然而，如果你的房產較小，你的堆肥得放在靠近你家的地方，那就使用封閉式垃圾桶。即使你住在公寓裡，也不必擔心！你可以購買特殊的室內堆肥桶。大多數人認為這種垃圾桶一定會有很難聞的味道，但最棒的是它們其實不會太臭！\n根據專家的說法，堆肥有一些技巧。第一個技巧是堆肥要平衡棕色物質（如枯葉、穀物、木材）和綠色物質（如蔬菜殘渣、果皮、草）。如果你遵循這個規則，你將得到高品質的土壤。此外，如果你的堆肥很大一堆，你需要不時地攪拌它，以保持氧氣流通。最後，記得肉類和乳製品不能堆肥。它們會使你的堆肥發臭並吸引動物。\n如果你遵循這些技巧，你將會得到深色、肥沃的土壤，這比你想得更適合種植植物。你可以將這些土壤撒在你的花園中或加入你的盆栽植物。如果你不選擇這些選項，你可以與需要它的人分享。\n堆肥是一種真正能改善我們環境的做法。你絕對應該考慮嘗試一下。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L05",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L05"
        }
      }
    ]
  },
  "L6": {
    "title": "Built for Freedom",
    "patterns": [
      {
        "name": "程度與結果",
        "formula": "so＋形容詞/副詞＋that；such＋名詞群＋that",
        "explain": "先說程度有多高，再說造成什麼結果。",
        "trap": "such a big box 含名詞；so big 後直接接 that。",
        "diagram": [
          "The box is so big",
          "that it holds ten books"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L06",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06",
            "example": "The actress is so attractive that people keep looking at her.",
            "explanation": "so 後直接接形容詞 attractive，再接 that 結果子句。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L06",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06",
            "example": "The question is so complicated that no one can really answer it.",
            "explanation": "問題如此複雜，沒有人能真正回答。so加形容詞，再接that結果子句。"
          }
        ]
      },
      {
        "name": "強調句",
        "formula": "It is/was＋強調部分＋that＋剩下的句子",
        "explain": "把要特別指出的人、時間或原因放在中間。",
        "trap": "拿掉 It is/was 和 that 後，要能回到完整句子。",
        "diagram": [
          "It was Amy",
          "that opened the door"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L06",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06",
            "example": "It was the box of jewels that the thief was looking for.",
            "explanation": "It was ... that 強調受詞 the box of jewels；for 留在句末。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L06",
            "location": "三、句型練習，入口例句 5",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06",
            "example": "It is the high price of the car that keeps Jeff from buying it.",
            "explanation": "正是車子的高價讓Jeff無法購買。It is...that...強調主詞。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L6-w-g1",
        "prompt": "Mr. Wang is ____ a wise person that his friends always turn to him for advice when they have problems.",
        "options": [
          "too",
          "such",
          "so",
          "very"
        ],
        "answer": 1,
        "why": "such + a + 形容詞 + 名詞 + that；so 直接接形容詞。",
        "zh": "Wang 先生是如此有智慧的人，因此朋友遇到問題時總會向他請教。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L6-w-g2",
        "prompt": "____ was from that time that I began to take great interest in English.",
        "options": [
          "It",
          "There",
          "This",
          "That"
        ],
        "answer": 0,
        "why": "強調句型 It was ... that，把 from that time 放在強調位置。",
        "zh": "就是從那時起，我開始對英文產生濃厚興趣。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L6-w-g3",
        "prompt": "Holly became ____ when she saw mud on the floor because she had just cleaned it.",
        "options": [
          "anger",
          "angry",
          "angrily",
          "more anger"
        ],
        "answer": 1,
        "why": "became 為連綴動詞，後接形容詞 angry。",
        "zh": "Holly 看見地板上有泥巴時很生氣，因為她才剛清理過。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L6-w-g4",
        "prompt": "Although John wasn’t getting paid very well, he still earned enough money ____ his family.",
        "options": [
          "with support",
          "by supporting",
          "at supporting",
          "to support"
        ],
        "answer": 3,
        "why": "enough money to support 表示足以養家的錢；不定詞說明用途。",
        "zh": "雖然 John 的薪水不高，他賺的錢仍足以養家。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L6-w-g5",
        "prompt": "People are wearing green ____ celebration of St. Patrick’s Day.",
        "options": [
          "on",
          "from",
          "in",
          "with"
        ],
        "answer": 2,
        "why": "in celebration of 表示為慶祝，是固定片語。",
        "zh": "人們穿著綠色服裝慶祝聖派翠克節。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L6-p0",
        "prompt": "We held a party in celebration ____ her success.",
        "options": [
          "of",
          "with",
          "on",
          "to"
        ],
        "answer": 0,
        "why": "in celebration of＋名詞，表示為慶祝某事。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "II.文法選擇：15% 第 5 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L6-p1",
        "prompt": "The child became more confident ____. It did not happen in one day.",
        "options": [
          "in person",
          "over time",
          "by mistake",
          "at once"
        ],
        "answer": 1,
        "why": "over time 表示隨著時間經過，後句強調漸漸發生。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L06",
          "location": "綜合測驗 第 9 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L6-p2",
        "prompt": "We plan to pay a visit ____ the museum.",
        "options": [
          "at",
          "for",
          "to",
          "with"
        ],
        "answer": 2,
        "why": "pay a visit to＋地點，表示參觀。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "V.引導式翻譯：9% 第 3 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L6-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "We’ve all seen pictures of the Statue of Liberty.",
          "It’s 【1】 the most famous structures on earth.",
          "It receives an average of four million visitors every year.",
          "Those lucky enough to see Lady Liberty in person seldom forget their first look 【2】 her.",
          "That’s because she’s not just a beautiful monument but a very large one.",
          "Together with the base at her feet, she stands over 300 feet tall.",
          "In addition, the statue 【3】 contains many symbols.",
          "There’s a special meaning behind almost 【4】 it.",
          "The torch in her right hand, for example, stands for the light of liberty that guides people to freedom.",
          "The date on the tablet in her left hand reminds us of the end of British rule in America.",
          "At her feet are broken chains that symbolize the fact that 【5】 came to an end.",
          "It’s no wonder she’s known as Lady Liberty!"
        ],
        "questions": [
          {
            "id": "L6-w-c1",
            "number": 1,
            "options": [
              "one",
              "one of",
              "the only one",
              "the only one of"
            ],
            "answer": 1,
            "why": "第1題：one of the most famous 後接複數名詞 structures。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L06",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
            }
          },
          {
            "id": "L6-w-c2",
            "number": 2,
            "options": [
              "to",
              "in",
              "at",
              "for"
            ],
            "answer": 2,
            "why": "第2題：a look at 表示看……一眼，介系詞用 at。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L06",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
            }
          },
          {
            "id": "L6-w-c3",
            "number": 3,
            "options": [
              "itself",
              "it",
              "its",
              "it’s"
            ],
            "answer": 0,
            "why": "第3題：itself 為反身代名詞，強調雕像本身。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L06",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
            }
          },
          {
            "id": "L6-w-c4",
            "number": 4,
            "options": [
              "each section",
              "each sections",
              "each section of",
              "each sections of"
            ],
            "answer": 2,
            "why": "第4題：each 後接單數 section。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L06",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
            }
          },
          {
            "id": "L6-w-c5",
            "number": 5,
            "options": [
              "slavery",
              "freedom",
              "celebration",
              "addition"
            ],
            "answer": 0,
            "why": "第5題：slavery 表示奴隸制度；斷裂鎖鏈象徵奴隸制度結束。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L06",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
            }
          }
        ],
        "translation": "我們都看過自由女神像的照片。\n它是世界上最著名的建築之一。\n它每年平均接待四百萬名訪客。\n那些有幸親眼看到自由女神的人很少會忘記他們第一次看到她的樣子。\n那是因為她不僅是一座美麗的紀念碑，而且是一座非常大的紀念碑。\n連同她腳下的基座，她的高度超過300英尺。\n此外，這座雕像本身包含了許多象徵意義。\n幾乎每一部分都有特殊的含義。\n例如，她右手中的火炬代表引導人們走向自由的自由之光。\n她左手中的石板上的日期提醒我們美國脫離英國統治的日子。\n在她腳下的破碎鎖鏈象徵著奴隸制的終結。\n難怪她被稱為自由女神！",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L06",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L06"
        }
      },
      {
        "id": "L6-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "Just as the Statue of Liberty is recognized as a symbol of freedom, so is Eugène Delacroix’s painting Liberty Leading the People, a representation of liberty. Liberty Leading the People has three features in common with the Statue of Liberty. First, it was also created by a Frenchman. Second, it was also created 【1】 freedom. Finally, it also includes a tribute* to Libertas, the Roman goddess of liberty.",
          "Liberty Leading the People was painted 【2】 the Romantic style in 1830. Its subject is the July Revolution*, 【3】 was a significant event in France’s history. The painting was purchased by the French government in 1831 and has been hanging in the Louvre Museum since 1874. 【4】 , Delacroix’s painting has become one of the most famous symbols of the July Revolution and the French love of freedom.",
          "Delacroix’s painting shows ordinary French citizens who are charging and 【5】 their guns at the soldiers of King Charles X. In front of these brave people is the figure of a fearless female freedom fighter. Her dress is torn, so her bare breasts 【6】 the enemy. 【7】 her left hand is a gun, and in her right is the future French flag. This is Libertas, the goddess of liberty. She is leading the French citizens in their fight for freedom in the July Revolution.",
          "The 【8】 duration* of this revolution was but 72 hours. By the 【9】 of these “Three Glorious* Days,” the fighters had taken back their precious freedom from the king. 【10】 the unjust and greedy king had lost his crown, the people of France no longer had to suffer under his cruel rule. Liberty had led them to a better, freer future."
        ],
        "questions": [
          {
            "id": "L6-a-c1",
            "number": 1,
            "options": [
              "celebrate",
              "to celebrate",
              "celebrated",
              "celebrating"
            ],
            "answer": 1,
            "why": "was created 後用 to celebrate 說明創作目的。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c2",
            "number": 2,
            "options": [
              "with",
              "for",
              "at",
              "in"
            ],
            "answer": 3,
            "why": "in the Romantic style 表示以浪漫主義風格，style 搭配 in。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c3",
            "number": 3,
            "options": [
              "it",
              "that",
              "which",
              "when"
            ],
            "answer": 2,
            "why": "逗號補充物 July Revolution，關係代名詞用 which。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c4",
            "number": 4,
            "options": [
              "Over time",
              "For example",
              "For a start",
              "On the other hand"
            ],
            "answer": 0,
            "why": "Over time 表示隨時間經過，對應逐漸成為象徵。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c5",
            "number": 5,
            "options": [
              "exposing",
              "greeting",
              "grabbing",
              "firing"
            ],
            "answer": 3,
            "why": "are charging and firing，and 連接兩個並列的進行式動作。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c6",
            "number": 6,
            "options": [
              "exposing to",
              "expose to",
              "are exposed to",
              "are exposing to"
            ],
            "answer": 2,
            "why": "主詞是被暴露的身體部位，be exposed to 表示暴露於。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c7",
            "number": 7,
            "options": [
              "In",
              "On",
              "Between",
              "Around"
            ],
            "answer": 0,
            "why": "In her left hand 表示在她左手中。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c8",
            "number": 8,
            "options": [
              "keen",
              "full",
              "daily",
              "crowded"
            ],
            "answer": 1,
            "why": "the full duration 表示完整的持續時間，形容詞 full 修飾 duration。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c9",
            "number": 9,
            "options": [
              "variety",
              "end",
              "rest",
              "average"
            ],
            "answer": 1,
            "why": "by the end of 表示到某時段結束時。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          },
          {
            "id": "L6-a-c10",
            "number": 10,
            "options": [
              "But",
              "Unless",
              "Since",
              "Although"
            ],
            "answer": 2,
            "why": "Since 在此是因為，失去王位是不用再受統治的原因。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L06",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
            }
          }
        ],
        "translation": "正如自由女神像被認為是自由的象徵一樣，尤金‧德拉克洛瓦的畫作《自由領導人民》也代表了自由。《自由領導人民》與自由女神像有三個共同點。首先，它也是由一位法國人創作的。其次，它也是為了慶祝自由而創作的。最後，它也包含了對羅馬自由女神利伯他茲的致敬。\n《自由領導人民》是在1830年以浪漫主義風格繪製的。其主題是七月革命，這是法國歷史上的一個重大事件。這幅畫於1831年被法國政府購買，自1874年以來一直懸掛在羅浮宮博物館中。隨著時間過去，德拉克洛瓦的畫作已成為七月革命和法國人熱愛自由最著名的象徵之一。\n德拉克洛瓦的畫作描繪了普通的法國公民，他們正衝鋒並向查理十世的士兵開槍。在這些勇敢人民的前方是一位無畏的女性自由戰士的形象。她的衣服被撕裂了，因此她赤裸的胸部暴露在敵人面前。她左手持槍，右手握著未來的法國國旗。這就是利伯他茲，自由女神。她正在領導法國公民在七月革命中為自由而戰。\n這場革命的全程僅持續了72小時。到了這「光榮三日」結束時，戰士們已從國王手中奪回了他們珍貴的自由。由於不公正和貪婪的國王失去了他的王冠，法國人民不再需要忍受他的殘酷統治。自由帶領他們走向了一個更美好、更自由的未來。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L06",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L06"
        }
      }
    ]
  },
  "L7": {
    "title": "From Trash to Triumph",
    "patterns": [
      {
        "name": "被動使役",
        "formula": "誰＋have/had＋東西＋過去分詞",
        "explain": "安排別人完成某事時，受詞是被修理、被製作的東西。",
        "trap": "have the bike repaired；若受詞是人則可用 have him repair the bike。",
        "diagram": [
          "I had my bike",
          "repaired"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L07",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07",
            "example": "Julia had the room swept right away.",
            "explanation": "have the room swept：房間被打掃，sweep 過去分詞為 swept。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L07",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07",
            "example": "The boss asked me to have his car washed by 3:00 p.m.",
            "explanation": "老闆要我在下午三點前安排把他的車洗好。have加受詞及過去分詞，表示請人完成。"
          }
        ]
      },
      {
        "name": "疑問詞＋不定詞",
        "formula": "know/decide＋what/how/where＋to＋原形動詞",
        "explain": "用一小塊說要做什麼、如何做或在哪裡做。",
        "trap": "how to solve the problem 有受詞；what to do 的 what 本身是 do 的受詞。",
        "diagram": [
          "I know",
          "how to cook rice"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L07",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07",
            "example": "how to improve their reading skills",
            "explanation": "主詞相同時，how they could improve 簡化為 how to improve。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L07",
            "location": "三、句型練習，入口例句 5",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07",
            "example": "The lady asked the manager when to start working.",
            "explanation": "女士問經理何時開始工作。when to start是疑問詞加不定詞。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L7-w-g1",
        "prompt": "There is something wrong with the car. I need to have it ____ now.",
        "options": [
          "fix",
          "fixed",
          "fixing",
          "to fix"
        ],
        "answer": 1,
        "why": "have 物 + 過去分詞，表示請人處理；汽車是被修理的，用 fixed。",
        "zh": "這輛車出了問題，我現在需要請人把它修好。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L7-w-g2",
        "prompt": "Cindy has tried several times, but she still doesn’t know ____ to solve the problem.",
        "options": [
          "how",
          "what",
          "when",
          "why"
        ],
        "answer": 0,
        "why": "how to solve 表示如何解決；solve 已有受詞 the problem。",
        "zh": "Cindy 已經試過好幾次，但仍不知道如何解決這個問題。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L7-w-g3",
        "prompt": "I got new glasses because I couldn’t see clearly with the old ____ .",
        "options": [
          "them",
          "those",
          "ones",
          "some"
        ],
        "answer": 2,
        "why": "ones 代替前面的複數名詞 glasses。",
        "zh": "我換了新眼鏡，因為戴舊的那副看不清楚。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L7-w-g4",
        "prompt": "Playing games on cellphones ____ quite popular among high school students.",
        "options": [
          "is",
          "are",
          "being",
          "to be"
        ],
        "answer": 0,
        "why": "動名詞片語 Playing games 作主詞，整體視為單數，用 is。",
        "zh": "在手機上玩遊戲在高中生之間相當流行。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L7-w-g5",
        "prompt": "Nora took some water to her children, ____ were playing under a tree.",
        "options": [
          "which",
          "that",
          "they",
          "who"
        ],
        "answer": 3,
        "why": "非限定關係子句修飾人 children，用 who，不能用 that。",
        "zh": "Nora 拿了一些水給正在樹下玩耍的孩子們。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L7-p0",
        "prompt": "We look forward to ____ you next week.",
        "options": [
          "see",
          "seeing",
          "to see",
          "saw"
        ],
        "answer": 1,
        "why": "look forward to 的 to 是介系詞，後接 seeing。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L07",
          "location": "翻譯 第 3 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L7-p1",
        "prompt": "She teaches music to make a ____.",
        "options": [
          "choice",
          "living",
          "sense",
          "decision"
        ],
        "answer": 1,
        "why": "make a living 表示謀生。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L07",
          "location": "翻譯 第 2 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L7-p2",
        "prompt": "Mia is good at ____ songs.",
        "options": [
          "sing",
          "singing",
          "to sing",
          "sang"
        ],
        "answer": 1,
        "why": "be good at 後接名詞或 V-ing；這裡用 singing 表示擅長唱歌。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L07",
          "location": "綜合測驗 第 12 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L7-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Ada Ríos, who grew up near a huge garbage dump in Paraguay, often wondered if she would have to collect trash forever.",
          "One day, her grandma signed her up for free music lessons that were being offered by Mr. Chávez.",
          "【1】 Ada arrived at the music class, she discovered that there weren’t enough instruments for all the children.",
          "Thankfully, a garbage picker knew what 【2】 to make instruments for them—the trash from the dump!",
          "【3】 , these children struggled to make their instruments sound good.",
          "However, with hard work, they slowly realized their 【4】 and could finally play harmoniously.",
          "The orchestra became popular and started giving performances across Paraguay.",
          "After that, they were 【5】 to perform together with some famous rock bands around the world.",
          "Through this experience, Ada understood that her future wouldn’t have to end up at the landfill.",
          "More importantly, she could have a chance to realize her dream."
        ],
        "questions": [
          {
            "id": "L7-w-c1",
            "number": 1,
            "options": [
              "As long as",
              "As soon as",
              "Even though",
              "In case"
            ],
            "answer": 1,
            "why": "第1題：As soon as 表示一……就……，連接到達與發現。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L07",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
            }
          },
          {
            "id": "L7-w-c2",
            "number": 2,
            "options": [
              "used",
              "using",
              "to use",
              "can use"
            ],
            "answer": 2,
            "why": "第2題：what to use 表示使用什麼，what 作 use 的受詞。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L07",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
            }
          },
          {
            "id": "L7-w-c3",
            "number": 3,
            "options": [
              "After all",
              "For example",
              "In fact",
              "At first"
            ],
            "answer": 3,
            "why": "第3題：At first 表示起初，與後來的進步對比。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L07",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
            }
          },
          {
            "id": "L7-w-c4",
            "number": 4,
            "options": [
              "potential",
              "pursuit",
              "application",
              "encouragement"
            ],
            "answer": 0,
            "why": "第4題：realize one’s potential 表示發揮／實現潛能。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L07",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
            }
          },
          {
            "id": "L7-w-c5",
            "number": 5,
            "options": [
              "afraid",
              "able",
              "angry",
              "likely"
            ],
            "answer": 1,
            "why": "第5題：be able to 後接原形動詞 perform，表示能夠表演。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L07",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
            }
          }
        ],
        "translation": "Ada Ríos在巴拉圭的一個巨大的垃圾場附近長大，她常常疑惑自己是否得永遠從事撿垃圾的工作。\n有一天，她的祖母為她報名Chávez先生提供的免費音樂課程。\n當Ada一到課堂時，她發現沒有足夠的樂器供所有孩子使用。\n幸好，有一位拾荒者知道要用什麼東西來製作樂器—垃圾場的垃圾！\n起初，這些孩子辛苦地使他們的樂器發出好聽的聲音。\n然而，經過一番努力，他們慢慢地發揮自己的潛力，終於能夠和諧地演奏。\n樂團變得受歡迎，並開始在巴拉圭各地演出。\n之後，他們能夠與一些知名搖滾樂團一起到世界各地表演。\n透過這些經歷，Ada明白她的未來不必終結在垃圾場。\n更重要的是，她有機會實現自己的夢想。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L07",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L07"
        }
      },
      {
        "id": "L7-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "El Sistema is a music program that began in the South American country of Venezuela*. It was founded in 1975 by musician José Antonio Abreu, 【1】 designed the program to help poor children in the country. The program is based on the idea that change can 【2】 music education—through music, young people can learn important life skills. Since its introduction in Venezuela, it has spread 【3】 and inspired similar programs in more than 60 other countries.",
          "Children in the El Sistema program usually start learning music from a very early age. They learn 【4】 to play instruments and sing. However, El Sistema appears to benefit kids not only 【5】 providing them with a musical education. Many children in the program also manage 【6】 their performance in various other school subjects.",
          "El Sistema is dedicated* to supporting the development of youth orchestras. The program has had more than 100 youth orchestras 【7】 in Venezuela. Many of them have played 【8】 all over the world. Some orchestra members who are particularly",
          "【9】 classical music have even become world-famous musicians!",
          "In summary, Venezuela’s El Sistema program uses music to help children find 【10】 can change their life, become more confident, and develop into successfully functioning adults. The program is building a better future for young people both in Venezuela and beyond."
        ],
        "questions": [
          {
            "id": "L7-a-c1",
            "number": 1,
            "options": [
              "who",
              "what",
              "which",
              "that"
            ],
            "answer": 0,
            "why": "逗號補充人物 Abreu，who 作 designed 的主詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c2",
            "number": 2,
            "options": [
              "look for",
              "look forward to",
              "come out of",
              "get carried away"
            ],
            "answer": 2,
            "why": "come out of 表示由某事產生，這裡說改變來自音樂教育。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c3",
            "number": 3,
            "options": [
              "barely",
              "somehow",
              "faithfully",
              "overseas"
            ],
            "answer": 3,
            "why": "overseas 是副詞，可直接放在 spread 後表示傳到海外。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c4",
            "number": 4,
            "options": [
              "when",
              "how",
              "what",
              "where"
            ],
            "answer": 1,
            "why": "how to play 表示如何演奏，how＋to＋原形動詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c5",
            "number": 5,
            "options": [
              "at",
              "of",
              "on",
              "by"
            ],
            "answer": 3,
            "why": "by＋V-ing 表示藉由提供教育的方法。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c6",
            "number": 6,
            "options": [
              "improve",
              "to improve",
              "improving",
              "improved"
            ],
            "answer": 1,
            "why": "manage to＋原形動詞，表示設法做到。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c7",
            "number": 7,
            "options": [
              "create",
              "creating",
              "created",
              "to create"
            ],
            "answer": 2,
            "why": "have＋受詞＋過去分詞；orchestras 是被創立，用 created。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c8",
            "number": 8,
            "options": [
              "concerts",
              "screams",
              "triumphs",
              "applications"
            ],
            "answer": 0,
            "why": "play concerts 表示舉行音樂會，此處用複數 concerts。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c9",
            "number": 9,
            "options": [
              "bored with",
              "good at",
              "kind to",
              "afraid of"
            ],
            "answer": 1,
            "why": "be good at＋名詞或 V-ing 表示擅長。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          },
          {
            "id": "L7-a-c10",
            "number": 10,
            "options": [
              "that",
              "how",
              "which",
              "what"
            ],
            "answer": 3,
            "why": "what 作 can change 的主詞，整個 what 子句是 find 的受詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L07",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
            }
          }
        ],
        "translation": "音樂系統教育（El Sistema）是一個起源於南美洲國家委內瑞拉的音樂教育計畫。它由音樂家José Antonio Abreu於1975年創立，旨在幫助該國貧困兒童。該計畫基於一個理念，即改變可以透過音樂教育實現—透過音樂，年輕人可以學習重要的生活技能。自從在委內瑞拉推出以來，它已經傳播到海外，在其他60多個國家啟發了類似的計畫。\n參與音樂系統教育計畫的兒童通常從很小的時候就開始學習音樂，他們學習如何演奏樂器和唱歌。然而，音樂系統教育不僅透過提供音樂教育來造福兒童。計畫中的許多兒童也在各種其他學科的表現上有所提升。\n音樂系統教育致力於支持青少年管弦樂團的發展。該計畫已經在委內瑞拉成立了100多個青少年管弦樂團。當中有許多樂團在世界各地舉行過音樂會。一些在古典音樂方面特別優秀的管弦樂團成員甚至已經成為世界知名的音樂家！\n總之，委內瑞拉的音樂系統教育計畫用音樂幫助兒童找到可以改變人生的事情、變得更加自信，並成長為成功的大人。該計畫正在為委內瑞拉及其他地區的年輕人建立更美好的未來。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L07",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L07"
        }
      }
    ]
  },
  "L8": {
    "title": "Convenience Stores",
    "patterns": [
      {
        "name": "越……越……",
        "formula": "The＋比較級＋句子，the＋比較級＋句子",
        "explain": "兩種變化一起發生，兩邊各用比較級。",
        "trap": "more 修飾長形容詞或數量，better 是 good/well 的比較級。",
        "diagram": [
          "The more I read,",
          "the more I learn"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L08",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08",
            "example": "The happier people are with their jobs, the harder they will work.",
            "explanation": "兩子句以 the + 比較級 起首：the happier、the harder。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L08",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08",
            "example": "The older Van gets, the more hair he loses.",
            "explanation": "Van年紀愈大，掉髮愈多。the加比較級表示愈……愈……。"
          }
        ]
      },
      {
        "name": "so that 表目的",
        "formula": "誰＋動作＋so that＋誰＋can/will＋原形動詞",
        "explain": "先說做了什麼，再說想讓什麼發生。",
        "trap": "so that 後接完整句子；和 so hot that 的程度結果分開看。",
        "diagram": [
          "I speak slowly",
          "so that you can follow me"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L08",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08",
            "example": "Betty always exercises three times a week so that she can stay fit.",
            "explanation": "so that 引導目的子句；現在式搭配 can stay。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L08",
            "location": "三、句型練習，入口例句 6",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08",
            "example": "Jenny is going for a walk so that she can get some fresh air.",
            "explanation": "Jenny要去散步，以便呼吸新鮮空氣。so that引導目的子句。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L8-w-g1",
        "prompt": "The harder you study, the ____ you will get good grades.",
        "options": [
          "easily",
          "more easily",
          "easy",
          "much easily"
        ],
        "answer": 1,
        "why": "The + 比較級..., the + 比較級...；修飾 get 用副詞比較級 more easily。",
        "zh": "你讀書越用功，就越容易取得好成績。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L8-w-g2",
        "prompt": "Please turn down the music ____ I can focus on my studying.",
        "options": [
          "so that",
          "or",
          "that",
          "therefore"
        ],
        "answer": 0,
        "why": "so that 引導目的子句，表示為了能專心。",
        "zh": "請把音樂轉小聲，好讓我能專心讀書。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L8-w-g3",
        "prompt": "Sam is a funny guy. His jokes always ____ me laugh.",
        "options": [
          "get",
          "allow",
          "turn",
          "make"
        ],
        "answer": 3,
        "why": "make 人 + 原形動詞 laugh；allow 需接 to laugh。",
        "zh": "Sam 是個有趣的人，他的笑話總能使我發笑。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L8-w-g4",
        "prompt": "I have many hobbies. One of them ____ playing basketball.",
        "options": [
          "been",
          "be",
          "is",
          "are"
        ],
        "answer": 2,
        "why": "One of them 為單數主詞，用 is。",
        "zh": "我有許多嗜好，其中之一是打籃球。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L8-w-g5",
        "prompt": "If you don’t hurry, you ____ miss your flight.",
        "options": [
          "must",
          "should",
          "will",
          "can"
        ],
        "answer": 2,
        "why": "if 條件子句用現在式，主句用 will 表示未來結果。",
        "zh": "如果你不快一點，就會錯過班機。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L8-p0",
        "prompt": "I bought the bright red bag ____ impulse and regretted it later.",
        "options": [
          "in",
          "at",
          "on",
          "for"
        ],
        "answer": 2,
        "why": "on impulse 是固定搭配，表示一時衝動。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L08",
          "location": "綜合測驗 第 14 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L8-p1",
        "prompt": "Shops take advantage ____ empty space near the door.",
        "options": [
          "with",
          "to",
          "of",
          "on"
        ],
        "answer": 2,
        "why": "take advantage of＋名詞，表示利用。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L08",
          "location": "篇章結構 第 12 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L8-p2",
        "prompt": "We only wanted milk, but ended up ____ a full basket.",
        "options": [
          "fill",
          "to fill",
          "filled",
          "filling"
        ],
        "answer": 3,
        "why": "end up＋V-ing 表示最後卻做了某事。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L08",
          "location": "綜合測驗 第 16 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L8-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Miranda got her first job in a convenience store.",
          "After working there for a few months, she noticed something.",
          "Many shoppers ended up 【1】 into the same traps.",
          "She realized that the convenience store used three ways to make shoppers spend more money.",
          "She also learned that these strategies were adopted by most convenience stores.",
          "First, shop owners place their most popular items 【2】 the average shopper’s eye level.",
          "If 【3】 easier for shoppers 【3】 them, they will be more likely to buy them.",
          "Another way is 【4】 unplanned purchases.",
          "Shoppers in line to pay often grab something extra like a candy bar.",
          "The third trap is an open dining area.",
          "The owners want people to stay longer so they will have a chance to spend more.",
          "Miranda never 【5】 these things before getting the job.",
          "Now she knows how to avoid falling into these traps.",
          "You can learn from Miranda and save some money!"
        ],
        "questions": [
          {
            "id": "L8-w-c1",
            "number": 1,
            "options": [
              "fall",
              "falling",
              "fell",
              "to fall"
            ],
            "answer": 1,
            "why": "第1題：end up 後接動名詞 falling，表示最後落入陷阱。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L08",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
            }
          },
          {
            "id": "L8-w-c2",
            "number": 2,
            "options": [
              "with",
              "in",
              "for",
              "at"
            ],
            "answer": 3,
            "why": "第2題：at eye level 表示與視線同高。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L08",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
            }
          },
          {
            "id": "L8-w-c3",
            "number": 3,
            "options": [
              "it is; to see",
              "it is; seeing",
              "they are; to see",
              "they are; seeing"
            ],
            "answer": 0,
            "why": "第3題：It is + 形容詞 + for 人 + to V；it 作虛主詞，to see 是真正主詞。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L08",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
            }
          },
          {
            "id": "L8-w-c4",
            "number": 4,
            "options": [
              "by promote",
              "by promoting",
              "to promoting",
              "from promote"
            ],
            "answer": 1,
            "why": "第4題：by 後接動名詞 promoting，表示方法。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L08",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
            }
          },
          {
            "id": "L8-w-c5",
            "number": 5,
            "options": [
              "thought of",
              "looked forward to",
              "thought twice",
              "looked for"
            ],
            "answer": 0,
            "why": "第5題：think of 表示想到；過去式 thought of，指先前沒想到這些手法。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L08",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
            }
          }
        ],
        "translation": "Miranda在一家便利商店找到了她的第一份工作。\n在那裡工作了幾個月後，她注意到了一件事情。\n許多顧客最終都會落入相同的陷阱。\n她了解到便利商店使用三種方式讓顧客花費更多錢。\n她也學到這些策略為大多數便利商店所採用。\n首先，店長將最受歡迎的商品放在一般顧客的眼睛高度。\n如果顧客更容易看到這些商品，他們購買的可能性就會更高。\n另一個方式是藉由促進非計畫性購買。\n排隊等待付款的顧客常常會額外抓一樣東西，像是一條糖果。\n第三個陷阱是開放式的用餐區。\n店長希望人們停留得更久，這樣他們就有機會花費更多。\nMiranda在得到這份工作之前從未想過這些事情。\n現在她知道如何避免落入這些陷阱。\n你可以向Miranda學習，節省一些錢！",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L08",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L08"
        }
      },
      {
        "id": "L8-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "From supermarkets to shopping malls, stores use many strategies to make us spend more money. That is, they design their stores in particular ways 【1】 you will hand over more of the cash in your pocket. For example, it’s common to see a big red sign 【2】 says “Sale.” These signs make the shop seem 【3】 because the color red encourages people to make quicker decisions. Inside the shop, the colors most commonly used are blue and green because these colors help create a relaxing atmosphere. Besides colors, store clerks are sure to tell shoppers that their special deals are available for only a short time. They do this to make shoppers 【4】 pressure to buy immediately. In addition, many big stores, 【5】 Carrefour, also have big empty shopping carts. Studies have shown that bigger shopping carts may trick customers into spending more. 【6】 , shoppers will want to fill their carts with more stuff. Supermarkets also know what to put at the front of the store. They always 【7】 colorful fruit near the door because seeing it puts shoppers in a good mood. Similarly, baked goods and other treats that you enjoy smelling are near the front. Smelling something pleasant increases the chances of buying items 【8】 impulse.",
          "Moreover, because 【9】 popular items are at the back of the supermarket, shoppers have to walk across the whole store to find them. They may end up 【10】 tempted to buy extra items. So, keep these marketing strategies in mind if you need to spend less the next time you are shopping. In other words, be careful when you shop!"
        ],
        "questions": [
          {
            "id": "L8-a-c1",
            "number": 1,
            "options": [
              "so that",
              "only if",
              "even though",
              "as soon as"
            ],
            "answer": 0,
            "why": "前面說商店怎樣設計，so that 引出想讓人多花錢的目的。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c2",
            "number": 2,
            "options": [
              "where",
              "what",
              "that",
              "who"
            ],
            "answer": 2,
            "why": "sign 是先行詞，that 作 says 的主詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c3",
            "number": 3,
            "options": [
              "attract",
              "attracted",
              "attractively",
              "attractive"
            ],
            "answer": 3,
            "why": "seem 後接形容詞 attractive 描述商店。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c4",
            "number": 4,
            "options": [
              "feeling",
              "feel",
              "to feel",
              "felt"
            ],
            "answer": 1,
            "why": "make＋受詞＋原形動詞，所以用 feel。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c5",
            "number": 5,
            "options": [
              "such as",
              "far from",
              "due to",
              "except for"
            ],
            "answer": 0,
            "why": "such as 舉例，Carrefour 是大賣場的例子。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c6",
            "number": 6,
            "options": [
              "However",
              "Fortunately",
              "Therefore",
              "Besides"
            ],
            "answer": 2,
            "why": "前面說大推車誘導多買，Therefore 引出因此想裝更多的結果。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c7",
            "number": 7,
            "options": [
              "match",
              "place",
              "remove",
              "notice"
            ],
            "answer": 1,
            "why": "place 是動詞，place colorful fruit near the door 是擺放水果。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c8",
            "number": 8,
            "options": [
              "with",
              "in",
              "at",
              "on"
            ],
            "answer": 3,
            "why": "on impulse 是固定搭配，表示一時衝動。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c9",
            "number": 9,
            "options": [
              "much",
              "too",
              "the most",
              "a more"
            ],
            "answer": 2,
            "why": "popular 的最高級用 the most popular。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          },
          {
            "id": "L8-a-c10",
            "number": 10,
            "options": [
              "being",
              "to be",
              "be",
              "been"
            ],
            "answer": 0,
            "why": "end up＋V-ing，being tempted 表示最後被誘惑。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L08",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
            }
          }
        ],
        "translation": "從超市到購物中心，商店使用許多策略讓我們花更多錢。也就是說，他們以特定的方式設計他們的商店，因此你會花掉口袋裡更多的現金。例如，常見的是看到一個大紅色的標誌表示「特價」。這些標誌讓商店看起來有吸引力，因為紅色鼓勵人們更快做出決定。在店內，最常用的顏色是藍色和綠色，因為這些顏色有助於營造輕鬆的氛圍。除了顏色，店員肯定會告訴購物者，他們的特別優惠只有短時間內有效。他們這樣做是為了讓購物者感受到立即購買的壓力。此外，許多大型商店，如家樂福，也有大型的空購物車。研究顯示，更大的購物車可能會誘騙顧客花費更多。因此，購物者會想用更多東西裝滿他們的購物車。超市也知道該把什麼放在店的前面。他們總是在門口附近放置五顏六色的水果，因為看到它會讓購物者心情好。同樣地，烘焙食品和其他你喜歡聞的美食都在前面。聞到令人愉悅的氣味會增加衝動購買商品的機會。\n此外，因為最受歡迎的商品在超市的後面，購物者必須穿越整間商店才能找到它們。他們可能最終被誘惑購買額外的商品。所以，如果你下次購物時需要減少開支，請記住這些行銷策略。換句話說，購物時要小心！",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L08",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L08"
        }
      }
    ]
  },
  "L9": {
    "title": "Fighting for or against Graffiti",
    "patterns": [
      {
        "name": "分詞構句",
        "formula": "完整句，V-ing / 過去分詞＋補充內容",
        "explain": "先找補充動作的主角，和主句主詞核對。",
        "trap": "主動用 V-ing；被陪伴等被動情形常用過去分詞。",
        "diagram": [
          "Amy walked home,",
          "carrying a bag"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L09",
            "location": "IV.句型練習：16% 第 3 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09",
            "example": "Carol stared at Jason, shocked by his words.",
            "explanation": "省略重複主詞和 was，保留過去分詞 shocked 表感受。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L09",
            "location": "三、句型練習，入口例句 1",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09",
            "example": "Jason looked out the window, enjoying the beautiful view.",
            "explanation": "Jason望向窗外，欣賞美景。enjoying是主動分詞構句。"
          }
        ]
      },
      {
        "name": "while / whereas 對比",
        "formula": "完整句，while/whereas＋另一個完整句",
        "explain": "把兩個不同的喜好或情況放在一起比較。",
        "trap": "while 在這裡是「而」，不一定是「當……時」。",
        "diagram": [
          "I like tea,",
          "while Ben likes milk"
        ],
        "sources": [
          {
            "name": "習作教師版",
            "unit": "英文第一冊 L09",
            "location": "IV.句型練習：16% 第 1 題",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09",
            "example": "Most public restrooms are free in Taiwan, while public toilets in Europe usually require users to pay.",
            "explanation": "while 連接兩個完整子句，對比臺灣與歐洲公廁。"
          },
          {
            "name": "All in One",
            "unit": "英文第一冊 L09",
            "location": "三、句型練習，入口例句 6",
            "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09",
            "example": "I drink black coffee, while/whereas my brother prefers coffee with cream.",
            "explanation": "我喝黑咖啡，而弟弟偏好加奶油的咖啡。while或whereas表示對比。"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "L9-w-g1",
        "prompt": "A lot of visitors gathered at the park, ____ by the beautiful night sky.",
        "options": [
          "surprise",
          "surprising",
          "surprised",
          "having surprised"
        ],
        "answer": 2,
        "why": "visitors 感到驚訝，用過去分詞 surprised 補充狀態。",
        "zh": "許多遊客聚集在公園裡，對美麗的夜空感到驚喜。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 1 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L9-w-g2",
        "prompt": "____ some people believe that graffiti is art, others think that it makes a city look messy.",
        "options": [
          "Because",
          "If",
          "When",
          "While"
        ],
        "answer": 3,
        "why": "While 表示然而／儘管，用來對比兩種看法。",
        "zh": "有些人認為塗鴉是藝術，而另一些人認為它使城市看起來雜亂。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 2 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L9-w-g3",
        "prompt": "Those ____ park their cars in a no-parking area will be fined.",
        "options": [
          "who",
          "where",
          "which",
          "what"
        ],
        "answer": 0,
        "why": "Those 指人，關係子句主詞用 who。",
        "zh": "把車停在禁停區的人將被罰款。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 3 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L9-w-g4",
        "prompt": "The news report contrasted the average global temperature in 1995 ____ that in 2015.",
        "options": [
          "for",
          "on",
          "with",
          "at"
        ],
        "answer": 2,
        "why": "contrast A with B 表示比較兩者差異。",
        "zh": "這篇新聞報導把 1995 年的全球平均氣溫與 2015 年的相比。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 4 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "入口原題整理"
      },
      {
        "id": "L9-w-g5",
        "prompt": "Tina ____ an effort to learn Korean in order to write letters to her K-pop idols.",
        "options": [
          "did",
          "got",
          "made",
          "spent"
        ],
        "answer": 2,
        "why": "make an effort to 表示努力做某事；過去式 made。",
        "zh": "Tina 努力學習韓文，以便寫信給她的韓流偶像。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 5 題",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "入口原題整理"
      }
    ],
    "phrases": [
      {
        "id": "L9-p0",
        "prompt": "I chose to walk rather than ____ the bus.",
        "options": [
          "taking",
          "take",
          "took",
          "taken"
        ],
        "answer": 1,
        "why": "此句 to 共同引導 walk 和 take，兩個動作保持平行。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L09",
          "location": "綜合測驗 第 9 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L9-p1",
        "prompt": "The workers tried to get rid ____ the old paint.",
        "options": [
          "to",
          "with",
          "of",
          "on"
        ],
        "answer": 2,
        "why": "get rid of 表示去除或擺脫。",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L09",
          "location": "翻譯 第 3 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
        },
        "kind": "依入口考點新編"
      },
      {
        "id": "L9-p2",
        "prompt": "The book contrasts city life ____ country life.",
        "options": [
          "with",
          "to",
          "for",
          "at"
        ],
        "answer": 0,
        "why": "contrast A with B 表示對比 A 和 B。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "II.文法選擇：15% 第 4 題／句",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        },
        "kind": "依入口考點新編"
      }
    ],
    "cloze": [
      {
        "id": "L9-wb",
        "label": "習作克漏字",
        "paragraphs": [
          "Sherry loved graffiti.",
          "The paintings on the sides of her building always changed.",
          "To her, it was obviously art.",
          "She thought graffiti artists 【1】 other painters or artists.",
          "The difference was that they used walls 【2】 paper.",
          "Some graffiti 【3】 things that needed to be changed in the world.",
          "Other works were just beautiful to see.",
          "One day, Sherry moved to a new building.",
          "The new building also had graffiti, but this graffiti made the building look messy.",
          "In addition, these “artists” weren’t painting to show beautiful or important things.",
          "Most of this graffiti was tagging, 【4】 means people just spray-painting their names.",
          "Her neighbors didn’t like it, either.",
          "It made them 【5】 it was unsafe to live there.",
          "If graffiti caused all these problems, maybe it wasn’t really art after all.",
          "Sherry couldn’t make up her mind."
        ],
        "questions": [
          {
            "id": "L9-w-c1",
            "number": 1,
            "options": [
              "is like",
              "was like",
              "are like",
              "were like"
            ],
            "answer": 3,
            "why": "第1題：like 表示像，後接 painters or artists。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L09",
              "location": "III.綜合測驗：15% 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
            }
          },
          {
            "id": "L9-w-c2",
            "number": 2,
            "options": [
              "more than",
              "rather than",
              "better than",
              "sooner than"
            ],
            "answer": 1,
            "why": "第2題：rather than 表示而不是，對比牆壁與紙。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L09",
              "location": "III.綜合測驗：15% 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
            }
          },
          {
            "id": "L9-w-c3",
            "number": 3,
            "options": [
              "looked forward to",
              "was about to",
              "was used to",
              "called attention to"
            ],
            "answer": 3,
            "why": "第3題：call attention to 表示使人注意某事。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L09",
              "location": "III.綜合測驗：15% 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
            }
          },
          {
            "id": "L9-w-c4",
            "number": 4,
            "options": [
              "which",
              "that",
              "it",
              "they"
            ],
            "answer": 0,
            "why": "第4題：which 引導補充說明 tagging 意思的關係子句。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L09",
              "location": "III.綜合測驗：15% 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
            }
          },
          {
            "id": "L9-w-c5",
            "number": 5,
            "options": [
              "feel",
              "to feel",
              "feeling",
              "to feeling"
            ],
            "answer": 0,
            "why": "第5題：make 人 + 原形動詞 feel，表示使人感到。",
            "source": {
              "name": "習作教師版",
              "unit": "英文第一冊 L09",
              "location": "III.綜合測驗：15% 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
            }
          }
        ],
        "translation": "Sherry很喜歡塗鴉。\n她住的大樓外牆上的畫作總是在改變。\n對她來說，這顯然是藝術。\n她認為塗鴉藝術家就像其他畫家或藝術家一樣。\n不同之處在於他們使用牆壁而不是紙張。\n有些塗鴉作品引起人們對於世界上需要改變的事情的注意。\n另一些作品則是純粹看起來很美麗。\n有一天，Sherry搬到了一棟新大樓。\n新大樓也有塗鴉，但這些塗鴉讓大樓看起來很髒亂。\n此外，這些「藝術家」並不是為了展示美麗或重要的事物而作畫。\n這些塗鴉大部分是標籤，意指人們只是噴漆他們的名字。\n她的鄰居們也不喜歡它。\n這讓他們覺得住在那裡不安全。\n如果塗鴉導致所有這些問題，也許它根本就不是真正的藝術。\nSherry無法打定主意。",
        "source": {
          "name": "習作教師版",
          "unit": "英文第一冊 L09",
          "location": "III.綜合測驗：15%",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/workbook-teacher/#B1-L09"
        }
      },
      {
        "id": "L9-aio",
        "label": "All in One 克漏字",
        "paragraphs": [
          "On Thursday night, famous graffiti artist Matt Garner will be giving a talk about graffiti at New State College. Matt is a talented artist 【1】 paints street art under the nickname “Paladin.” Some people love his works, while 【2】 see them as a coward’s art. Through this talk, he hopes to change people’s minds about this art form 【3】 so few understand.",
          "Paladin’s art is mostly political. He likes to compare the media’s descriptions of war",
          "【4】 the real-life effects of conflict. His most famous work is Sugar-Free Will, which shows 【5】 television audience members staring wide-eyed at a handsome actor on a screen. This piece 【6】 our attention to the political platform that Hollywood actors use to spread their personal views.",
          "Those who don’t like Paladin’s art say that 【7】 solving problems, his graffiti creates new ones. Such people argue that Paladin encourages crime and that works like his",
          "【8】 the city look messy. However, supporters point out that his art makes neighborhoods",
          "more beautiful, 【9】 them with interesting images. 【10】 , they argue that artists have used art to spread political messages for centuries, so Paladin is doing what an artist should do.",
          "No matter what your views are, come and listen to Matt’s thoughts on the subject. At the end of the speech, there will be an open discussion for the audience, so you’ll have a chance to express your thoughts. Hope to see you there!"
        ],
        "questions": [
          {
            "id": "L9-a-c1",
            "number": 1,
            "options": [
              "whose",
              "what",
              "who",
              "which"
            ],
            "answer": 2,
            "why": "artist 是先行詞，who 作 paints 的主詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 1 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c2",
            "number": 2,
            "options": [
              "the rest",
              "another",
              "the other",
              "others"
            ],
            "answer": 3,
            "why": "some…others…表示有些人與另一些人，others 後直接接動詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 2 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c3",
            "number": 3,
            "options": [
              "who",
              "which",
              "whom",
              "what"
            ],
            "answer": 1,
            "why": "art form 是物，which 作 understand 的受詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 3 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c4",
            "number": 4,
            "options": [
              "with",
              "for",
              "between",
              "by"
            ],
            "answer": 0,
            "why": "compare A with B 表示比較兩者。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 4 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c5",
            "number": 5,
            "options": [
              "million",
              "millions",
              "million of",
              "millions of"
            ],
            "answer": 3,
            "why": "millions of＋複數名詞表示數以百萬計。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 5 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c6",
            "number": 6,
            "options": [
              "asks",
              "takes",
              "pays",
              "calls"
            ],
            "answer": 3,
            "why": "call attention to 表示引起對某事的注意；主詞 piece 單數，用 calls。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 6 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c7",
            "number": 7,
            "options": [
              "except for",
              "rather than",
              "according to",
              "more than"
            ],
            "answer": 1,
            "why": "rather than＋V-ing 在此表示沒有解決問題反而帶來問題。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 7 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c8",
            "number": 8,
            "options": [
              "allow",
              "cause",
              "make",
              "force"
            ],
            "answer": 2,
            "why": "make＋受詞＋原形動詞，make the city look messy。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 8 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c9",
            "number": 9,
            "options": [
              "decorates",
              "decorating",
              "decorated",
              "to decorate"
            ],
            "answer": 1,
            "why": "decorating 補充藝術使社區美麗的方法，邏輯主詞是 his art，使用主動分詞。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 9 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          },
          {
            "id": "L9-a-c10",
            "number": 10,
            "options": [
              "For example",
              "All of a sudden",
              "For a start",
              "In addition"
            ],
            "answer": 3,
            "why": "In addition 表示此外，加入支持者的另一個理由。",
            "source": {
              "name": "All in One",
              "unit": "英文第一冊 L09",
              "location": "Part 2 五、綜合測驗 第 10 題",
              "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
            }
          }
        ],
        "translation": "週四晚上，知名塗鴉藝術家Matt Garner將在新州學院就塗鴉藝術進行演講。Matt是一位才華洋溢的藝術家，以暱稱「聖騎士」從事街頭藝術創作。有些人喜歡他的作品，而另一些人則將其視為懦夫的藝術。透過這次演講，他希望能改變人們對這種鮮為人知的藝術形式的看法。\n聖騎士的藝術作品主要是政治性的。他喜歡將媒體對戰爭的描述與衝突對現實生活的影響進行比較。他最著名的作品是《無糖的意志》，展示了數百萬電視觀眾目不轉睛地盯著螢幕上英俊的演員。這件作品吸引了我們的注意，指出好萊塢演員用政治舞臺來傳播他們個人的觀點。\n那些不喜歡聖騎士藝術作品的人說，與其解決問題，他的塗鴉創造了新的問題。這些人爭辯說，聖騎士鼓勵犯罪，而像他的作品使城市看起來凌亂。然而，支持者指出，他的藝術使社區變得更美麗，用有趣的圖像裝飾它們。此外，他們認為，幾個世紀以來，藝術家們一直使用藝術來傳播政治訊息，所以聖騎士正在做一個藝術家應該做的事。\n無論你的觀點是什麼，都來聽聽Matt對這個話題的看法吧。演講結束時，將有一個供觀眾開放討論的機會，所以你將有機會表達你的想法。希望在那裡見到你！",
        "source": {
          "name": "All in One",
          "unit": "英文第一冊 L09",
          "location": "五、綜合測驗",
          "url": "https://valaivai087-ops.github.io/lifeos-line-apps-20260817/longteng-all-in-one/#L09"
        }
      }
    ]
  }
};
  const esc = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const modes = {patterns:'句型解析',grammar:'習作文法',phrases:'片語測驗',workbook:'習作克漏字',allinone:'All in One 克漏字'};
  const style=document.createElement('style');
  style.textContent=`
    .sp-panel{margin:1.5rem 0 2rem;padding:clamp(1rem,3vw,1.5rem);border:2px solid #326b5b;border-radius:15px;background:#f5faf7;color:#163b32;font-size:1rem;line-height:1.8;scroll-margin-top:130px}
    .sp-panel *{box-sizing:border-box}
    .sp-panel h3{font-size:1.5rem;margin:.2rem 0;color:#164f40}
    .sp-panel h4{font-size:1.12rem;margin:.7rem 0;color:#164f40}
    .sp-tabs{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0}
    .sp-panel button{font:inherit;font-size:1rem;min-height:44px;padding:.55rem .85rem;border:1px solid #386c5b;border-radius:8px;background:#fff;color:#164f40;cursor:pointer}
    .sp-panel button:hover{background:#e7f2eb}
    .sp-panel button[aria-pressed=true]{background:#1b5847;color:#fff}
    .sp-panel button:disabled{cursor:default;opacity:.75}
    .sp-panel button:focus-visible,.sp-panel select:focus-visible,.sp-panel summary:focus-visible,.sp-panel a:focus-visible{outline:3px solid #d27a12;outline-offset:3px}
    .sp-stage{background:#fff;padding:1rem;border-radius:10px;border:1px solid #c0d3ca}
    .sp-panel details{border:1px solid #b7d0c2;border-radius:8px;margin:.8rem 0;background:#fff}
    .sp-panel summary{padding:.7rem .9rem;font-weight:bold;cursor:pointer}
    .sp-detail{padding:0 1rem 1rem}
    .sp-panel p{margin:.5rem 0 .9rem}
    .sp-panel a{color:#155a78;text-decoration:underline;text-underline-offset:3px}
    .sp-formula{background:#edf4f0;padding:.7rem .9rem;border-radius:6px;font-weight:600}
    .sp-chunks{display:flex;flex-wrap:wrap;gap:.65rem;margin:1rem 0}
    .sp-chunks div{flex:1 1 180px;padding:.7rem;border:1px solid #6c927e;border-radius:7px;background:#f1f7f3}
    .sp-chunks strong{display:block;font-size:1.12rem;margin-top:.3rem}
    .sp-source{border-left:3px solid #9dbdad;padding-left:.8rem;font-size:1rem}
    .sp-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:.6rem;margin:1rem 0}
    .sp-options button{text-align:left;overflow-wrap:anywhere}
    .sp-options .sp-right{border:3px solid #287047;background:#e8f6eb}
    .sp-options .sp-wrong{border:3px solid #a74236;background:#fff0eb}
    .sp-feedback{padding:1rem;border:1px solid #69997e;background:#f0f8ef;border-radius:7px;margin:.8rem 0}
    .sp-feedback h4{margin-top:0}
    .sp-toolbar{display:flex;gap:1rem;align-items:center;flex-wrap:wrap;margin:.7rem 0}
    .sp-toolbar select{font:inherit;font-size:1rem;max-width:100%;padding:.5rem;border:1px solid #6c927e;border-radius:6px}
    .sp-nav{display:flex;gap:.7rem;justify-content:space-between;flex-wrap:wrap;margin-top:1rem}
    .sp-question{font-size:1.18rem;line-height:1.8;overflow-wrap:anywhere}
    .sp-passage{background:#f8faf9;border-left:4px solid #47775e;padding:1rem;margin:1rem 0;font-size:1.1rem;line-height:1.95;overflow-wrap:anywhere}
    .sp-passage mark{background:#ffed9b;color:#15382f;padding:.1rem .3rem;border-radius:4px}
    .sp-source-example{padding:.6rem 0;border-bottom:1px solid #d8e5de}
    .sp-note{color:#4a5d54;font-size:.95rem}
    .sp-feedback[hidden]{display:none}
    @media(max-width:500px){.sp-panel{padding:.8rem}.sp-stage{padding:.8rem}.sp-options{grid-template-columns:1fr}}
  `;
  document.head.append(style);
  function sourceLink(source){
    return `<a href="${esc(source.url)}" target="_blank" rel="noopener">${esc(source.name)} · ${esc(source.unit)}</a><br><span>${esc(source.location)}</span>`;
  }
  for(const [lessonId,lesson] of Object.entries(content)){
    const section=document.getElementById(lessonId);
    if(!section||section.querySelector('.sp-panel'))continue;
    const root=document.createElement('div');
    root.className='sp-panel';
    root.id='source-practice-'+lessonId;
    root.innerHTML=`<h3>習作 × All in One 練習室</h3>
      <p>先看句型，再做文法、片語和克漏字。題目來源與新編題分別標示，作答後可查看答案與解析。</p>
      <div class="sp-tabs" role="group" aria-label="${esc(lessonId)} 教材練習模式">${Object.entries(modes).map(([id,name])=>`<button type="button" data-sp-mode="${id}" aria-pressed="${id==='patterns'}">${name}</button>`).join('')}</div>
      <div class="sp-stage"></div>`;
    const foundation=section.querySelector('.gf-school');
    if(foundation)foundation.after(root);
    else (section.querySelector('h2')||section).after(root);
    const state={mode:'patterns',indices:{},answers:{}};
    const stage=root.querySelector('.sp-stage');
    function activeCloze(){return lesson.cloze[state.mode==='workbook'?0:1]}
    function questions(){return state.mode==='grammar'?lesson.grammar:state.mode==='phrases'?lesson.phrases:activeCloze().questions}
    function patterns(){
      stage.innerHTML=`<p>兩個核心句型對照兩個教材入口。結構小句為教學新編，來源例句另外列出。</p>${lesson.patterns.map((card,i)=>`<details ${i===0?'open':''}>
        <summary>${esc(card.name)}</summary><div class="sp-detail">
          <p>${esc(card.explain)}</p><div class="sp-formula">${esc(card.formula)}</div>
          <div class="sp-chunks" aria-label="簡單例句的前後兩塊">${card.diagram.map((text,n)=>`<div><span>${n===0?'先讀前半句':'接上後半句'}</span><strong lang="en">${esc(text)}</strong></div>`).join('')}</div>
          <p><b>拆解提醒</b><br>${esc(card.trap)}</p>
          ${card.sources.map(source=>`<div class="sp-source-example"><p class="sp-source">${sourceLink(source)}</p>
            <p lang="en">${esc(source.example)}</p><p>${esc(source.explanation)}</p></div>`).join('')}
          <p><a href="#gf-school-${lessonId}">回到本課文法小學堂看結構圖</a></p>
        </div></details>`).join('')}`;
    }
    function exercise(){
      const qs=questions(), index=state.indices[state.mode]||0, q=qs[index];
      const answer=state.answers[q.id];
      const done=qs.filter(item=>state.answers[item.id]!==undefined).length;
      const correct=qs.filter(item=>state.answers[item.id]===item.answer).length;
      const isCloze=state.mode==='workbook'||state.mode==='allinone';
      const group=isCloze?activeCloze():null;
      const checked=answer!==undefined;
      stage.innerHTML=`<div class="sp-toolbar"><label>跳到題目 <select data-sp-select aria-label="跳到本模式題目">${qs.map((item,i)=>`<option value="${i}" ${i===index?'selected':''}>第 ${isCloze?item.number:i+1} 題${state.answers[item.id]===undefined?'':' · 已作答'}</option>`).join('')}</select></label>
        <span role="status">本組已答 ${done}/${qs.length} 題，答對 ${correct} 題</span></div>
        <p class="sp-note">${esc(isCloze?'入口原題整理':q.kind)} · 紀錄保留在本次頁面，重新整理會清除。</p>
        ${isCloze?`<details open><summary>${esc(group.label)}文章 · 目前第 ${q.number} 空</summary>
          <div class="sp-detail"><p class="sp-source">${sourceLink(group.source)}</p>
          <p class="sp-note">同一題號出現兩格時，依該題的成組選項一起作答。</p>
          <div class="sp-passage" lang="en">${group.paragraphs.map(t=>'<p>'+esc(t).replace(new RegExp('【'+q.number+'】','g'),'<mark>【'+q.number+'】</mark>')+'</p>').join('')}</div></div></details>`:''}
        <p class="sp-question" lang="en">${isCloze?'第 '+q.number+' 空，請選最適合的答案。':esc(q.prompt)}</p>
        ${q.options.length===2?'<p class="sp-note">來源入口此題可讀版本只有 A、B 兩個選項，本練習保留兩選項。</p>':''}
        <div class="sp-options">${q.options.map((text,i)=>`<button type="button" data-sp-answer="${i}" ${checked?'disabled':''} class="${checked&&i===q.answer?'sp-right':checked&&i===answer?'sp-wrong':''}">
          <span lang="en">(${String.fromCharCode(65+i)}) ${esc(text)}</span>${checked&&i===q.answer?' · 正解':checked&&i===answer?' · 你的答案':''}</button>`).join('')}</div>
        <div class="sp-feedback" role="status" aria-live="polite" ${checked?'':'hidden'}>
          ${checked?`<h4>${answer===q.answer?'答對了':'這題再看一下'}</h4>
            <p><b>正解 (${String.fromCharCode(65+q.answer)}) ${esc(q.options[q.answer])}</b></p>
            <p>${esc(q.why)}</p>${q.zh?'<p>句意　'+esc(q.zh)+'</p>':''}
            <p class="sp-source">${sourceLink(q.source)}</p>`:''}
        </div>
        <div class="sp-nav"><button type="button" data-sp-move="-1" ${index===0?'disabled':''}>上一題</button>
          <span>第 ${index+1} 題／共 ${qs.length} 題</span>
          <button type="button" data-sp-move="1" ${index===qs.length-1?'disabled':''}>下一題</button></div>
        ${done===qs.length?`<p>本組完成，答對 ${correct}/${qs.length} 題。</p><button type="button" data-sp-reset>本組重新練習</button>`:''}
        ${isCloze&&done===qs.length?`<details><summary>整篇中譯</summary><div class="sp-detail">${group.translation.split('\n').map(t=>'<p>'+esc(t)+'</p>').join('')}</div></details>`:''}`;
    }
    function render(){
      root.querySelectorAll('[data-sp-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.spMode===state.mode)));
      if(state.mode==='patterns')patterns();else exercise();
    }
    root.addEventListener('click',event=>{
      const mode=event.target.closest('[data-sp-mode]');
      if(mode){state.mode=mode.dataset.spMode;render();return}
      const answer=event.target.closest('[data-sp-answer]');
      if(answer){
        const q=questions()[state.indices[state.mode]||0];
        if(state.answers[q.id]!==undefined)return;
        const i=Number(answer.dataset.spAnswer);
        if(!Number.isInteger(i)||i<0||i>=q.options.length)return;
        state.answers[q.id]=i;
        const focusIndex=i;
        render();
        stage.querySelector(`[data-sp-answer="${focusIndex}"]`)?.focus({preventScroll:true});
        return;
      }
      const move=event.target.closest('[data-sp-move]');
      if(move){const next=(state.indices[state.mode]||0)+Number(move.dataset.spMove);
        if(next>=0&&next<questions().length){state.indices[state.mode]=next;render()}return}
      if(event.target.closest('[data-sp-reset]')){
        questions().forEach(q=>delete state.answers[q.id]);state.indices[state.mode]=0;render();
      }
    });
    root.addEventListener('change',event=>{
      if(event.target.matches('[data-sp-select]')){
        const n=Number(event.target.value);
        if(Number.isInteger(n)&&n>=0&&n<questions().length){state.indices[state.mode]=n;render()}
      }
    });
    render();
  }
})();
