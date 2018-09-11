package com.yjj.sys_demo.sys.services;

import com.yjj.sys_demo.sys.model.User;

import java.util.List;
import java.util.Map;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.services
 * @ClassName: UserServices
 * @Description: java类作用描述
 * @Author: Bet
 * @CreateDate: 2018/9/10 13:05
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/10 13:05
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
public interface UserServices {
    /**
     *  查询用户的密码等信息-----判定登录
     * @param user
     * @return
     */
    List<Map<String , Object>> queryLogin(Map<String , Object> user);

    /**
     * 全部增加
     * @param user
     * @return
     */
    boolean insert(Map<String , Object> user);

    /**
     * 选择性增加
     * @param user
     * @return
     */
    int insertSelective(User user);
}
