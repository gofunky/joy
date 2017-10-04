;(function() {
  var pkg = {}
  pkg[
    'github.com/matthewmueller/golly/testdata/21-packages/dep'
  ] = (function() {
    var deepdep =
      pkg['github.com/matthewmueller/golly/testdata/21-packages/deepdep']
    function Dep(dep) {
      return dep + ' ' + another()
    }
    function another() {
      return 'another'
    }
    return {
      Dep: Dep
    }
  })()
  pkg[
    'github.com/matthewmueller/golly/testdata/21-packages/one'
  ] = (function() {
    var zarg = pkg['github.com/matthewmueller/golly/testdata/21-packages/dep']
    function main() {
      var t = new test({
        String: 'hi'
      })
      console.log(zarg.Dep('one') + t.String)
    }
    function test(o) {
      this.String = o.String
    }
    return {
      main: main
    }
  })()
  pkg['github.com/matthewmueller/golly/testdata/21-packages/one'].main()
})()
