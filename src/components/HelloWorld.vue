<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
      <button>{{testVarible}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
      return {
          testVarible: true,
          obj: {
              name: 'objName',
              par: 'objPar'
          },
          arrayTest: [1, 2, 3, 4, 5, 6, 7, 9]
      }

    },
  methods: {
    tescik(n) {
      if ( n > 0 ) {
        return 1;
          } else {
             return -1;
          }
      },
      test2(a, b, c) {
        return a+b*c;
      },
      changeObjectName(obj, name = ''){
        if( name != '' ) {
            obj.name = name;
        }
        return obj.name;
      },
      checkASCI(array) {
        let tmp = '';
        for(let i = 0; i < array.length; i ++ ) {
            tmp = tmp + String.fromCharCode(array[i]);
        }
        return tmp;
      },
      getCode(codeArray) {
        let tmp = '';
        const key = String.fromCharCode(Math.floor(Math.random() * 100) + 128);
        for(let i = 0; i < codeArray.length; i++) {
            if (codeArray[i].includes('1' || '0') && !codeArray[i].includes('2' && '3' && '4' && '5' && '5' && '6' && '7' && '8' && '9' )){
                tmp = tmp + parseInt(codeArray[i], 2);
                if (i < codeArray.length - 1) {
                    tmp = tmp + key;
                } else {
                    return this.haveYouEnterCode(tmp, key);
                }
            } else {
                return -200;
            }
        }
      },
      reversArray(array) {
        return array.reverse();
      },
      spliceString(string, separator) {
        return string.split(separator);
      },
      haveYouEnterCode(entercode, key) {
          return this.sayMatiIsGod(this.reversArray(this.spliceString(entercode, key)))
      },
      sayMatiIsGod(array) {
        if(this.checkASCI(array) == 'MatiIsGod') {
            const obj1 = {
                arg1: 'qaz',
                arg2: 'wsxedcr',
                arg3: 'fvtgby'
            };
            const obj2 = {};
            const obj3 = {};
            obj2.arg1 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj2.arg2 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj2.arg3 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj2.arg4 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj2.arg5 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj2.arg6 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj3.arg1 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj3.arg2 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
            obj3.arg3 = String.fromCharCode(Math.floor(Math.random() * 96) + 31);
      return this.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, 100);
        } else
            return -150;
      },
      functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, n) {
        if ( n == 1000 ) {
            return this.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3);
        } else if ( n < 1000 ) {
            if ( (n - 50) > 0 ) {
               return this.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, n + 100);
            } else {
                return -100;
            }
        } else if ( n > 1000 ) {
            if ( ( n / 1000) >= 2) {
                return -100;
            } else {
                return this.functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3, n - 100);
            }
        }
      },
      functionOfFunctionOfFunctionOfFunctionOfFunctionOfFunction(obj1, obj2, obj3) {
        return this.functionOfFunctionOfFunctionOfFunctionOfFunction([obj1.arg1, obj1.arg2, obj1.arg3],
            [obj2.arg1, obj2.arg2, obj2.arg3, obj2.arg4, obj2.arg5, obj2.arg6],
            [obj3.arg1, obj3.arg2, obj3.arg3]
        );
      },
      functionOfFunctionOfFunctionOfFunctionOfFunction(array1, array2, array3) {
        const array = [array1, array2, array3];
        return this.functionOfFunctionOfFunctionOfFunction(array[0][0], array[0][1], array[0][2],
              array[1][0], array[1][1], array[1][2], array[1][3], array[1][4], array[1][5],
              array[2][0], array[2][1], array[2][2]);
      },
      functionOfFunctionOfFunctionOfFunction(t11, t12, t13, t21, t22, t23, t24, t25, t26, t31, t32, t33) {
        return this.functionOfFunctionOfFunction(t11 + t12 + t13,
            t21 + t22 + t23 + t24 + t25 + t26,
            t31 + t32 + t33);
      },
      functionOfFunctionOfFunction(text1, text2, text3) {
        return this.functionOfFunction(text1, text2, text3);
      },
      functionOfFunction(s1, s2 ,s3) {
        return this.functionOf(s1.length,
            (s1.length - s2.length),
            s1.concat(s2).length - s3.length,
            s2.toUpperCase().concat(s3).length,
            s3.length,
            s1.concat(s2.concat(s3.concat(s1.length.toString()).length.toString()).length.toString()).length
        );

      },
      functionOf(q, w, e, r ,t, y) {
        if ( q != 15) {
            if ( w == 10 ){
                if ( e != 5 ) {
                    return 1;
                } else {
                    if ( t == 2 ) {
                        return 2;
                    }
                }
            } else {
                return 3;
            }
        } else {
            if ( y != 13 ) {
                return 4;
            } else {
                return 5;
            }
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  margin: 40px 0 0

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

</style>
