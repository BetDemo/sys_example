<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <title>登录</title>
    <link rel="stylesheet" href="../plugins/GC-ui1.0.0/css/gui.min.css">
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <div class="login-wrap">
        <div class="login-top">
            <div class="logo"></div>
            <h1>业务管理系统</h1>
        </div>
        <!--表单-->
        <div class="gui-log-wrap">
            <div class="gui-login-hd">
                <h2 class="gui-h2">登录</h2>
            </div>
            <div class="gui-login">
                <form class="gui-form layui-form">
                    <div class="gui-form-row">
                        <div class="gui-control">
                            <input type="text" class="gui-ipt ipt-admin" placeholder="请输入用户名" >
                        </div>
                    </div>
                    <div class="gui-form-row">
                        <div class="gui-control">
                            <input type="password" class="gui-ipt ipt-psd" placeholder="请输入密码">
                        </div>
                    </div>
                    <div class="gui-form-row">
                        <div class="gui-btn-wrap">
                            <button type="button" id="login" class="gui-btn gui-btn-block">登录</button>
                            <button type="button" id="register" class="gui-btn gui-btn-block">注册</button>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="rmb-select f-l">
                            <input name="rmb" lay-skin="primary" title="记住密码" type="checkbox">
                        </div>
                        <div class="gui-fpwd f-r"><a href="javascript:;" class="gui-linkgy">忘记密码？</a></div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="../plugins/GC-ui1.0.0/gui.js"></script>
    <script type="text/javascript" src="../js/login.js"></script>
</body>
</html>