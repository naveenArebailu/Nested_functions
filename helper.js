function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3);
result = fn_inside(5);

result1 = outside(3)(5);

document.write("result :" + result);
document.write("<br />result1 :" + result1);