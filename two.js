;(function() {
  var pkg = {}
  pkg[
    'github.com/matthewmueller/golly/testdata/21-packages/deepdep'
  ] = (function() {
    function New() {
      return new Dep({
        deep: 'deep'
      })
    }
    function Dep(o) {
      this.deep = o.deep
    }
    Dep.prototype.String = function() {
      return this.deep
    }
    return {
      New: New,
      Dep: Dep
    }
  })()
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
    var A = 'A'
    function Another() {
      var deep = deepdep.New()
      return 'exported another ' + deep.String()
    }
    return {
      Dep: Dep,
      A: A,
      Another: Another
    }
  })()
  pkg[
    'github.com/matthewmueller/golly/testdata/21-packages/two'
  ] = (function() {
    var dep = pkg['github.com/matthewmueller/golly/testdata/21-packages/dep']
    function main() {
      console.log(dep.Dep('two') + dep.A + dep.Another())
    }
    return {
      main: main
    }
  })()
  pkg['github.com/matthewmueller/golly/testdata/21-packages/two'].main()
})()
