## Object 对象

#### 创建对象
```js
var ani = {} // 字面量
var bar = new Object() // new 运算符
var car = Object.create(null) // create() 函数
```

## Object 操作方法

## Object.defineProperty() 属性管理

#### 可配置性 configurable
* 配置一个对象的属性，并设置是否为可配置
* 当为 true 时，可以通过 delete 删除，也可以通过 defineProperty 重新赋值
* 当为 false 时，不能 delete 属性，也不能通过 defineProperty 重复定义赋值
```js
var ani = {}
Object.defineProperty('ani', 'name', {
  configurable: true,
  value: 'panda'
})

Object.defineProperty('ani', 'sex', {
  configurable: false,
  value: 'boy'
})

delete ani.name       // ani: {sex: 'boy'}
delete ani.sex        // ani: {sex: 'boy'}
```

#### 可枚举特性 enumerable
* 可枚举顾名思义，就是这个属性是否能被 Object.keys/for 等函数方法索引到
* 即使如此，使用 getOwnPropertyNames 等方法也是能索引到的
* 直接索取 obj.property 也是可以取值
```js
var bar = {}
Object.defineProperty(bar, 'name', {
  enumerable: true,
  value: 'Hot all Night'
})

Object.defineProperty(bar, 'location', {
  enumerable: true,
  value: 'Bei jing'
})

Object.defineProperty(bar, 'volume', {
  enumerable: false,
  value: 1000
})

bar.volume                          // 1000
Object.keys(bar)                    // ['name', 'location']
Object.getOwnPropertyNames()        // ['name', 'location', 'volume']
bar.propertyIsEnumerable('volume')  // false

```

#### 可写 writable
* 配置属性值，是否可变
```js
var car = {}
Object.defineProperty(car, 'brand', {
  writable: false,
  value: 'Hong Qi'
})

car.brand = 'Ji LI'       // : Hong Qi
```


#### Object.getOwnPropertyDescriptor
* 此方法能让你获取对象属性的配置详情
```js
Object.getOwnPropertyDescriptor('car', 'brand')     // {value, writable: false, enumerable....}
```

#### Object.getOwnPropertyNames()
* 获取对象全部属性
```js
Object.getOwnPropertyNames(ani)         // [name, sex, ...]
```

#### Object.getPropertyOf/{}.__proto__
* 获取对象原型
* 虽然可以使用 __proto__  来获取一个对象的原型，但总不是优雅的编程方案
* 故获取对象原型时，还是使用 Object.getPrototypeOf 方法
* 不过，设置对象的原型，还是得使用 __proto__ (唯一方法)
```js
Object.getPrototypeOf(car) === Object.prototype === car.__proto__
```

#### Object.hasOwnProperty()
* 判断属性是否存在于对象实例上，要知道，对象的属性存储在本身实例及继承的原型链上。此方法能进行迅速的判断
```js
car.hasOwnProperty('brand')
car.hasOwnProperty('name')
```

#### Object.keys 
* 返回对象的可枚举属性的集合
```js
Object.keys(car)
```

#### Object.freeze()
* 冻结一个对象，使之不能被编辑、扩展、属性更改
```js
Object.freeze(car)
```

#### Object.isFrozen
* 如果对象不能扩展，属性也不能修改，则返回 true，反之 false

```js
Object.freeze(car)
car.name = 'My Hone Qi'     // {brand: 'Hong Qi'}
Object.isFrozen(car)        // true
```


