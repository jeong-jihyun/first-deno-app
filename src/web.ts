export const webModule = async () => {
    const site = await fetch("https://www.naver.com");
    console.log(await site.text());
    console.log("web contents!! ");
};
