## Clojure

#### Functions

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

#### Vectors

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

#### Define functions

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
    (println "Bonjour" name)) ; this is a commetary
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

#### Immutable vector

- (pop (pop (conj [1 2 3] 4)))

  => conj receive a literal vector [1 2 3]

  => conj cretes a new vector [1 2 3 4]

  => pop creates a new vector [1 2 3]

  => pop creates a new vector [1 2]

  **clojure creates a new value instead of use it as a reference**

#### Atoms and Refs

    They're structures that can be used as a mutable data.

#### Using Let

```clojure
(defn half-of [valor] (/ valor 2))
```

```clojure
(defn half-of [valor]
  (let [halfFactor 2]
    (/ valor halfFactor)))
```

```clojure
(defn half-sum-with-100 [valor]
  (let [halfFactor 2
        halfValue (/ valor halfFactor)]
    (+ halfValue 100)))
```

#### Documented functions

```clojure
(defn half-sum-with-100
"calc the half of a number and increment 100"
[valor]
  (let [halfFactor 2
        halfValue (/ valor halfFactor)]
    (+ halfValue 100)))
```

#### Conditional Expressions

- Predicates (returns always a boolean value, usually ends with "?" at name)

  ```clojure
  (defn is-less-than-1000? [value]
    (< value 1000))

  (defn is-more-than-1000? [value]
    (> value 1000))

  (defn is-equal-100? [value]
    (= value 1000))

  (even? 3) ;true if divisible by 2

  (odd? 2) ;true if NOT divisible by 2

  (neg? -1) ;true if it is a negative value
  ```

- If

```clojure
  (if (codition)
    (if-true)
    (if-fase))
```

- When

```clojure
  (when (codition)
    (run-this)
    (run-this)
    (run-this))
```
