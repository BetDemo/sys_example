package com.yjj.sys_demo.sys.controller;

import com.yjj.sys_demo.sys.Utils.MD5Util;
import com.yjj.sys_demo.sys.Utils.UuidUtil;
import com.yjj.sys_demo.sys.services.servicesImpl.UserServicesImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.controller
 * @ClassName: UserController
 * @Description: java类作用描述
 * @Author: Bet
 * @CreateDate: 2018/9/10 14:02
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/10 14:02
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
@Controller
@RequestMapping("/user")
public class UserController {

    private UserServicesImpl userServicesImpl;
    @RequestMapping("/index")
    private String Tese(){
        return "login/login";
    }

    @RequestMapping("/login")
    private String Login(Map<String, Object> map){
        MD5Util md5Util = new MD5Util();
        map.put("userPassword",md5Util.getConvertMD5(map.get("userPassword").toString()));//加密之后再查询
        if(userServicesImpl.queryLogin(map).isEmpty()){
            return "用户名或密码不正确";
        }else{
            return "/sys/index";
        }
    }

    @RequestMapping("/register")
    private String AddUser(Map<String, Object> map){
        if(map.get("userPassword").equals(null)||map.get("userPassword").equals("")){
            return "密码不能为空";
        }
        String mdPassword = MD5Util.getConvertMD5(map.get("userPassword").toString());//加密操作
        map.put("userId", UuidUtil.genUUID());
        map.get("userName");
        map.put("userPassword",mdPassword);
        if(userServicesImpl.insert(map)){
            return "login/login";
        }else{
            return "注册失败";
        }
    }


}
