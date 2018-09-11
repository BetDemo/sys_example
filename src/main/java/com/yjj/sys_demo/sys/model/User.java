package com.yjj.sys_demo.sys.model;

import java.util.Date;

public class User {
    private String userId;

    private String userName;

    private String userPassword;

    private String userEmail;

    private String userPhone;

    private String userInfo;

    private Date userMissTime;

    private Date userAllowTime;

    private Integer userState;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword == null ? null : userPassword.trim();
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail == null ? null : userEmail.trim();
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone == null ? null : userPhone.trim();
    }

    public String getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(String userInfo) {
        this.userInfo = userInfo == null ? null : userInfo.trim();
    }

    public Date getUserMissTime() {
        return userMissTime;
    }

    public void setUserMissTime(Date userMissTime) {
        this.userMissTime = userMissTime;
    }

    public Date getUserAllowTime() {
        return userAllowTime;
    }

    public void setUserAllowTime(Date userAllowTime) {
        this.userAllowTime = userAllowTime;
    }

    public Integer getUserState() {
        return userState;
    }

    public void setUserState(Integer userState) {
        this.userState = userState;
    }
}