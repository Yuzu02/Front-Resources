import QRCodeStyling from "qr-code-styling";

export const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#6f00ff",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    hideBackgroundDots: true,

    margin: 20,
  },
  backgroundOptions: {
    color: "#ffffff",
  },
});
