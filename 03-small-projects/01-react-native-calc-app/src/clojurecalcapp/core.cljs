(ns clojurecalcapp.core
  (:require
   [reagent.core :as rc]
   [steroid.rn.core :as rn]
   [clojure.string :as string]))

(def index (rc/atom 0))
(def num1 (rc/atom 0))
(def num2 (rc/atom 0))
(def operator (rc/atom "*"))

(defn calc
  [num1 num2 op]
  (cond
    (= op "+") (+ num1 num2)
    (= op "-") (- num1 num2)
    (= op "/") (/ num1 num2)
    (= op "*") (* num1 num2)
    :else 0))

(defn setOperation [value]
  (cond
    (or (or (or (= value "+") (= value "-")) (= value "/")) (= value "*"))
    (swap! operator value)
    (= @index 0) (reset! num1 value)
    :else (reset! num2 value)))

(defn Display [value]
  [rn/view
   [rn/text
    {:style {:height "40%"
             :background-color "#D7DEEA"
             :color "#444"
             :font-size 70
             :text-align "right"
             :padding 20}} value]])

(defn MiniDisplay [value]
  [rn/view
   [rn/text
    {:style {:background-color "#D7DEEA"
             :color "#444"
             :font-size 35
             :text-align "right"
             :padding 10
             :padding-right 20}} value]])

(defn ButtonBlue [value]
  [rn/view {}
   [rn/text
    {:style {:height 90
             :width 95
             :max-width 75
             :margin-left 10
             :margin-right 10
             :border-radius 10
             :text-align "center"
             :color "#fff"
             :background-color "#388BFF"
             :font-size 32
             :padding 16}
     :on-press (fn [] (value))} value]])

(defn Button [value]
  [rn/touchable-opacity {:on-press #(setOperation value)}
   [rn/text
    {:style {:height 90
             :width 95
             :text-align "center"
             :color "#FFFFFFBB"
             :border-radius 12
             :font-size 32
             :padding 8}} value]])

(defn Keyboard []
  [rn/view
   [rn/text
    {:style {:text-align "center"
             :background-color "#1C2541EE"
             :color "#fff"
             :font-size 30
             :padding-top 16
             :padding-bottom 16}}
    [Button "1"] [Button "2"] [Button "3"] [Button "+"]
    [Button "4"] [Button "5"] [Button "6"] [Button "-"]
    [Button "7"] [Button "8"] [Button "9"] [Button "/"]
    [Button "c"] [Button "0"] [Button "."] [ButtonBlue "="]]])

(defn ScreenContainer []
  [rn/view {:style {:display "flex" :height "100%" :background-color "#D7DEEA"}}
   [Display (string/join "" [@num1 @operator @num2])]
   [MiniDisplay (calc @num1 @num2 @operator)]
   [Keyboard]])

(defn root-comp []
  [rn/view
   [ScreenContainer]])

(defn init []
  (rn/register-reload-comp "helloWorld" root-comp))
