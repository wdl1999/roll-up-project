// 不同资源文件下载;
// item：将资源上传到oss并存储到部门后接口，通过部门后台接口拿到资源item
// url：通过item的资源id拼接出oss地址url
// url转blob（二进制数据）
export function getBlob(item, url) {
  const xhr = new XMLHttpRequest(); // 创建一个xhr实例
  xhr.open("GET", url);
  xhr.responseType = "blob"; // 返回blob格式
  xhr.onload = () => {
    downloadWithBlob(item, xhr.response);
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
