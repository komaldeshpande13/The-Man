class LoginPage{

constructor(page)
{
this.page=page;
this.username=page.locator('#mobile_number_pass');
this.password=page.locator('#password');
this.login = page.locator('[type="submit"]');
}

async goto(){
await this.page.goto("https://app.themanproject.in/login");
}

async validate_login(username,password){

await this.username.fill(username);
await this.password.fill(password);
await this.login.first().click();
}



}
module.exports={LoginPage};