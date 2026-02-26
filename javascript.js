const loginbutton = document.querySelector('.login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginbutton.addEventListener('click',function()
{
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username == '')
    {
        alert("请输入用户名")
        return;
    }
        if (password == '')
    {
        alert("请输入密码");
        return;
    }
    
    alert("登录成功");
    usernameInput.value = '';
    passwordInput.value = ''; 
});