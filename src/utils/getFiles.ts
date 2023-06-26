/* 
    Blob为二进制对象，用于前端处理文件，而Files继承于Blob，
    是种特殊的Blob，以下是获取Files的两种方法 
*/

// 1、e.target.files获取上传的文件，并读取为不同格式的数据
export function getInputFiles(inputId) {
  const fileInput = document.getElementById(inputId);

  fileInput.onchange = (e) => {
    const file = (e.target as any).files[0];

    // 借助FileReader对象的API将Blob对象转换为不同格式的数据
    const reader = new FileReader();
    reader.onload = function () {
      const content = reader.result;
      console.log("1111 FileReader", reader, content);
    };
    reader.readAsText(file); // 将文件读取为文本
    // reader.readAsArrayBuffer(file); // 将文件读取为ArrayBuffer对象
    // reader.readAsDataURL(file); //将Blob转化为Base64格式的Data URL
  };
}

// 2、e.dataTransfer.files获取拖拽到浏览器的文件
export function getDragFiles(dragId) {
  const dropZone = document.getElementById(dragId);

  dropZone.ondragover = (e) => {
    e.preventDefault();
  };

  dropZone.ondrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("1111 getDragFiles", files);
  };
}
