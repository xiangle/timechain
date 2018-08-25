let test = require('jtf')
let timeChain = require('..')
let { zPromise } = require('./helpers/')

test('Promise函数', async t => {

   let timechain = new timeChain({ timeout: 3000 })
   
   let p1 = new zPromise()

   timechain.set(p1.resolve, 111)

   t.deepEqual(111, await p1);

   let p2 = new zPromise()

   timechain.set(p2.resolve, 222)

   t.deepEqual(222, await p2);

});

