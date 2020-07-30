// pages/secret/secret.js
var pageObj = {
  data: {
    isChecked4: false,
    isChecked5: true,
    isChecked6: false
  }
};
for (var i = 0; i < 7; ++i) {
  (function (i) {
    pageObj['changeSwitch' + i] = function (e) {
      var changedData = {};
      changedData['isChecked' + i] = !this.data['isChecked' + i];
      this.setData(changedData);
    }
  })(i)
}
Page(pageObj);