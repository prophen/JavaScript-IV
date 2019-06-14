// CODE here for your Lambda Classes
/*
lambda-classes - We need a roster of Lambda School personnel. Build it!

We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
Lambda personnel can be broken down into three different types of people.

Instructors - extensions of Person
Students - extensions of Person
Project Managers - extensions of Instructors

IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:


*/
function getRandomInteger(max = students.length - 1) {
  return Math.floor(Math.random() * Math.floor(max));
}
let students, subjects, projectManagers, instructors, people = []


/*
#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
  }

  speak() {
    return (`Hello my name is ${this.name}, I am from ${this.location}`)
  }
  returnUniqueProps() {
    return`
    == Person ${this.name} ==
    Age: ${this.age}
    Location: ${this.location}
    speak(): ${this.speak()}
    `
  }
}

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }

  demo(subject) {
    return (`Today we are learning about ${subject}`)
  }
  
  grade(student, subject) {
    return (`${student.name} receives a perfect score on ${subject}`)
  }
  returnUniqueProps() {
    return   `
    == Instructor ${this.name} ==
    Specialty: ${this.specialty}
    Favorite Language: ${this.favLanguage}
    Catch Phrase: ${this.catchPhrase}
    Demo: ${this.demo('CSS')}
    Grade: ${this.grade(students[getRandomInteger()],'Preprocessing II')} `
  }
}

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `debugsCode` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  */

class Student extends Person {
  constructor(props) {
    super(props)
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
  }

  listsSubjects() {
    const formattedList = this.favSubjects.map(subject => `        • ${subject}`).join('\n')
    
    return `\n      ${this.name}'s Favorite Subjects: \n${formattedList}`
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }

  debugsCode(subject){
    return `${this.name} has begun a sprint challenge on ${subject}`
  }
  returnUniqueProps() {
    return   `
    == Student ${this.name} ==
    Previous: ${this.previousBackground}
    Class: ${this.className}
    Favorite Subjects: ${this.favSubjects}
    listSubjects(): ${this.listsSubjects()}
    PRAssignment(): ${this.PRAssignment("JavaScript III")}
    debugsCode(): ${this.debugsCode("Advanced CSS")}`
  }
}

/* 
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
  }

  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }

  returnUniqueProps() {
    return   `
    == Project Manager ${this.name} ==
    Grad Class Name: ${this.gradClassName}
    Favorite Instructor: ${this.favInstructor}
    standUp(): ${this.standup("Web 21")}
    debugsCode(): ${this.debugsCode(students[getRandomInteger()], subjects[getRandomInteger(subjects.length -1)])}`
  }
}

// My mom is a Person

const mom = new Person({
  name: 'Ida',
  location: 'Sacramento, CA',
  age: 'timeless'
})

// Instructor Instances

const marguel = new Instructor({
  name: 'Marguel',
  age: 'Maybe 26',
  gradClassName: 'WEBPT2',
  favInstructor: 'Me?',
  location: 'California',
  specialty: 'React',
  favLanguage: 'JavaScript, Python, Elm etc.',
  catchPhrase: "Practice Flex Zombies !!!",
})

const brandon = new Instructor({
  name: 'Brandon',
  age: '34',
  gradClassName: 'WEB18',
  favInstructor: 'Professor Lambda',
  location: 'Maine',
  specialty: 'Redux',
  favLanguage: 'JavaScript, C++, Python.',
  catchPhrase: "You shall not pass!",
})

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
})

instructors = [marguel, brandon, fred]

// Student Instances

const nisa = new Student({
  name: 'Nisa',
  age: 25,
  location: 'Ohio',
  previousBackground: 'Debt Collector',
  className: 'Web21',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
})

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: 'Web21',
  favSubjects: ["Computer Science", "Philosophy", "English"],
})

const isaiah = new Student({
  name: 'Isaiah',
  age: 18,
  location: 'Florida',
  previousBackground: 'High School last month',
  className: 'Web21',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
})

const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

students = [joscelyn, nisa, isaiah, kevin]
subjects = students.reduce((acc, student) => acc.concat(student.favSubjects), [])

// ProjectManager Instances

const mary = new ProjectManager({
  name: 'Mary',
  age: '24',
  gradClassName: 'WEB18',
  favInstructor: 'Josh Knell',
  location: 'New York',
  specialty: 'Express and Node.js',
  favLanguage: 'Javascript',
  catchPhrase: "That looks AWESOME",
})

const christian = new ProjectManager({
  name: 'Christian',
  age: '32',
  gradClassName: 'WEB18',
  favInstructor: 'Every Instructor in Lambda',
  location: 'Seattle, WA',
  specialty: 'Data Structures & Algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: "Dont forget your daily commit.",
})

const pat = new ProjectManager({
  name: 'Pat',
  age: '38',
  gradClassName: 'WEB18',
  favInstructor: 'Brett Madrid',
  location: 'Petaluma, Ca',
  specialty: 'Empathetic to the struggle of Redux',
  favLanguage: 'JavaScript',
  catchPhrase: 'Lets google that together.'
})

projectManagers = [pat, christian, mary]

// Log it out - Printing out the object properties and methods

people = projectManagers.concat(instructors, students, mom) 
people.forEach(person => console.log(person.returnUniqueProps()))

