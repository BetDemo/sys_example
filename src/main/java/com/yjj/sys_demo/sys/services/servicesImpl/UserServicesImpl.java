package com.yjj.sys_demo.sys.services.servicesImpl;

import com.yjj.sys_demo.sys.mapper.UserMapper;
import com.yjj.sys_demo.sys.model.User;
import com.yjj.sys_demo.sys.services.UserServices;

import java.util.List;
import java.util.Map;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.services.servicesImpl
 * @ClassName: UserServicesImpl
 * @Description: java类作用描述
 * @Author: Bet
 * @CreateDate: 2018/9/10 13:06
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/10 13:06
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
public class UserServicesImpl implements UserServices {
    private UserMapper userMapper;
    @Override
    public List<Map<String, Object>> queryLogin(Map<String, Object> user) {

        return userMapper.queryLogin(user);
    }

    /**
     * 全部增加
     * @param map
     * @return
     */
    public boolean insert(Map<String, Object> map){
        if(userMapper.insert(map)==1){
            return true;
        }else {
            return false;
        }
    }

    /**
     * 选择性增加
     * @param user
     * @return
     */
    public int insertSelective(User user){
        return userMapper.insertSelective(user);
    }
}
