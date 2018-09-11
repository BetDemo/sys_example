package com.yjj.sys_demo.sys.Utils;

import java.util.UUID;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.Utils
 * @ClassName: UuidUtil
 * @Description: java类作用描述    生成字符型UUID
 * @Author: Bet
 * @CreateDate: 2018/9/10 16:06
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/10 16:06
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
public class UuidUtil {
    public static String genUUID(){
        return UUID.randomUUID().toString().replace("-","");
    }
}
