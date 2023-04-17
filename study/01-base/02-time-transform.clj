(defn reduce-to-minutes [seconds]
    (str (quot seconds 60) " minute(s)"))

(defn reduce-to-hours [seconds]
    (str (quot seconds 3600) " hour(s)"))

(defn reduce-to-days [seconds]
    (str (quot seconds 86400) " day(s)"))

(defn reduce-seconds
    "should receive a time in seconds and reduce it to min, hour, days"
    [seconds]
    (if (>= seconds 86400)
        (time-reduce-to-days seconds)
        (if (>= seconds 3600)
           (time-reduce-to-hours seconds)
           (time-reduce-to-minutes seconds))))

(println "10:" (time-reduce 10))
(println "60:" (time-reduce 60))
(println "1800:" (time-reduce 1800))
(println "3600:" (time-reduce 3600))
(println "7200:" (time-reduce 7200))
(println "86400:" (time-reduce 86400))
(println "200000:" (time-reduce 200000))