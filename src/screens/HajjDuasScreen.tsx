import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayet"; // Burayı ekle

type DuaType = {
  id: number;
  title: string;
  turkish: string;
  arabic: string;
  audioTurkish?: any;
  audioArabic?: any;
};

const duas: DuaType[] = [
  {
    id: 1,
    title: "Arafat Duası",
    turkish:
      "Bismillahirrahmanirrahim. Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur. Buyur Allah’ım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur. Allah, her türlü eksiklikten uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Allah’tan başka hiçbir ilah yoktur. O tektir, hiçbir ortağı yoktur. Mülk onundur. Hamd ona mahsustur. Hayat veren de, hayata son veren de O’dur. Hayır, ancak onun elindedir. O, her şeye gücü yetendir. Hamd, Âlemlerin Rabbi, Rahman, Rahîm, hesap ve ceza (ahiret) gününün sâhibi Allah’a mahsustur. (Allah’ım!) Yalnız sana ibadet ederiz ve yalnız senden yardım dileriz. Bizi doğru yola, kendilerine nimet verdiklerinin yoluna ilet. Gazaba uğrayanların ve sapıkların yoluna değil. Rabbimiz, (bunu) bizden kabul eyle. Şüphesiz ki sen her şeyi işiten ve bilensin. Rabbimiz! Bizi sana teslim olanlardan eyle. Neslimizden de sana teslim olmuş bir ümmet lütfeyle. Bize hacla ilgili vazifelerimizi göster, tövbelerimizi kabul et. Şüphesiz tövbeleri çok kabul eden ve çok merhametli olan ancak sensin. Rabbimiz! Şüphesiz biz iman ettik. Günahlarımızı bağışla ve bizi Cehennem ateşinden koru. Rabbimiz! Senin indirdiğine iman ettik ve Hz. Peygamber’e uyduk. Artık bizi şahitlerle beraber yaz. Rabbimiz! Şüphesiz biz, “Rabbinize inanın!” diye imana çağıran davetçiyi (Kur’an’ı) işittik ve iman ettik. Rabbimiz, bizim günahlarımızı bağışla, kötülüklerimizi ört, canımızı iyilerle beraber al. Rabbimiz! Peygamberlerine vadettiğin şeyleri bize de ihsan et ve kıyamet gününde bizi rezil etme; şüphesiz sen vadinden dönmezsin. Ey Rabbimiz! Eğer unutur, ya da yanılırsak bizi sorumlu tutma! Ey Rabbimiz! Bize, bizden öncekilere yüklediğin gibi ağır yük yükleme. Ey Rabbimiz! Bize gücümüzün yetmediği şeyleri de yükleme! Bizi affet, bizi bağışla, bize acı! Sen bizim Mevlâmızsın. İnkârcı topluma karşı bize yardım et. Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi saptırma, bize rahmetinden ver. Şüphesiz sen çok bağışlayansın. Rabbimiz! Bizim günahlarımızı ve işimizdeki aşırılıklarımızı bağışla ve (yolunda) ayaklarımızı sağlamlaştır. İnkârcı topluma karşı bize yardım et. Rabbimiz! Bizi inkârcıların elinde fitneye düşürme! Rabbimiz! Bizi bağışla. Şüphesiz sen güç ve hikmet sahibisin. Ey Rabbimiz, bizi zalimler topluluğunun baskı ve şiddetine maruz bırakma! Bizi rahmetinle o kâfirler topluluğundan kurtar. Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize merhamet etmezsen, mutlaka hüsrana uğrayacağız. Rabbimiz! Biz iman ettik, bizi bağışla ve bize merhamet et. Sen en iyi merhamet edensin. Rabbimiz! Yalnızca sana tevekkül ettik, yalnızca sana yöneldik. Dönüş de ancak sanadır. Rabbimiz! Nurumuzu tamamla. Bizi bağışla, şüphesiz senin her şeye gücün yeter. Rabbim! Gönlüme genişlik ver ve işimi kolaylaştır. Rabbim! Muhakkak ki ben kendime zulmettim, beni bağışla. Senden başka hiçbir ilah yoktur. Sen her türlü noksandan uzaksın. Muhakkak ki ben zalimlerden oldum. Rabbim! Bağışla, merhamet buyur. Sen en iyi merhamet edensin. Rabbim! İlmimi artır ve beni salihlere erdir. Rabbim! Bana, tertemiz bir nesil lütfet. Şüphesiz sen duaları işitensin. Rabbim! Beni ve soyumdan gelecekleri, namaz kılanlardan eyle. Rabbimiz! Duamızı kabul eyle! Rabbimiz! Bize gözümüzü aydınlatacak eşler ve nesiller ver. Bizi takva sahiplerine önder kıl. Rabbim! Bana hüküm ve hikmet ver ve beni salihlere erdir. Rabbim! Beni bereketli bir konuma yerleştir. Sen konuk edenlerin en hayırlısısın. Bana müslümanca ölmeyi nasip eyle ve beni salihler arasına dâhil eyle. Ey Rabbimiz! Bize rahmetinden ver ve işimizde bize çıkış yolunu göster. Bize bu dünyada da Ahirette de iyilik yaz. Biz gerçekten sana yöneldik. Ey Rabbimiz! Bize bol sabır ver ve bizim canımızı müslüman olarak al. Rabbimiz! Bize bol sabır ver. Yolunda ayaklarımızı sabit kıl ve inkârcı topluma karşı bize yardım et. Rabbim! Şeytanların yönlendirmelerinden ve bana yaklaşmalarından sana sığınırım. Rabbim! Bana lütfettiğin nimete karşılık olarak, asla mücrimlere arka çıkmayacağım. Rabbim! Beni zalimler toplumuna dâhil etme. Rabbim! Bozguncular topluluğuna karşı bana yardım et. Ey Rabbimiz! Senin rahmetin ve ilmin her şeyi kuşatır. Tövbe edenleri ve senin yoluna uyanları bağışla ve onları cehennem azâbından koru. Ey Rabbimiz! Onları da, onların babalarından, eşlerinden ve soylarından iyi olanları da, vaad ettiğin Adn cennetlerine koy. Şüphesiz sen mutlak güç sahibisin, hüküm ve hikmet sahibisin. Onları kötülüklerden koru. Sen o gün kimi kötülüklerden korursan, ona rahmet etmiş olursun. Ey Rabbim! Beni; bana ve ana-babama verdiğin nimetlere şükretmeye ve razı olacağın iyi işler yapmaya yönelt ve beni rahmetinle salih kullarının arasına kat! Rabbim! Annem babam, küçükken beni nasıl yetiştirmişlerse, şimdi sen de onlara acı. Rabbimiz! Hesap gününde beni, anne-babamı ve bütün mü’minleri bağışla. Ey Rabbimiz! Bizden cehennem azabını uzaklaştır, gerçekten onun azabı süreklidir! Sen bizim velimizsin. Artık bizi bağışla ve bize acı. Sen en iyi bağışlayansın. Ey Rabbimiz! Bizi ve bizden önce iman etmiş olan kardeşlerimizi bağışla. Kalplerimizde, iman edenlere karşı hiçbir kin bırakma! Ey Rabbimiz! Şüphesiz sen çok esirgeyicisin, çok merhametlisin. Ey Rabbimiz! Bize dünyada da iyilik ver, Ahirette de iyilik ver. Bizi cehennem azabından koru. Ey kalpleri evirip çeviren Allah’ım Kalbimi dininde sabit kıl. Allah’ım Seni sevmeyi, seni sevenleri sevmeyi ve sana yakın kılacak her işi sevmeyi bana nasip etmeni niyaz ediyorum. Allah’ım Bize imanı sevdir ve onu bize güzel göster. Küfürden, fasıklıktan ve isyandan nefret ettir. Bizi doğru yolda olanlardan eyle. Allah’ım Sen benim Rabbimsin. Senden başka hiçbir ilah yoktur. Beni yaratan sensin, ben senin kulunum. Gücüm yettiğince sana verdiğim söz ve ahdime bağlı kalacağım. İşlediğim günahların şerrinden sana sığındım. İhsan ettiğin nimetleri ikrar ediyorum, günahlarımı da itiraf ediyorum. Beni affet; çünkü senden başka hiç kimse günahları affedemez. Allah’ım Senden, bildiğim ve bilmediğim geçmiş ve gelecekteki tüm hayırları niyaz ediyorum. Bildiğim ve bilmediğim, geçmiş ve gelecekteki tüm şerlerden de sana sığınıyorum. Senden cenneti ve ona ulaştıracak her türlü söz, fiil ve ameli nasip etmeni diliyorum. Cehennemden ve ona götürecek her türlü söz, fiil ve amelden de sana sığınıyorum. Allah’ım Kulun ve elçin Hz. Muhammed’in senden istediği bütün hayırlardan ben de istiyorum. Kulun ve elçin Hz. Muhammed’in sana sığındığı bütün şerlerden ben de sana sığınıyorum. Allah’ım Beni işlerin en güzeline ve ahlâkın en güzeline eriştir. Bunlara ancak sen eriştirirsin. Kötü işlerden ve kötü ahlâktan beni koru. Bunlardan da beni ancak sen korursun. Allah’ım Bana helal ile yetinerek haramdan sakınmayı, sana itaatle yetinerek günahlardan uzak kalmayı nasip et ve lütfunla beni başkalarına muhtaç etme. Allah’ım Beni öyle bir bağışla ki, iki cihanda da durumum düzelsin. Bana öyle bir rahmet et ki, iki cihanda da mutlu olayım. Öyle içten bir tövbe nasip et ki, onu bir daha ebediyen bozmayayım ve bana öyle bir istikamet ver ki ebediyen bu doğrultudan sapmayayım. Allah’ım Senden faydalı ilim, bol rızık ve her derde deva niyaz ediyorum. Allah’ım Dini-dünyevi hayatım ile ailem ve malım için Senden bereket ve sağlık niyaz ediyorum. Allah’ım Senden hidayet, takva, iffet ve yeterlilik vermeni niyaz ediyorum. Allah’ım Senden teslim olmuş bir kalp ve doğru bir lisan niyaz ediyorum. Allah’ım Senden sıhhat, iffet, emanet, güzel ahlâk ve takdire rıza vermeni niyaz ediyorum. Allah’ım Senden hayırlar işlemeyi, kötülükleri terk etmeyi, yoksulları sevmeyi, beni bağışlamanı ve bana merhamet etmeni niyaz ediyorum. Allah’ım Faydasız ilimden, korkmayan kalpten, doymayan nefisten ve kabul olmayan duadan sana sığınırım. Allah’ım Hıyanetten, küfürden, şirkten, İslâm’ın emir ve yasaklarına karşı gelmekten, münafıklıktan, gösterişten, riyadan ve kötü ahlâktan sana sığınırım. Allah’ım Sıkıntıdan, üzüntüden, acizlikten, tembellikten, korkaklıktan, cimrilikten, kalp katılığından, gafletten, zilletten, meskenetten sana sığınırım. Allah’ım Zulmetmekten de, zulme uğramaktan da sana sığınırım. Allah’ım Günahtan, Cehennem azabından, kabir azabından, zenginliğin fitnesinden, fakirliğin fitnesinden sana sığınırım. Allah’ım Çekilmez belalardan, isyana düşmekten, görülmez kazadan ve düşmanları sevindirecek musibetlerden sana sığınırım. Allah’ım Verdiğin nimetlerin son bulmasından, verdiğin sağlık ve afiyetin gitmesinden, azabının ansızın gelmesinden ve her türlü gazabından sana sığınırım. Allah’ım Günahlardan ve masiyetlerden sana sığınırım. Allah’ım Günün, gecenin ve her anın kötülüğünden, kötü arkadaştan, kötü komşudan sana sığınırım. Ey göklerin ve yerin yaratıcısı, gizli ve açık her şeyi bilen, her şeyin Rabbi ve sahibi olan Allah’ım Senden başka hiçbir ilah olmadığına şehadet eder, nefsimin şerrinden, şeytanın ve tuzaklarının şerrinden sana sığınırım. Allah’ım Sen ‘Bana dua edin, duanıza karşılık vereyim’ buyurdun. Sen asla vadinden dönmezsin. Beni İslam’a ilettiğin gibi, Müslüman kalmayı ve Müslüman olarak ölmeyi nasip eyle. Allah’ım Bana sıhhat, iffet, emanet, güzel ahlâk ve takdire rıza vermeni istiyorum. Allah’ım Kalbimi nifaktan, amelimi riyadan, dilimi yalandan, gözümü hıyanetten temizle. Çünkü sen gözlerin hain bakışlarını ve kalplerin sakladıklarını bilirsin. Allah’ım Hayatta kaldığım sürece masiyetleri terk etmem konusunda bana acı! Gereksiz sıkıntılara düşmemem konusunda da bana acı! Bana, rızana ulaştıracak basiret ver. Allah’ım Ayıplarımı ört, korktuklarımdan emin eyle. Beni önümden, arkamdan, sağımdan, solumdan ve üstümden (gelebilecek her türlü tehlikeye karşı) muhafaza buyur. Allah’ım Ansızın altımızdan gelecek bir tehlike ile helak olmaktan da sana sığınırım. Allah’ım Beni, güzellikler işledikleri zaman sevinenlerden, kötülük işlediklerinde de bağışlanma dileyenlerden eyle! Allah’ım Bedenime sağlık ve afiyet ver. Allah’ım Kulağıma sağlık ve afiyet ver, Allah’ım Gözüme sağlık ve afiyet ver. Senden başka hiçbir ilah yoktur. Allah’ım Geçmişte işlediğim tüm günahlarımı bağışla. Ömrümün geriye kalan kısmında da beni günah işlemekten muhafaza buyur. Bana razı olacağın tertemiz işler yapmayı nasip eyle. Allah’ım Beni göz açıp kapayacak kadar bile olsa nefsime bırakma. Bana lütfettiğin güzellikleri benden çekip alma. Allah’ım Gizli veya açık olarak geçmişte işlediğim ve gelecekte işleyebileceğim ve senin benden daha iyi bildiğin bütün günahlarımı bağışla. Sen dilediğini öne alır, dilediğini geri bırakırsın. Senin her şeye gücün yeter. Senden başka hiçbir ilah yoktur. Allah’ım Kalbimin frekanslarını zikrine aç. Sana ve Resulüne itaat etmeyi ve kitabınla amel etmeyi nasip eyle. Allah’ım Bana öğrettiklerinden yararlanmamı nasip eyle, bana faydalı olacak şeyleri öğret ve yarar sağlayacak ilim lütfeyle. Allah’ım İlmimi artır. Beni hidayete ulaştırdıktan sonra kalbimi eğriltme. Bana rahmetinden lütfet. Muhakkak ki sen çok lütufkârsın. Allah’ım Bana lütfettiğin rızkı bereketli kıl ve beni kanaatkâr eyle. Elde edemediklerimin yerini hayırlı bir şekilde doldur. Allah’ım Bana takva ver ve beni arındır. En iyi arındıran sensin. Sen benim yardımcım ve Mevlamsın. Allah’ım Günahımı bağışla, rızkımı bollaştır ve verdiğin rızkı hakkımda bereketli kıl. Allah’ım Bütün işlerimizin sonucunu güzel eyle. Bizi dünya perişanlığından ve Ahiret azabından koru. Allah’ım Birbirimize karşı kalplerimizi ısındır ve aramızı düzelt. Bizi barış yollarına ilet. Karanlıklardan aydınlığa kavuştur. Bizi gizli ve açık bütün kötülüklerden koru. Allah’ım Bize bol bereket, rahmet, iyilik ve rızık ver. Allah’ım Bizi bağışla. Bize merhamet et ve tövbelerimizi kabul eyle. Şüphesiz sen tövbeleri çok kabul eden ve çok merhamet edensin. Allah’ım İbrahim ve ailesine rahmet ettiğin gibi, Efendimiz Hz. Muhammed ve ailesine de rahmet et. Sen övgüye layıksın, şanı yüce olansın. İbrahim ve ailesini mübarek kıldığın gibi; Efendimiz Hz. Muhammed ve ailesini mübarek kıl. Sen övgüye layıksın, şanı yüce olansın. Allah’ım İbrahim ve ailesine rahmet ettiğin gibi, Efendimiz Hz. Muhammed ve ailesine de rahmet et. İbrahim ve ailesini mübarek kıldığın gibi; Efendimiz Hz. Muhammed ve ailesini mübarek kıl. Sen övgüye layıksın, şanı yüce olansın.",
    arabic:
      "بِسْمِ اللّهِ الرَّحْمـَنِ الرَّحِيمِ اَللهُ أَكْبَرُ ، اَللهُ أَكْبَر ُ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ . لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ ، لَا شَرِيكَ لَكَ . سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ . لَٓا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَ يُمِيتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِينَۙ ﴿﴾ اَلرَّحْمٰنِ الرَّحِيمِۙ ﴿﴾ مَالِكِ يَوْمِ الدِّينِۜ ﴿﴾ إِيَّاكَ نَعْبُدُ وَ إِيَّاكَ نَسْتَعِينُۜ ﴿﴾ اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَۙ ﴿﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّٓالِّينَ ﴿﴾ رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ . رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَ مِنْ ذُرِّيَّتِنَٓا أُمَّةً مُسْلِمَةً لَكَۖ وَ أَرِنَا مَنَاسِكَنَا وَ تُبْ عَلَيْنَاۚ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ . رَبَّنَآ إِنَّنَآ اٰمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَ قِنَا عَذَابَ النَّارِ . رَبَّنَآ اٰمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ . رَبَّنَٓا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ اٰمِنُوا بِرَبِّكُمْ فَاٰمَنَّاۗ رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَ كَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَ تَوَفَّنَا مَعَ الْأَبْرَارِ .ۚ رَبَّنَا وَ اٰتِنَا مَا وَعَدْتَنَا عَلٰى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ . رَبَّنَا لَا تُؤَاخِذْنَٓا إِنْ نَسِينَٓا أَوْ أَخْطَأْنَا ، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَٓا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ، أَنْتَ مَوْلٰينَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ . رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَ هَبْ لَنَا مِن لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ. رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَ إِسْرَافَنَا فِٓي أَمْرِنَا وَ ثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ . رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ . رَبَّـنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَۙ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ . رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَ إِنْ لَمْ تَغْفِرْ لَنَا وَ تَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ . رَبَّنَآ اٰمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَ أَنتَ خَيْرُ الرَّاحِمِينَ . رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَ إِلَيْكَ أَنَبْنَا وَ إِلَيْكَ الْمَصِيرُ . رَبَّنَآ أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ . رَبِّ اشْرَحْ لِي صَدْرِي وَ يَسِّرْ لِي أَمْرِي . رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي . لَٓا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ . رَبِّ اغْفِرْ وَارْحَمْ وَ أَنتَ خَيْرُ الرَّاحِمِينَ . رَبِّ زِدْنِي عِلْمًا وَ أَلْحِقْنِي بِالصَّالِحِينَ . رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَآءِ . رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَ مِن ذُرِّيَّتِي رَبَّنَا وَ تَقَبَّلْ دُعَآءِ . رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَ ذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا . رَبِّ هَبْ لِي حُكْمًا وَ أَلْحِقْنِي بِالصَّالِحِينَ . رَبِّ أَنزِلْنِي مُنْزَلًا مُبَارَكًا وَ أَنْتَ خَيْرُ الْمُنْزِلِينَ . تَوَفَّنِي مُسْلِمًا وَ أَلْحِقْنِي بِالصَّالِحِينَ . رَبَّنَآ اٰتِنَا مِنْ لَدُنْكَ رَحْمَةً وَ هَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا . وَاكْتُبْ لَنَا فِي هٰـذِهِ الدُّنْيَا حَسَنَةً وَ فِي الاٰخِرَةِ إِنَّا هُدْنَـا إِلَيْكَ . رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًا وَ تَوَفَّنَا مُسْلِمِينَ . رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًا وَ ثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ . رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَ أَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ . رَبِّ بِمَا أَنْعَمْتَ عَلَيَّ فَلَنْ أَكُونَ ظَهِيرًا لِلْمُجْرِمِينَ . رَبِّ فَلَا تَجْعَلْنِي فِي الْقَوْمِ الظَّالِمِينَ . رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ . رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَحْمَةً وَ عِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَ قِهِمْ عَذَابَ الْجَحِيمِ . رَبَّنَا وَ أَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدْتَهُم وَ مَنْ صَلَحَ مِنْ آبَائِهِمْ وَ أَزْوَاجِهِمْ وَ ذُرِّيَّاتِهِمْ إِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ . وَ قِهِمُ السَّيِّئَاتِ وَ مَنْ تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ . رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَ عَلٰى وَالِدَيَّ وَ أَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَ أَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ . رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا . رَبَّنَا اغْفِرْ لِي وَ لِوَالِدَيَّ وَ لِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ . رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا. أَنتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَ أَنتَ خَيْرُ الْغَافِرِينَ . رَبَّنَا اغْفِرْ لَنَا وَ لِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ اٰمَنُوا رَبَّنَآ إِنَّكَ رَؤُوفٌ رَحِيمٌ . رَبَّنَآ اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّار . يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلٰى دِينِكَ . اَللّٰهُمَّ أَسْأَلُكَ حُبَّكَ وَ حُبَّ مَنْ يُحِبُّكَ وَ حُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ . اَللّٰهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ وَ زَيِّنْهُ فِي قُلُوبِنَا ، وَ كَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ ، وَاجْعَلْنَا مِنَ الرَّاشِدِينَ . اَللّٰهُمَّ أَنْتَ رَبِّي لَٓا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَ أَنَا عَبْدُكَ وَ أَنَا عَلٰى عَهْدِكَ وَ وَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَ أَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ . اَللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَ آجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ ، وَ أَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ عَاجِلِهِ وَ آجِلِهِ مَا عَلِمْتُ مِنْهُ وَ مَا لَمْ أَعْلَمْ ، وَ أَسْأَلُكَ الْجَنَّةَ وَ مَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ ، وَ أَعُوذُ بِكَ مِنَ النَّارِ وَ مَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ . وَ أَسْأَلُكَ خَيْرَ مَا سَأَلَكَ عَبْدُكَ وَ رَسُولُكَ مُحَمَّدٌ ، وَ أَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ عَبْدُكَ وَ رَسُولُكَ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ و َسَلَّمَ . اَللّٰهُمَّ اهْدِنِي لِأَحْسَنِ الْأَعْمَالِ وَ أَحْسَنِ الْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ وَ قِنِي سَيِّءَ الْأَعْمَالِ وَ سَيِّءَ الْأَخْلَاقِ لَا يَقِي سَيِّئَهَا إِلَّا أَنْتَ . اَللّٰهُمَّ أَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَ بِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَ بِفَضْلِكَ عَمَّنْ سِوَاكَ . اَللّٰهُمَّ اغْفِرْ لِي مَغْفِرَةً تُصْلِحُ بِهَا شَأْنِي فِي الدَّارَيْنِ ، وَارْحَمْنِي رَحْمَةً أَهْلَتْ لِي بِهَا دِينِي وَ دُنْيَايَ . اَللّٰهُمَّ أَنْتَ رَبِّي لَا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَ أَنَا عَبْدُكَ ، وَ أَنَا عَلَى عَهْدِكَ وَ وَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَ أَبُوءُ بِذَنْبِي فَاغْفِرْ لِي ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/arafat-duasi-turkce.mp3",
    audioArabic: "https://api.canlikulturizm.com/sound/arafat-duasi-arapca.mp3",
  },
  {
    id: 2,
    title: "Arafata Çıkarken Okunacak Dua",
    turkish:
      "Allah’ım Ümidim yalnızca sensin ve yalnızca sana dua ediyorum. Beni umduğum güzel şeylere ulaştır. Günahlarımı bağışla. Sana itaat edenlere lütfettiklerinden bana da ihsan eyle. Şüphesiz ki sen, her şeye gücü yetensin. Allah büyüktür. Hamd sınırsız bir şekilde ona mahsustur. Sabah akşam, Allah her türlü noksandan uzaktır. Buyur Allah’ım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur. Mina’dan Arafat’a Hareket Edince اَللّٰهُمَّ إِلَيْكَ تَوَجَّهْتُ ، وَ وَجْهَكَ الْكَرِيمَ أَرَدْتُ ، فَاجْعَلْ ذَنْبِي مَغْفُورًا ، وَ حَجِّي مَبْرُورًا ، وَارْحَمْنِي وَلَا تُخَيِّبْنِي إِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ . اَللّٰهُمَّ اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الاٰخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ ، لَا شَرِيكَ لَكَ . Allah’ım Yalnızca sana yöneldim ve yalnızca senin rızanı istiyorum. Günahlarımı bağışla. Haccımı kabul eyle. Bana merhamet et. Ümidimi boşa çıkarma. Şüphesiz sen, her şeye gücü yetensin. Allah’ım Bize dünyada da iyilik ver, Ahirette de iyilik ver. Bizi cehennem azabından koru. Buyur Allah’ım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur.",
    arabic:
      "اَللّٰهُمَّ إِيَّاكَ أَرْجُو ، وَ لَكَ أَدْعُو ، فَبَلِّغْنِي صَالِحَ أَمَلِي ، وَاغْفِرْ لِي ذُنُوبِي ، وَامْنُنْ عَلَىَّ بِمَا مَنَنْتَ بِهِ عَلٰى أَهْلِ طَاعَتِكَ إِنَّكَ عَلٰى كُلِّ شَيْىءٍ قَدِيرٌ . اَللهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلهِ كَثِيرًا وَ سُبْحَانَ اللهِ بُكْرَةً وَ أَصِيلًا . لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ ، لَا شَرِيكَ لَكَ .",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/arafata-cikarken-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/arafata-cikarken-arapca.mp3",
  },
  {
    id: 3,
    title: "Arafat'tan Müzdelifeye Giderken Okunacak Dua",
    turkish:
      "Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah’ım Yalnızca sana yöneliyorum. Tek ümidim sensin. Hac vazifelerimi kabul buyur. Beni muvaffak eyle. Burada bana istediğimden daha da fazla hayırlar ihsan eyle. Ümidimi boşa çıkarma. Şüphesiz ki sen, çok cömert ve kerem sahibi olan Allah’sın. Buyur Allah’ım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur.",
    arabic:
      "لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، اَللّٰهُمَّ إِلَيْكَ أَرْغَبُ ، وَ إِيَّاكَ أَرْجُو ، فَتَقَبَّلْ نُسُكِي وَ وَفِّقْنِي وَارْزُقْنِي فِيهِ مِنَ الْخَيْرِ أَكْثَرَ مَا أَطْلُبُ ، وَلَا تُخَيِّبْنِي إِنَّكَ أَنْتَ اللهُ الْجَوَادُ الْكَرِيمُ . لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لَا شَرِيكَ لَكَ .",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/arafattan-muzdelifeye-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/arafattan-muzdelifeye-arapca.mp3",
  },
  {
    id: 4,
    title: "İhramdan Çıktıktan Sonra Okunacak Dua",
    turkish:
      "Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur. Hamd, hac görevlerimizi yerine getirmemizi sağlayan Allah’a mahsustur. Allah’ım İmanımızı güçlendir. Bize hiçbir tereddüt taşımayan bir inanç ver. Bize başarı ver ve yardım et. Bizi, annelerimizi, babalarımızı ve bütün Müslümanları bağışla",
    arabic:
      "اَللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ . اَلْحَمْدُ لِلهِ الَّذِي قَضَى عَنَّا نُسُكَنَا. اَللّٰهُمَّ زِدْنَا إِيمَانًا وَ يَقِينًا وَ تَوْفِيقًا وَ عَوْنًا ، وَاغْفِرْ لَنَا ، وَ لِآبَائِنَا وَ أُمَّهَاتِنَا وَالْمُسْلِمِينَ أَجْمَعِينَ ",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/ihramdan-ciktiktan-sonra-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/ihramdan-ciktiktan-sonra-arapca.mp3",
  },
  {
    id: 5,
    title: "Kabeyi Görünce Okunacak Dua",
    turkish:
      "Allah’ım Bu Kâbe’nin şerefini, yüceliğini, saygınlığını ve heybetini artır. Hac ve umre yapanların şerefini, saygınlığını ve iyiliğini de artır. Allah’ım Sen esenlik sahibisin, esenlik sendendir. Ey Rabbimiz! Bizi esenlikle yaşat.",
    arabic:
      "اَللّٰهُمَّ زِدْ هٰذَا البَيْتَ تَشْرِيفًا وَ تَعْظِيمًا وَ تَكْرِيمًا وَ مَهَابَةً، وَ زِدْ مَنْ شَرَّفَهُ وكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفًا وَ تَكْرِيمًا وَ تَعْظِيمًا وَ بِرًّا، اَللّٰهُمَّ أَنْتَ السَّلَامُ وَ مِنْكَ السَّلَامُ، حَيِّنَا رَبَّنَا بِالسَّلَامِ",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/kabeyi-gorunce-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/kabeyi-gorunce-arapca.mp3",
  },
  {
    id: 6,
    title: "Mina'da Okunacak Dua",
    turkish:
      "Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur. Bizi hidayete ulaştıran Allah büyüktür. Hamd, bizi nimetlerle donatan Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. O tektir. Hiçbir ortağı yoktur. Mülk onundur. Hamd ona mahsustur. Hayat veren de, hayata son veren de O’dur. Hayır ancak onun elindedir. O, her şeye gücü yetendir. Allah’tan başka hiçbir ilah yoktur. İnkârcıların hoşuna gitmese de biz, yalnızca ona bağlanıp ancak ona kulluk ederiz. Allah’ım Haccımızı kabul eyle. Günahlarımızı bağışla. Çabamızı karşılıksız bırakma. Hamd, beni sağ salim buraya ulaştıran, beni İslâm ve imanla şereflendiren ve beni Muhammed Aleyhisselam’ın ümmetinden eyleyen Allah’a mahsustur. Allah’ım Veli kullarına lütfettiğin şeyleri bana da ihsan etmeni ve beni salih kullarından eylemeni niyaz ediyorum. Ey merhamet edenlerin en merhametlisi! Allah’ım Hüsrana uğramaktan, günahtan, mahrumiyetten, aklım ve dinim hususunda musibete düşmekten sana sığınırım. Rabbim! Şeytanların yönlendirmelerinden ve bana yaklaşmalarından sana sığınırım.",
    arabic:
      "اَللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ ، اَللهُ أَكْبَرُ عَلٰى مَا هَدَانَا ، وَالْحَمْدُ لِلهِ عَلٰى مَا أَوْلَانَا . لَٓا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْيِي وَ يُمِيتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ . لَٓا إِلٰهَ إِلَّا اللهُ ، وَلَا نَعْبُدُ اِلَّا إِيَّاهُ ، مُخْلِصِينَ لَهُ الدّىِنَ وَلَوْ كَرِهَ الْكَافِرُونَ . اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَ سَعْيًا مَشْكُورًا وَ ذَنْبًا مَغْفُورًا . اَلْحَمْدُ لِلهِ الَّذِي بَلَّغَنِيهَا سَالِمًا مُعَافِيًا ، وَ شَرَّفَنِي بِاْلإِسْلَامِ وَالْإِيمَانِ وَ جَعَلَنِي مِنْ أُمَّةِ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَ سَلَّمَ . اَللّٰهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَمُنَّ عَلَىَّ بِمَا مَنَنْتَ بِهِ عَلٰى أَوْلِيَائِكَ وَ أَنْ تَجْعَلَنِي مِنْ عِبَادِكَ الصَّالِحِينَ يَا أَرْحَمَ الرَّاحِمِينَ . اَللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَغْرَمِ وَالْمَأْثَمِ وَالْحِرْمَانِ وَالْمُصِيبَةِ فِي الْعَقْلِ وَ الدِّينِ . رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَ أَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/minada-okunacak-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/minada-okunacak-arapca.mp3",
  },
  {
    id: 7,
    title: "Müzdelife Vakfesinde Okunacak Dua",
    turkish:
      "Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. O tektir. O’nun hiçbir ortağı yoktur. Mülk ona aittir. Hamd ona mahsustur. O, her şeye gücü yetendir. Buyur Allah’ım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur. Rabbimiz! Bize dünyada da iyilik ver, Ahirette de iyilik ver. Bizi cehennem azabından koru. Allah’ım Hamd bütünüyle sana mahsustur. Bütün mükemmellik sana aittir. Yücelik bütünüyle senindir. Büyüklük bütünüyle sana aittir. Allah’ım Nimetler sayısınca sana hamd olsun. Bildiğim bilmediğim bütün nimetlerinden dolayı, yüce zâtına layık bildiğim bilmediğim bütün övgülerle her durumda sana hamd ederim. Allah’ım Peygamber efendimize ve onun ailesine salat ü selam olsun. Allah’ım Şimdiye kadar işlediğim günahlarımı bağışla. Bundan sonra günahlardan beni koru. Ey lütuf ve azamet sahibi! Razı olacağın iyi işler yapmamı bana nasip eyle. Allah’ım Arafat’ı görmeyi ve orada vakfe yapmayı bize nasip ettiğin gibi, burada da gösterdiğin şekilde seni anmayı bize nasip eyle. Bizi bağışla. Bize merhamet eyle. Nitekim “Arafat’tan indiğinizde, Meş’ar-ı Haram’ın bulunduğu yerde (Müzdelife’de), Allah’ı zikredin. Onu, size gösterdiği şekilde anın. Şüphesiz siz daha önce yanlış yolda idiniz. Sonra insanların akın ettiği yerden siz de akın edin. Allah’tan bağışlama dileyin. Şüphesiz Allah çok bağışlayandır, çok merhamet edendir.” sözünle bunu bize vadetmiştin. Senin va’din ise haktır. Allah’ım Bu mübarek yerde tüm hayırları bana lütfetmeni, durumumu bütünüyle düzeltmeni, dostlarına lütfettiğin şeyleri bana da ihsan etmeni ve tüm şerleri benden uzaklaştırmanı niyaz ediyorum. Çünkü bunu senden başka hiç kimse yapamaz, bunun en iyisini sen yaparsın, Ey merhametlilerin en merhametlisi! Allah’ım Beni kovulmuş şeytandan koru. Her türlü kötülükten muhafaza buyur. Bana yeterince rızık ver ve bunu hakkımda bereketli kıl. Allah’ım Beni sana yol bulanların en iyilerinden eyle. Ey Âlemlerin Rabbi! Sana kavuşuncaya kadar beni bu dosdoğru yoldan ayırma.",
    arabic:
      "اَللهُ أَكْبَرُ اَللهُ أَكْبَرُ لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ . لَٓا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ ، وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ . لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ ، لَا شَرِيكَ لَكَ . رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ. اَللّٰهُمَّ لَكَ الْحَمْدُ كُلُّهُ ، وَلَكَ الْكَمَالُ كُلُّهُ ، وَلَكَ الْجَلَالُ كُلُّهُ ، وَلَكَ التَّقْدِيسُ كُلُّهُ . اَللّٰهُمَّ لَكَ الْحَمْدُ حَمْدًا يُوَافِي نِعَمَكَ ، وَ يُكَافِئُ مَزِيدَكَ ، اَلْحَمْدُ لَكَ بِجَمِيعِ مَحَامِدِكَ مَا عَلِمْتُ مِنْهَا وَ مَا لَمْ أَعْلَمْ عَلٰى جَمِيعِ نِعَمِكَ مَا عَلِمْتُ مِنْهَا وَمَا لَمْ أَعْلَمْ ، وَ عَلٰى كُلِّ حَالٍ . اَللّٰهُمَّ صَلِّ وَ سَلِّمْ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِ مُحَمَّدٍ . اَللّٰهُمَّ اغْفِرْ لِي جَمِيعَ ماَ أَسْلَفْتُهُ ، وَاعْصِمْنِي فِيمَا بَقِيَ ، وَارْزُقْنِي عَمَلًا صَالِحًا تَرْضَى بِهِ عَنِّي يَا ذَا الْفَضْلِ الْعَظِيمِ . اَللّٰهُمَّ كَمَا وقَفْتَنَا فِيهِ وَ أَرَيْتَنَا إِيَّاهُ ، فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا ، وَاغْفِرْ لَنَا وَارْحَمْنَا كَماَ وَعَدْتَنَا بِقَوْلِكَ وَ قَوْلُكَ الْحَقُّ  فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ وَاذْكُرُوهُ كَمَا هَدَاكُمْ و إِنْ كُنْتُمْ مِنْ قَبْلِهِ لَمِنَ الضَّآلِّينَ ، ثُمَّ أَفِيضُوا مِنْ حَيْثُ أَفَاضَ النَّاسُ وَاسْتَغْفِرُوا اللهَ إِنَّ اللهَ غَفُورٌ رَحِيمٌ . اَللّٰهُمَّ إِنّي أَسْأَلُكَ أَنْ تَرْزُقَنِي فِي هٰذَا الْمَكَانِ جَوَامِعَ الْخَيْرِ كُلِّهِ ، وَ أَنْ تُصْلِحَ شَأْنِي كُلَّهُ ، وَ أَنْ تَمُنَّ عَلَىَّ بِمَا مَنَنْتَ بِهِ عَلٰى أَوْلِيَائِكَ وَ أَنْ تَصْرِفَ عَنِّي الشَّرَّ كُلَّهُ ، فَإِنَّهُ لَا يَفْعَلُ ذٰلِكَ غَيْرُكَ ، وَلَا يَجُودُ بِهِ إِلَّا أَنْتَ يَا أَرْحَمَ الرَّاحِمِينَ . اَللّٰهُمَّ أَعِذْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ ، وَ أَعِذْنِي مِنْ كُلِّ سُوءٍ ، وَ قَنِّعْنِي بِمَا رَزَقْتَنِي وَ بَارِكْ لِي فِيهِ . اَللّٰهُمَّ اجْعَلْنِي مِنْ أَكْرَمِ وَفْدِكَ عَلَيْكَ ، وَ أَلْزِمْنِي سَبِيلَ الْاِسْتِقَامَةِ حَتَّى أَلْقَاكَ يَا رَبَّ الْعَالَمِينَ .",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/muzdelife-vakfesinde-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/muzdelife-vakfesinde-arapca.mp3",
  },
  {
    id: 8,
    title: "Salavat-ı Şerife",
    turkish:
      "اَللّٰهُمَّ صَلِّ عَلٰى نَبِيِّنَا مُحَمَّدٍ اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى إِبْرَاهِيمَ وَعَلٰى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى إِبْرَاهِيمَ وَعَلٰى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اَللّٰهُمَّ هٰذَا حَرَمُكَ وَ أَمْنُكَ فَحَرِّمْنِي عَلَى النَّارِ، وَائْمَنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ، وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَ أَهْلِ طَاعَتِكَ.",
    arabic:
      "اَللّٰهُمَّ صَلِّ عَلٰى نَبِيِّنَا مُحَمَّدٍ Allah’ım Peygamberimiz Hz. Muhammed’e salat ve selam eyle! Yahut: اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى إِبْرَاهِيمَ وَعَلٰى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى إِبْرَاهِيمَ وَعَلٰى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ. Allah’ım Hz. İbrahim ve ailesine salat ve selam eylediğin gibi, Hz. Muhammed ve ailesine de salat ve selam eyle! Sen övgüye layıksın, şanı yüce olansın. Allah’ım Hz. İbrahim ve ailesini mübarek kıldığın gibi, Hz. Muhammed ve ailesini de mübarek kıl! Sen övgüye layıksın, şanı yüce olansın. اَللّٰهُمَّ هٰذَا حَرَمُكَ وَ أَمْنُكَ فَحَرِّمْنِي عَلَى النَّارِ، وَائْمَنِّي مِنْ عَذَابِكَ يَوْمَ تَبْعَثُ عِبَادَكَ، وَاجْعَلْنِي مِنْ أَوْلِيَائِكَ وَ أَهْلِ طَاعَتِكَ. Allah’ım Burası senin güvenli kıldığın Harem bölgendir. Burayı Harem kıldığın gibi benim vücudumu da Cehennem ateşine haram kıl! Kullarını dirilteceğin gün, beni azabından emin eyle, beni dostlarından ve sana itaat edenlerden eyle.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/salavati-serife-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/salavati-serife-arapca.mp3",
  },
  {
    id: 9,
    title: "Şeytan Taşlama Duası",
    turkish:
      "Allah’ın adıyla! Allah büyüktür! Kahrolsun şeytan ve taraftarları! Allah’ım Haccımızı kabul eyle. Günahlarımızı bağışla. Çabamızı karşılıksız bırakma. Amellerimizi salih ve makbul eyle. Onları bitmez tükenmez bir kazanca dönüştür. Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur.",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ رَغْمًا لِلشَّيْطَانِ وَ حِزْبِهِ . اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَ ذَنْبًا مَغْفُورًا وَ سَعْيًا مَشْكُورًا وَ عَمَلًا صَالِحًا مَقْبُولًا وَ تِجَارَةً لَنْ تَبُورَ . اَللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/seytan-taslamada-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/seytan-taslamada-arapca.mp3",
  },
  {
    id: 10,
    title: "Tehlil Duası",
    turkish:
      "Allah’tan başka hiçbir ilah yoktur. O tektir. O’nun hiçbir ortağı yoktur. Mülk ona aittir. Hamd ona mahsustur. O’nun her şeye gücü yeter.",
    arabic:
      "ا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/tehlil-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/tehlil-arapca.mp3",
  },
  {
    id: 11,
    title: "Tekbir Duası",
    turkish:
      "Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur.",
    arabic:
      "للهُ أَكْبَرُ، اَللهُ أَكْبَرُ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/tekbir-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/tekbir-arapca.mp3",
  },
  {
    id: 12,
    title: "Tesbih Duası",
    turkish:
      "Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Allah, her türlü noksandan uzaktır. Ona hamd ederim. Yüce Allah her türlü noksandan uzaktır.",
    arabic:
      "بْحَانَ اللهِ، وَالْحَمْدُ لِلهِ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. سُبْحَانَ اللهِ وَ بِحَمْدِهِ، سُبْحَانَ اللهِ الْعَظِيمِ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/tesbih-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/tesbih-arapca.mp3",
  },
  {
    id: 13,
    title: "Telbiye Duası",
    turkish:
      "(Lebbeyk Allahümme lebbeyk, lebbeyke lâ şerîke leke lebbeyk, innel hamde ve’n-ni’mete leke ve’l mülk, lâ şerîke lek) Buyur Allahım buyur! Emrindeyim buyur! Senin hiçbir ortağın yoktur. Emrindeyim buyur! Şüphesiz hamd sana mahsustur. Nimet de senin, mülk de senindir. Senin hiçbir ortağın yoktur.",
    arabic:
      "لَبَّيْكَ اَللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ، لَا شَرِيكَ لَكَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/telbiye-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/telbiye-arapca.mp3",
  },
  {
    id: 14,
    title: "Teşrik Günlerinde Okunacak Dua",
    turkish:
      "Allah büyüktür. Allah büyüktür. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Allah büyüktür. Hamd Allah’a mahsustur. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Allah’tan başka hiçbir ilah yoktur. O tektir. O’nun hiçbir ortağı yoktur. Mülk ona aittir. Hamd ona mahsustur. O’nun her şeye gücü yeter.",
    arabic:
      "اَللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ ، لَٓا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ، اَللهُ أَكْبَرُ وَ لِلهِ الْحَمْدُ . سُبْحَانَ اللهِ وَالْحَمْدُ لِلهِ وَلَٓا إِلٰهَ إِلَّا اللهُ وَللهُ أَكْبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ . لَٓا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ .",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/tesrik-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/tesrik-arapca.mp3",
  },
  {
    id: 15,
    title: "Vasıtaya Binerken Okunacak Dua",
    turkish:
      "Allah’ın adıyla (biniyorum). O’nun adıyla yürür, O’nun adıyla dururuz. Şüphesiz Rabbim çok bağışlayandır, çok merhamet edendir. Bunu bize lütfeden Allah, her türlü noksandan uzaktır. Onun lütfu olmasaydı, biz buna güç yetiremezdik. Şüphesiz biz Rabbimize döneceğiz. Allah’ım Bu yolculuğumuzda senden iyilik, takva ve rızana uygun işler istiyoruz. Allah’ım Yolculuğumuzu bize kolaylaştır. Uzağını yakın eyle. Allah’ım Yolculukta sahibimiz, ailemize vekilimiz sensin. Allah’ım Yolculuğun sıkıntılarından, kötü duruma düşmekten, dönüşte malımı ve ailemi kötü bir durumda bulmaktan sana sığınırım. İhrama girerken ve girdikten sonra bolca telbiye, tekbir, tehlil, tesbih ve salavat okunur.",
    arabic:
      "بِسْمِ اللهِ مَجْرَاهَا وَ مُرْسَاهَا إِنَّ رَبِّي لَغَفُورٌ رَحِيمٌ. سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَ إِنَّا إِلٰى رَبِّنَا لَمُنْقَلِبُونَ. اَللّٰهُمَّ إِنَّا نَسْأَلُكَ فِى سَفَرِنَا هٰذَا الْبِرَّ وَالتَّقْوَى، وَ مِنَ الْعَمَلِ مَا تَرْضَى، اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هٰذَا، وَاطْوِ عَنَّا بُعْدَهُ. اَللّٰهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ. اَللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَ كَاٰبَةِ الْمَنْظَرِ وَ سُوءِ الْمُنْقَلِبِ فِي الْمَالِ وَالْأَهْلِ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/vasitaya-binerken-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/vasitaya-binerken-arapca.mp3",
  },
  {
    id: 16,
    title: "Yola Çıkarken Okunacak Dua",
    turkish:
      "Yola çıkarken iki rekât namaz kılıp, ardından Ayete’l-Kürsi okuyup Allah’a hamd ve Rasûlullah’ı salat-ü selamdan sonra kişi şu duayı okuyabilir: Rabbim! (Gireceğim yere) doğruluk ve esenlik içinde girmemi sağla. (Çıkacağım yerden de) beni doğruluk ve esenlik içinde çıkar. Bana yardımcı bir kuvvet ver. Allah’ım Yalnız senden yardım diler, yalnız sana güvenirim. Allah’ım bu işimin zorluğunu ve yolculuğumu kolaylaştır. Bana, dilediğimden fazla iyilik lütfet. Her türlü kötülüğü benden uzaklaştır. Rabbim! Gönlüme genişlik, işlerime kolaylık ver. Allah’ım Kendimi, dinimi, ailemi, yakınlarımı, dünyada ve ahirette bize lütfettiğin nimetlerin hepsini sana emanet ediyorum. Ey keremi bol Rabbim! Bizi her türlü kötülükten koru.",
    arabic:
      "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَ أَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا اَللّٰهُمَّ بِكَ أَسْتَعِينُ وَ عَلَيْكَ أَتَوَكَّلُ، اَللّٰهُمَّ ذَلِّلْ لِى صُعُوبَةَ أَمْرىِ، وَ سَهِّلْ عَلَىَّ مَشَقَّةَ سَفَرِى، وَارْزُقْنِى مِنَ الْخَيْرِ أَكْثَرَ مِمَّا أَطْلُبُ، وَاصْرِفْ عَنِّى كُلَّ شَرٍّ. رَبِّ اشْرَحْ لِى صَدْرِى وَ يَسِّرْ لِى أَمْرِى، اَللّٰهُمَّ إِنّىِ أَسْتَحْفِظُكَ وَ أَسْتَوْدِعُكَ نَفْسِي وَ دِينِي وَ أَهْلِي وَ أَقَارِبِي وَ كُلَّ مَا أَنْعَمْتَ عَلَىَّ وَ عَلَيْهِمْ بِهِ مِنْ اٰخِرَةٍ وَ دُنْيَا، فَاحْفَظْنَا أَجْمَعِينَ مِنْ كُلِّ سُوءٍ يَا كَرِيمُ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/yola-cikarken-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/yola-cikarken-arapca.mp3",
  },
  {
    id: 17,
    title: "Zemzem İçerken Okunacak Dua",
    turkish:
      "Allah’ım Senden faydalı ilim, bol rızık ve her türlü dert ve hastalığa karşı şifa niyaz ediyorum.",
    arabic:
      "اَللّٰهُمَّ إِنِّى أَسْأَلُكَ عِلْمًا نَافِعًا وَ رِزْقًا وَاسِعًا وَ شِفَاءً مِنْ كُلِّ دَاءٍ وَ سَقَمٍ",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/zemzem-icerken-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/zemzem-icerken-arapca.mp3",
  }
];

const HajjDuasScreen = () => {
  const [selectedDua, setSelectedDua] = useState<DuaType | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeAudioKey, setActiveAudioKey] = useState<"turkish" | "arabic" | null>(null);

  const openModal = (dua: DuaType) => {
    setSelectedDua(dua);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDua(null);
    setModalVisible(false);
    setActiveAudioKey(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {duas.map((dua) => (
          <TouchableOpacity
            key={dua.id}
            style={styles.duaCardWrapper}
            onPress={() => openModal(dua)}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardLeft}>
                <Text style={styles.duaTitle}>{dua.title}</Text>
              </View>
              <Text style={styles.duaInfo}>Ses - Metin</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.centeredModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <ScrollView style={styles.duaContent}>
              <Text style={styles.label}>Arapça:</Text>
              <Text style={styles.text}>{selectedDua?.arabic}</Text>

              <Text style={styles.label}>Türkçe Anlamı:</Text>
              <Text style={styles.text}>{selectedDua?.turkish}</Text>
            </ScrollView>

            {selectedDua && (
              <View style={styles.audioPlayer}>
                <Text style={styles.audioLabel}>Sesli Okuma (Türkçe)</Text>
                <AudioPlayer
                  audioUri={selectedDua.audioTurkish}
                  shouldPlay={activeAudioKey === "turkish"}
                  onPlay={() => setActiveAudioKey("turkish")}
                  onStop={() => setActiveAudioKey(null)}
                />
              </View>
            )}

            {selectedDua && (
              <View style={styles.audioPlayer}>
                <Text style={styles.audioLabel}>Sesli Okuma (Arapça)</Text>
                <AudioPlayer
                  audioUri={selectedDua.audioArabic}
                  shouldPlay={activeAudioKey === "arabic"}
                  onPlay={() => setActiveAudioKey("arabic")}
                  onStop={() => setActiveAudioKey(null)}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>

      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 80,
  },
  scrollContainer: {
    padding: 16,
  },
  duaCardWrapper: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  duaCard: {
    height: 80,
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
  },
  imageStyle: {
    resizeMode: "cover",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 1,
  },
  cardLeft: {
    flex: 1,
    marginRight: 12,
  },
  duaTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    marginBottom: 6,
  },
  duaDescription: {
    fontSize: 14,
    color: "#ddd",
  },
  duaInfo: {
    fontSize: 12,
    color: "#bbb",
    alignSelf: "flex-end",
  },
  centeredModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    width: "90%",
    height: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 22,
    color: "#333",
  },
  duaContent: {
    marginTop: 30,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    color: "#222",
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    color: "#444",
  },
  audioPlayer: {
    marginTop: 10,
  },
  audioLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#222",
  },
});


export default HajjDuasScreen;
