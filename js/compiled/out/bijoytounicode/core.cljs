(ns ^:figwheel-always bijoytounicode.core
    (:require
     [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def dmap {"Av" "আ" "A" "অ" "B" "ই" "C" "ঈ" "D" "উ" "E" "ঊ" "F" "ঋ" "G" "এ" "H" "ঐ" "I" "ও" "J" "ঔ" "K" "ক" "L" "খ" "M" "গ" "N" "ঘ" "O" "ঙ" "P" "চ" "Q" "ছ" "R" "জ" "S" "ঝ" "T" "ঞ" "U" "ট" "V" "ঠ" "W" "ড" "X" "ঢ" "Y" "ণ" "Z" "ত" "_" "থ" "`" "দ" "a" "ধ" "b" "ন" "c" "প" "d" "ফ" "e" "ব" "f" "ভ" "g" "ম" "h" "য" "i" "র" "j" "ল" "k" "শ" "l" "ষ" "m" "স" "n" "হ" "o" "ড়" "p" "ঢ়" "q" "য়" "r" "ৎ" "s" "ং" "t" "ঃ" "u" "ঁ" "0" "০" "1" "১" "2" "২" "3" "৩" "4" "৪" "5" "৫" "6" "৬" "7" "৭" "8" "৮" "9" "৯" "•" "ঙ্" "v" "া" "w" "ি" "x" "ী" "y" "ু" "z" "ু" "“" "ু" "–" "ু" "~" "ূ" "ƒ" "ূ" "‚" "ূ" "„„" "ৃ" "„" "ৃ"  "…" "ৃ" "†" "ে" "‡" "ে" "ˆ" "ৈ" "‰" "ৈ" "Š" "ৗ" "|" "।" "&" "্‌" "^" "্ব" "‘" "্তু" "’" "্থ" "‹" "্ক" "Œ" "্ক্র" "”" "চ্" "—" "্ত" "˜" "দ্" "™" "দ্" "š" "ন্" "›" "ন্" "œ" "্ন" "Ÿ" "্ব" "¡" "্ব" "¢" "্ভ" "£" "্ভ্র" "¤" "ম্" "¥" "্ম" "¦" "্ব" "§" "্ম" "¨" "‍্য" "©" "র্" "ª" "্র" "«" "্র" "¬" "্ল" "­" "্ল" "®" "ষ্" "¯" "স্" "°" "ক্ক" "±" "ক্ট" "²" "ক্ষ্ণ" "³" "ক্ত" "´" "ক্ম" "µ" "ক্র" "¶" "ক্ষ" "·" "ক্স" "¸" "গু" "¹" "গ্গ" "º" "গ্দ" "»" "গ্ধ" "¼" "ঙ্ক" "½" "ঙ্গ" "¾" "জ্জ" "¿" "্ত্র" "À" "জ্ঝ" "Á" "জ্ঞ" "Â" "ঞ্চ" "Ã" "ঞ্ছ" "Ä" "ঞ্জ" "Å" "ঞ্ঝ" "Æ" "ট্ট" "Ç" "ড্ড" "È" "ণ্ট" "É" "ণ্ঠ" "Ð" "ণ্ড" "Ë" "ত্ত" "Ì" "ত্থ" "Í" "্ত" "Î" "ত্র" "Ï" "দ্দ" "Ñ" "-" "Ò" "\"" "Ó" "\"" "Ô" "'" "Õ" "'" "Ö" "্র" "×" "দ্ধ" "Ø" "দ্ব" "Ù" "দ্ম" "Ú" "ন্ঠ" "Û" "ন্ড" "Ü" "ন্ধ" "Ý" "ন্স" "Þ" "প্ট" "ß" "প্ত" "à" "প্প" "á" "প্স" "â" "ব্জ" "ã" "ব্দ" "ä" "ব্ধ" "å" "ভ্র" "æ" "ু" "ç" "ম্ফ" "è" "্ন" "é" "ল্ক" "ê" "ল্গ" "ë" "ল্ট" "ì" "ল্ড" "í" "ল্প" "î" "ল্ফ" "ï" "শু" "ð" "শ্চ" "ñ" "শ্ছ" "ò" "ষ্ণ" "ó" "ষ্ট" "ô" "ষ্ঠ" "õ" "ষ্ফ" "ö" "স্খ" "÷" "স্ট" "ø" "্ল" "ù" "স্ফ" "ú" "্প" "û" "হু" "ü" "হৃ" "ý" "হ্ন" "þ" "হ্ম"})


(defn replacer [string]
  (let [data (filterv #(not= % "") (clojure.string/split string #""))
        convdata (mapv #(if (contains? dmap %)
                          (get dmap %)
                          %) data)
        refed (let [len (dec (count convdata))]
                (loop [outmap [] i 0]
                  (if (> i len)
                    outmap
                    (let [target (nth convdata i)]
                      (if (= target "র্")
                        (recur (conj (mapv identity (butlast outmap)) target (nth convdata (dec i))) (inc i))
                        (recur (mapv identity (conj outmap target)) (inc i)))))))
        jukto (let [len (dec (count refed))]
                (loop [out [] i 0]
                  (if (> i len)
                    out
                    (let [tg (nth refed i)]
                      (cond (and (not= i len)
                                 (= "্" (str (last tg))))
                            (recur (mapv identity
                                         (conj out
                                               (str tg (nth refed (inc i)))))
                                   (+ 2 i))
                            (= "্" (str (first tg)))
                            (recur (mapv identity
                                         (conj (mapv identity (butlast out)) (str (last out) tg))) (inc i))
                            (= "‍্য" tg)
                            (if (= (last out) "র")
                              (recur (mapv identity
                                           (conj (mapv identity (butlast out)) "র‍্য")) (inc i))
                              (recur (mapv identity
                                           (conj (mapv identity (butlast out)) (str (last out) (apply str (rest tg))))) (inc i)))
                            
                            :else (recur (mapv identity (conj out tg)) (inc i)))))))
        karexchange (let [len (dec (count jukto))]
                      (loop [out [] i 0]
                        (if (> i len)
                          out
                          (let [target (nth jukto i)]
                            (if (or (= target "ে") (= target "ৈ") (= target "ি"))
                              (recur (mapv identity
                                           (conj out
                                                 (nth jukto (inc i)) target)) (+ 2 i))
                              (recur (mapv identity
                                           (conj out target))
                                     (inc i)))))))
        karcombined (let [len (dec (count karexchange))]
                      (loop [out [] i 0]
                        (if (> i len)
                          out
                          (let [target (nth karexchange i)]
                            (cond (and (not= i len)
                                       (= target "ে")
                                       (= "া" (nth karexchange (inc i))))
                                  (recur (mapv identity (conj out "ো")) (+ 2 i))
                                  (and (not= i len)
                                       (= target "ে")
                                       (= "ৗ" (nth karexchange (inc i))))
                                  (recur (mapv identity (conj out "ৌ")) (+ 2 i))
                                  (and (not= i len)
                                       (= target "অ")
                                       (= "া" (nth karexchange (inc i))))
                                  (recur (mapv identity (conj out "আ")) (+ 2 i))
                                  :else (recur (mapv identity (conj out target)) (inc i)))))))]
    (clojure.string/replace (apply str karcombined) #"্্" "্")))


(defn atom-input [value]
  [:textarea {:rows 10 :style {:width "100%"} :value @value :on-change #(reset! value (-> % .-target .-value))}])

(defn atom-output [value]
  [:textarea {:rows 10 :style {:width "100%"} :value value}])

(defn shared-state []
  (let [val (reagent/atom "Avwg me ‡`‡Lï‡b
‡¶‡c wM‡q Kwi
evOjvq wPrKvi!")]
    (fn []
      [:div
       [:p "বিজয়ে টাইপ করা বাঙলা লিখুন বা পেস্ট করুন"]
       [:p [atom-input val]]
       [:p "ইউনিকোডে কনভার্ট করা টেক্সট:"]
       [:p [atom-output (replacer @val)]]])))

(reagent/render-component [shared-state]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

