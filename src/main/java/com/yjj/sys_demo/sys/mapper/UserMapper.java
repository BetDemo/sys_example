package com.yjj.sys_demo.sys.mapper;

import com.yjj.sys_demo.sys.model.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    /**
     * 查询用户信息----判断登录
     * @param user
     * @return
     */
    List<Map<String, Object>> queryLogin(Map<String, Object> user);

    int insert(Map<String, Object> user);

    int insertSelective(User record);
}