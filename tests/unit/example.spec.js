import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
    it('chceck tag h3',() => {
        const wrapper = shallowMount(HelloWorld);
        const h2= wrapper.find('h3');
        expect(h2.text()).to.equal('Installed CLI Plugins', 'Essential Links');
    });
    it('check function', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.tescik(2)).to.equal(1);
    })
    it('Check function else', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.tescik(0)).to.equal(-1);
    })
    it('Chceck methond: test2 with equal', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.test2(1,2,3)).to.equal(7);
    })
    it('Chceck methond: test2 with not qual', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.test2(1,2,3)).to.not.equal(9);
    })
    it('Chceck methond: test2 with not be a string', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.test2(1,2,3)).to.not.be.a('string')
    })
    it('Chceck methond: test2 with be below', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.test2(1,2,3), 'sorry fail :/').to.be.below(10);
    })
    it('chceck object', () => {
        expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
    })
    it('Chceck Varible: equal true', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.testVarible, 'bad test').to.equal(true);
    })
    it('Chceck Object from component', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.obj.name, 'bad test').to.equal('objName');
    })
    it('Chceck Object concatenate from component', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.obj.name+vm.obj.par, 'bad test').to.equal('objNameobjPar');
    })
    it('Chceck Object concatenate from component include string', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.obj.name+vm.obj.par, 'bad test').to.include('obj');
    })
    it('Chceck Object concatenate from component include string with toUpperCase', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.obj.name.toUpperCase()+vm.obj.par.toUpperCase(), 'bad test').to.include('OBJ');
    })
    it('Chceck methond: changeObjectName with object from Component', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.changeObjectName(vm.obj, 'abc'), 'sorry fail :/').to.equal('abc');
    })
    it('Chceck methond: changeObjectName with custom object', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        const object = {name: 'name'}
        expect(vm.changeObjectName(object, ''), 'sorry fail :/').to.equal('name');
    })
    it('Chceck methond: changeObjectName with custom object. Include and not own include', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        const object = {name: 'name'}
        expect(vm.changeObjectName(object, ''), 'sorry fail :/').to.include('a').but.not.own.include('c');
    })
    it('chceck object to include, and but not own include', () => {
        expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2}).but.not.own.include({b: 8});
    })
    it('chceck array to include some value', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.arrayTest).to.include(2);
    })
    it('chceck array to include multiple value', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.arrayTest).to.include(2).to.include(4);
    })
    it('chceck array to include multiple value, and but not own include', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.arrayTest).to.include(2).to.include(4).but.not.own.include(8);
    })
    it('chceck function chain (3)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.functionOfFunctionOfFunction('qazwsxedcrfvtgby', 'qazedc', 'qaz'), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (4)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.functionOfFunctionOfFunctionOfFunction('qaz', 'wsxedcr', 'fvtgby', 'q', 'a', 'z', 'e', 'd', 'c', 'q', 'a', 'z'), 'sorry fail :/').to.equal(1);
    })

    it('chceck function chain (5)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.functionOfFunctionOfFunctionOfFunctionOfFunction(['qaz', 'wsxedcr', 'fvtgby'], ['q', 'a', 'z', 'e', 'd', 'c'], ['q', 'a', 'z']), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (6)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        const obj1 = {
            arg1: 'qaz',
            arg2: 'wsxedcr',
            arg3: 'fvtgby'
        };
        const obj2 = {
            arg1: 'q',
            arg2: 'a',
            arg3: 'z',
            arg4: 'e',
            arg5: 'd',
            arg6: 'c'
        };
        const obj3 = {
            arg1: 'q',
            arg2: 'a',
            arg3: 'z'
        };
        expect(vm.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (7)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        const obj1 = {
            arg1: 'qaz',
            arg2: 'wsxedcr',
            arg3: 'fvtgby'
        };
        const obj2 = {
            arg1: 'q',
            arg2: 'a',
            arg3: 'z',
            arg4: 'e',
            arg5: 'd',
            arg6: 'c'
        };
        const obj3 = {
            arg1: 'q',
            arg2: 'a',
            arg3: 'z'
        };
        expect(vm.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, 100), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (7) should return -100', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        const obj1 = {
            arg1: 'qaz',
            arg2: 'wsxedcr',
            arg3: 'fvtgby'
        };
        const obj2 = {
            arg1: 'q',
            arg2: 'a',
            arg3: 'z',
            arg4: 'e',
            arg5: 'd',
            arg6: 'c'
        };
        const obj3 = {
            arg1: 'p',
            arg2: 'o',
            arg3: 'i'
        };
        expect(vm.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, 40), 'sorry fail :/').to.equal(-100);
    })
    it('chceck function chain (8), 9thf inside 1st f', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.sayMatiIsGod(['77', '97', '116', '105', '73', '115', '71', '111', '100' ]), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (9), 12th.f inside 1st/2nd f', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.haveYouEnterCode('100-111-71-115-73-105-116-97-77', '-'), 'sorry fail :/').to.equal(1);
    })
    it('chceck function chain (10)', () => {
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor().$mount();
        expect(vm.getCode([
            '01100100',
            '01101111',
            '01000111',
            '01110011',
            '01001001',
            '01101001',
            '01110100',
            '01100001',
            '01001101'])).to.equal(1);
    })
});
