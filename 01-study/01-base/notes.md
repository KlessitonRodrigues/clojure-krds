## Clojure

### Functions

- syntax

  (functionName param1)

- print something

  (println "Hello")

- sum two number

  (+ 2 2) - plus is a function

- sum more that two numbers

  (+ 2 3 5) or (+ 2 (+ 3 5))

- others operations

  (- 2 10), (\* 100 100), (/ 100 5)

### Vectors

- syntax

  [ 1 2 3 4 5]

  [ 1, 2, 3, 4, 5] - it works, because clojure ignore comma

- string vector

  ["a" "b" "c"] - it's different of ['a' 'b' 'c']

- dinamic type

  [1 1.10 "a" "hello"]

- vector lenght

  (count [10 20 30]) => 3

- add element

  (conj [1 3] 10) => [1 3 10]

- remove element

  (pop [1 3 5]) => [1 3])

- last element

  (peek [1 3 5]) => 5

- add and get last element

  (peek (conj [1 3] 10)) => 10

### Define functions

- syntax

  (defn functionName [] ()) - parmeters are always a vector of elements

- body

  (defn sayHello [] (println "Hello"))

- parameters

  ```clojure
  (defn sayHelloTo [name] (println "hello" name))
  ```

  ```clojure
  (defn sayHelloTo [name lastName] (println "hello" name lastName))
  ```

- body scope

  ```clojure
  (defn sayHelloTo [name]
    (println "Hello" name)
    (println "Ola" name)
    (println "Konnichiwa" name)
    (println "Bonjour" name))
  ```

  **return nill = null**

- return last operation value

  ```clojure
  (defn halfOf [number]
    (/ number 2))

  (halfOf 3000) => 1500
  ```

- name pattner

  halfOf - camel case  
  HalfOf - pascal case  
  half_of - snale case  
  half-of - kebad case (most used on clojure)
