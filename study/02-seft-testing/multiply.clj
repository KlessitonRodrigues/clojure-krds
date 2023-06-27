(ns multiply.core
    (:require   [clojure.test :refer :all]))

(defn multiply-by-10 [n]
    (* 10 n))

(defn multiply-by-5 [n]
    (* 5 n))

(defn multiply-by-2 [n]
    (* 2 n))


(deftest multiply-test []
    (testing "Should multiply by 10"
        (is (= (multiply-by-10 2) 20)))
    (testing "Should multiply by 5"
        (is (= (multiply-by-5 2) 10)))
    (testing "Should multiply by 2"
        (is (= (multiply-by-2 2) 4))))

(multiply-test)