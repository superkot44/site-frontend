const urlParams = new URLSearchParams(window.location.search)
const topic = urlParams.get('data');
console.log(topic);

const rus_questions = [
    {
        "question": "Укажите пример с ошибкой в образовании формы слова.",
        "optionA": "Мокла под дождем",
        "optionB": "Косвенных падежов",
        "optionC": "Чудеснейшим образом",
        "optionD": "Здоровые дёсны",
        "correctOption": "optionB"
    },
    {
        "question": "Укажите пример с ошибкой в образовании формы слова.",
        "optionA": "Лягте на пол",
        "optionB": "Самый красивейший",
        "optionC": "Пара носков",
        "optionD": "Пятисот лет",
        "correctOption": "optionB"
    },
    {
        "question": "Укажите пример с ошибкой в образовании формы слова.",
        "optionA": "Больше шестиста рублей",
        "optionB": "Нет мест",
        "optionC": "Проиграв вступление",
        "optionD": "В двухстах метрах",
        "correctOption": "optionA"
    },
    {
        "question": "В каком варианте ответа правильно указаны все цифры, на месте которых в предложении должны стоять запятые? Лес к реке подвозили по ночам (1) и (2) когда белый туман закутывал берега (3) все  восемь рот настилали доски (4) на обломки мостов.",
        "optionA": "1,3,4",
        "optionB": "1,4",
        "optionC": "2,3",
        "optionD": "1,2,3",
        "correctOption": "optionD"
    },
    {
        "question": "В каком варианте ответа правильно указаны все цифры, на месте которых в предложении должны стоять запятые? \nВыяснилось (1) что рукопись окончательно ещё не отредактирована (2) и что (3) пока не будет проведена дополнительная работа (4) сдавать её в типографию нельзя.",
        "optionA": "1",
        "optionB": "2,3",
        "optionC": "1,3,4",
        "optionD": "1,2,3,4",
        "correctOption": "optionC"
    },
    {
        "question": "Найдите предложение с однородными членами:",
        "optionA": "Море ловит стрелы молний и в своей пучине гасит.",
        "optionB": "Луна была за тучками, и сугробы казались синими.",
        "optionC": "С утра шел дождь и небо было затянуто тучами.",
        "correctOption": "optionA"
    },
    {
        "question": "”Нигде не было видно ни воды, ни деревьев.” Это предложение осложнено однородными…:",
        "optionA": "Сказуемыми",
        "optionB": "Подлежащими",
        "optionC": "Дополнениями",
        "optionD": "Определениями",
        "correctOption": "optionC"
    },
    {
        "question": "”Что-то слышится родное в долгих песнях ямщика: то раздолье удалое, то сердечная тоска”. Обобщающим в этом предложении является слово…:",
        "optionA": "Тоска",
        "optionB": "Что-то",
        "optionC": "Ямщика",
        "optionD": "В песнях",
        "correctOption": "optionB"
    },
    {
        "question": "Укажите верное утверждение:",
        "optionA": "Несобственно-прямая речь - то же самое, что косвенная.",
        "optionB": "Несобственно-прямая речь способна передавать лексические, синтаксические, стилистические особенности речи персонажа, а также степень её экспрессивности.",
        "optionC": "Для оформления несобственно-прямой речи используются кавычки.",
        "correctOption": "optionB"
    },
    {
        "question": "Что такое пунктуационный анализ?",
        "optionA": "Анализ синтаксических конструкций",
        "optionB": "Анализ знаков препинания",
        "optionC": "Анализ честей речи",
        "optionD": "Анализ морфем",
        "correctOption": "optionB"
    },
    {
        "question": "Расставьте знаки препинания. Укажите предложения, в которых нужно поставить ОДНУ запятую. Запишите номера этих предложений.",
        "optionA": "Герой романа любил путешествия и приключения и в то же время стремился к комфорту и семейному уюту.",
        "optionB": "Очень многие акварели или не имели авторов или приписывались тем или иным декабристам предположительно.",
        "optionC": "Жаргонные слова выпадают и из традиции и из сферы разумного словоупотребления и из единообразия речи.",
        "optionD": "В силу стечения обстоятельств после революции Куприн оказался в эмиграции и почти двадцать лет страстно стремился вернуться в Россию.",
        "correctOption": "optionB"
    },
    {
        "question": "В одном из выделенных ниже слов допущена ошибка в образовании формы слова. Исправьте ошибку и запишите слово правильно.",
        "optionA": "пара ТУФЕЛЬ",
        "optionB": "ЛЯГТЕ на коврик",
        "optionC": "ЛОПНУТЫЕ пружины",
        "optionD": "ШЕСТЬЮСТАМИ листами",
        "correctOption": "optionD"
    },
    {
        "question": "Расставьте все знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nХлопья снега (1) по словам горожан (2) были такие большие, что (3) казалось (4) будто (5) с неба слетают на город мягкие белые розы.",
        "optionA": "1,2",
        "optionB": "1,4",
        "optionC": "2,3",
        "optionD": "1,2,4",
        "correctOption": "optionD"
    },
    {
        "question": "Расставьте все знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nОн хотел уверить себя (1) что никакой опасности нет (2) и что верховые по дороге просто померещились мальчику от страха (3) и (4) хотя ему удавалось на короткие минуты обмануть ум ребёнка (5) но в глубине души он ясно чувствовал приближение неотвратимой трагедии.",
        "optionA": "1,3,5",
        "optionB": "1,4,5",
        "optionC": "4,5",
        "optionD": "1,3",
        "correctOption": "optionA"
    },
    {
        "question": "Укажите варианты ответов, в которых в обоих словах одного ряда пропущена одна и та же буква. Запишите номера ответов.",
        "optionA": "претерп..вая, вывеш..вать",
        "optionB": "кокетл..во, молод..нький",
        "optionC": "ноздр..ватый, ослаб..вать",
        "optionD": "сл..дковатый, (сдвинуть) вправ..",
        "correctOption": "optionC"
    },
    {
        "question": "Укажите варианты ответов, в которых во всех словах одного ряда пропущена одна и та же буква. Запишите номера ответов.",
        "optionA": "без..сходный, пред..дущий, об..скать (весь дом)",
        "optionB": "пред..явитель, бил..ярд, ад..ютант",
        "optionC": "на..кусить, по..караулить, о..бросить",
        "optionD": "пр..увеличивать, беспр..дел, гостепр..имный",
        "correctOption": "optionA"
    },
    {
        "question": "Расставьте знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nУ крыльца стояла (1) обтянутая железом и кожей (2) тележка с сытой лошадью (3) туго запряжённою широкими гужами.",
        "optionA": "1",
        "optionB": "2",
        "optionC": "3",
        "correctOption": "optionC"
    },
    {
        "question": "Расставьте знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nОглянув жену и Вронского (1) Каренин подошёл к хозяйке (2) и (3) усевшись за чашкой чая, стал говорить в своём обычном шуточном тоне (5) подтрунивая над кем-то.",
        "optionA": "1",
        "optionB": "2",
        "optionC": "3",
        "correctOption": "optionA"
    },
    {
        "question": "Расставьте знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nМатвей (1) медленно (2) ступая (3) поскрипывающими сапогами по мягкому ковру, вернулся в комнату.",
        "optionA": "1",
        "optionB": "2",
        "optionC": "3",
        "correctOption": "optionA"
    },
    {
        "question": "Каких средств выразительности не существует?",
        "optionA": "Фонетические",
        "optionB": "Лексические",
        "optionC": "Фразеологические",
        "optionD": "Синтаксические",
        "correctOption": "optionC"
    },
    {
        "question": "Что не обозначает числительное?",
        "optionA": "Число",
        "optionB": "Порядок при счёте",
        "optionC": "Время",
        "optionD": "Количество",
        "correctOption": "optionC"
    },
    {
        "question": "Что такое пунктуационный анализ?",
        "optionA": "Анализ синтаксических конструкций",
        "optionB": "Анализ знаков препинания",
        "optionC": "Анализ частей речи",
        "optionD": "Анализ морфем",
        "correctOption": "optionB"
    },
    {
        "question": "В чем разница между сложным предложением и простым осложненным?",
        "optionA": "Разницы нет",
        "optionB": "В количестве грамматических основ",
        "optionC": "В состав сложного входят вводные слова, в состав простого осложненного - обращения",
        "optionD": "Они отличаются количеством слов",
        "correctOption": "optionB"
    },
    {
        "question": "Укажите характеристики, которые присущи всем подстилям научного стиля:",
        "optionA": "Упрощенность изложения",
        "optionB": "Логичность",
        "optionC": "Риторика",
        "correctOption": "optionB"
    },
    {
        "question": "Расставьте знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должна(-ы) стоять запятая(-ые). \nНаутро поднявшееся яркое солнце быстро съело тонкий ледок (1) подёрнувший воды (2) и весь тёплый воздух задрожал (3) от наполнивших его испарений ожившей земли.",
        "optionA": "1",
        "optionB": "2",
        "optionC": "3",
        "correctOption": "optionB"
    },
    {
        "question": "Самостоятельно подберите определительное местоимение, которое должно стоять на месте пропуска во втором предложении текста. Запишите это местоимение. \nЧто такое Кижи? \nДве многоглавые церкви, отделенные одна от […] колокольней. Все из дерева. Двадцать две главы Преображенского собора. \nЗдесь, берега во тьме раскинув, \nСпит озеро, глаза смежив. \nНапевною загадкой линий, \nКак чудо светлое России, \nВ Онеге плавают Кижи.",
        "optionA": "Другой",
        "optionB": "Той",
        "optionC": "Этой",
        "correctOption": "optionA"
    },
    {
        "question": "Укажите варианты ответов, в которых верно выделена буква, обозначающая ударный гласный звук. Запишите номера ответов.",
        "optionA": "поднЯв",
        "optionB": "укрЕпит",
        "optionC": "пОдленный",
        "optionD": "убрАла",
        "correctOption": "optionA"
    },
    {
        "question": "Расставьте все недостающие знаки препинания: укажите цифру(-ы), на месте которой(-ых) в предложении должны стоять запятая(-ые). \nТучки небесные(1) вечные странники! \nСтепью лазурною, цепью жемчужною \nМчитесь(2) вы, будто(3) как я же, изгнанники, \nС милого севера в сторону южную. \n\nКто же (4)вас гонит: судьбы ли решение? \nЗависть ли тайная? злоба ль открытая? \nИли на вас тяготит преступление? \nИли друзей(5) клевета ядовитая? \n\nНет, вам наскучили нивы бесплодные... \nЧужды вам (6)страсти и чужды страдания; \nВечно холодные, вечно свободные, \nНет у вас родины, нет вам изгнания.",
        "optionA": "1,2",
        "optionB": "1,5,6",
        "optionC": "1",
        "optionD": "2,4",
        "correctOption": "optionC"
    },
    {
        "question": "Отредактируйте предложение: исправьте лексическую ошибку, заменив неверно употреблённое слово. Выберите подобранное слово, соблюдая нормы современного русского литературного языка. \nСроки сдачи военного объекта нарушены,\n потому что многие агрегаты для комплекса импортировались из-за рубежа,\n а в связи с санкциями срочно пришлось решать проблему импортозамещения.",
        "optionA": "Ввозились",
        "optionB": "Завозились",
        "optionC": "Поставляли",
        "correctOption": "optionA"
    },
    {
        "question": "В одном из выделенных ниже слов допущена ошибка в образовании формы слова. Исправьте ошибку и запишите слово правильно.",
        "optionA": "среди известных ГРУЗИН",
        "optionB": "ЛЯГТЕ на диван",
        "optionC": "ИХ дети",
        "optionD": "пять БЛЮДЦЕВ",
        "correctOption": "optionD"
    },
    {
        "question": "Замените словосочетание «деревянная шкатулка», построенное на основе согласования, синонимичным словосочетанием со связью управление.",
        "optionA": "деревянный ящик",
        "optionB": "шкатулка из дерева",
        "optionC": "оба варианта правильные",
        "correctOption": "optionB"
    },
    {
        "question": "Выпишите грамматическую основу предложения: Что вам надо?",
        "optionA": "вам",
        "optionB": "надо",
        "optionC": "что надо",
        "correctOption": "optionC"
    },
    {
        "question": "Выпишите грамматическую основу предложения: Откуда — то сверху, как неожиданный дождь, падают свистящие звуки реактивного самолета и сразу же стихают, удаляясь вслед за самолетом.",
        "optionA": "самолёта",
        "optionB": "звуки падают стихают",
        "optionC": "неожиданный",
        "correctOption": "optionB"
    },
    {
        "question": "В каком слове правописание суффикса является исключением из правила:",
        "optionA": "деревянная",
        "optionB": "направленный",
        "optionC": "кожаном",
        "correctOption": "optionA"
    },
    {
        "question": "В каком слове правописание суффикса определяется правилом: «Два Н пишется в прилагательных, образованных с помощью суффикса -Н- от существительных с основой на -Н-«:",
        "optionA": "медленная",
        "optionB": "каменных",
        "optionC": "неуверенно",
        "correctOption": "optionB"
    },
    {
        "question": "Что такое сложное предложение?",
        "optionA": "Это предложение, в котором есть два или более подлежащих",
        "optionB": "Это предложение, в котором есть два или более сказуемых",
        "optionC": "Это предложение, в котором есть главные и второстепенные члены предложения",
        "optionD": "Это, предложение, в котором есть две или более грамматические основы",
        "correctOption": "optionD"
    },
    {
        "question": "При помощи чего связываются простые предложения, находящиеся в составе сложносочинённого предложения? ",
        "optionA": "Предлогов",
        "optionB": "Частиц",
        "optionC": "Союзов",
        "optionD": "Знаков препинания",
        "correctOption": "optionC"
    },
    {
        "question": "На какие виды делятся предложения в зависимости от средств связи?",
        "optionA": "На союзные и бессоюзные",
        "optionB": "На сложносочинённые и сложноподчинённые",
        "optionC": "На распространённые и нераспространённые",
        "optionD": "На восклицательные и невосклицательные",
        "correctOption": "optionA"
    },
    {
        "question": "Какие союзы бывают в сложносочинённых предложениях?",
        "optionA": "медленная",
        "optionB": "Согласованные, подчинительные, разделительные",
        "optionC": "Соединительные, противительные, разделительные",
        "optionD": "Согласованные, противительные, разделительные",
        "correctOption": "optionC"
    },
    {
        "question": "Какое предложение относится к сложносочинённым с разделительным союзом?",
        "optionA": "Товарищи относились к нему неприязненно, солдаты же любили воистину",
        "optionB": "Либо я всё устрою по-прежнему, либо я его на дуэль вызову",
        "optionC": "Горячее лицо с тоской искало ветра, да ветра-то не было",
        "optionD": "Много труда предстоит ему, но зато зимой он отдохнёт",
        "correctOption": "optionB"
    }
]

const litra_questions = [
    {
        "question": "Литературу какого периода принято называть «Серебряным веком»?",
        "optionA": "Конец XVIII – начало XIX века",
        "optionB": "Конец XIX – начало XX века",
        "optionC": "Весь XX век",
        "optionD": "Конец XX – начало XXI века",
        "correctOption": "optionB"
    },
    {
        "question": "Зачем ехал господин из Сан-Франциско с женой и дочерью в Старый Свет на два года в рассказе И.А. Бунина?",
        "optionA": "Получил новую должность",
        "optionB": "Ради развлечения",
        "optionC": "Изменилось место службы",
        "optionD": "Проведать родственников",
        "correctOption": "optionB"
    },
    {
        "question": "Сколько было лет господину из Сан-Франциско в рассказе И.А. Бунина?",
        "optionA": "37 лет",
        "optionB": "46 лет",
        "optionC": "51 год",
        "optionD": "58 лет",
        "correctOption": "optionD"
    },
    {
        "question": "Как назывался пароход, на котором путешествовал господин из Сан-Франциско в рассказе И.А. Бунина?",
        "optionA": "«Атлантида»",
        "optionB": "«Титаник»",
        "optionC": "«Аврора»",
        "optionD": "«Ставрида»",
        "correctOption": "optionA"
    },
    {
        "question": "Где умер господин из Сан-Франциско?",
        "optionA": "В Неаполе",
        "optionB": "На острове Капри",
        "optionC": "В Сан-Франциско",
        "optionD": "В Риме",
        "correctOption": "optionB"
    },
    {
        "question": "Куда ходил каждый вечер зимой 1912 года рассказчик в рассказе И.А. Бунина «Чистый понедельник»?",
        "optionA": "В церковь",
        "optionB": "В библиотеку",
        "optionC": "К возлюбленной",
        "optionD": "На кладбище",
        "correctOption": "optionC"
    },
    {
        "question": "В чём заключалась единственная настоящая слабость возлюбленной рассказчика в рассказе И.А. Бунина «Чистый понедельник»?",
        "optionA": "Красивые букеты цветов",
        "optionB": "Дорогие рестораны",
        "optionC": "Красивые картины",
        "optionD": "Дорогая одежда",
        "correctOption": "optionD"
    },
    {
        "question": "Какая характеристика подходит возлюбленной рассказчика в рассказе И.А. Бунина «Чистый понедельник»?",
        "optionA": "Сдержанная и молчаливая",
        "optionB": "Весёлая и разговорчивая",
        "optionC": "Вспыльчивая и разговорчивая",
        "optionD": "Добрая и весёлая",
        "correctOption": "optionA"
    },
    {
        "question": "Какое развлечение было у главного героя повести И.А. Куприна «Олеся» в глухой деревушке, куда его забросила судьба?",
        "optionA": "Рыбалка",
        "optionB": "Охота",
        "optionC": "Книги",
        "optionD": "Рисование",
        "correctOption": "optionB"
    },
    {
        "question": "Кем была Олеся из повести И.А. Куприна?",
        "optionA": "Дочкой старосты",
        "optionB": "Дочкой кузнеца",
        "optionC": "Внучкой пономаря",
        "optionD": "Внучкой ведьмы",
        "correctOption": "optionD"
    },
    {
        "question": "Что ждало трефовую даму в гадании Олеси в повести И.А. Куприна?",
        "optionA": "Большая любовь",
        "optionB": "Смерть",
        "optionC": "Позор",
        "optionD": "Болезнь",
        "correctOption": "optionC"
    },
    {
        "question": "Как доказывает Олеся Ивану, что у неё есть настоящий дар колдовства?",
        "optionA": "Заживляет глубокий порез",
        "optionB": "Взлетает над землёй",
        "optionC": "Читает его мысли",
        "optionD": "Поднимает предмет в воздух силой мысли",
        "correctOption": "optionA"
    },
    {
        "question": "Что жители Переброда посчитали местью Олеси в повети И.А. Бунина?",
        "optionA": "Весь урожай сгнил",
        "optionB": "Заболел весь домашний скот",
        "optionC": "Высохло озеро",
        "optionD": "Град побил урожай",
        "correctOption": "optionD"
    },
    {
        "question": "Что осталось Ивану на память об Олесе в повести И.А. Бунина?",
        "optionA": "Вышитый платок",
        "optionB": "Брошка с изумрудом",
        "optionC": "Красные бусы",
        "optionD": "Деревянный гребень",
        "correctOption": "optionC"
    },
    {
        "question": "Чего хотела Шурочка из повести И.А. Бунина «Поединок»?",
        "optionA": "Выйти замуж",
        "optionB": "Уехать из глуши",
        "optionC": "Получить образование",
        "optionD": "Разбогатеть",
        "correctOption": "optionB"
    },
    {
        "question": "За что мстила Раиса Петерсон Ромашову в повести И.А. Бунина «Поединок»?",
        "optionA": "За то, что он убил её мужа",
        "optionB": "За то, что он бросил её",
        "optionC": "За то, что он не женился на ней",
        "optionD": "За то, что он изменил ей с её сестрой",
        "correctOption": "optionB"
    },
    {
        "question": "Из-за чего был назначена дуэль между Николаевым и Ромашовым в повести И.А. Бунина «Поединок»?",
        "optionA": "Николаев увёл возлюбленную Ромашова",
        "optionB": "Ромашов подставил Николаева на службе",
        "optionC": "Ромашов и Николаев поссорились из-за пустяка",
        "optionD": "У Ромашова была связь с женой Николаева",
        "correctOption": "optionA"
    },
    {
        "question": "Чем закончилась дуэль между Николаевым и Ромашовым в повести И.А. Бунина «Поединок»?",
        "optionA": "Ничьей",
        "optionB": "Ромашов умер от ранения в живот",
        "optionC": "Николаев умер от ранения в живот",
        "optionD": "Ромашов был ранен в живот, но выжил",
        "correctOption": "optionB"
    },
    {
        "question": "Что за зелёный камушек был на гранатовом браслете, который подарил Вере неизвестный в повести И.А. Бунина «Гранатовый браслет»?",
        "optionA": "Изумруд",
        "optionB": "Малахит",
        "optionC": "Топаз",
        "optionD": "Гранат",
        "correctOption": "optionD"
    },
    {
        "question": "Из-за чего Желтков вынужден бежать из города в повести И.А. Бунина «Гранатовый браслет»?",
        "optionA": "Он убил человека",
        "optionB": "Растратил казённые деньги",
        "optionC": "Украл бриллиантовое колье",
        "optionD": "Проигрался в карты",
        "correctOption": "optionB"
    },
    {
        "question": "Чем закончилась история Желткова из повести И.А. Бунина «Гранатовый браслет»?",
        "optionA": "Он сбежал заграницу",
        "optionB": "Женился на другой женщине",
        "optionC": "До старости преследовал Веру Николаевну",
        "optionD": "Покончил жизнь самоубийством",
        "correctOption": "optionD"
    },
    {
        "question": "При каких обстоятельствах рассказчик встретил старуху в рассказе М. Горького «Старуха Изергиль»?",
        "optionA": "Рассказчик собирал виноград в Бессарабии",
        "optionB": "Рассказчик рыбачил возле городка старухи Изергиль",
        "optionC": "Рассказчик приехал по службе в городок старухи Изергиль",
        "optionD": "Рассказчик встретил старуху Изергиль на параходе",
        "correctOption": "optionA"
    },
    {
        "question": "Куда исчезла девушка на 20 лет из легенды о Ларре в рассказе М. Горького «Старуха Изергиль»?",
        "optionA": "Её похитил дракон",
        "optionB": "Её увёз вождь племени",
        "optionC": "Сбежала от своей семьи",
        "optionD": "Её похитил орёл",
        "correctOption": "optionD"
    },
    {
        "question": "Что означало имя Ларра в рассказе М. Горького «Старуха Изергиль»?",
        "optionA": "Счастливый",
        "optionB": "Гордый",
        "optionC": "Отверженный",
        "optionD": "Непобедимый",
        "correctOption": "optionC"
    },
    {
        "question": "Что должно было стать самой страшной карой для Ларры, по мнению старейшин племени?",
        "optionA": "Болезнь",
        "optionB": "Одиночество",
        "optionC": "Предательство",
        "optionD": "Измена",
        "correctOption": "optionB"
    },
    {
        "question": "В чём заключалось отличие Ларры от других людей?",
        "optionA": "Он не мог умереть",
        "optionB": "Он умел летать",
        "optionC": "Он умел читать мысли",
        "optionD": "Он всем нравился",
        "correctOption": "optionA"
    },
    {
        "question": "Откуда родом была старуха Изергиль?",
        "optionA": "Из Турции",
        "optionB": "Из Польши",
        "optionC": "Из Испании",
        "optionD": "Из Румынии",
        "correctOption": "optionD"
    },
    {
        "question": "Что пообещал Данко сделать для своего племени в рассказе М. Горького «Старуха Изергиль»?",
        "optionA": "Вывести их из леса",
        "optionB": "Завоевать новые земли",
        "optionC": "Добыть огонь",
        "optionD": "Вырастить пшеницу",
        "correctOption": "optionA"
    },
    {
        "question": "Чем являются голубые искры, появляющиеся в степи перед грозой в легенде о Данко?",
        "optionA": "Его душой",
        "optionB": "Волшебными цветами",
        "optionC": "Дыханием Данко",
        "optionD": "Остатки сердца",
        "correctOption": "optionD"
    },
    {
        "question": "Кем была Квашня из пьесы М. Горького «На дне»?",
        "optionA": "Актрисой",
        "optionB": "Трактирщицей",
        "optionC": "Торговкой пельменями",
        "optionD": "Прачкой",
        "correctOption": "optionC"
    },
    {
        "question": "На ком мечтал жениться Пепел в пьесе М. Горького «На дне»?",
        "optionA": "На Анне",
        "optionB": "На Василисе",
        "optionC": "На Наташе",
        "optionD": "На Вере",
        "correctOption": "optionC"
    },
    {
        "question": "Какой новый постоялец появился в ночлежке в пьесе М. Горького «На дне»?",
        "optionA": "Алёша сапожник",
        "optionB": "Проповедник Лука",
        "optionC": "Полицейский Медведев",
        "optionD": "Слесарь Клещ",
        "correctOption": "optionB"
    },
    {
        "question": "Выберите правильное утверждение:",
        "optionA": "Акмеизм – это это одно из крупнейших течений в литературе (а также искусстве, живописи, музыке), характеризующееся экспериментаторством, новаторством посредством использования приемов недосказанности, тайны, загадочности.",
        "optionB": "Акмеизм – это модернистское течение в русской поэзии начала XX в., провозглашавшее материальность, предметность тематики и образов, точность слова.",
        "optionC": "Акмеизм – это направление в литературе и искусстве, ставящее целью правдивое воспроизведение действительности в её типичных чертах.",
        "optionD": "Акмеизм – это это направление в искусстве и литературе, которое характеризуется утверждением ценности духовной и творческой жизни личности, изображением сильных характеров и страстей, зачастую бунтарских, а также воспеванием целительной и одухотворенной природы.",
        "correctOption": "optionB"
    },
    {
        "question": "Какому литературному течению противостоял акмеизм?",
        "optionA": "Романтизму",
        "optionB": "Классицизму",
        "optionC": "Реализму",
        "optionD": "Символизму",
        "correctOption": "optionD"
    },
    {
        "question": "Как назывался кружок поэтов, созданный в 1911 году и стремившийся создать новое направление в литературе?",
        "optionA": "«Цех поэтов»",
        "optionB": "«Литературная компания»",
        "optionC": "«Гости России»",
        "optionD": "«Поэтическое наследие»",
        "correctOption": "optionA"
    },
    {
        "question": " Как Онегин узнает о любви Татьяны:",
        "optionA": "из письма Ольги",
        "optionB": "ему рассказал Ленский",
        "optionC": "из письма Татьяны",
        "correctOption": "optionC"
    },
    {
        "question": "Кому посвятил Лермонтов стихотворение «Смерть Поэта»:",
        "optionA": "Чадаеву",
        "optionB": "Пушкину",
        "optionC": "Державину",
        "correctOption": "optionB"
    },
    {
        "question": "«Слово о полку Игореве»:",
        "optionA": "название летописи",
        "optionB": "фольклорное произведение",
        "optionC": "литературное произведение особого жанра",
        "correctOption": "optionA"
    },
    {
        "question": "Чем заканчивается «Горе от ума»:",
        "optionA": "смертью героя",
        "optionB": "свадьбой героев",
        "optionC": "отъездом героя",
        "correctOption": "optionC"
    },
    {
        "question": "О каком памятнике говорит Пушкин в одноименном стихотворении:",
        "optionA": "о своем литературном наследии",
        "optionB": "о памятнике Петру Первому",
        "optionC": "о памятнике Державину",
        "correctOption": "optionC"
    }
]

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

function updateCookie(cookieName, newValue) {
    document.cookie = cookieName + "=" + newValue + "; path=/;";
}

let shuffledQuestions = []

function handleQuestions() { 
    if (topic == "rus") {
        while (shuffledQuestions.length <= 9) {
            const random = rus_questions[Math.floor(Math.random() * rus_questions.length)]
            if (!shuffledQuestions.includes(random)) {
                shuffledQuestions.push(random)
            }
        }
    }
    else if (topic == "litra") {
        while (shuffledQuestions.length <= 9) {
            const random = litra_questions[Math.floor(Math.random() * litra_questions.length)]
            if (!shuffledQuestions.includes(random)) {
                shuffledQuestions.push(random)
            }
        }
    }
    
}

let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question.replace(/\n/g, "<br>");

    if (currentQuestion.optionD === undefined) {
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").style.display = "None";
        document.getElementById("option-four-label").parentNode.style.display = "None";
    }
    else {
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    }
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()

    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function calculateGrade(percentage) {
    if (percentage >= 0 && percentage <= 40) {
      return 2;
    } else if (percentage >= 41 && percentage <= 60) {
      return 3;
    } else if (percentage >= 61 && percentage <= 80) {
      return 4;
    } else if (percentage >= 81 && percentage <= 100) {
      return 5;
    } else {
      return "Некорректный процент правильных ответов";
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Плохие оценки, продолжай практиковаться."
        remarkColor = "white"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средние оценки, ты можешь добиться большего."
        remarkColor = "white"
    }
    else if (playerScore >= 7) {
        remark = "Отлично, продолжайте в том же духе."
        remarkColor = "white"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('score').innerHTML = calculateGrade(playerGrade)
    document.getElementById('score-modal').style.display = "flex"

    // Отправка результатов на сервер
    const testData = {
        topic: topic,
        date: new Date().toLocaleString(),
        score: calculateGrade(playerGrade)
    };

    const cookieValue = getCookie('results');

    let result = JSON.parse(cookieValue);
    let _id = getCookie('_id');
            
    result.push(testData);

    console.log({ _id, result });

    fetch('https://kuznetsov.up.railway.app/postresults', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id, result })
    })
    .then(response => {
        if (response.ok) {
            console.log('Результаты отправлены на сервер');
        } else {
            console.error('Ошибка при отправке результатов на сервер');
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке результатов на сервер:', error);
    });

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
