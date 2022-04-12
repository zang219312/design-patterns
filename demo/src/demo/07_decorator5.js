import { readonly, deprecate } from 'core-decorators'

class Person {
  // @readonly
  @deprecate('即将弃用', { url: 'https://xxx' })
  name() {
    return 'my name is Bob'
  }
}

const p = new Person()
console.log(p.name())
//?  修改报错
/* p.name = function () {
  console.log('name is changed ')
} */
