var s1 = prompt('Nhap vao chuoi s1:')
var s2 = prompt('Nhap vao chuoi s2:')
var merger2String = '';

console.log(s1,s2);
if ( s1.length == s2.length) {
    for (let i = 0; i < s1.length; i++) {
        var chuoi = s1[i]+ s2[i];
        merger2String += chuoi;
        console.log(chuoi);
        console.log(merger2String)
    }
};

if (s1.length>s2.length) {
    for (let i = 0; i < s2.length; i++) {
        let chuoi = s1[i]+ s2[i];
        merger2String += chuoi;
        var end = '';
        for (let y = s2.length; y < s1.length; y++) {
            end += s1[y];
            console.log(end);
        }
    }
    merger2String+=end;
    console.log(merger2String)
};

if (s2.length > s1.length) {
    for (let i = 0; i < s1.length; i++) {
        let chuoi = s1[i]+ s2[i];
        merger2String += chuoi;
        console.log(merger2String);
        var end = '';
        for (let u = s1.length; u < s2.length; u++) {
            end += s2[u];
            console.log(end);
        }
    }
    merger2String+= end;
    console.log(merger2String)
};
