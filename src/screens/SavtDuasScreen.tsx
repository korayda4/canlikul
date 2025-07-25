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
    id: 18,
    title: "1. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber. Allah’ım sana inanarak, kitabını tasdikleyerek, sana verdiğim sözü tutarak ve peygamberinin sünnetine uyarak işte buradayım. Allah’ım, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Rabbimiz, (bunu) bizden kabul eyle. Sen her şeyi işiten ve bilensin. Rabbimiz! Bizi sana teslim olmuş kimseler kıl. Soyumuzdan da sana teslim olmuş bir ümmet kıl. Bize ibadet yerlerini ve ilkelerini göster. Tövbemizi kabul et. Çünkü sen, tövbeleri çok kabul edensin, çok merhametli olansın. Allah’ım gayretimizi boşa çıkarma, günahlarımızı bağışla, amellerimizi Salih ve makbul eyle, manevi kazancımızı asla kesata uğratma. Allah’ım Sen kullarını kutsal beytine çağırdın. Ben de rızanı istemeye geldim. Bunu bana ihsan ettin. Beni bağışla. Bana merhamet et. Bana sağlık afiyet ver ve beni affet. Senin her şeye gücün yeter. Allah’ım Ben Senin kulunum ve ziyaretine geldim. Her ziyaretçinin ziyaret edilen üzerinde hakkı vardır. Sen ise ziyaret edilenlerin en hayırlısısın. Beni bağışla, bana merhamet et ve beni Cehennem ateşinden kurtar. Rabbimiz! Bize dünyada da, ahirette de güzellik ver ve bizi cehennem azabından koru. İyilerle birlikte bizi cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ. رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَ مِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ ، وَ أَرِنَا مَنَاسِكَنَا وَ تُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ. اَللّٰهُمَّ اجْعَلْهُ سَعْيًا مَشْكُورًا ، وَ ذَنْبًا مَغْفُورًا ، وَ عَمَلًا صَالِحًا مَقْبُولًا ، وَ تِجَارَةً لَنْ تَبُورَ. اَللّٰهُمَّ إِنَّكَ دَعَوْتَ عِبَادَكَ إِلٰى بَيْتِكَ الْحَرَامِ ، وَ قَدْ جِئْتُ طَالِبًا مَرْضَاتَكَ ، وَ أَنْتَ مَنَنْتَ عَلَيَّ بِذَلِكَ ، فَاغْفِرْ لِي وَ ارْحَمْنِي وَعَافِنِي وَاعْفُ عَنِّي ، إِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيرٌ. اَللّٰهُمَّ إِنِّي عَبْدُكَ وَ زَائِرُكَ وَ لِكُلِّ زَائِرٍ حَقٌّ عَلٰى مَزُورٍ وَ أَنْتَ خَيْرُ مَزُورٍ ، فَأَسْأَلُكَ أَنْ تَغْفِرَ لِي ، وَ تَرْحَمَنِي ، وَ تَفُكَّ رَقَبَتِي مِنَ النَّارِ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ ، وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ ، يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/1.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/1.savt-arapca.mp3",
  },
  {
    id: 19,
    title: "2. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım… Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Gönlüme genişlik ver, işimi kolaylaştır. Rabbim! Ben haddimi aştım, beni bağışla. Senden başka hiçbir ilah yoktur. Seni tenzih ederim Gerçekten ben zalimlerden oldum. Allah’ım, bu mukaddes ev senin evindir. Bu Harem senin haremindir. Burası senin güvenli kıldığın yerdir. Kullar ise senin kulundur. Ben de senin bir kulunum ve kulunun oğluyum. Bir yığın günahla ve birçok kötü işler yapmış olarak sana geldim. Allah’ım Burası ateşten sana sığınma yeridir. Tenimizi ve vücudumuz cehennem ateşine haram kıl. Sen çok bağışlayan ve çok merhamet edensin. Rabbim! Beni bağışla ve merhamet et. Sen merhamet edenlerin en hayırlısısın. Rabbim! İlmimi ve anlayışımı artır ve beni salihlere erdir. Allah’ım, İmanı bize sevdir ve onunla kalplerimizi süsle. Küfrü, yoldan çıkmayı, azgınlığı ve itaatsizliği bize çirkin göster. Bizi doğrulardan eyle. Allah’ım Kullarını dirilteceğin günde bizi azabından koru. Allah’ım gayretimizi boşa çıkarma, günahlarımızı bağışla, amellerimizi salih ve makbul eyle. Ticaretimizi asla kesata uğratma. Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ. سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. رَبِّ اشْرَحْ لِي صَدْرِي وَ يَسِّرْ لِي أَمْرِي. رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي. لَٓا إِلٰهَ اِلَّٓا أَنْتَ سُبْحَانَكَۗ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ. اَللّٰهُمَّ إِنَّ هٰذَا الْبَيْتَ بَيْتُكَ ، وَالْحَرَمَ حَرَمُكَ ، وَالْأَمْنَ أَمْنُكَ ، وَالْعَبْدَ عَبْدُكَ ، و أَنَا عَبْدُكَ وَابْنُ عَبْدِكَ ، أَتَيْتُكَ بِذُنُوبٍ كَثِيرَةٍ ، وَ أَعْمَالٍ سَيِّئَةٍ ، وَ هٰذَا مَقَامُ الْعَائِذِ بِكَ مِنَ النَّارِ ، فَحَرِّمْ لُحُومَنَا ، وَ بَشَرَتَنَا عَلَى النَّارِ ، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ. رَبِّ اغْفِرْ وَارْحَمْ وَ أَنْتَ خَيْرُ الرَّاحِمِينَ. رَبِّ زِدْنِي عِلْمًا و فَهْمًا وَ أَلْحِقْنِي بِالصَّالِحِينَ. اَللّٰهُمَّ حَبِّبْ إِلَيْنَا الْإِيمَانَ ، وَ زَيِّنْهُ فِي قُلُوبِنَا ، وَ كَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ ، وَاجْعَلْنَا مِنَ الرَّاشِدِينَ. اَللّٰهُمَّ اجْعَلْهُ سَعْيًا مَشْكُورًا ، وَ ذَنْبًا مَغْفُورًا ، وَ عَمَلًا صَالِحًا مَقْبُولًا ، وَ تِجَارَةً لَنْ تَبُورَ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/2.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/2.savt-arapca.mp3",
  },
  {
    id: 20,
    title: "3. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize acımazsan, mutlaka ziyan edenlerden oluruz. Ey Rabbimiz! Biz inandık, bizi bağışla, bize merhamet et, sen merhamet edenlerin en hayırlısısın. Allah’ım Sen benim Rabbimsin. Senden başka hiçbir ilâh yoktur. Beni yaratan sensin. Ben senin kulunum ve gücüm yettiğince sana verdiğim söze ve ahdime bağlı kalacağım. İşlediğim günahların şerrinden sana sığınıyorum. İhsan ettiğin nimetleri ikrar ediyor, günahlarımı sana itiraf ediyorum. Beni affet; çünkü senden başka hiç kimse günahları affedemez. Allah’ım Hıyanetten, küfürden, şirkten, İslâm’ın emir ve yasaklarına karşı gelmekten, münafıklıktan, riyadan ve kötü ahlâktan sana sığınırım. Allah’ım Faydasız ilimden, korkmayan kalpten, doymayan nefisten, ağlamayan gözden ve kabul olmayan duadan sana sığınırım. Allah’ım gayretimizi boşa çıkarma, günahlarımızı bağışla, amellerimizi salih ve makbul eyle. Asla zarar etmeyecek manevi bir ticaret nasıp et. Ey kalplerde olanı bilen Allah’ım! Bizi karanlıklardan aydınlığa çıkar. Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ. سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. رَبَّنَا ظَلَمْنَٓا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَ تَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ. رَبَّنَٓا إِنَّنَٓا اٰمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَ أَنْتَ خَيْرُ الرَّاحِمِينَ. اَللّٰهُمَّ أَنْتَ رَبِّي لَٓا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَ أَنَا عَبْدُكَ وَ أَنَا عَلٰى عَهْدِكَ وَ وَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَ أَبُوءُ لَكَ بِذَنْبِي ، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. اَللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخِيَانَةِ وَالْكُفْرِ وَالشِّرْكِ وَالشِّقَاقِ وَالنِّفَاقِ وَالرِّيَاءِ وَسُوءِ الْأَخْلَاقِ. اَللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ ، وَ مِنْ قَلْبٍ لَا يَخْشَعُ ، وَ مِنْ نَفْسٍ لَا تَشْبَعُ، وَ مِنْ عَيْنٍ لَا تَدْمَعُ ، وَ مِنْ دُعَاءٍ لَا يُسْتَجَابُ. اَللّٰهُمَّ اجْعَلْهُ سَعْيًا مَشْكُورًا ، وَ ذَنْبًا مَغْفُورًا، وَ عَمَلًا صَالِحًا مَقْبُولًا ، وَ تِجَارَةً لَنْ تَبُورَ. يَا عَالِمَ مَا فِي الصُّدُورِ ، أَخْرِجْنِي يَا اَللهُ مِنَ الظُّلُمَاتِ إِلَي النُّورِ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/3.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/3.savt-arapca.mp3",
  },
  {
    id: 21,
    title: "4. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Allah’ım Beni rahmetine ulaştır. Bana, bağışlamana vesile olacak işler yapmayı nasip et. Her türlü günahtan uzak kıl. Her türlü iyiliği elde etmeyi nasip eyle, Cennete kavuştur, Cehennem ateşinden kurtar. Rabbim! Verdiğin rızıkla beni kanaatkâr kıl ve bana verdiklerini hakkımda hayırlı ve bereketli eyle. Elde edemediğim her hayırlı şeyin yerine daha iyisini nasip et. Ey Rabbimiz! Unutur, ya da yanılırsak bizi sorumlu tutma! Ey Rabbimiz! Bize, bizden öncekilere yüklediğin gibi ağır yük yükleme. Ey Rabbimiz! Bize gücümüzün yetmediği şeyleri yükleme! Bizi affet, bizi bağışla, bize acı! Sen bizim Mevla’mızsın. Kâfirler topluluğuna karşı bize yardım et. Allah’ım Kalbimi nifaktan, amelimi riyadan, dilimi yalandan, gözümü hıyanetten temizle. Çünkü sen gözlerin hain bakışını ve kalplerin gizlediğini bilirsin. Allah’ım Beni işlerin en güzeline ve ahlâkın en güzeline eriştir. Bunlara ancak sen eriştirirsin. Kötü işlerden ve kötü ahlâktan beni koru. Bunlardan da beni ancak sen korursun. Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ. سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. اَللّٰهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ ، وَ عَزَائِمَ مَغْفِرَتِكَ ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ ، وَالْفَوْزَ بالْجَنَّةِ ، وَالنَّجَاةَ مِنَ النَّارِ. رَبِّ قَنِّعْنِي بِمَا رَزَقْتَنِي ، وَ بَارِكْ لِي فِيمَا أَعْطَيْتَنِي ، وَاخْلُفْ عَلَيَّ كُلَّ غَائِبَةٍ لِي مِنْكَ بِخَيْرٍ. رَبَّنَا لَا تُؤَاخِذْنَٓا إِنْ نَسِينَٓا أَوْ أَخْطَأْنَا ، رَبَّنَا وَ لَا تَحْمِلْ عَلَيْنَٓا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ، وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ، أَنْتَ مَوْلٰينَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. اَللّٰهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ ، وَ عَمَلِي مِنَ الرِّيَاءِ ، وَ لِسَانِي مِنَ الْكَذِبِ ، وَ عَيْنِي مِنَ الْخِيَانَةِ ، فَإِنَّكَ تَعْلَمُ خَائِنَةَ الأَعْيُنِ وَ مَا تُخْفِي الصُّدُورُ. اَللّٰهُمَّ اهْدِنِي لِأَحْسَنِ الْأَعْمَالِ وَ أَحْسَنِ الْأَخْلَاقِ ، لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ ، وَ قِنِي سَيِّءَ الْأَعْمَالِ وَ سَيِّءَ الْأَخْلَاقِ ، لَا يَقِي سَيِّئَهَا إِلَّا أَنْتَ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/4.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/4.savt-arapca.mp3",
  },
  {
    id: 22,
    title: "5. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Rabbim! Bana, katından temiz bir nesil bahşet. Şüphesiz sen duayı hakkıyla işitensin. Rabbim! Beni namaza devam eden bir kimse eyle. Soyumdan da böyle kimseler yarat. Rabbimiz duamı kabul eyle. Rabbim! Bana Salihlerden olacak bir çocuk bağışla. Benim canımı Müslüman olarak al ve beni iyilere kat. Rabbimiz! Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl ve bizi Allah`a karşı gelmekten sakınanlara önder eyle. Allah’ım Hiçbir gölgenin olmadığı ve yüce zatından başka hiçbir şeyin baki kalmadığı günde beni Arşının gölgesinde gölgelendir. Muhammed Aleyhisselam`ın havz`ından öyle bir afiyetle içir ki bir daha ebediyen susuzluk çekmeyeyim. Allah’ım Senden, bildiğim ve bilmediğim geçmiş ve gelecekteki tüm iyilikleri bana lütfetmeni niyaz ediyorum. Bildiğim ve bilmediğim, geçmiş ve gelecekteki tüm şerlerden de sana sığınıyorum. Senden cenneti ve ona ulaştıracak her türlü söz ve ameli nasip etmeni diliyorum. Cehennemden ve ona götürecek her türlü söz ve amelden de sana sığınıyorum. Allah’ım kulun ve elçin Hz. Muhammed’in senden istediği bütün hayırlardan ben de istiyorum. Kulun ve elçin Hz. Muhammed’in sana sığındığı bütün şerlerden ben de sana sığınıyorum. Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ. سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً ، إِنَّكَ سَمِيعُ الدُّعَٓاءِ. رَبِّ اجْعَلْنِي مُقِيمَ الصَّلٰوةِ وَ مِنْ ذُرِّيَّتِي رَبَّنَا وَ تَقَبَّلْ دُعَٓاءِ. رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ. تَوَفَّنِي مُسْلِمًا وَ أَلْحِقْنِي بِالصَّالِحِينَ. رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَ ذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا. اَللّٰهُمَّ أَظِلَّنِي تَحْتَ ظِلِّ عَرْشِكَ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّكَ ، وَلَا بَاقِيَ إِلَّا وَجْهُكَ ، وَاسْقِنِي مِنْ حَوْضِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَ سَلَّمَ شَرْبةً هَنِيئَةً مَرِيئَةً لَا أَظْمَأُ بَعْدَها أَبَداً. اَللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَ آجِلِهِ ، مَا عَلِمْتُ مِنْهُ وَ مَا لَمْ أَعْلَمْ ، وَ أَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ ، عَاجِلِهِ وَ آجِلِهِ مَا عَلِمْتُ مِنْهُ وَ مَا لَمْ أَعْلَمْ ، وَ أَسْأَلُكَ الْجَنَّةَ وَ مَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ ، وَ أَعُوذُ بِكَ مِنَ النَّارِ وَ مَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ. وَ أَسْأَلُكَ خَيْرَ مَا سَأَلَكَ عَبْدُكَ وَ رَسُولُكَ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَ سَلَّمَ ، وَ أَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ عَبْدُكَ وَ رَسُولُكَ مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَ سَلَّمَ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/5.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/5.savt-arapca.mp3",
  },
  {
    id: 23,
    title: "6. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Rabbimiz! Bize kendi katından bir rahmet ver ve içinde bulunduğumuz şu durumda bizim kurtuluş ve doğruluğa ulaşmamızı kolaylaştır. Bizim için bu dünyada da bir iyilik yaz, ahirette de. Çünkü biz sana varan doğru yola yöneldik. Rabbimiz! Üzerimize sabır yağdır ve müslüman olarak bizim canımızı al. Rabbimiz! Üzerimize sabır yağdır, ayaklarımızı sağlam bastır ve şu kâfir kavme karşı bize yardım et. Rabbimiz! Bizi ve bizden önce iman etmiş olan kardeşlerimizi bağışla. Kalplerimizde, iman edenlere karşı hiçbir kin tutturma! Rabbimiz! Şüphesiz sen çok esirgeyicisin, çok merhametlisin. Allah’ım, yüce zâtının benim üzerime birçok hakkı olduğu gibi senin kullarının da üzerimde birçok hakkı vardır. Allah’ım Sana karşı olan eksikliklerimi bağışla. Yarattıklarına karşı olanlardan da beni kurtar. Bana helâlinden ver ki, haramdan uzak kalayım, ibadetinle meşgul etki, günaha düşmeyeyim. Lütfunu ver ki, başkasına muhtaç olmayayım. Ey bağışlaması bol olan Rabbim! Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ . سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. رَبَّنَٓا اٰتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا. وَاكْتُبْ لَنَا فِي هٰذِهِ الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ إِنَّا هُدْنَٓا إِلَيْكَ. رَبَّنَٓا أَفْرِغْ عَلَيْنَا صَبْرًا وَ تَوَفَّنَا مُسْلِمِينَ. رَبَّنَٓا أَفْرِغْ عَلَيْنَا صَبْرًا وَ ثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ. رَبَّنَا اغْفِرْ لَنَا وَ لِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْاِيمَانِ وَ لَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ اٰمَنُوا رَبَّنَٓا إِنَّكَ رَؤُوفٌ رَحِيمٌ. اَللّٰهُمَّ إِنَّ لَكَ عَلَيَّ حُقُوقًا كَثِيرَةً فِيمَا بَيْنِي وَ بَيْنَكَ ؛ وَحُقُوقًا كَثِيرَةً فِيمَا بَيْنِي وَبَيْنَ خَلْقِكَ ، اَللّٰهُمَّ مَا كَانَ لَكَ مِنْهَا فَاغْفِرْهُ لِي ، وَمَا كَانَ لِخَلْقِكَ فَتَحَمَّلْهُ عَنِّي. وَأَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَ بِطَاعَتِكَ عَنْ مَعْصِيَتِكَ وَ بِفَضْلِكَ عَمَّنْ سِوَاكَ يَا وَاسِعَ الْمَغْفِرَةِ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ.",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/6.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/6.savt-arapca.mp3",
  },
  {
    id: 24,
    title: "7. Şavt'ta Okunacak Dua",
    turkish:
      "Bismillah-i Allahu Ekber! Allah’ım Sana inanarak, kitabını tasdik ederek, sana verdiğim sözü tutarak ve Peygamberinin sünnetine uyarak buradayım. Allah, her türlü noksandan uzaktır. Hamd Allah’a mahsustur. Allah’tan başka hiçbir ilah yoktur. Allah en büyüktür. Bütün güç ve kuvvet, şanı yüce olan Allah’a aittir. Salat ve selam Efendimiz Muhammed (s.a.v)`in, ev halkının ve ashabının üzerine olsun. Allah’ım, senden kâmil bir iman, doğru bir inanç, bol ve helal güzel rızık, ürperen bir kalp, seni zikreden bir lisan, asla bozmayacağım samimi bir tövbe ve faydalı ilim niyaz ediyorum. Allah’ım, senden hidayet, takva, iffet ve zenginlik vermeni niyaz ediyorum. Allah’ım, senden sağlık, iffet, emanete riayet, güzel ahlâk ve takdire rıza niyaz ediyorum. Allah’ım, senden hayırlar ve güzellikler işlemeyi, kötülükleri terk etmeyi, yoksulları sevmeyi, beni bağışlamanı ve bana merhamet etmeni niyaz ediyorum. Allah’ım, geçmişte işlediğim tüm günahlarımı bağışla. Ömrümün geriye kalan kısmında da beni günah işlemekten muhafaza buyur. Bana razı olacağın tertemiz işler yapmayı nasip eyle. Allah’ım, beni göz açıp kapayacak kadar bile nefsime bırakma. Bana lütfettiğin güzellikleri benden çekip alma. Rabbimiz! Kıyamet gününde, beni, anamı, babamı ve bütün müminleri bağışla. Rabbimiz! Bize dünyada iyilik ver, âhirette de iyilik ver. Bizi cehennem azabından koru. İyilerle birlikte cennete koy. Ey sınırsız güç sahibi! Ey günahları çok bağışlayan! Ey âlemlerin Rabbi!",
    arabic:
      "بِسْمِ اللهِ اَللهُ أَكْبَرُ، اَللّٰهُمَّ إِيمَانًا بِكَ ، وَ تَصْدِيقًا بِكِتَابِكَ، وَ وَفَاءً بِعَهْدِكَ ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ . سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَٓا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ . وَالصَّلَاةُ وَالسَّلَامُ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَ عَلٰى آلِهِ وَ صَحْبِهِ أَجْمَعِينَ. اَللّٰهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا كَامِلًا ، وَ يَقِينًا صَادِقًا ، وَ رِزْقًا وَاسِعًا حَلَالًا طَيِّبًا، وَ قَلْبًا خَاشِعًا ، وَ لِسَانًا ذَاكِرًا ، وَ تَوْبَةً نَصُوحًا، وَ عِلْمًا نَافِعًا. اَللّٰهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى . اَللّٰهُمَّ إِنِّي أَسْأَلُكَ الصِّحَّةَ وَ الْعِفَّةَ وَ الْأَمَانَةَ وَ حُسْنَ الْخُلُقِ وَ الرِّضَى بِالْقَدَرِ. اَللّٰهُمَّ إِنِّي أَسْأَلُكَ الطَيِّبَاتِ ، وَ تَرْكَ الْمُنْكَرَاتِ ، وَ حُبَّ الْمَسَاكِينِ ، وَ أَنْ تَتُوبَ عَلَيَّ ، وَ تَغْفِرَ لِي وَ تَرْحَمَنِي. اَللّٰهُمَّ اغْفِرْ لِي جَمِيعَ مَا مَضَى مِنْ ذَنْبِي، وَاعْصِمْنِي فِيمَا بَقِيَ مِنْ عُمْرِي، وَارْزُقْنِي عَمَلًا زَاكِيًا تَرْضَى بِهِ عَنِّي. اَللّٰهُمَّ لَا تَكِلْنِي إِلٰى نَفْسِي طَرْفَةَ عَيْنٍ، وَ لَا تَنْزِعْ مِنِّي صَالِحَ مَا أَعْطَيْتَنِي. رَبَّنَا اغْفِرْ لِي وَ لِوَالِدَيَّ وَ لِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ. رَبَّنَٓا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَ فِي الْاٰخِرَةِ حَسَنَةً وَ قِنَا عَذَابَ النَّارِ وَ أَدْخِلْنَا الْجَنَّةَ مَعَ الْأَبْرَارِ يَا عَزِيزُ يَا غَفَّارُ يَا رَبَّ الْعَالَمِينَ .",
    audioTurkish:
      "https://api.canlikulturizm.com/sound/7.savt-turkce.mp3",
    audioArabic:
      "https://api.canlikulturizm.com/sound/7.savt-arapca.mp3",

  },
];

const SavtDuasScreen = () => {
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



export default SavtDuasScreen;
