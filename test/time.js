let test = require('jtf')
let timeChain = require('..')
let { sleep } = require('./helpers')

test('超时删除', async t => {

   let timechain = new timeChain({ delay: 3000 })

   timechain.set(666, { a: 1 })

   await sleep(1000)

   t.deepEqual({ a: 1 }, timechain.get(666));

   await sleep(1000)

   t.deepEqual({ a: 1 }, timechain.get(666));

   await sleep(1200)

   t.deepEqual(undefined, timechain.get(666));

   await sleep(1000)

   t.deepEqual(undefined, timechain.get(666));

})