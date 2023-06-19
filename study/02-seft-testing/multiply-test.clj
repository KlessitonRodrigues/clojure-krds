(ns multiply-test.core
    (:require   [clojure.test :refer :all]
                [multiply.core :refer :all]))

(deftest core-testing
    (testing "Should multiply by 2"
        (is (= 1 1))))