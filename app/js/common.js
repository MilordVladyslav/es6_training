window.onload = () => {
    'use srtict'
    var countryAsync = async(countryName) => {
    var response = await fetch(`http://puzzle.mead.io/puzzle`)
    if(response.status === 200) {
        var data = await response.json()
        return  data
    } else {
        throw new Error('Unable to fetch the country')
    }
    }

    countryAsync('United States of America').then((data) => {
        document.body.innerHTML = data.puzzle
    }).catch((err) => {
        console.log(`You have an error: ${err}`)
    })
    // var countryAsync = async(countryName) => {
    //     var response = await fetch(`http://restcountries.eu/rest/v2/all`)
    //     if(response.status === 200) {
    //         var data = await response.json()
    //         return  data.find((country) => country.name === countryName)
    //     } else {
    //         throw new Error('Unable to fetch the country')
    //     }

    // }

    // countryAsync('Germany').then((data) => {
    //     console.log(data.alpha2Code + 'It is from async! You are awesome, Vlad )')
    // }).catch((err) => {
    //     console.log(`You have an error: ${err}`)
    // })

    //OOP

    const Person = function (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName || 'Lebowski'
    }
    Person.prototype.getBio = function () {
        return `${this.firstName} ${this.lastName}`
    }
    Person.prototype.setName = function (fullname) {
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    const me = new Person ('Andrew')

    me.setName('Dude Lebowski')

    console.log(me.getBio())

    const Hangman = function (keyword, guessesAbility) {
        this.keyword = keyword.toLowerCase().split('')
        this.guessesAbility = 2
        this.guesses = []
    }

    Hangman.prototype.setGuesses = function (guess) {
        if(this.keyword.join('').includes(guess.toLowerCase())) {
            this.guesses.push(guess)
        }
        this.guessesAbility -= 1
    }

    Hangman.prototype.getPuzzle = function () {
        const actresses = []
        this.keyword.forEach((letter) => {
            letter === ' ' ? actresses.push(' ') : actresses.push('*')
        })
        for(let i = 0; i < this.keyword.length; i++) {
            for(let j = 0; j < this.guesses.length; j++) {
                if (this.keyword[i] === this.guesses[j]) {
                    actresses.splice(i, 1, this.keyword[i])
                }
            }
        }
        console.log(actresses.join(''))
    }

    const hangmanObj = new Hangman('metal militia', 3)

    hangmanObj.setGuesses('c')
    hangmanObj.setGuesses('a')
    hangmanObj.setGuesses('t')
    hangmanObj.setGuesses('i')
    console.log(hangmanObj.keyword)
    hangmanObj.getPuzzle()

    class PersonClass {
        constructor (firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
        getFullName () {
            return this.firstName + ' ' + this.lastName
        }
        setNames (fullName) {
            const name = fullName.split(' ')
            this.firstName = names[0]
            this.secondName = names[1]
        }
    }

    const myPerson = new PersonClass('Dude', 'Lebowski')
    console.log(myPerson.getFullName())

    class Employee extends PersonClass {
        constructor(firstName, lastName, position) {
            super(firstName, lastName)
            this.position = position
        }
     }

     const data = {
        get location() {
            return this._location
        },
        set location(value) {
            this._location = value.trim()
        }
     }

     data.location = '  New York  '

    /*-------------------ASYNCHRONOUS JAVASCRIPT--------------------*/

    // const request = new XMLHttpRequest()
    //
    // request.addEventListener('readystatechange', (e) => {
    //     if (e.target.readyState === 4 && e.target.status === 200) {
    //         const data = JSON.parse(e.target.response)
    //         // console.log(e.target)
    //         console.log(data)
    //     } else if (e.target.readyState === 4) {
    //         console.log('An error has taken place')
    //     }
    // })
    //
    // request.open('GET', 'http://puzzle.mead.io/puzzle')
    // request.send()


    //CALLBACK

    // const getPuzzle = (callback) => {
    //     const request = new XMLHttpRequest()
    //
    //     request.addEventListener('readystatechange', (e) => {
    //         if (e.target.readyState === 4 && e.target.status === 200) {
    //             const data = JSON.parse(e.target.response)
    //             // console.log(e.target)
    //             callback(undefined, data.puzzle)
    //         } else if (e.target.readyState === 4) {
    //             callback('an error', undefined)
    //             console.log('An error has taken place')
    //         }
    //     })
    //
    //     request.open('GET', 'http://puzzle.mead.io/puzzle')
    //     request.send()
    // }
    //
    //
    // getPuzzle((error, puzzle) => {
    //     if (error) {
    //         console.log(`Error: ${error}`)
    //     } else {
    //         console.log(puzzle)
    //     }
    // })

    const myFunction = () => {
        const message = 'This is my message'
        const printMessage = () => {
            console.log(message)
        }

        return printMessage

    }

    const myPrintMessage = myFunction()

    myPrintMessage()

    const createCounter = () => {
        let count = 0
        return {
            increment() {
                count++
            },
            decrement() {
                count--
            },
            get() {
                return count
            }
        }
    }

    const counter = createCounter()
    counter.increment()
    counter.decrement()
    counter.increment()
    console.log(counter.get())

    //thanks for closures we can create values, which is only modifiable via the interface we prowided

    const createAdder = (a) => {
        return (b) => {
            return a + b
        }
    }
    const add10 = createAdder(10)
    console.log(add10(-2))

    const add = (a, b) => a + b

    //tipper
    const createTipper = (baseTip) => {
        return (amount) => {
            return baseTip * amount
        }
    }

    const tip20 = createTipper(20)
    const tip30 = createTipper(.3)
    console.log(tip20(100))

    //Callback
    const getDataCallback = (callback) => {
        setTimeout(() => {
            callback(undefined, 'This is the data')
        }, 2000)
    }

    getDataCallback((err, data) => {
        if(err) {

        } else {
            console.log(data)
        }
    })

    //Promise

    const myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the promise data')
        }, 2000)
    })

    myPromise.then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })

    const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.response)
                // console.log(e.target)
                resolve (data.puzzle)
            } else if (e.target.readyState === 4) {
                reject('An error was ocurred')
            }
        })

        request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        request.send()
    })

    getPuzzle(5).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(`error: ${err}`)
    })

    //promise chaining

    const getDataPromise = (val) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val * 2)
        }, 2000)
    })

    getDataPromise(2).then((data) => {
        getDataPromise(data).then((data) => {
            console.log(`promise data: ${data}`)
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })

    getDataPromise(10).then((data) => {
        return getDataPromise(data)
    }).then((data) => {
        console.log(data)
    }).then((data) => {
        return getDataPromise(data)
    }).catch((err) => {
        console.log(err)
    })

    fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
        if(response.status === 200) {
            response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        console.log(data.puzzle)
    }).catch((error) => {
        console.log(error)
    })


}

