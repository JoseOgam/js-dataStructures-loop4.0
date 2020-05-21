/*
A student was working on a function and made some syntax
 mistakes while coding. Help them find their mistakes and fix them.

 function main [verb, noun]
  return verb + noun

  test
  Test.assertEquals(main('take ', 'item'), 'take item')
  Test.assertEquals(main('use ', 'sword'), 'use sword')
}
*/

function main(verb, noun) {
    return verb + noun;
}

console.log(main('take ', 'item'));

console.log(main('use ', 'sword'));