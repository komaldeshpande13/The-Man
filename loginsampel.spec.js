 const {test, expect} = require('@playwright/test');
 //const {LoginPage}=require('../pageobjects/LoginPage');
 const {POManager}=require('../pageobjects/POManager');
 const testdata=JSON.parse(JSON.stringify(require('../utils/testdata.json')));


 for(const data of testdata){
 test.only('@smoke Login as: '+data.role,async({page})=>{

const pom=new POManager(page);
const loginpage=pom.getLoginPage();
await loginpage.goto();
await loginpage.validate_login(data.username,data.password);

await expect(page).toHaveTitle("Dashboard - The Man Project");

//await page.pause();




 });

}
