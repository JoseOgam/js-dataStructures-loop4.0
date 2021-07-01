const person = { name: 'Joseph', position: 'Junior frontend developer', sex: "" }

person.name ||= 'user'
console.log(person.name)

person.sex ||= 'Not specified'
console.log(person.sex)

// using if statement
if (!person.name)
{
    person.name = 'user'
}
console.log(person.name)

if (!person.sex)
{
    person.sex = 'sex not specified'
}
console.log(person.sex)

//or
