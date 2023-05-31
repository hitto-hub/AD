const Qi_cv = () => {
    var Qi_a = document.getElementById("Qi_a").value;
    var Qi_b = document.getElementById("Qi_b").value;
    var Qi_n = document.getElementById("Qi_n").value;
    var output = (Qi_b - Qi_a) / 2 ** Qi_n;
    Qi_target = document.getElementById("Qi_output");
    Qi_target.innerHTML = output;
};

const Tv_cv = () => {
    var Tv_a = document.getElementById("Tv_a").value;
    var Tv_b = document.getElementById("Tv_b").value;
    var Tv_n = document.getElementById("Tv_n").value;
    var Tv_k = document.getElementById("Tv_k").value;
    var Tv_w = document.getElementById("Tv_w").value;
    console.log(Tv_w);
    if (Tv_w == "Max") {
        // 数値型にならん こいつ↓
        var output = Number(Tv_a) + Tv_k * ((Tv_b - Tv_a) / 2 ** Tv_n);
    } else if (Tv_w == "Min") {
        var output = Number(Tv_a) + (Tv_k - 1) * ((Tv_b - Tv_a) / 2 ** Tv_n);
    } else if (Tv_w == "Med") {
        var output = Number(Tv_a) + (Tv_k - 0.5) * ((Tv_b - Tv_a) / 2 ** Tv_n);
    } else {
        var output = "Error";
    }
    Tv_target = document.getElementById("Tv_output");
    Tv_target.innerHTML = output;
}

const Qe1_cv = () => {
    var Qe1_a = document.getElementById("Qe1_a").value;
    var Qe1_b = document.getElementById("Qe1_b").value;
    var Qe1_n = document.getElementById("Qe1_n").value;
    var Qe1_w = document.getElementById("Qe1_w").value;

    if (Qe1_w == "Max" || Qe1_w == "Min") {
        var output = (Qe1_b - Qe1_a) / 2 ** Qe1_n;
    } else if (Qe1_w == "Med") {
        var output = ((Qe1_b - Qe1_a) / 2 ** Qe1_n) / 2
    } else {
        var output = "Error";
    }
    Qe1_target = document.getElementById("Qe1_output");
    Qe1_target.innerHTML = output;
}

const Qe2_cv = () => {
    var tmp = 0;
    var Qe2_a = document.getElementById("Qe2_a").value;
    var Qe2_b = document.getElementById("Qe2_b").value;
    var Qe2_n = document.getElementById("Qe2_n").value;
    var Qe2_k = document.getElementById("Qe2_k").value;
    var Qe2_w = document.getElementById("Qe2_w").value;
    var dis = (Qe2_b - Qe2_a) / 2 ** Qe2_n;
    while (tmp < Qe2_k) {
        tmp += dis;
    }
    console.log("%f" + "-" + "%f" + "=" + "%f", tmp, Qe2_k, tmp - Qe2_k);
    if (Qe2_w == "Max") {
        output = tmp - Qe2_k;
    } else if (Qe2_w == "Min") {
        output = dis - (tmp - Qe2_k);
    } else if (Qe2_w == "Med") {
        output = Math.abs(Qe2_k - (tmp + (tmp - dis)) / 2);
    } else {
        output = "Error";
    }
    Qe2_target = document.getElementById("Qe2_output");
    Qe2_target.innerHTML = output;
}

const Ada_cv = () => {
    var Ada_a = document.getElementById("Ada_a").value;
    var Ada_b = document.getElementById("Ada_b").value;
    var Ada_n = document.getElementById("Ada_n").value;
    var Ada_k = document.getElementById("Ada_k").value;
    var Ada_w = document.getElementById("Ada_w").value;
    var dis = (Ada_b - Ada_a) / 2 ** Ada_n;
    var tmp = 0;
    while (tmp < Ada_k) {
        tmp += dis;
    }
    console.log("%f" + "-" + "%f" + "=" + "%f", tmp, Ada_k, tmp - Ada_k);
    if (Ada_w == "Max") {
        output = tmp;
    } else if (Ada_w == "Min") {
        output = tmp - dis;
    } else if (Ada_w == "Med") {
        output = (tmp + (tmp - dis)) / 2;
    } else {
        output = "Error";
    }
    Ada_target = document.getElementById("Ada_output");
    Ada_target.innerHTML = output;
}
