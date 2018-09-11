package com.yjj.sys_demo.sys.Utils;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.Random;

/**
 * @ProjectName: sys_demo
 * @Package: com.yjj.sys_demo.sys.Utils
 * @ClassName: CaptchaUtil
 * @Description: java类作用描述    验证码生成工具
 * @Author: Bet
 * @CreateDate: 2018/9/10 13:22
 * @UpdateUser: 更新者
 * @UpdateDate: 2018/9/10 13:22
 * @UpdateRemark: 更新说明
 * @Version: 1.0
 */
public class CaptchaUtil {
    private BufferedImage image; //图像
    private  String str;//验证码
    private  static char code[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".toCharArray();
    public static final String SESSION_CODE_NAME = "code";

    private CaptchaUtil(){
        init();         //初始化属性
    }
    /*
    取得RandomNumUtil实例
     */
    public static CaptchaUtil Instance(){
        return new CaptchaUtil();
    }
    /*
    取得验证码图片
     */
    public String getString(){
        return this.str;
    }

    private void init(){
        //在内存中创建图像
        int width = 85, hight = 20;
        BufferedImage image = new BufferedImage(width, hight, BufferedImage.TYPE_INT_RGB);
        //获取图像上下文
        Graphics graphics = image.getGraphics();
        //生成随机类
        Random random = new Random();
        //设置图片背景颜色
        graphics.setColor(getRandColor(200, 250));
        graphics.fillRect(0, 0, width, hight);
        //设定字体
        graphics.setFont(new Font("Times New Roman", Font.PLAIN, 18));
        //随机生成155条干扰线，是图片中的认证码不易被其他程序探测到
        graphics.setColor(getRandColor(160, 200));
        for (int i = 0; i < 155; i++){
            int x = random.nextInt(width);
            int y = random.nextInt(hight);
            int xl = random.nextInt(12);
            int yl = random.nextInt(12);
            graphics.drawLine(x, y, x + xl, y + yl);
        }
        //随机生成四位验证码
        String sRand = "";
        for (int i = 0; i < 4; i++) {
            String rand = String.valueOf(code[random.nextInt(code.length)]);
            sRand += rand;
            // 将认证码显示到图象中
            graphics.setColor(new Color(20 + random.nextInt(110), 20 + random.nextInt(110), 20 + random.nextInt(110)));
            // 调用函数出来的颜色相同，可能是因为种子太接近，所以只能直接生成
            graphics.drawString(rand, 13 * i + 6, 16);
        }
        //赋值验证码
        this.str = sRand;
        //图片生效
        graphics.dispose();
        // ByteArrayInputStream input = null;
        // ByteArrayOutputStream output = new ByteArrayOutputStream();
        // try {
        // ImageOutputStream imageOut = ImageIO.createImageOutputStream(output);
        // ImageIO.write(image, "JPEG", imageOut);
        // imageOut.close();
        // input = new ByteArrayInputStream(output.toByteArray());
        // } catch (Exception e) {
        // System.out.println("验证码图片产生出现错误：" + e.toString());
        // }
        // this.image = input
        this.image = image;
    }
    /**
     * 给定范围随机颜色
     */
    private Color getRandColor(int fc, int bc){
        Random random = new Random();
        if(fc > 255){
            fc = 255;
        }
        if(bc > 255){
            bc = 255;
        }
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
    }
}
