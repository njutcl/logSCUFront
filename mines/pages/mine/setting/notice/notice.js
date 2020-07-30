var pageObj = {
  data: {
    isChecked1: false,
    isChecked2: true,
    isChecked3: false
  }
};
for (var i = 0; i < 3; ++i) {
  (function (i) {
    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = !this.data['isChecked' + i];
      this.setData(changedData);
    }
  })(i)
}
Page(pageObj);