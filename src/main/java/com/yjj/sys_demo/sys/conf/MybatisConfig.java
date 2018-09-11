package com.yjj.sys_demo.sys.conf;

import com.github.pagehelper.PageHelper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.conf
 * @ClassName: MybatisConfig
 * @Description: java类作用描述      配置使用pagehelper分页
 * @Author: Bet
 * @CreateDate: 2018/9/9 17:12
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/9 17:12
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
@Configuration
public class MybatisConfig {
    @Bean
    public PageHelper pageHelper(){
        PageHelper pageHelper = new PageHelper();
        //添加配置，也可以指定文件路径
        Properties p = new Properties();
        p.setProperty("offsetAsPageNum", "true");
        p.setProperty("rowBoundsWithCount", "true");
        p.setProperty("reasonable", "true");
        pageHelper.setProperties(p);
        return pageHelper;
    }
}
