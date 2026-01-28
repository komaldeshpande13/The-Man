const {LoginPage}=require('../pageobjects/LoginPage');


class POManager{


constructor(page){
this.page=page;
  this.loginpage=new LoginPage(page);


}
getLoginPage()
{
    return  this.loginpage
}
}
module.exports={POManager};