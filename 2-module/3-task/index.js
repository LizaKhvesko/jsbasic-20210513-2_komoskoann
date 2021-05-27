let calculator = {
<<<<<<< HEAD
  first: 0,
  secind: 0,
  read(a,b) {
    this.first = a;
    this.second = b;
  },
  sum() {
    return this.first + this.second
  },
  mul() {
    return this.first * this.second
  }
=======

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
>>>>>>> 127d1f2efa2cceedcce1c04c825a075aae988b4a
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
