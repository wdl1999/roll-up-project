// 同源资源下载可以直接在a便签上添加download和href属性，但是非同源资源下载需要通过blob来下载
// item：将资源上传到oss并存储到部门后接口，通过部门后台接口拿到资源item
// url：通过item的资源id拼接出oss地址url
// url转blob（二进制数据）
export function getBlob(item, url) {
  const xhr = new XMLHttpRequest(); // 创建一个xhr实例
  xhr.open("GET", url);
  // arraybuffer返回ArrayBuffer的格式
  // blob返回Blob格式
  xhr.responseType = "blob";
  xhr.onload = () => {
    if (xhr.status === 200) {
      downloadWithBlob(item, xhr.response);
    }
  };
  xhr.send(null);
}

// 用blob下载资源
export function downloadWithBlob(img, blob) {
  var a = document.createElement("a");
  // window.URL.createObjectURL方法会根据传入的参数创建一个指向该参数对象的URL
  // 参数为file或者blob对象
  var url = window.URL.createObjectURL(blob);
  var filename = `${img.title}.${img.fileType}`;
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

/* 
    通过url获取图片的base64编码：
    对象=》ArrayBuffer二进制流=》Uint8Array定型数组=》base64编码
*/
export async function getArrayBufferFromUrl(url) {
  const data = await fetch(url);
  if (data && data.status === 200) {
    const arrayBuffer = await data.arrayBuffer(); // 直接将数据转成ArrayBuffer
    if (arrayBuffer) {
      // new Uint8Array(arrayBuffer): 将 arraybuffer 二进制流转化成 定型数组【也是类数组】
      let byteArray = new Uint8Array(arrayBuffer);

      // window.btoa():将字符串转化成base64编码的字符串;
      // window.atob(): 解码;
      // String.fromCharCode():将 Unicode 值转换为字符
      const buffers = window.btoa(String.fromCharCode(...byteArray));
      // png 图片
      //const base64Img = `data:image/png;base64,${buffers}`
      // svg 图片
      const base64Img = `data:image/svg+xml;base64,${buffers}`;
      // 展示到页面上
      (document.getElementById("icon") as any).src = base64Img;
    }
  }
}
