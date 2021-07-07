import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useCallback, useRef } from "react";

const GEO_IP = "https://geolocation-db.com/json/";
const GOOGLE_RECAPTCHA = "https://www.google.com/recaptcha/api/siteverify";
let _IP;

const ReCaptcha = () => {
  const recaptchaRef = useRef();

  // TODO: 獲取使用者IP位址需要在後端實作
  const onCatchIP = useCallback(() => {
    fetch(GEO_IP)
      .then((res) => res.json())
      .then((data) => {
        _IP = data.IPv4;
      });
  }, []);

  useEffect(() => {
    onCatchIP();
  }, [onCatchIP]);

  // TODO: 提交表單驗證ReCaptcha需要在後端實作(Cross-Origin-Resource-Strict)
  const onRecapcha = (value) => {
    console.log("Captcha: ", value);
    fetch(GOOGLE_RECAPTCHA, {
      method: "POST",
      body: JSON.stringify({
        secret: "6LdhtHcbAAAAAEri7N7sN84Yqk68jBqBPdSW6bC0",
        response: value,
        remoteip: _IP
      }),
    });
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      stlye={{ display: "inline-block" }}
      sitekey="6LdhtHcbAAAAAHDJsSvNZY1foj0BdpIo4CofBPib"
      theme="light"
      size="normal"
      onChange={onRecapcha}
    />
  );
};

export default ReCaptcha;
