((x, f) => f(x))(3, x => x * x);

var a = x => x + x
var b = x => x + 6
var c = x => x - 100
var fn = (g, f, k) => (x => k(f(g(x))));
fn(a, b, c)(5)

function loop(n, ...any) {
    let box = 0;
    any.forEach((fn) => {
        box += fn(n)
    })
    return box;
}

loop(500, a, b, c);
