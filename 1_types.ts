// boolean
const isFetching: boolean = true
const isLoading: boolean = false
//number 
let int: number = 42
const float: number = 4.2
const num: number = 3e10
//string 
const message: string = 'Hello Typescript'
//array
const numberArray: number[] = [1, 1, 2, 3, 5, 8]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8]

const words: string[] = ['Hello','Typescript']

//Tuple
const contact: [string, number] = ['Vladilen', 123467]

// Any 
let variable: any = 42
variable = 'New String'
variable = []

// ========
function sayMyName(name:string): void {
  console.log(name);
}
sayMyName('Pups')

// Never

function throwError(message: string): never {
      throw new Error(message) 
}

function infinite(): never {
  while(true){

  }
}

// Type

type Login = string

const login: Login = 'admin'
//const login2: Login = 2 // error

type ID = string | number 
const id1: ID = 1245
const id2: ID = 'adminID'
// const id3: ID = true // error


type SomeType = string | null | undefined