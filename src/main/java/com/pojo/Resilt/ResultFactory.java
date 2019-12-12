package com.pojo.Resilt;

public class ResultFactory {
    public static MyResult buildSuccessResult(Object data) {
        return buidResult(ResultCode.SUCCESS, "成功", data);
    }

    public static MyResult buildFailResult(String message) {
        return buidResult(ResultCode.FAIL, message, null);
    }

    public static MyResult buidResult(ResultCode resultCode, String message, Object data) {
        return buidResult(resultCode.code, message, data);
    }

    public static MyResult buidResult(int resultCode, String message, Object data) {
        return new MyResult(resultCode, message, data);
    }
}
