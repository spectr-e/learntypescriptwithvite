type Person = {
	name: string
	age: number
	isProgrammer?: boolean
	friends: string[]
	address?: {
		street: string
	}
}
const person1: Person = {
	name: "John",
	age: 67,
	friends: [],
}
const person2: Person = {
	name: "Jane",
	friends: [],
	age: 73,
	isProgrammer: true,
}

type Options = {debugMode?: boolean; logLevel?: number}

function foo(
	name: string = "Jos",
	{debugMode = false, logLevel}: Options = {}
) {
	console.log(name, logLevel, debugMode)
}

function foo2(a: number, b: number, cb: (sum: number) => void) {
	cb(a + b)
}
const result = foo2(3, 4, (sum) => {
	console.log(sum)
})
