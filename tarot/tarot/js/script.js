
const cardImage = document.querySelector(`.cardImage img`);

/* 大アルカナカード一覧 */
const MAJOR = [
    {
        name:'愚者 (The Fool)',
        upright:'自由・冒険心・可能性\n新しい旅の始まりです。\nまだ形のない希望があなたを動かしています。\n勇気を持って一歩踏み出せば、思いがけない出会いやチャンスが訪れるでしょう。',
        reversed:'空回り・怠ける\n新しいことに挑戦したい気持ちはあっても、どこか不安や迷いがあるようです。\n焦らず、自分が「心から楽しめること」を見つめ直してみましょう。',
        image:'images/0_Fool.png'
    },{
        name:'魔術師 (The Magician)',
        upright:'創造・知性・はじまり\n発想力と行動力が高まっています。\n必要な準備は整っているので、自信を持って動き出しましょう。\n思い切った一歩が成果を呼びます。',
        reversed:'優柔不断・無計画\nやりたいことが多すぎて、エネルギーが分散しているかもしれません。\n今は焦らず、ひとつのことに集中することで道が見えてきます。',
        image:'images/1_Magician.png' 
    },{
        name:'女教皇 (The High Priestess)',
        upright:'静観・洞察力・直感力\n直感が冴える時期です。\n表面的な情報よりも、心の声を信じると良い結果に。\n静かな時間を大切にして、自分の感覚を整えましょう。',
        reversed:'情緒不安定・偏見\n考えすぎて本心が見えにくくなっています。\n周囲の意見に振り回されず、「自分がどう感じているか」を丁寧に確かめましょう。',
        image:'images/2_High_Priestess.png' 
    },{
        name:'女帝 (The Empress)',
        upright:'繁栄・母性・豊かさ\n愛情や豊かさが広がる時期。\n身近な人への優しさが、あなたにも幸運を運んできます。\n自分を労わる時間も大切にしてみましょう。',
        reversed:'不仲・欠如\n甘えや惰性が関係性を曇らせているかもしれません。\n相手に期待しすぎず、自分の中の余裕を取り戻すことが、改善の第一歩です。',
        image:'images/3_Empress.png' 
    },{
        name:'皇帝 (The Emperor)',
        upright:'行動力・リーダーシップ・プライド\n責任感とリーダーシップが求められます。\n決断を恐れず、自分の考えを明確に示すことで信頼が得られるでしょう。',
        reversed:'強引・空回り\n頑固になりすぎたり、支配的な態度になっていませんか？ \n周囲の声を聞く柔軟さが、関係を安定させる鍵になります。',
        image:'images/4_Emperor.png' 
    },{
        name:'法王 (The Hierophant)',
        upright:'保守的・社交性・誠実\n人とのつながりが心を支えてくれる時です。\n伝統的な考えやアドバイスが、今のあなたに新しい視点をもたらします。',
        reversed:'不道徳・無慈悲\n誰かの意見に合わせすぎて、自分らしさを失っているかもしれません。\n大切なのは「あなたが納得できる選択」です。',
        image:'images/5_Hierophant.png' 
    },{
        name:'恋人 (The Lovers)',
        upright:'調和・共感・安心\n大切な人や出来事に心が動く時。\n愛情や信頼を深めるチャンスです。迷ったときは、正直な気持ちを伝えてみましょう。',
        reversed:'違和感・気まぐれ\n気持ちのズレや迷いが生じやすい時期です。\n無理に決めようとせず、時間をかけて「本音」を整理することが大切です。',
        image:'images/6_Lovers.png' 
    },{
        name:'戦車 (The Chariot)',
        upright:'前進・野望・克服\n勢いのある時期。目的をはっきりさせて突き進めば、結果がついてきます。\n自信を持って行動してみましょう。',
        reversed:'空回り・独りよがり\n焦りや衝動で空回りしやすい時期。\n力ずくで進めず、一度落ち着いて方向を見直すと良い流れが戻ります。',
        image:'images/7_Chariot.png' 
    },{
        name:'力 (Strength)',
        upright:'精神力・信念・忍耐\n思いやりと優しさがあなたの力になります。\n落ち着いて対応すれば、どんな状況も穏やかに乗り越えられます。',
        reversed:'挫ける・依存\n頑張りすぎて疲れていませんか？ \n無理せず、助けを求めることも強さのひとつです。\n自分を責めずに休む時間を取りましょう。',
        image:'images/8_Strength.png' 
    },{
        name:'隠者 (The Hermit)',
        upright:'探求・内観・思慮深い\n静かに自分を見つめる時間が、次のステップを照らします。\n焦らず内面を整えることで、心の整理がつくでしょう。',
        reversed:'闇雲さ・閉じこもる\n孤独を感じやすい時期。\n閉じこもらず、信頼できる人に話を聞いてもらうことで気持ちが軽くなります。',
        image:'images/9_Hermit.png' 
    },{
        name:'運命の輪 (Wheel of Fortune)',
        upright:'宇宙の真理・好転・チャンス到来\n良い流れがやってきます。\n偶然の出会いやチャンスを逃さず、直感的に動いてみてください。\n変化を楽しむ姿勢が幸運を呼びます。',
        reversed:'翻弄・悪いタイミング\n思うように進まなくても、焦らないで。\n今はタイミングを見極める時期です。\n流れが変わるまで、準備に時間を使いましょう。',
        image:'images/10_Wheel_of_Fortune.png' 
    },{
        name:'正義 (Justice)',
        upright:'判断・正当性・バランス\n冷静な判断ができる時。\n感情ではなく事実を見て行動すれば、公平な結果が得られます。\n誠実さが評価されるでしょう。',
        reversed:'不正・矛盾\n曖昧な判断や偏りに注意。\n人の意見よりも「自分の中の正しさ」に基づいて決めることが大切です。',
        image:'images/11_Justice.png'
    },{
        name:'吊された男 (The Hanged Man)',
        upright:'努力・忍耐・献身的\n試練の中で成長しています。\n今は我慢の時期かもしれませんが、後になって「この経験があって良かった」と感じるでしょう。',
        reversed:'不自由・間違った視点\n停滞感にとらわれやすい時。\n無理に動かず、まずは心を軽くすることに集中しましょう。',
        image:'images/12_Hanged_Man.png' 
    },{
        name:'死神 (Death)',
        upright:'死と再生・方向転換・運命（さだめ）\n一区切りを迎える時。\n手放すことで、新しいチャンスがやってきます。\n終わりは始まりでもあります。前向きに受け止めて。',
        reversed:'思いきれない・堂々巡り\n過去にこだわりすぎていませんか？ \n変化を恐れず、少しずつでも前に進む勇気を持ちましょう。',
        image:'images/13_Death.png' 
    },{
        name:'節制 (Temperance)',
        upright:'調和・平和的解決・柔軟性\nバランスを取りながら進む時です。\n急がず、自然な流れを意識して行動すれば、穏やかに成果が見えてきます。',
        reversed:'事なかれ主義・節度がない\n無理をしていませんか？ \n頑張りと休息のリズムを整えることが、状況を安定させる近道です。',
        image:'images/14_Temperance.png' 
    },{
        name:'悪魔 (The Devil)',
        upright:'執着・本能・快楽主義\n魅力や快楽に引き寄せられやすい時。\n上手に楽しむことは大切ですが、やりすぎには注意。節度を意識して。',
        reversed:'解放・断ち切る\n執着や不安から抜け出せるタイミング。\n自分を縛っていた考えを手放すと、驚くほど気持ちが軽くなります。',
        image:'images/15_Devil.png' 
    },{
        name:'塔 (The Tower)',
        upright:'ハプニング・浄化・葛藤\n突然の変化が訪れるかもしれませんが、それは必要な再構築です。\n壊れることで、新しい基盤を築くチャンスが生まれます。',
        reversed:'混乱・ショックな気持ち\n衝撃的な出来事に備えて、今のうちに整理を。\n受け止め方次第で、ダメージを最小限に抑えられます。',
        image:'images/16_Tower.png' 
    },{
        name:'星 (The Star)',
        upright:'希望・可能性・才能\n希望が見え、未来に光が差しています。\n理想を描きながら、小さな目標を一つずつ叶えていきましょう。',
        reversed:'停滞・期待はずれ\n理想と現実のギャップに落ち込みやすい時。\n完璧を求めすぎず、今ある希望を見つめ直しましょう。',
        image:'images/17_Star.png' 
    },{
        name:'月 (The Moon)',
        upright:'不安・見えない敵・用心\n感情が揺れやすい時期。\n直感を信じつつも、事実を確かめる冷静さを忘れずに。\n心を整える時間を持ちましょう。',
        reversed:'徐々に好転・次第に落ち着く\n不安が少しずつ晴れていきます。\n真実が見え始めたら、慎重に次の行動を決めていきましょう。',
        image:'images/18_Moon.png' 
    },{
        name:'太陽 (The Sun)',
        upright:'幸福・成果・解決\n明るいエネルギーに包まれています。\n努力が実り、喜びを共有できる時間。素直に笑顔で過ごしましょう。',
        reversed:'立場を失う・トラブル\n気力が少し落ち気味かも。\n無理に明るく振る舞うより、ゆっくりと自分を整える時間を大切にして。',
        image:'images/19_Sun.png' 
    },{
        name:'審判 (Judgement)',
        upright:'覚醒・意識改革・復活\n再挑戦のチャンスが訪れます。\n過去の経験があなたを支えてくれるので、自信を持ってもう一度トライしましょう。',
        reversed:'混乱・後悔\n過去に引きずられて前に進めない時。\n失敗を責めず、学びとして受け止めることで未来が開けます。',
        image:'images/20_Judgement.png' 
    },{
        name:'世界 (The World)',
        upright:'完全さ・統合・最高地点への到達\n目標を達成し、一区切りの時を迎えます。\nこれまでの努力をしっかり認め、自分を褒めてあげましょう。次の夢の準備も始まりそうです。',
        reversed:'不完全燃焼・行き詰り\nあと一歩で完成です。\n焦らず細部を見直すことで、満足のいく結果を手にできるでしょう。',
        image:'images/21_World.png' 
    }
]

// --- ボタンを取得してクリックイベントを設定 ---
const drawButton = document.getElementById('drawButton');   //「カードを引く」ボタン
const resetButton = document.getElementById('resetButton'); //「もう一度占う」ボタン

// --- 引いたカードの情報 ---
let drawnCard;  //選ばれたカード情報を保持
let isReversed; //正位置か逆位置かの判定

/* カードの画像・名前・意味を表示する要素を取得 */
const cardImageElement = document.querySelector('.cardImage img');  //カードの画像　class="cardImage" 内の <img> 要素を取得
const cardNameElement = document.getElementById('cardName');        //カードの名前　id="cardName" の要素を取得
const cardMeaningElement = document.getElementById('cardMeaning');  //カードの意味　id="cardMeaning" の要素を取得

function drawCard(){

    drawnCard = MAJOR[Math.floor(Math.random()*MAJOR.length)];
    isReversed = Math.random() < 0.5;  //正位置・逆位置の確率

    /* cssアニメーションで更新されるカードの回転を逆位置のまま維持する処理 */
    cardImageElement.style.setProperty( 
        '--rotation',
        isReversed ? 'rotate(180deg)':'rotate(0deg)'
    );

    cardImageElement.style.opacity = 0; //フェードアウト

    setTimeout(() => {

        cardImageElement.src = drawnCard.image;     //カード画像更新　.imageでMAJOR内のimageを参照
        cardImageElement.style.transform = isReversed ? 'rotate(180deg)' : 'rotate(0deg)';    // 逆位置なら画像を回転
        cardNameElement.textContent = drawnCard.name;   //.nameでMAJOR内のテキスト、nameを参照
    
        /* 結果を表示する処理　正位置なら upright、逆位置なら reversed を表示 （三項演算子: 条件 ? trueの値 : falseの値） */
        cardMeaningElement.textContent = isReversed ? drawnCard.reversed : drawnCard.upright; 
        cardImageElement.style.opacity = 1;

        /* 結果エリアを表示 */
        const result = document.getElementById('result');

        result.style.padding = '20px 25px';  //0　→　20px 25px
        result.style.display = 'block';     //none　→　block
        result.classList.add('show');       //フェードイン

        drawButton.style.display = 'none';          // 「カードを引く」を非表示
        resetButton.style.display = 'inline-block'; // 「もう一度占う」を表示
        resetButton.classList.add('animate');   // 「もう一度占う」ボタンのアニメーション

    },250 ); //0.25秒後に切り替え
}
    // 「カードを引く」クリック
    drawButton.addEventListener('click', drawCard);

    // 「もう一度占う」クリック
    resetButton.addEventListener('click', () => {
    drawButton.style.display = 'inline-block'; // 元のボタンを戻す
    resetButton.style.display = 'none';        // リセットボタンを非表示
    cardImageElement.src = 'images/back2.png'; // カード画像を戻す
    cardImageElement.style.transform = 'rotate(0deg)'; // 回転もリセット
    cardNameElement.textContent = '';
    cardMeaningElement.textContent = '';
    const result = document.getElementById('result');
    result.style.padding = '0';
    result.classList.remove('show');
});
