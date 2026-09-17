// 组装脚本：将三段 base64 拼接后解码为完整 vid
window.movieList = [];

if (partA.length !== metaList.length || partB.length !== metaList.length || partC.length !== metaList.length) {
    console.error("分片数量不一致:", partA.length, partB.length, partC.length, metaList.length);
} else {
    for (var i = 0; i < metaList.length; i++) {
        var fullB64 = partA[i] + partB[i] + partC[i];
        var realVid = "";
        try {
            realVid = atob(fullB64);
        } catch (e) {
            console.warn("第" + i + "条解码失败", e);
            realVid = "";
        }
        window.movieList.push({
            name: metaList[i].name,
            img: metaList[i].img,
            vid: realVid
        });
    }
    console.log("movieList 构建完成，共 " + window.movieList.length + " 条");
}
