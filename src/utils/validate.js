
// 手机号正则
export const regMobile = /^[1][34578]\d{9}$/;
export const mobileSplit = /^(\d{3})(\d{4})(\d{4})$/;
export const regRandCode = /^\d{6}$/;

export const isMobileNumber = mobile => {
  const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
  return reg.test(mobile);
};

// 数字、字母两者组合6-16位
export const isPassword = password => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  return reg.test(password);
};

// 手机验证码
export const isRandCode = code => {
  const reg = /^\d{6}$/;
  return reg.test(code);
};

export const validate = {
  isMobileNumber,
  isPassword,
  isRandCode,
};
