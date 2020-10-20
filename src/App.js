import React, { Component } from 'react';
import './App.css';
import './fonts/Assistant/stylesheet.css';
import './fonts/GveretLevin/stylesheet.css'; 
import Question from './components/question.js';
import Form from './components/form.js';
import Database from './database.js';
import LoadingScreen from './components/loading.js';

class App extends Component {
    state = {
        question: [
            {
                title: 'כמה ימים נמשך חג הסוכות?',
                answers: [
                    '7',
                    '8',
                    '9',
                    '6',
                ],
                rightAnswer: 1,
            },
            {
                title: 'מה הקשר בין שמחת תורה לחג הסוכות?',
                answers: [
                    'בשניהם יש אותן מצוות', 
                    'זה אותו חג',
                    'שמחת תורה מסמל את סוף חג הסוכות',
                    'אין קשר. חג הסוכות הוא חג נפרד משמחרת תורה',
                ],
                rightAnswer: 4,
            },
            {
                title: 'מה מסמלת הסוכה?',
                answers: [
                    'דימוי לבית המקדש',
                    'מסורת יהודית',
                    'את הסוכות שבהן ישבו בני ישראל בצאתם ממצרים',
                    'הריבונות של מדינת ישראל',
                ],
                rightAnswer: 3,
            },
            {
                title: 'מהו המאכל הנהוג בארוחות החג של סוכות?',
                answers: [
                    'תפוח בדבש',
                    'גפילטש פיש',
                    'פירות יבשים',
                    'אין כזה',
                ],
                rightAnswer: 4,
            },
            {
                title: 'אילו מבין הבאים הוא חלק מארבעת המינים?',
                answers: [
                    'תמר',
                    'לולב',
                    'זית',
                    'רימון',
                ],
                rightAnswer: 2,
            },{
                title: 'סוכות והחגים ____ ו ____ הם שלושת הרגלים',
                answers: [
                    'פסח ופורים',
                    'שבועות וט״ו בשבט',
                    'ראש השנה ופסח',
                    'שבועות ופסח',
                ],
                rightAnswer: 4,
            },{
                title: 'מהם ארבעת המינים?',
                answers: [
                    'הדס, ערבה, לולב ואתרוג',
                    'הדס, ערבה, אתרוג וחיטה',
                    'חיטה, תמר, זית והדס',
                    'לולב, אתרוג, זית וערבה',
                ],
                rightAnswer: 1,
            },{
                title: 'חג הסוכות נקרא גם:',
                answers: [
                    'חג האורים',
                    'חג הקציר',
                    'חג המצות',
                    'חג האסיף',
                ],
                rightAnswer: 4,
            },{
                title: 'מה נהוג לעשות עם ארבעת המינים?',
                answers: [
                    'לרקוד איתם',
                    'לנענע אותם',
                    'לאכול אותם',
                    'לתלות אותם בסוכה',
                ],
                rightAnswer: 2,
            },{
                title: 'לאיזה עץ שייך הלולב?',
                answers: [
                    'אלון',
                    'תמר',
                    'אורן',
                    'ברוש',
                ],
                rightAnswer: 2,
            },{
                title: 'על פי מצוות הישיבה בסוכה, כמה אושפיזין חייבים להיות מוזמנים?',
                answers: [
                    '8',
                    '9',
                    '12',
                    '7',
                ],
                rightAnswer: 4,
            },{
                title: 'באיזה שנה התרחש מבצע ״לולב״?',
                answers: [
                    '1956',
                    '1958',
                    '1952',
                    '1950',
                ],
                rightAnswer: 1,
            },{
                title: 'איך נקרא היום האחרון של חג הסוכות?',
                answers: [
                    'אסרו חג',
                    'שמיני עצרת',
                    'שמחת תורה',
                    'הושענא רבה',
                ],
                rightAnswer: 4,
            },{
                title: 'מאיזה חיל היה הכוח שביצע את מבצע ״ערבה״?',
                answers: [
                    'שריון',
                    'תותחנים',
                    'הנדסה קרבית',
                    'חיל האוויר',
                ],
                rightAnswer: 3,
            },{
                title: 'מהי המצווה המאפיינת את שלושת רגלים?',
                answers: [
                    'לעלות לרגל לבית המקדש בירושלים',
                    'להקריב קורבן',
                    'לקרוא בבית הכנסת את מגילת קהלת',
                    'לצום',
                ],
                rightAnswer: 1,
            },{
                title: 'מה מהבאים הוא שם אמיתי של טייסת?',
                answers: [
                    'טייסת עגור הזהב',
                    'טייסת העוף הדורס',
                    'טייסת הנמר המעופף',
                    'טייסת היתוש האדום',
                ],
                rightAnswer: 3,
            },{
                title: 'באיזה שנה הוקם גדוד ״לביאי הבקעה״?',
                answers: [
                    '2016',
                    '2002',
                    '1996',
                    '2007',
                ],
                rightAnswer: 1,
            },{
                title: 'מי היה הרמטכ״ל במהלך מלחמת לבנון השנייה?',
                answers: [
                    'בני גנץ',
                    'גבי אשכנזי',
                    'גדי אייזנקוט',
                    'דן חלוץ',
                ],
                rightAnswer: 4,
            },{
                title: 'איך נקרא מטוס הF-35 בישראל?',
                answers: [
                    'יסעור',
                    'אדיר',
                    'נץ',
                    'ינשוף',
                ],
                rightAnswer: 2,
            },{
                title: 'לאיזו חטיבה שייך גדוד ״עוז״?',
                answers: [
                    'חטיבה 7',
                    'חטיבה 188',
                    'חטיבה 401',
                    'חטיבה 769',
                ],
                rightAnswer: 1,
            },{
                title: 'איפה ממוקם בסיס חיל הים הצפוני ביותר?',
                answers: [
                    'חיפה',
                    'נהריה',
                    'טבריה',
                    'ראש הנקרה',
                ],
                rightAnswer: 4,
            },{
                title: 'לאיזה חיל שייכת יחידת ״רוכב שמיים״?',
                answers: [
                    'חיל הים',
                    'חיל האוויר',
                    'חיל התותחנים',
                    'חיל השריון',
                ],
                rightAnswer: 3,
            },{
                title: 'מתי החלו שידורי גל״צ?',
                answers: [
                    '2001',
                    '1996',
                    '1984',
                    '1950',
                ],
                rightAnswer: 4,
            },{
                title: 'אילו איים נכבשו במלחמת ששת הימים?',
                answers: [
                    'איי קפריסין',
                    'איי מצרי טיראן',
                    'איי יוון',
                    'איי טורקיה',
                ],
                rightAnswer: 2,
            },{
                title: 'לאיזו חטיבה שייך גדוד ״שמשון״?',
                answers: [
                    'גולני',
                    'נח״ל',
                    'גבעתי',
                    'כפיר',
                ],
                rightAnswer: 4,
            },{
                title: 'לאיזה גזע שייכים רוב כלבי יחידת עוקץ?',
                answers: [
                    'רועה גרמני',
                    'לברדור',
                    'רועה בלגי',
                    'פיטבול',
                ],
                rightAnswer: 3,
            },{
                title: 'באיזו שנה התרחש מבצע ״נוף פראי״?',
                answers: [
                    '1968',
                    '1997',
                    '1955',
                    '1989',
                ],
                rightAnswer: 2,
            },{
                title: 'מהי המשמעות של ראשי התיבות אלפ״ה?',
                answers: [
                    'אמצעים לפיתוח האמל״ח',
                    'אמצעים לפיזור המולות',
                    'אמצעים לפיתוח המוני',
                    'אמצעים לפיזור הפגנות',
                ],
                rightAnswer: 4,
            },{
                title: 'מהם ראשי התיבות של בלתי מסווג?',
                answers: [
                    'בלמ״ס',
                    'בל״ס',
                    'בלת״ם',
                    'בלת״ס',
                ],
                rightAnswer: 1,
            },{
                title: 'באיזה תאריך הוקם צה״ל?',
                answers: [
                    '12.05.1948',
                    '23.01.1947',
                    '01.04.1948',
                    '26.05.1948',
                ],
                rightAnswer: 4,
            },{
                title: 'באיזה שנה הוקמה גבעתי מחדש?',
                answers: [
                    '1949',
                    '1996',
                    '1983',
                    '2001',
                ],
                rightAnswer: 3,
            },{
                title: 'גפרור הוא כינוי בשפת הקשר הצבאית ל:',
                answers: [
                    'פצוע',
                    'חייל',
                    'אויב',
                    'מטען',
                ],
                rightAnswer: 2,
            },{
                title: 'המשמעות של ראשי התיבות אבט״ש היא:',
                answers: [
                    'אבטחת טנקים שוטפת',
                    'אבטחת אנשים חשובים',
                    'אבטחת טילי שיוט',
                    'אבטחת יישובים',
                ],
                rightAnswer: 4,
            },{
                title: 'המשמעות של ראשי התיבות כטמ״ם היא: ',
                answers: [
                    'כלי טיס מאובטח',
                    'כלי טיס מאויש מרחוק',
                    'כלי טיס מצליחים',
                    'כיתה טובה מוכשרת ומוצלחת',
                ],
                rightAnswer: 2,
            },{
                title: 'צה״ל נלחם בסוריה, מצרים וירדן במלחמת:',
                answers: [
                    'ששת הימים',
                    'לבנון השנייה',
                    'ההתשה',
                    'יום הכיפורים',
                ],
                rightAnswer: 1,
            },{
                title: 'איזו דרגה מורכבת משני ״סיטרואנים״?',
                answers: [
                    'רס״ל',
                    'רס״ר',
                    'רס״ם',
                    'רס״ב',
                ],
                rightAnswer: 2,
            },{
                title: 'כמה פעמים ביצעה חטיבת הצנחנים צניחות מבצעיות בקרב במהלך שנות קיומה?',
                answers: [
                    '0',
                    '2',
                    '7',
                    '4',
                ],
                rightAnswer: 2,
            },{
                title: 'מהו המספר של גדוד ״אפעה״?',
                answers: [
                    '51',
                    '890',
                    '101',
                    '202',
                ],
                rightAnswer: 2,
            },{
                title: 'על איזו גזרה אחראית האוגדה המרחבית 91?',
                answers: [
                    'לבנון',
                    'ירדן',
                    'סוריה',
                    'מצרים',
                ],
                rightAnswer: 1,
            },{
                title: 'איזה מבצע לא התקיים?',
                answers: [
                    'מבצע אתרוג',
                    'מבצע ליטני',
                    'מבצע אופרה',
                    'מבצע אי הארנבות',
                ],
                rightAnswer: 1,
            },{
                title: 'מהי כנף 7?',
                answers: [
                    'כנף שנפתחה השנה בחיל האוויר',
                    'כנף שתחתיה: 669, שלדג ויה״ק',
                    'כנף שבסיס האם שלה הוא פלמחים',
                    'כל התשובות נכונות',
                ],
                rightAnswer: 4,
            },{
                title: 'קורס חובלים נמשך כ...',
                answers: [
                    '28 חודשים',
                    'שנתיים',
                    'שלוש שנים',
                    '30 חודשים',
                ],
                rightAnswer: 1,
            },{
                title: 'מי היה הרמטכ״ל ה-10?',
                answers: [
                    'דוד אלעזר',
                    'מוטה גור',
                    'אמנון ליפקין-שחק',
                    'יצחק רבין',
                ],
                rightAnswer: 2,
            },{
                title: 'מלחמת לבנון הראשונה ידועה גם בתור...',
                answers: [
                    'מבצע ״ענבי זעם״',
                    'מבצע ״חד וחלק״',
                    'מלחמת ״שלום הגליל״',
                    'מלחמת ״ההתשה״',
                ],
                rightAnswer: 3,
            },{
                title: 'מה הוא קו בר-לב?',
                answers: [
                    'הגבול שנקבע בין ישראל לבין ירדן בהסכם השלום',
                    'קו מסולסל המשמש לסימון דרכים בניווטים',
                    'קו הביצורים על תעלת סואץ בשנים בהם ישראל אחזה בסיני',
                    'קו הגבול עם סורי שנקבע על ידי האו״ם',
                ],
                rightAnswer: 3,
            },{
                title: 'באיזו שנה הולחן ״מארש צה״ל״?',
                answers: [
                    '1949',
                    '1963',
                    '2001',
                    '1979',
                ],
                rightAnswer: 2,
            },{
                title: 'אם אני לוחם בחטיבת הצנחנים אקבל נשק מסוג:',
                answers: [
                    'M4',
                    'M16 מקוצר',
                    'תבור',
                    'M16 ארוך',
                ],
                rightAnswer: 1,
            },{
                title: '״מעיל רוח״ הוא:',
                answers: [
                    'מערכת הגנה על ספינות',
                    'מערכת ניטור ירי רקטי של פיקוד העורף',
                    'השם הרשמי של החלפ״ס',
                    'מערכת הגנה על טנק',
                ],
                rightAnswer: 4,
            },{
                title: 'אם יש לי ״חרבות״ ו״פלאפל״ על הכתף דרגתי היא:',
                answers: [
                    'תא״ל',
                    'סא״ל',
                    'אלוף',
                    'אל״ם',
                ],
                rightAnswer: 3,
            },{
                title: 'כמה חטיבות מרחביות פועלות באיו״ש?',
                answers: [
                    '2',
                    '4',
                    '6',
                    'אין, אוגדת איו״ש היא גם חטמ״ר',
                ],
                rightAnswer: 3,
            },{
                title: 'מה היא המילה העברית לאפטר?',
                answers: [
                    'יומון',
                    'חופשון',
                    'מאחר',
                    'ביתית',
                ],
                rightAnswer: 2,
            },{
                title: 'לוחמי איזה יחידה מכונים ״החתולים״?',
                answers: [
                    'עוקץ',
                    'גבעתי',
                    '669',
                    'שייטת 13',
                ],
                rightAnswer: 3,
            },{
                title: 'השלימו את השיר : ״קרנבל ב____ קרנבל:',
                answers: [
                    'בה״ד',
                    'נח״ל',
                    'טירונות',
                    'מסע',
                ],
                rightAnswer: 2,
            },{
                title: 'מה הוא העיטור הגבוה ביותר שניתן לקבל?',
                answers: [
                    'עיטור העוז',
                    'עיטור המופת',
                    'עיטור הגבורה',
                    'עיטור הנשיא',
                ],
                rightAnswer: 3,
            },{
                title: 'מדוע צבע כומתת השריון הוא שחור?',
                answers: [
                    'כדי למנוע מכתמי גריז ללכלך את הכומתה',
                    'הצבע שנבחר בהצבעה בחיל בשנת 1983',
                    'כסמל לפיח שנוצר בעת הירי',
                    'מטעמי הסוואה',
                ],
                rightAnswer: 1,
            },{
                title: 'מדוע כומתת צנחנים היא אדומה?',
                answers: [
                    'בחירה שרירותית',
                    'זהו צבע שנהוג בעולם לכוחות צנחנים',
                    'כצבע הורד - הפרח שמייצג את הצנחנים בעולם',
                    'הצבע נבחר בבחירות שהחיל בין חייליו ערך בשנת 1983',
                ],
                rightAnswer: 2,
            },{
                title: 'אם אני חובש כובע בטקס רשמי אני:',
                answers: [
                    'נגד מדרגת רס״ב ומעלה',
                    'תא״ל ומעלה',
                    'קצין או נגד בחיל האוויר או בחיל הים',
                    'אין חבישת כובע בטקסים רשמיים בצה״ל',
                ],
                rightAnswer: 3,
            },{
                title: 'מה משותף לחטיבת כפיר, חטיבת הנח״ל וחטיבת הצנחנים?',
                answers: [
                    'כולן חטיבות חי״ר',
                    'כולן חטיבות חדשות (משנת 1988)',
                    'הבא״חים שלהם זהים',
                    'החיילים בהן נועלים נעליים אדומות',
                ],
                rightAnswer: 4,
            },{
                title: 'יחידה 8200 נקראית על שם:',
                answers: [
                    'הדואר הצבאי שלה בעבר',
                    'מספר המשרתים בה',
                    'המספר הצבאי של הסוכן שהקים את היחידה',
                    'שם הקוד של מיקום הבסיס הראשון של היחידה',
                ],
                rightAnswer: 1,
            },{
                title: 'באיזה שנה הוכנסה דרגת התת-אלוף לצה״ל?',
                answers: [
                    '1976',
                    '1979',
                    '1957',
                    '1968',
                ],
                rightAnswer: 4,
            },{
                title: 'הגדוד הגדול בצה״ל הוא:',
                answers: [
                    'גדוד 50 בחטיבת הנח״ל',
                    'גדוד ״רותם״ בחטיבת גבעתי',
                    'גדוד  13 בחטיבת גולני',
                    'גדוד האיסוף ״ניצן״',
                ],
                rightAnswer: 4,
            },{
                title: 'איזו חטיבה היא המעוטרת ביותר בצל״שים ממבצע ״צוק איתן״?',
                answers: [
                    'גבעתי',
                    'צנחנים',
                    'גולני',
                    'חטיבה 188',
                ],
                rightAnswer: 1,
            },{
                title: 'התג של איזו יחידה זכה במקום השני בתחרות התגים העולמית?',
                answers: [
                    'עוצבת הקומנדו',
                    'צנחנים',
                    'פיקוד העורף',
                    'חטיבה 7',
                ],
                rightAnswer: 4,
            },{
                title: 'אילו יחידות שייכות לעוצבת הקומנדו?',
                answers: [
                    'דודבן, יהל״ם, שלדג',
                    'מגלן, אגוז, יהל״ם',
                    'שלדג, אגוז, יהל״ם',
                    'מגלן, דובדבן, אגוז',
                ],
                rightAnswer: 4,
            },{
                title: 'כמה מנהרות נחשפו במבצע ״מגן צפוני״',
                answers: [
                    '4',
                    '7',
                    '5',
                    '6',
                ],
                rightAnswer: 4,
            },{
                title: 'איך נבחר צבע הכומתה של גבעתי?',
                answers: [
                    'הבת של מח״ט גבעתי בחרה את הצבע',
                    'נבחר על ידי החיילים בסקר',
                    'בגלל פרח הסיגלית',
                    'בגלל ייעודה של החטיבה להגן על גבולות הקו הסגול',
                ],
                rightAnswer: 1,
            },{
                title: 'בן כמה היה האלוף הצעיר בצה״ל במינויו?',
                answers: [
                    '29',
                    '32',
                    '26',
                    '23',
                ],
                rightAnswer: 3,
            },{
                title: 'איזה פיקוד בוטל לחצי שנה בשנת 1950?',
                answers: [
                    'פיקוד הצפון',
                    'פיקוד הדרום',
                    'פיקוד המרכז',
                    'פיקוד העורף',
                ],
                rightAnswer: 2,
            },{
                title: 'כלי הנשק שמכונה ״ברק״ הוא:',
                answers: [
                    'רובה סער',
                    'תת-מקלע',
                    'טיל נ״ט',
                    'רובה צלפים',
                ],
                rightAnswer: 4,
            },{
                title: 'למי מארבעת המינים יש גם טעם וגם ריח?',
                answers: [
                    'אתרוג',
                    'לולב',
                    'הדס',
                    'ערבה',
                ],
                rightAnswer: 1,
            },{
                title: 'למי מארבעת המינים יש ריח אבל אין טעם?',
                answers: [
                    'אתרוג',
                    'לולב',
                    'הדס',
                    'ערבה',
                ],
                rightAnswer: 3,
            },{
                title: 'למי מארבעת המינים יש טעם אבל אין ריח?',
                answers: [
                    'אתרוג',
                    'לולב',
                    'הדס',
                    'ערבה',
                ],
                rightAnswer: 2,
            },{
                title: 'חטיבת ״הערבה״ היא כיום חלק מחטיבת:',
                answers: [
                    'שומרון',
                    'יואב',
                    'כפיר',
                    'גבעתי',
                ],
                rightAnswer: 2,
            },{
                title: 'השלם את השיר - ״שלומית בונה סוכה, ____ ו-_______״:',
                answers: [
                    'בוערת וירוקה',
                    'סוערת וירוקה',
                    'זוהרת וירוקה',
                    'מוארת וירוקה',
                ],
                rightAnswer: 4,
            },{
                title: 'השלם את השיר - ״פטיש, _____, ניקח מהר״:',
                answers: [
                    'סכך',
                    'מסמר',
                    'קרש',
                    'בורג',
                ],
                rightAnswer: 2,
            },
        ],
        name: '',
        phone: '',
        gameGoing: false,
        timer: null,
        questionNum: 0,
        score: 0,
        timeLeft: 60,
        questionsAnswered: 0,
        firstScreen: true,
        secondScreen: false,
        thirdScreen: false,
        fourthScreen: false,
        errorScreen: false,
        loadingScreen: false,
    }
    startForm = () => {
        this.setState({
            firstScreen: false,
            secondScreen: true,
        })
    }
    rotate = () => {
        const img = document.querySelector('.clock-hand');
        img.classList.add('clock-hand-move');
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    shuffleQuestions = () => {
        let questionsArray = this.state.question;
        this.shuffle(questionsArray)
        this.setState({question: questionsArray})
    }
    gameStarted = () => {
        this.setState({
            loadingScreen: false,
            thirdScreen: true,
            gameGoing: true,
        })
        this.countdown();
    }
    checkAnswer = (event) => {
        let userAnswer = event.target.className;
        let questionAnswer = this.state.question[this.state.questionNum].rightAnswer;
        let questionsAnswered = this.state.questionsAnswered;
        questionsAnswered++;
        this.setState({questionsAnswered: questionsAnswered});
        console.log(userAnswer, questionAnswer)
        if (userAnswer == questionAnswer) { 
            this.rightAnswer();
        }
        
        let questionNum = this.state.questionNum;
        questionNum++;
        if (this.state.question[questionNum] === undefined) {
            this.gameEnded();
            clearInterval(this.state.timer);
        } else {
            this.setState({
                questionNum: questionNum
            })
        }
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll('.quiz button')[i].classList.remove('right');
            document.querySelectorAll('.quiz button')[i].classList.remove('wrong');
        }
    }
    rightAnswer = (target) => {
        let score = +this.state.score;
        score++;
        this.setState({score: score});
    }
    wrongAnswer = () => { 

    }
    countdown = () => {
        this.setState({
            timer: (
                setInterval(() => {
                    let timeLeft = this.state.timeLeft;
                    timeLeft--;
                    if (timeLeft <= 0) {
                        clearInterval(this.state.timer);
                        this.gameEnded();
                    } else {
                        this.setState({timeLeft: timeLeft}, () => {
                            const img = document.querySelector('.clock-hand');
                            img.classList.add('clock-hand-move');
                        })
                    }
                }, 1000)
            )
        })
    }
    formChangeHandler = (event) => {
        let inputs = document.querySelectorAll('.form input[type="text"]');
        let checkbox = document.querySelector('.form input[type="checkbox"]');
        if (inputs[0].value !== '') {
            if (inputs[1].value !== '') {
                if (checkbox.checked) {
                    document.querySelector('.start-button').classList.add('start-button-click');
                } else {
                    document.querySelector('.start-button').classList.remove('start-button-click');
                }
            } else {
                document.querySelector('.start-button').classList.remove('start-button-click');
            }
        } else {
            document.querySelector('.start-button').classList.remove('start-button-click');
        }   
        let target = event.target;
        let value = event.target.value;
        if (target === inputs[0]) {
            this.setState({name: value})
        } else if (target === inputs[1]) {
            this.setState({phone: value})
        }
    }
    submitForm = () => {
        this.setState({
            secondScreen: false,
            loadingScreen: true,
        })
        Database.getData(this.state.phone).then(data => {
            if (data.length > 5) {
                this.cannotPlay();
            } else {
                this.gameStarted();
            }
        });
    }
    cannotPlay = () => {
        this.setState({
            secondScreen: false,
            errorScreen: true,
        })
    }
    gameEnded = () => {
        this.setState({
            thirdScreen: false,
            fourthScreen: true,
            gameGoing: false,
        })
    }
    componentDidMount() {
        this.shuffleQuestions();
    }
    render() {
        let content = null;
        if (this.state.firstScreen) {
            content = (
                <div className='open-screen'>
                    <img src='images/SVG/cloud.svg' />
                    <img src='images/SVG/cloud.svg' />    
                    <img src='images/SVG/bee2.svg' />
                    <img src='images/SVG/sukot.svg' />
                    <div className='text'>
                        <h2>אתר צה״ל וכוורת</h2>
                        <h1><span>מזמינים אתכם</span><span>לסוכת הפרס</span></h1> 
                        <p>
                            רוצים לפנק את החברים לפלוגה?<br></br>
                            יודעים מהם ארבעת המינים?<br></br>
                            ענו נכונה על כמה שיותר שאלות לפני שנגמר הזמן,<br></br>
                            ואולי תזכו בשובר לערכת קפה מפנקת<br></br>
                            בשווי 100 ש״ח מתנת כוורת און-ליין<br></br>
                            מוכנים?
                        </p>
                    </div>
                    <button onClick={this.startForm}>בואו נשחק</button>
                </div>
            )
        } else if (this.state.secondScreen) {
            content = (
                    <Form 
                        change={(event) => this.formChangeHandler(event)}
                        start={this.submitForm}
                    />
            )
        } else if (this.state.thirdScreen) {
            let questionsArray = this.state.question;
            content = (
                <Question 
                    questionTitle={questionsArray[this.state.questionNum].title}
                    answer1={questionsArray[this.state.questionNum].answers[0]}
                    answer2={questionsArray[this.state.questionNum].answers[1]}
                    answer3={questionsArray[this.state.questionNum].answers[2]}
                    answer4={questionsArray[this.state.questionNum].answers[3]}
                    click={(event) => this.checkAnswer(event)}
                    clickHandle={(event) => this.rotate(event)}
                    seconds={this.state.timeLeft}
                /> 
            )
        } else if (this.state.fourthScreen) {
            content = (
                <div className='ending-screen'>
                    <h1>כל הכבוד!</h1>
                    <h3>ענית על {this.state.questionsAnswered} שאלות ומתוכן {this.state.score} נכונות</h3>
                    <h4>בתום הפעילות ניצור קשר עם הזוכים. בהצלחה!</h4>
                </div>   
            )
        } else if (this.state.errorScreen) {
            content = (
                <div className='cannot-play'>
                    <h2>ניתן להשתתף במשחק עד 5 פעמים</h2>
                </div>
            )
        } else if (this.state.loadingScreen) {
            content = (
                <LoadingScreen />
            )
        }

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}
export default App;
