//kiicloud setting
$(function() {
  //appID, appKeyはappData.jsで指定
  //例var appID = "hogehoge", appKey = "fugafuga";
  //開発者ポータルで指定したサーバ設置場所に合わせ KiiSite.US, KiiSite.JP, KiiSite.CN/KiiSite.CN3 または KiiSite.SG のいずれか
  Kii.initializeWithSite(appID, appKey, KiiSite.US);
 }());

//サインアップをクリック
$("#btn_sing_up").click(function(){
  // 開発者ポータルにて取得した Application ID と Application Key を設定して初期化
  var emailVal = $("#inputEmail").val();
  var nameVal = $("#inputUserName").val();
  var passVal = $("#inputPass").val();
  //入力項目が空欄でなければ
  if(emailVal != "" && nameVal != "" && passVal != "" ){
      console.log("push sign up" + "\n" + emailVal + "\n" + nameVal + "\n" + passVal);
      //Kiicloudへ登録
      resisterUser(emailVal, nameVal, passVal);
  }else {
    alert("未入力があります。");
  }
});

//サインインをクリック
$("#btn_sing_in").click(function(){
  // 開発者ポータルにて取得した Application ID と Application Key を設定して初期化
  var nameVal = $("#inputUserName").val();
  var passVal = $("#inputPass").val();
  //入力項目が空欄でなければ
  if(nameVal != "" && passVal != "" ){
      console.log("push sign in" + "\n" + nameVal + "\n" + passVal);
      //Kiicloudへサインイン
      signIn(nameVal, passVal);
  }else {
    alert("未入力があります。");
  }

});


//kiicloudへ登録 サインアップ
function resisterUser(emailVal, nameVal, passVal){
  var user = KiiUser.userWithEmailAddressAndUsername(emailVal, nameVal, passVal);

 // Register the user, defining callbacks for when the process completes
 user.register({
   // Called on successful registration
   success: function(theUser) {
     // Print some info to the log
     console.log("User registered!");
     console.log(theUser);
   },
   // Called on a failed registration
   failure: function(theUser, errorString) {
     // Print some info to the log
     console.log("Error registering: " + errorString);
   }
 });
}

//kiicloudにサインイン
function signIn(username, password){
  // Authenticate the user
  KiiUser.authenticate(username, password, {
    // Called on successful authentication
    success: function(theUser) {
      // Print some info to the log
      console.log("User authenticated!");
      console.log(theUser);
    },
    // Called on a failed authentication
    failure: function(theUser, errorString) {
      // Print some info to the log
      console.log("Error authenticating: " + errorString);
    }
  })
}
