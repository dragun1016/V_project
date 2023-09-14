/**
 * @version 1.0
 * @see https://github.com/objectiveTM/markdown
 * @param {String} _markdown
 * @returns {String} mark-dowm to HTML
 * 
 * ## Description 
 * Convert mark-down to html
 * 
 * ## Example
 * ### code
 * ```js
 * markdown(`# h1
 * ## h2
 * ### h3
 * __underLine__
 * **bold**
 * ~~delete~~
 * [hyperLink](https://discord.gg/w2Fw7UeZmY)
 * https://discord.gg/w2Fw7UeZmY`);
 * ```
 * ### rsult
 * ```html
 * <br/><h1>h1</h1><br/><h2>h2</h2><br/><h3>h3</h3><br/><u>underLine</u><br/><b>bold</b><br/><del>delete</del><br/><a href="https://discord.gg/w2Fw7UeZmY">hyperLink</a> <a href="https://discord.gg/w2Fw7UeZmY">https://discord.gg/w2Fw7UeZmY</a><br/>
 * ```
 */
function markdown(_markdown){
        let md = `\n${_markdown}\n`
        let rmx = md
            .replace(/^# (.*$)/gim , `<h1>$1</h1>`)
            .replace(/^## (.*$)/gim , `<h2>$1</h2>`)
            .replace(/^##+ (.*$)/gim , `<h3>$1</h3>`)

            .replace(/__(.*)__/gim , `<u>$1</u>`)
            .replace(/\*\*(.*)\*\*/gim , `<b>$1</b>`)
            .replace(/~~(.*)~~/gim , `<del>$1</del>`)
            .replace(/^- (.*$)/gim , `<li>$1</li>`)

            .replace(/\[(.*)\]\(https:\/\/(.*)\)/gim , `<a href="https://$2">$1</a>`)
            .replace(/[^\"]http(s?):\/\/(www\.)?(.*)\.(.*[^ ])\/([^ |\n]{0,100})([ |\n]?[^\<\/a\>])/gim , ` <a href="http$1://$2$3.$4/$5">http$1://$2$3.$4/$5</a>$6`.replace("\n" , ""))
            
            // .replace(/[^href=\"]http(s?):\/\/(www\.)?(.*)\.(.*[^ ])([ |\n])?[^\<\/a\>]/gim , `<a href="http$1://$2$3.$4">http$1://$2$3.$4</a>$5`.replace("\n" , ""))

            .replace(/\\([^\\])/gim , `$1`)
            .slice(1,-1)
            .replace(/\n/gim , `<br/>`);
            
        return rmx
}